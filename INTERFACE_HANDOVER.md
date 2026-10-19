# 螺絲定位系統：邊緣影像與 UWB／IMU 交接介面說明書

版本：2026-10-16。格式：HackMD 相容 Markdown。

本文件依當日專案程式碼盤點。使用者電腦是伺服器，相機安裝在邊緣運算設備；伺服器不需要 USB 連接相機。目前只有這台電腦，測試發布端為 `AI/test/test2.py`，尚無真實硬體資料。

標記定義：**現有**＝程式已接收／處理；**限制**＝現有行為不保證；**提案**＝正式交接契約草案，伺服器尚未實作，不能直接發布後期待生效。文件建立不代表已修改程式。

## 1. 分工與資料流

| 負責端 | 工作與輸出 | 接收端 |
|---|---|---|
| 邊緣端／相機負責人 | 相機擷取、RGB-depth 對齊、內參與深度尺度、採樣時間戳、影像發布 | 本電腦 MediaMTX／AI |
| UWB＋IMU 負責人 | 基地站座標、測距、慣性感測；正式版輸出已融合設備位置與姿態 | 本電腦 MQTT／後端 |
| 本專案伺服器 | 作業管理、影像接收與錄影、偵測、螺絲定位與關聯、資料儲存、歷史重播及 3D 顯示 | 瀏覽器與提示接收設備 |

目前傳輸是兩個 RTSP 路徑 `cam-color`、`cam-depth`，不是單一 multi-track 路徑。`cam` 雖仍列於 MediaMTX 設定，現有 AI 主程式不讀它。

## 2. 本電腦操作方式

先在專案根目錄開啟 PowerShell：

```powershell
cd 'D:\ncku\末端定位技術\code'
.\start-system.ps1
```

平台網址：`http://localhost:3000`。

```powershell
# 結束伺服器程序
.\start-system.ps1 -stop
# 重啟
.\start-system.ps1 -reboot
# 不產生新的 stdout/stderr log
.\start-system.ps1 -nolog
```

腳本啟動 MediaMTX、Node.js backend、Python AI 三個程序。前端使用 `frontend/dist` 由 backend 提供，不另外啟動 Vite；修改前端原始碼後須另行 build。腳本不啟動 `test2.py`、MQTT broker 或 MongoDB，後兩者必須已安裝並運行。無參數啟動也會先停止舊服務。

必要工具：PATH 中的 `node`、`python`、`ffmpeg`，backend dependencies，以及 Python 的 OpenCV、NumPy、requests、FastAPI、uvicorn、paho-mqtt。MediaMTX 執行檔目前寫死於腳本中的 `C:\Users\user\Downloads\mediamtx_v1.17.1_windows_amd64\mediamtx.exe`，換機須修改。

`-refresh` 會清空 runtime、歷史影片及除 users 外的資料庫資料再啟動，不是一般重啟指令。`-stop` 是強制結束程序，不等於正常 operation/end；有作業時應先結束作業並確認影片封裝完成，再停止伺服器。腳本亦會終止佔用 3000、8000、8554、8888、8889 的程序。

## 3. 位址、連接埠與網路

以下 `<SERVER_IP>` 請由伺服器負責人提供實際區網 IPv4；`localhost` 在邊緣設備上代表邊緣設備自己。

| 用途 | 邊緣端使用 | 本機使用／備註 |
|---|---|---|
| MQTT | `<SERVER_IP>:1883` | backend 連 `mqtt://localhost:1883`；broker 必須監聽區網 |
| 彩色發布 | `rtsp://<SERVER_IP>:8554/cam-color` | AI 讀 `rtsp://localhost:8554/cam-color` |
| 深度預覽發布 | `rtsp://<SERVER_IP>:8554/cam-depth` | AI 讀 `rtsp://localhost:8554/cam-depth` |
| 平台／HTTP API | `http://<SERVER_IP>:3000` | 本機 `http://localhost:3000` |
| WebRTC HTTP | TCP 8889 | 實際媒體亦用 UDP 8189；跨網段需測試 ICE |
| HLS | TCP 8888 | MediaMTX 啟用 lowLatency HLS |
| AI 內部 API | 不對邊緣端開放 | `127.0.0.1:8000` |
| MongoDB | 不作為邊緣端介面 | `mongodb://127.0.0.1:27017/vision_system` |

