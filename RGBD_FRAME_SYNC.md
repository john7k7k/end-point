# RGB-D frame ID 同步：同幀融合、觀看與回放

## 範圍與目前限制

這版完成「封包傳輸 → RGB-D 配對驗證 → 辨識 → 深度反投影 → 設備姿態時間對齊 → 世界座標量測 → Hungarian 關聯 → 四種螺絲融合 → 同幀儲存 → 前端影像／bbox／3D 同步顯示及歷史回放」。辨識目前仍為 mock，不代表已有可用的 YOLO 模型。

保留既有 RTSP 與啟動腳本。**新的同步播放器使用 `.rgbd` 封包中的影像，不使用獨立 RTSP/WebRTC 預覽畫面冒充同幀影像。** 偵測、設備 pose、關聯及融合結果，以 `rgbdframes` 為共同資料來源；不送進會覆寫模擬位置的舊 Detection API。舊 RTSP MP4 仍可透過舊流程播放，但無法事後宣稱有精確的 frame ID 對照。

測試深度與設備姿態都是 synthetic 數據，不能用於量測定位精度。一般 `test2 --rgbd` 的隨機 mock bbox、平面深度與場域螺絲並不具有物理一致性，可能無法通過 0.8 m 關聯門檻；此時會顯示「未通過關聯門檻」，不會把地圖真值反填為融合結果。要展示已知關聯的完整資料流，可使用下方的隔離整合測試。

## 啟動與使用

在專案根目錄：

```powershell
.\start-system.ps1 -reboot
python .\AI\test\test2.py --rgbd
```

測試視窗輸入 `s`：建立 operation，保留兩路 RTSP 預覽，另外啟動 RGB-D 配對封包發送器。開始時間、MQTT lifecycle 沿用原系統。

輸入 `e`：先通知 RGB-D 發送器停止並等候在途影格，再停止 RTSP，發送原有 MQTT operation/end。輸入 `q` 結束測試。最後執行：

```powershell
.\start-system.ps1 -stop
```

沒有 `--rgbd` 時，test2 維持舊模式。第一個 RGB-D hello 建立 session 後，AI 不再從兩路 RTSP 產生另一組舊式偵測，避免重複及未同步量測；RTSP 錄影仍保留。

前提：原來的 MongoDB、MQTT broker、MediaMTX 可以使用，test2 的 USER_ID 是資料庫現有用戶。腳本不負責啟動 MQTT/MongoDB。AI 使用現有 Python 的 numpy、opencv-python、requests、fastapi、uvicorn，新增發送器需要 websockets（此電腦已安裝）。

### 檢查是否真的收到資料

```powershell
Invoke-RestMethod http://127.0.0.1:8000/api/rgbd/status
Invoke-RestMethod 'http://127.0.0.1:3000/api/rgbd/frames/你的opID?limit=20'
```

資料庫：`mongodb://127.0.0.1:27017/vision_system`，collection `rgbdframes`。

原始檔：`AI/video/rgbd/<operationId>/<sessionId>/<12位frameId>.rgbd`。
同名 `.json` 為 AI 原始處理結果備份，`.depth.jpg` 是固定 0–6 m 灰階範圍的顯示用影像（不參與量測），`.pending` 代表待寫入資料庫，`.committed` 代表收到後端成功確認。啟動後也會掃描沒有 committed 標記的 JSON，修補突然中止造成的標記缺口。原始 16-bit 深度保存在 `.rgbd`，未被顯示轉換覆蓋。

資料庫暫時失敗時仍保留本地檔案，但回覆 `persisted:false`。背景每 5 秒依 session/frame 順序補寫；某 session 的前一幀失敗時不跳過它寫後續幀。重試使用同一份辨識快照，避免 mock 或模型再次推論造成不同結果。已結束操作只允許補寫結束之前已在本機 journal 留存的幀。正式資料不會由測試清除。

`-refresh` 原本會清除 video 和除了 user 的資料，因此這些資料也屬清除範圍。

## 封包與流程

端點：`ws://127.0.0.1:8000/ws/rgbd`。
目前只接受一個 RGB-D publisher。初版綁 localhost，不應直接無認證暴露到外網；真實邊緣設備連線需要另設內網存取及認證。