先以區網聯調：確認 1883、8554 可達；外部瀏覽平台才需開放相應 HTTP／WebRTC 埠。現有 MediaMTX 允許匿名 publish/read，正式部署需另外配置存取控制。單一全域作業狀態與固定串流路徑目前只適用一組設備、一次一筆作業。

## 4. 現有作業開始／結束契約

### 4.1 開始

1. 發布端先訂閱 `vision/operation/ack/<userId>`。
2. 向 `vision/operation/start` 發送 UTF-8 JSON，QoS 2，retain=false。

```json
{"userId":"<已存在於平台資料庫的使用者 ObjectId>"}
```

`userId` 必須是既有帳戶 ID，不是姓名。`test2.py` 的 `USER_ID` 是本機測試硬編碼值，交接時應換為伺服器確認的使用者 ID。

後端建立 Operation、以伺服器當下時間記錄 startTime，並在 ACK topic 回覆：

```json
{"opID":"<後端建立的作業 ObjectId>"}
```

發布端保留 opID，再開始兩個 RTSP 串流。後端會另外通知本機 AI。**ACK 只代表已建立作業，不代表 AI、錄影或同步已就緒**：程式先發 ACK 才通知 AI，故初始幀可能早於錄影準備完成。

限制：沒有 requestId 去重、start 錯誤 ACK 或 ready 訊號。不可不斷重送 start；應先檢查活躍作業，否則可能建立重複 Operation。

### 4.2 結束

向 `vision/operation/end` 發送，QoS 2，retain=false：

```json
{
  "opID":"<本次 ACK 的 opID>",
  "endTime":"2026-10-16T02:01:00.000Z",
  "description":"Operator ended recording"
}
```

| 欄位 | 型態 | 規則 |
|---|---|---|
| opID | string | 必填，本次作業 ID |
| endTime | string | 必填，有效 ISO 8601 UTC；尾端 Z 表示 UTC |
| description | string | 選填，停止原因 |

發布端結束串流；後端寫入 endTime、重建設備／螺絲融合紀錄，再通知 AI 完成錄影收尾。現有程式沒有「影片已封裝完成」ACK，需檢查歷史影片與 log；收到 MQTT publish 完成不等於後端全部完成。測試端尚未等待 end publish 的完整交付，正式設備需補等待確認及重連策略。

異常斷流：AI 設定 10 秒，但實際以連續讀取失敗 100 次、每次休眠 0.1 秒判斷，讀取本身可能阻塞，因此不能保證精準 10 秒。成功讀到雙通道會清零計數；重連嘗試間隔約 2 秒。

## 5. 現有影像發布契約

### 5.1 發布方式

目前測試使用 MP4 以原速無限循環發布；FFmpeg stream copy 不改變原本編碼，也不會自動消除 B-frame。

在邊緣端兩個終端分別執行（替換位址及檔名）：

```text
ffmpeg -re -stream_loop -1 -i test_color.mp4 -c:v copy -an -rtsp_transport tcp -f rtsp rtsp://<SERVER_IP>:8554/cam-color
ffmpeg -re -stream_loop -1 -i test_depth.mp4 -c:v copy -an -rtsp_transport tcp -f rtsp rtsp://<SERVER_IP>:8554/cam-depth
```

這是檔案模擬命令；相機即時擷取端須將擷取影像交給編碼器發布，不能直接把相機替換成任意檔名。建議觀看相容格式為 H.264、yuv420p、無 B-frame；實際解析度、fps、bitrate/GOP 需雙方登錄並驗收。現有錄影以來源編碼直接保存，AI 中未被主流程使用的 20 fps 編碼 helper 不代表所有來源都固定 20 fps。

### 5.2 接收與同步限制

現有 `DualStream.read()` 依序讀 color 與 depth；任一失敗便返回失敗，尺寸不同時 resize 深度畫面，再上下拼接供 detector 使用。此拼接是 AI 記憶體內處理，不是傳輸格式。

**目前沒有 frame_id、原始採樣時間戳配對、時間差門檻、丟幀重排序或 depth-to-color 幾何對齊。** 同 fps 或同解析度不能保證同一時刻、同一視線。邊緣端應提供已對齊影像，但伺服器仍需補同步接收器。

### 5.3 深度預覽與可計算深度

現有 detector 取解碼影像中心像素的一個 8-bit 色彩通道，不能直接當成 RealSense 公尺距離。普通灰階／彩色深度 MP4 以及有損 H.264 都不能視為保真的 Z16 原始深度。

交接需提供兩類資料：

- 預覽：現有 `cam-depth` 用於人眼觀看及影片展示。
- 定位：保留原始深度值的 lossless 資料及 `depthScale`，搭配校正資料與 frame_id。傳輸容器／通道尚待實作；可先交付 Z16 PNG 序列加 JSON manifest，供離線對接，不必將相機接到伺服器。

先行交換檔案範例（**提案，尚無自動匯入器**）：

```text
capture-session/
  manifest.json
  calibration.json
  color/000001.png
  depth/000001.png
  frames.jsonl
  pose.jsonl
```

深度檔規定為單通道 unsigned 16-bit、無損；`depth_m = raw_value * depthScaleMeters`，0 為無效像素。不得任意 normalize 至 0–255。每筆 frames.jsonl 建議：

```json
{"schemaVersion":"1.0","sessionId":"edge-session-001","deviceId":"headset-01","frameId":1,"timestampMs":1792116000000,"clockDomain":"unix_utc","colorFile":"color/000001.png","depthFile":"depth/000001.png","depthAlignedTo":"color","calibrationId":"calib-001"}
```

校正檔需列出 color/depth 的 width、height、fx、fy、cx、cy、distortionModel、distortionCoefficients，以及 depthScaleMeters、深度對彩色外參、設備對相機外參。數值須使用實際讀取／標定結果，不能沿用模擬的 930 px。

## 6. 現有 UWB／IMU MQTT 契約

### 6.1 UWB 距離

Topic：`vision/uwb/ranges`；訂閱 QoS 1，建議發布 QoS 1、retain=false。

```json
{
  "timestamp":1792116000000,
  "ranges":[
    {"stationId":0,"distance":7.8},
    {"stationId":1,"distance":14.6},
    {"stationId":2,"distance":9.2},
    {"stationId":3,"distance":15.4},
    {"stationId":4,"distance":7.9},
    {"stationId":5,"distance":14.7},
    {"stationId":6,"distance":9.3},
    {"stationId":7,"distance":15.5}
  ]
}
```

以上距離只是格式範例，不是校正或真值。timestamp 必須是 Unix UTC 毫秒數字；現有程式缺值時使用接收端時間。distance 單位 m，stationId 為整數 0–7，不能用 1–8。缺失基地站省略該筆，不要用 0 當缺值。接收端目前只檢查有限數及 ID，故發送端應自行排除負值、無效距離與 NaN。

目前 anchor 固定於 `backend/src/positioning/esEkf.js`：

| ID | 世界座標 (m) |
|---|---|
| 0 | (0,0,0) |
| 1 | (20,0,0) |
| 2 | (0,12,0) |
| 3 | (20,12,0) |
| 4 | (0,0,2.5) |
| 5 | (20,0,2.5) |
| 6 | (0,12,2.5) |
| 7 | (20,12,2.5) |

實際架站須交付 stationId 對照表並更新後端，不可直接把新場域距離送進這組固定座標解算。

### 6.2 IMU

Topic：`vision/imu/data`；訂閱 QoS 1，建議發布 QoS 1、retain=false。