1. 先發 JSON hello，等待 ready。
2. 提供相同 session/clock 的設備 pose（WebSocket 或 MQTT）。
3. 傳一則二進位 RGB-D 封包，等待結果後再送下一幀。
4. 正常停止時發 JSON `{"type":"end"}`，收到 ended 後再通知 operation/end。

hello：

```json
{
  "type": "hello",
  "operationId": "24位MongoDB ObjectId",
  "sessionId": "邊緣端產生的UUID",
  "clockId": "edge-01-unix-ns"
}
```

每次 operation 使用新 UUID。相同 operation 的暫時斷線可以用相同 session 重連，frame ID 繼續遞增；不同 session 必須另開 operation，以免舊／新資料混淆。

二進位格式：

```text
4 bytes：JSON header 長度，unsigned big endian
N bytes：UTF-8 JSON header
C bytes：彩色 JPEG
D bytes：uint16 深度 PNG（無損）
```

header 範例：

```json
{
  "version": 1,
  "operationId": "000000000000000000000001",
  "sessionId": "00000000-0000-4000-8000-000000000000",
  "frameId": 12,
  "clockId": "edge-01-unix-ns",
  "colorCaptureTimeNs": "1792300000123456789",
  "depthCaptureTimeNs": "1792300000123456789",
  "calibrationId": "default",
  "depthAlignedToColor": true,
  "depthScaleMeters": 0.001,
  "dataSource": "simulation",
  "intrinsics": {"fx":465,"fy":465,"cx":320,"cy":180},
  "width":640,"height":360,
  "colorEncoding":"jpeg","depthEncoding":"png16",
  "colorBytes":10000,"depthBytes":1000
}
```

長度由 encode_packet 實際計算。奈秒時間戳必須是十進位字串，避免 JavaScript number 精度損失。`clockId` 必須相同，但字串相同不會自動同步硬體時鐘；跨裝置時鐘轉換與偏差校正仍是交接事項。received/processed 是伺服器 Unix 時間，未校正時不可直接相減當成傳輸延遲。

深度必須已對齊彩色影像；接收端拒絕沒有 alignment 宣告或尺寸不符的封包，不做 resize 假裝校正。相機點採用右、下、前的 RGB-D 座標慣例：

$$
z=d_{raw}s,\qquad x=(u-c_x)z/f_x,\qquad y=(v-c_y)z/f_y
$$

辨識中心附近 5×5 區域取非零深度中位數；全為零即 invalid_depth。

$$
p_W=R_B^W(R_C^B p_C+t_C^B)+p_B^W
$$

相機外參讀取既有 `/api/calibration/camera-extrinsics`，並將當次外參快照存在結果中。現有系統僅 default profile，calibrationId 不符時不更新世界座標。預設 identity 並不代表實際相機與設備座標已校正。

## 設備 pose 介面

MQTT 新增 topic `vision/device/pose`，QoS 1。也可以 WebSocket 發相同內容，額外帶 `"type":"pose"`。透過 MQTT 到達的資料由 Node 轉送 AI `/api/rgbd/pose`。

```json
{
  "operationId":"000000000000000000000001",
  "sessionId":"00000000-0000-4000-8000-000000000000",
  "clockId":"edge-01-unix-ns",
  "timestampNs":"1792300000123456789",
  "position":{"x":1.0,"y":2.0,"z":1.5},
  "quaternion":{"w":1.0,"x":0.0,"y":0.0,"z":0.0}
}
```

position 單位公尺；四元數為 body → world，wxyz，接收端正規化。需與相機外參的 body 定義一致。pose 時間戳必須遞增；重複、亂序、session/op/clock 不符會拒絕。這個介面接收**已融合的設備 pose**，不取代同學負責的 UWB+IMU 演算法，也不自行把舊 IMU 訊息改成 quaternion。

影像時間恰好有樣本則直接使用；否則在前後兩筆間，位置線性插值、四元數最短弧 SLERP。最多等待 100 ms 讓非同步 MQTT 的右側樣本到達，仍無資料即 pose_unavailable。只拿最近樣本外推是不允許的。結果保存前後樣本時間以供稽核。

## 工程門檻（均非論文／實測校正值）