```json
{
  "timestamp":1792116000000,
  "acceleration":{"x":0.01,"y":0.02,"z":0.0},
  "gyroscope":{"x":0.0,"y":0.0,"z":0.5}
}
```

| 欄位 | 目前運算要求 |
|---|---|
| acceleration | m/s²；目前直接積分到世界位置，未旋轉、未扣重力，因此相容輸入必須已在世界座標且移除重力 |
| gyroscope | deg/s；後端轉 rad/s，依四元數右乘小角度更新，須與設備 body 軸一致 |
| timestamp | 採樣時刻的 Unix UTC 毫秒；每個來源應單調遞增 |

原始 accelerometer specific force 不能直接套入此簡化積分。四元數即使加在此 JSON，目前接收器也不會採用。不要把角度 deg 當成角速度 deg/s。

現有限制：資料未以 deviceId／opID 分流，原始資料附到全域 activeOperationId。沒有 stale timeout、序號去重或亂序緩衝。只要 UWB 或 IMU 尚未收到就會生成虛擬量測；兩者曾到達後，即使斷線也不會因逾時自動切回。這不能當成正式有效狀態判斷。

## 7. 正式設備 pose 輸入契約（提案，未實作）

因為 UWB＋IMU 融合由另一位同學負責，正式交接建議提供已融合的設備位置／四元數。原始 ranges／IMU 可保留作診斷與重算，但伺服器須新增外部 pose 模式，不能把兩套結果混在一起。

建議 topic：`vision/device/pose`，QoS 1，retain=false。**現有後端未訂閱此 topic**。

```json
{
  "schemaVersion":"1.0",
  "deviceId":"headset-01",
  "opID":"<本次作業 ID>",
  "sequence":120,
  "timestampMs":1792116000000,
  "clockDomain":"unix_utc",
  "worldFrameId":"workspace-01",
  "bodyFrameId":"imu-body-01",
  "position":{"x":2.1,"y":1.8,"z":1.5},
  "quaternion":{"w":1.0,"x":0.0,"y":0.0,"z":0.0},
  "covariance6x6":null,
  "orientationErrorFrame":"world",
  "valid":true,
  "status":"tracking",
  "source":"uwb_imu",
  "algorithmVersion":"pose-fusion-v1"
}
```

| 欄位 | 契約 |
|---|---|
| position | 設備座標原點 B 在世界座標 W 的位置，單位 m；需說明是 IMU 原點還是 UWB tag 原點，兩者不重合需補 lever arm |
| quaternion | 物件鍵 w,x,y,z；單位四元數，代表 body→world 旋轉，不是反向；接收端須驗證並處理正規化 |
| worldFrameId | 必須與螺絲地圖及 anchor 使用同一原點／軸向 |
| covariance6x6 | 可先為 null；有值時為 6×6 巢狀陣列，順序 [px,py,pz,theta_x,theta_y,theta_z]，位置 m、小角度 rad；交叉項單位 m·rad |
| orientationErrorFrame | 提案為 world，對應左乘小旋轉誤差；若來源是 body 誤差，需轉換，不能只改標籤 |
| valid/status | 失效時 valid=false；status 建議 tracking/degraded/lost；失效樣本不得用來更新螺絲位置 |
| sequence | 同 session 遞增；供去重／丟包診斷 |
| timestampMs | 原始 pose 對應的採樣時間，不是 MQTT 發送或到達時間 |

更新率與延遲尚未實測，交接時填寫實際 Hz、P95 latency、最大無資料時間。協方差為 null 時後端可使用有標記的暫定值，但不得宣稱為上游實測 covariance。

## 8. 座標、時間與外參約定

正式提案使用右手座標：W 的 z 向上，x/y 由現場固定；C 使用 optical convention：x 向右、y 向下、z 向前；B 軸由 IMU 安裝定義並記錄。現有模擬程式有不同相機軸定義，串接前必須透過轉換層統一。

$$
p_W=p_B^W+R_B^W(R_C^B p_C+t_C^B)
$$

其中 $t_C^B$ 是相機原點在設備座標中的位置，$R_C^B$ 將相機向量轉至設備座標。姿態輸入描述 $R_B^W$。平移統一 m。

**現有**外參介面：GET／PUT `/api/calibration/camera-extrinsics`。PUT 範例為「未校正的零值」，只展示格式：

```json
{"translation":{"x":0,"y":0,"z":0},"rotationDegrees":{"x":0,"y":0,"z":0}}
```

後端用 Rz(yaw) Ry(pitch) Rx(roll) 計算 rotationMatrix；rotationDegrees 的 x/y/z 為 roll/pitch/yaw，單位 degree，限制每軸絕對值≤360。資料庫已有外參不代表每條 MQTT／REST 定位支線均已使用，正式接收器須用已知標靶驗證整個轉換。

時間契約提案：主機以 NTP／PTP 校時，記錄實測時鐘偏差；硬體時間須有到 UTC 的映射，不得把開機相對毫秒當 Unix epoch。RGB-depth 優先以相同 frameId 配對，pose 依採樣時間插值（位置線性、四元數 SLERP），不跨失效區段外插。可容許時間差與 buffer 長度需根據 fps／運動速度驗收，目前程式沒有這些門檻。

目前 `AI/sender.py` 的 detection timestamp 是伺服器送出時刻；不等於相機 capture timestamp，也不能保證與錄影片 PTS 一致。正式版應同時儲存 capture、receive、processing timestamp、frameId 與影片 PTS 對照，才可精準重播。

## 9. 伺服器內部服務與儲存

| 介面／資料 | 現況與責任 |
|---|---|
| GET `/api/operations/active` | AI 尋找當前作業；邊緣端可用於人工排錯，不是 ready ACK |
| POST AI `/api/operation-update` | backend 以 {opID} 通知 AI；邊緣端不需直接呼叫 |
| POST AI `/api/operation-end` | backend 要求 AI 停錄與封裝 |
| POST `/api/detections` | AI 內部 detection 上送介面；目前來源是 mock，非正式螺絲辨識模型 |
| `vision/detection` | 亦有 MQTT 接收支線，但目前會使用虛擬可見螺絲資料覆寫部分欄位，不能當成外部真實偵測的透明入庫介面 |
| `vision/notification` | 後端發 {level,text,timestamp}，QoS 1；同提示約隔 5 秒可再發；timestamp 是 ISO 字串 |
| RawSensorMeasurement | 儲存原始 ranges／IMU payload，依 active operation 關聯 |
| OperatorTelemetry | 操作員演算法重建資料 |
| Detection／ScrewLocalizationTelemetry | 偵測及螺絲融合結果 |
| `AI/video` | 彩色／深度 RTSP 各自 stream copy 成暫存 MKV；結束後 remux MP4、faststart；成功才刪暫存 |
| `runtime` | mediamtx/backend/ai out.log、err.log，以及 service-pids.json |

影片命名：`color_detect_<opID>_<unix秒>.mp4` 與 `depth_detect_<opID>_<unix秒>.mp4`。錄影是伺服器收到串流後記錄，長度取決於實際運作時間；不是複製測試 MP4。

## 10. 無硬體聯調流程

1. 確認 MongoDB、MQTT broker 已運行；確認 test2 的 USER_ID 在資料庫存在。
2. 於根目錄執行 `.\start-system.ps1`，開啟 `http://localhost:3000`。
3. 在另一個可互動終端執行：

```powershell
python .\AI\test\test2.py
```

4. 確認同資料夾內已有 `test_color.mp4`、`test_depth.mp4`。
5. 輸入 `s`：送 start，收到 ACK 後循環發布雙通道。
6. 驗證頁面光學／深度可切換、opID 正確，檢查 AI log 顯示開始錄影。
7. 如需測試 raw sensor 介面，另用 MQTT client 發送第 6 節 JSON。test2 本身只發 operation start/end 並發布影片，不發 UWB／IMU。
8. 輸入 `e`：送 end 並停流；等後端重建與 MP4 封裝完成。
9. 開啟歷史資料，確認影片可播放及時間對應。測試 `q` 退出後，再執行 `.\start-system.ps1 -stop`。