| 項目 | 初值 | 用意 |
|---|---:|---|
| RGB/depth 擷取時間差 | ≤20 ms | 避免時刻差太大的成對影像 |
| pose 插值兩端最大間隔 | ≤200 ms | 避免跨越長時間缺資料 |
| 等待下一個 pose | 100 ms | 容許感測訊息稍晚到達 |
| pose buffer | 1000 筆 | 記憶體有界 |
| 在途 frame | 1 | ACK 背壓，避免 AI 無限制積壓 |
| 最大封包 | 16 MiB | 防止過大單包 |
| WebSocket 接收佇列 | 2 | 限制接收積壓 |
| frame 逾時結束 | 10 秒 | 沿用操作中斷時間尺度 |
| 測試發送率 | 10 Hz 上限 | 方便先驗證；處理慢時實際頻率降低 |

目前是 stop-and-wait，而不是高 FPS 生產級 pipeline。硬體端應只保留最新一組尚未送出的 RGB-D，跳過的 capture frame ID 仍需遞增。不能為了網路背壓阻塞相機 SDK 並讓 SDK 佇列越積越長。

## 狀態與資料一致性

- duplicate_or_out_of_order：不重算、不寫第二筆。
- non_monotonic_capture_time：不接受倒退時間。
- pair_time_mismatch：存原始封包與狀態，不做定位。
- invalid_depth：存辨識結果，不更新三維位置。
- pose_unavailable：有相機量測，但不硬算世界座標。
- calibration_mismatch：沒有使用錯誤 profile 計算位置。
- no_detection：沒有辨識物件，仍儲存影像與同幀設備姿態。
- localized：有相機點、時間對齊 pose 及原始世界座標；是否關聯成功另看 `fusion.detections[].association`，不能只靠這個狀態判定。

資料庫 unique index 為 operationId + sessionId + frameId。HTTP 重送不新增第二筆。伺服器處理／寫入失敗會回復 frame sequence，允許重送。

`videoTimeMs = (captureTimeNs - 該 session 首筆 captureTimeNs) / 1e6`。這是**同幀封包回放的擷取時間索引**，不是獨立 RTSP MP4 的 PTS。掉幀的時間間隔仍保留，不使用 frameId/FPS 捏造時間。

## 關聯、融合與資料表

`backend/src/positioning/rgbdFusion.js` 使用地圖的 8 顆螺絲作候選，Hungarian 成本為世界座標歐氏距離。0.8 m 門檻及已知螺絲種類的限制在配對之前套用，另有 unmatched 虛擬欄，避免不合法配對搶走有效螺絲。未知／mock 類別只做距離關聯，尚非類別可靠性模型。

匹配後呼叫既有平均法、EKF、ES-EKF、RMV-FGO 實作，每顆螺絲保留最近 60 筆原始觀測與量測不確定度。四種螺絲融合結果分開存於同一幀文件，不重算設備 UWB+IMU 演算法。這次沿用原本演算法數學，沒有把簡化版本換成新的聯合姿態優化器。

`rgbdframes` 的主要欄位：

| 欄位 | 意義 |
|---|---|
| operationId / sessionId / frameId | 唯一幀識別 |
| captureTimeNs / metadata | 原始擷取時間、內參、尺度、編碼等 |
| devicePose | 該擷取時間插值的設備位置與四元數；無螺絲也保存 |
| result.observations | bbox、種類、相機座標與原始世界座標 |
| fusion.detections | 本幀關聯結果、四種螺絲融合輸出 |
| fusion.state | 截至本幀的螺絲地圖與融合窗口，可從 DB 恢復；公開 API 移除內部窗口 |
| fusion.referenceScrews | 此 session 的參考螺絲地圖快照 |
| selectedAlgorithm | 當時套用的螺絲融合演算法 |
| videoTimeMs | 封包回放時間，非 RTSP MP4 PTS |

每幀的關聯、融合及設備 pose 以單一 Mongo 文件原子寫入；同一 session 串行處理，最多 2 個 HTTP 請求在途，超量回 429 由發送端重試。此設計適用目前的單一 Node 伺服器部署；多副本部署前需新增跨程序排序／鎖定機制。

## 前端與 API

平台自動查詢選定作業的 RGB-D sessions。有同幀紀錄時使用 `RgbdViewer.vue`；沒有時保留原播放器。新操作出現後會自動發現，不需刷新網頁。