檢查連線（工具與服務須已安裝）：

```powershell
Test-NetConnection localhost -Port 1883
Test-NetConnection localhost -Port 8554
Test-NetConnection localhost -Port 3000
Get-Content .\runtime\backend.err.log -Tail 50
Get-Content .\runtime\ai.out.log -Tail 50
```

不要在沒有新 log 的 -nolog 執行狀態下，把舊檔內容當成當次執行結果。

## 11. 交付與驗收表

| 驗收項 | 發送方應交付 | 伺服器驗證 |
|---|---|---|
| 作業識別 | userId、ACK opID、開始／結束完整 log | 同一作業對應影片及感測紀錄；避免重複 start |
| RGB 影像 | 解析度、fps、編碼、GOP、B-frame 設定、樣片 | 可解碼、可觀看、封裝後可 seek |
| 深度數據 | 原始格式、尺度、無效值、對齊基準、範例 | 已知平面距離可還原為 m，不以灰階亮度替代 |
| 同步 | frameId、採樣時間、clock domain／偏差 | 丟掉一幀不會錯配下一幀；失配不更新螺絲 |
| UWB／IMU | JSON 範例、ID、軸向、單位、採樣率 | 每軸運動方向與數值正確 |
| 已融合 pose | 第 7 節契約、算法版本、covariance 定義 | body→world 正確；失效／亂序有明確處置（待實作） |
| 外參 | 校正方法、日期、安裝圖、參數檔 | 固定螺絲多視角世界位置一致 |
| 斷線與停止 | 正常 stop 及網路斷線測試紀錄 | endTime、影片封裝、重連及新作業不混淆 |
| 重播 | 原始感測、影片幀索引、偵測與融合時間 | 暫停一致；重播不重新產生虛擬資料 |

尚未具備硬體時，以檔案模擬驗證網路／作業／儲存；不得將其列為原始深度精度、相機同步或真實螺絲辨識驗收通過。

## 12. 對接前須完成的伺服器工作

- 增加外部 pose 接收模式與 deviceId／opID 分流、schema 驗證、時間序列去重及失效判斷。
- 增加 RGB-depth capture metadata、原始深度傳輸及同步緩衝；確立影片 PTS 對應。
- 真實模式停用虛擬螺絲覆寫，接入真正偵測模型與 depth-to-color 對齊。
- 完整使用內參、外參、四元數和有效 pose 計算螺絲世界座標。
- start 增加 requestId 去重、ready；end 增加 finalized 通知並等待發布完成。
- 以真實設備測量吞吐、P95 端到端延遲、掉幀率及同步誤差。

本次僅交付介面說明書，上述新增項目尚未因本文件而實作。

## 13. 程式追溯

| 檔案 | 查核內容 |
|---|---|
| `start-system.ps1` | 啟動／停止服務、路徑、log、refresh |
| `AI/test/test2.py` | s/e/q、MQTT start/end/ACK、雙通道 FFmpeg |
| `AI/main.py` | AI API、斷流處理、RTSP 錄影與 MP4 封裝 |
| `AI/rtsp_stream.py` | 順序讀取雙通道、resize、記憶體拼接 |
| `AI/sender.py` | detection payload、伺服器送出時間、重試 |
| `AI/mediamtx.yml` | RTSP/HLS/WebRTC、paths 與存取設定 |
| `backend/src/mqtt/mqttClient.js` | MQTT topic、欄位、QoS、原始資料寫入、模擬 fallback |
| `backend/src/positioning/esEkf.js` | anchor、IMU 直接積分、四元數與單位 |
| `backend/src/controllers/calibrationController.js` | 相機外參 API 與旋轉定義 |
| `backend/src/app.js`、`backend/src/db.js` | HTTP 路由、前端 dist、MongoDB 位址 |