| API | 用途 |
|---|---|
| GET /api/rgbd/sessions/:op | sessions 與資料範圍 |
| GET /api/rgbd/frames/:op?sessionId=…&index=1&after=…&limit=500 | 分頁回放索引 |
| GET /api/rgbd/snapshot/:op/:session/:frame | 同幀資料與截至該幀的最近 1000 筆設備軌跡；frame 可為 latest |
| GET /api/rgbd/media/:op/:session/:frame/color | 封包原始彩色 JPEG |
| GET /api/rgbd/media/:op/:session/:frame/depth | 該封包深度的顯示用 JPEG |

影像先解碼完成，再提交 canvas、bbox、姿態、螺絲資料和 3D 視圖。過時的非同步回應會被 generation 檢查丟棄。即時模式約每 100 ms 取最新完整幀（一次最多一個 tick，非效能保證）；暫停停止前端更新，不停止後端。恢復取得最新幀。歷史模式依擷取時間播放、暫停保留該幀、拖曳取得對應幀；光學／深度切換沿用同一 frame ID。畫面跟不上時可跳過中間顯示幀，但資料庫不因此刪幀。

## 升級第一階段舊 RGB-D 紀錄

只適用已有 `.rgbd` 與 `rgbdframes` 的作業。先檢查，再明確套用；不對一般 MP4 捏造同幀資料。

```powershell
node backend/scripts/rebuildRgbdFrames.mjs --operation-id 你的opID
node backend/scripts/rebuildRgbdFrames.mjs --operation-id 你的opID --apply
python AI/prepare_rgbd_archive.py --operation-id 你的opID
```

升級從已儲存的原始觀測重建融合；不重新產生虛擬量測。沒有姿態的舊幀仍沒有姿態，不會補造。

## 測試

```powershell
python -m unittest discover -s AI/test -p 'test_rgbd*.py' -v
$env:RGBD_TEST_MONGO='mongodb://127.0.0.1:27017/vision_rgbd_sync_test'
node --test backend/apiTest/test-rgbd.mjs backend/apiTest/test-rgbd-fusion.mjs
python AI/test/rgbd_e2e.py
npm --prefix frontend run build
```

Python 測試含實際 localhost WebSocket 收發（HTTP 後端以 stub 隔離），以及資料庫失敗重送。Node 測試對獨立 MongoDB 測試庫寫入，驗證 unique/idempotency/讀取/結束操作拒收；只清除該測試建立的資料。不需要、也不會啟動正式平台或修改既有操作。

手動故障注入（已有有效 operation，且不要同時啟動兩個 RGB-D 發送器）：

```powershell
python .\AI\test\rgbd_sender.py --operation-id 你的opID --frames 60 --drop-every 10 --duplicate-every 7 --skew-every 11
```

### 可視化整合驗證（不影響正式作業）

```powershell
python AI/test/rgbd_e2e.py --preview
```

打開終端輸出的 Preview 網址。這個 fixture 建立 40 幀合成影像與一致的深度／pose，其中 5 幀漏檢、35 筆有效螺絲觀測；能驗證關聯、四種融合、設備不因漏檢停止更新及光學／深度回放。它是資料流驗收，不是精度實驗或真實螺絲模型展示。按 Enter 關閉後只清除本次建立的隔離測試資料與暫存影像。

本次驗證：Python 10 個測試、Node 4 個測試（包含實際 Mongo）、40 幀端到端測試、前端 build 通過；瀏覽器確認播放、回到第一幀、深度切換、歷史演算法選擇。未做真實相機、完整 MQTT 硬體時鐘或長時間高 FPS 壓力測試。

## 尚需硬體與後續工程驗證

1. 真實模型與相機 SDK：目前接收器支援零／單／多物件輸出，但實際辨識仍為 mock。
2. 真實相機 RGB/depth 硬體同步、深度尺度、alignment、內外參，以及設備與相機時鐘校正。
3. 目前為有界 stop-and-wait；下一階段量測 FPS、P95 延遲與資料量後，再決定是否改為小型 pipeline，不能以錯配換取吞吐量。
4. 若需要輸出「可獨立播放且同幀索引完整」的 MP4，需由這份封包序列另行編碼並寫入真實 PTS 對照；目前同步歷史使用逐幀封包播放器，不承諾舊 RTSP MP4 逐幀同步。
5. 正式多機部署前補認證、傳輸加密、容量／保留政策與跨程序序列化。新介面沿用本機原型的信任邊界，不應直接公開到 Internet。
