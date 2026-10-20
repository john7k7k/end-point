# IMU＋UWB MQTT 交接格式

版本：2026-10-19（實驗室 WSL 區網部署版）。依本專案目前程式整理，供 UWB／IMU、人員定位與平台整合組員聯調。

## 0. 給組員的連線資訊與操作摘要

目前主機是連接 Wi-Fi 的 Windows 電腦，平台執行在該主機的 WSL，MongoDB／Mosquitto 使用 Docker。

| 項目 | 目前使用值 |
|---|---|
| 主機 Wi-Fi IPv4 | `192.168.0.156` |
| MQTT broker host | `192.168.0.156`，不含 mqtt:// 前綴（Python connect 參數） |
| MQTT port | `1883`，TCP |
| MQTT 完整 URL | `mqtt://192.168.0.156:1883` |
| 平台 | `http://192.168.0.156:3000` |
| 後端識別 | `http://192.168.0.156:3000/api/device/runtime` |
| 遠端帳號 | 使用這台主機資料庫的帳號 ObjectId；不是發送電腦上的舊帳號 ID |
| 使用範圍 | 同 Wi-Fi／可互連的實驗室區網；無需公網 IP |

組員先與主機連到可互通的區網，測通1883，再依第3、4節送原始 UWB／IMU。由一個操作控制端建立作業、等待 ACK 後開始量測；其他感測／相機程式沿用該作業，**不要每個裝置都各自發一次 operation/start**。

如果完整測試由 test2 控制，先在發送電腦執行：

```powershell
python .\AI\test\test2.py --server 192.168.0.156 --user-id 貼上遠端帳號ID --rgbd
```

看到 Using backend 與 Subscribed 後輸入 s；感測端在操作已開始後持續發送 UWB／IMU；e 停止，q 退出。此命令的 --user-id placeholder 必須替換。

只有 UWB／IMU 發送端不需要安裝 FFmpeg、MediaMTX 或相機驅動；只有同時執行 test2／影像發送時才需要這些影像端依賴。test2 使用配對測試影片與示範深度，並非真實感測器驅動。

主機 IP 可能因 DHCP 改變；交接前用 Windows ipconfig 確認 Wi-Fi IPv4，建議請網管設定 DHCP 保留位址。不要把 WSL 的172.x虛擬位址或邊緣端自己的 localhost 當 broker host。

## 1. 分工與兩種輸入

人員定位端負責取得 UWB 基站距離、IMU 資料，或在伺服器計算設備位置與姿態。平台負責時間對齊、RGB-D 螺絲定位、螺絲關聯／融合、儲存與可視化。

| 方式 | 傳送內容 | 目前實作狀態 |
|---|---|---|
| A：原始感測資料 | 八站距離＋加速度／角速度 | 後端已接收、更新選定濾波器、保存原始資料；結束後重算三種內建設備定位演算法 |
| B：已融合設備姿態 | 三維位置＋四元數＋量測時間 | 已接收並轉送 AI 姿態緩衝；尚未完整接管平台感測面板、原始資料與三種演算法重算 |

**若組員的融合演算法將直接放進此專案伺服器，建議交付演算法程式，並以 A 的原始資料介面接入，再將其輸出接到同幀姿態流程。** 不要只發 B 就認為整套平台串接完成。

目前 `test2.py --rgbd` 使用的是後端 HTTP 取樣→同幀 WebSocket 姿態流程；它沒有模擬「經 MQTT 發送原始 UWB／IMU」這一段。正式聯調需另外用本文的 MQTT 範例驗證。

## 2. 連線與 Topic

| 項目 | 設定 |
|---|---|
| Broker | `mqtt://192.168.0.156:1883`（主機IP變更時同步更新） |
| 訊息編碼 | UTF-8 JSON object |
| 感測資料 QoS | 1 |
| 操作開始／結束 QoS | 2 |
| Retain | 全部 `false`，避免重連後把舊開始訊息當成新操作 |
| 設備數量 | 目前只有一個全域啟用作業／設備狀態 |

| Topic | 方向 | 內容 |
|---|---|---|
| `vision/uwb/ranges` | UWB端 → 後端 | 八站距離 |
| `vision/imu/data` | IMU端 → 後端 | 線性加速度、角速度 |
| `vision/device/pose` | 融合定位端 → 後端 → AI | 已融合位置與四元數，選用 |
| `vision/operation/start` | 操作端 → 後端 | 開始作業 |
| `vision/operation/ack/<userId>` | 後端 → 操作端 | 作業 ID 與後端／請求識別 |
| `vision/operation/end` | 操作端 → 後端 | 結束作業 |

後端預設連到 `mqtt://localhost:1883`，可用 `MQTT_URL` 環境變數指定完整 broker URL。邊緣端的 localhost 指邊緣端自己，不能直接照抄為伺服器位址。

目前 Docker Compose 仍將1883綁定 `127.0.0.1`；本次區網部署透過**主機 Windows portproxy＋防火牆規則**把 Wi-Fi 位址的連線轉給這個本機埠。只執行 compose up 不會自動建立區網通路。

### 2.1 哪些連接埠需要開放

| 發送工作 | 需要連到主機的埠 |
|---|---|
| 已有作業下只發原始 UWB／IMU MQTT | 1883/TCP |
| 操作程式透過 HTTP 取得 backendInstanceId | 另需3000/TCP |
| 執行 test2 --rgbd 完整影像測試 | 1883、3000、8000、8554/TCP |
| 只發 MQTT vision/device/pose | MQTT走1883；AI8000由主機後端內部連線，但相機端仍需自己的影像通路 |

**感測設備不需要直接連 MongoDB 27017。** 相機上傳8000與RTSP8554不是純原始感測資料傳輸必需的埠。完整影像連線請另參考 `REMOTE_TEST2.md` 與 `EDGE_RGBD_HANDOVER.md`。

### 2.2 主機端設定（在192.168.0.156上操作）

主機 WSL 的專案目錄啟動服務：

```bash
docker compose -f deploy/compose.infra.yml up -d
bash start-system.sh --check
bash start-system.sh
```

若應用已執行，不要重複 start；查 `bash start-system.sh -status`，需要重啟時先退出 test2，再用 -reboot。

主機 Windows PowerShell 先確認本機埠：

```powershell
Test-NetConnection 127.0.0.1 -Port 1883
Test-NetConnection 127.0.0.1 -Port 3000
```

兩者可達後，在**主機系統管理員 PowerShell**設定區網轉送；若已設定完成，先查看，不必重複新增：

```powershell
netsh interface portproxy show all
Get-NetFirewallRule -Name 'Endpoint-LAN-MQTT-Web' -ErrorAction SilentlyContinue
```

尚未設定時：

```powershell
Start-Service iphlpsvc
netsh interface portproxy add v4tov4 listenaddress=192.168.0.156 listenport=1883 connectaddress=127.0.0.1 connectport=1883
netsh interface portproxy add v4tov4 listenaddress=192.168.0.156 listenport=3000 connectaddress=127.0.0.1 connectport=3000
New-NetFirewallRule -Name 'Endpoint-LAN-MQTT-Web' -DisplayName 'Endpoint LAN MQTT and Web' -Direction Inbound -Action Allow -Protocol TCP -LocalAddress 192.168.0.156 -LocalPort 1883,3000 -RemoteAddress LocalSubnet -Profile Any
```

設定後從組員電腦測試，而不是只在主機測：

```powershell
Test-NetConnection 192.168.0.156 -Port 1883
Test-NetConnection 192.168.0.156 -Port 3000
```

預期 TcpTestSucceeded=True。若主機本機通、組員電腦不通，檢查 portproxy、防火牆或 Wi-Fi 用戶端隔離；若主機本機也不通，先檢查容器／應用狀態。TCP測通後仍需驗證 MQTT CONNECT／發布是否成功。

目前專案 Mosquitto 為匿名區網測試設定，這些規則只限定本機子網路，不應用作公網部署。若伺服器之後設定帳密，需一起交付 username／password／TLS要求並更新發送端；不要自行關閉憑證驗證。

### 2.3 查遠端帳號、觀察收訊與資料

在主機 WSL 專案目錄查帳號：

```bash
docker compose -f deploy/compose.infra.yml exec -T mongodb \
  mongosh vision_system --quiet \
  --eval 'db.users.find({}, {_id:1, username:1, name:1}).toArray()'
```

若是空陣列，先到 `http://192.168.0.156:3000` 註冊帳戶。

主機監看收到的原始 topic：

```bash
docker compose -f deploy/compose.infra.yml exec mqtt \
  mosquitto_sub -h 127.0.0.1 -t 'vision/uwb/ranges' -t 'vision/imu/data' -v
```

另一個終端查看應用紀錄：

```bash
tail -f runtime/linux/backend.log
```

Ctrl+C只停止監看，不停止broker或後端。監看有訊息只能證明broker收到；還要確認資料庫有本次作業的 raw 紀錄，才能確認應用接受並保存。

## 3. UWB 距離格式：`vision/uwb/ranges`

```json
{
  "timestamp": 1792396800000,
  "ranges": [
    { "stationId": 0, "distance": 6.000 },
    { "stationId": 1, "distance": 15.360 },
    { "stationId": 2, "distance": 10.390 },
    { "stationId": 3, "distance": 17.550 },
    { "stationId": 4, "distance": 5.930 },
    { "stationId": 5, "distance": 15.340 },
    { "stationId": 6, "distance": 10.350 },
    { "stationId": 7, "distance": 17.530 }
  ]
}
```

數字為格式示例，並非實測紀錄。

| 欄位 | 型態／單位 | 意義 |
|---|---|---|
| `timestamp` | number，Unix epoch 毫秒 | 這組距離的量測時間，應明確提供 |
| `ranges` | array | 本次有效距離集合 |
| `stationId` | integer，0–7 | 程式基站索引，從 0 開始；網站顯示站號為它加 1 |
| `distance` | number，m | 設備上的 UWB tag 到該基站的量測距離 |

目前固定基站座標如下，單位 m：

| stationId | 網站站號 | X | Y | Z |
|---:|---:|---:|---:|---:|
| 0 | 1 | 0 | 0 | 0 |
| 1 | 2 | 20 | 0 | 0 |
| 2 | 3 | 0 | 12 | 0 |
| 3 | 4 | 20 | 12 | 0 |
| 4 | 5 | 0 | 0 | 2.5 |
| 5 | 6 | 20 | 0 | 2.5 |
| 6 | 7 | 0 | 12 | 2.5 |
| 7 | 8 | 20 | 12 | 2.5 |

- 場域目前是 20 m × 12 m，四個角落各上下兩站。2.5 m 是上層基站高度，不代表已量測的場域天花板高度。
- 交接前務必確認硬體基站 ID 對應表，硬體若從 1 編號，需先轉成 0–7。
- 無效距離請省略該站，不能用 0 代替量測失敗，也不能發送 NaN、Infinity、負值、字串或重複站號。
- 盡量每筆包含全部八站。互補／加權平均目前的 UWB 解算至少需四筆有效距離，仍要有合適的幾何配置。
- 目前每組只有一個 timestamp；若八站量測跨越較長時間，需要先約定整組參考時刻。逐站 timestamp 尚未被程式處理。

## 4. IMU 格式：`vision/imu/data`

```json
{
  "timestamp": 1792396800000,
  "acceleration": { "x": 0.012, "y": -0.021, "z": 0.003 },
  "gyroscope": { "x": 0.15, "y": -0.08, "z": 1.20 }
}
```

| 欄位 | 型態／單位 | 意義 |
|---|---|---|
| `timestamp` | number，Unix epoch 毫秒 | IMU 樣本量測時間 |
| `acceleration.x/y/z` | number，m/s² | 線性加速度 |
| `gyroscope.x/y/z` | number，°/s | 角速度；不是 Euler 角 |

### 接現有內建濾波器時的座標要求

現有程式直接把 acceleration 的 x/y/z 積分到世界位置，**沒有在這個入口做重力扣除，也沒有做 body→world 的加速度旋轉**。因此 A 介面目前需要的是「已扣除重力、已轉到世界座標的線性加速度」。靜止時應接近 `(0,0,0)`，不能直接送含重力的 `(0,0,9.81)`。

角速度目前以 °/s 讀取，程式轉成 rad/s 後以 `q = q ⊗ delta_q` 更新姿態，交接以設備座標的角速度為準。若組員演算法需要 body-frame specific force 等原始值，應在接入該演算法時明確調整契約，不可直接把不同定義的資料放在同名欄位。

現有 IMU topic **不會讀取額外附上的 quaternion 或 yaw 欄位**。如果要使用組員已算好的姿態，應採第 5 節的 pose 格式，或由伺服器上的演算法 adapter 明確接入。

目前積分 dt 會限制在 0.001–0.1 秒。這是現有實作行為；長時間掉資料後不能期待它完整補積分缺失的運動。

## 5. 已融合姿態格式：`vision/device/pose`

只在組員提供已計算的設備位置與四元數、且要供 AI 同幀對齊時使用：

```json
{
  "operationId": "6ad5d9ff2dda87cf45987ed7",
  "sessionId": "67986f8b-a9ad-4675-92ed-3e177db09b4b",
  "clockId": "device-unix-ns",
  "timestampNs": "1792396800000000000",
  "position": { "x": 5.0, "y": 3.0, "z": 1.4 },
  "quaternion": { "w": 1.0, "x": 0.0, "y": 0.0, "z": 0.0 },
  "fusionAlgorithm": "external_uwb_imu",
  "uwbRanges": [
    { "stationId": 0, "distance": 6.000 },
    { "stationId": 1, "distance": 15.360 }
  ],
  "imu": {
    "acceleration": { "x": 0.012, "y": -0.021, "z": 0.003 },
    "gyroscope": { "x": 0.15, "y": -0.08, "z": 1.20 }
  }
}
```

此範例的附加距離只列兩站以縮短內容；實際應傳本次可用的站資料。

| 欄位 | 必填 | 說明 |
|---|---|---|
| `operationId` | 是 | 本次後端 ACK 的 `opID`；注意這裡名稱是 operationId |
| `sessionId` | 是 | 與 RGB-D 發送端使用相同 UUID；不是使用者 ID |
| `clockId` | 是 | 與影像握手的 clockId 相同，時間仍須實際同源或已校正 |
| `timestampNs` | 是 | Unix 奈秒的十進位字串，避免 JavaScript number 精度損失 |
| `position` | 是 | 設備座標原點在世界座標的位置，m |
| `quaternion` | 是 | 具名 w/x/y/z；旋轉為設備座標 → 世界座標 |
| `fusionAlgorithm` | 否 | 來源演算法名稱，僅作附加來源資訊，不會自動新增網站選項 |
| `uwbRanges`、`imu` | 否 | 該姿態對應的感測資訊；可隨對齊姿態保存至同幀文件 |

姿態定義：`p_world = R(quaternion) * p_body + device_position`。世界座標 Z 向上；X、Y 與上述基站表相同。四元數 `(1,0,0,0)` 表示設備軸與世界軸對齊，不表示已包含相機外參。相機→設備的旋轉和平移另外由平台相機外參設定處理。

處理限制：

- 後端檢查 operationId 是否等於目前啟用作業，再轉送 AI `/api/rgbd/pose`。
- AI 必須先收到相同 operation／session／clock 的影像端 `hello`；在 hello 前直接送 pose 會被拒絕。
- session 與 clock 必須完全一致，timestampNs 必須嚴格遞增。QoS 1 重送同時間戳目前可能被拒絕，尚無 pose 訊息去重 ACK。
- 四元數須有限且非零，AI 會正規化。發送端仍應提供單位四元數。
- AI 以位置線性插值、四元數 SLERP 對齊影像時間；左右姿態間隔最大 200 ms，最多等待約 100 ms，不會拿過期姿態任意外推。
- 僅有相同 clockId 不等於時鐘已同步；需實際驗證偏移與漂移。
- 這個 MQTT topic 目前不會把 pose 當成原始 UWB／IMU寫入 RawSensorMeasurement，也不會自動產生三種 OperatorTelemetry。請參考第 1 節決定整合方式。
- 一個 RGB-D session 只選一種姿態供給方式。不要讓目前的測試發送器與外部 MQTT pose 同時供應兩條不同姿態軌跡。

## 6. 操作開始與結束

### 開始順序

1. 在平台建立使用者，取得其 MongoDB `_id`（24 位十六進位字串）。
2. HTTP GET `http://192.168.0.156:3000/api/device/runtime` 取得 backendInstanceId，鎖定此次目標後端。
3. 先訂閱 `vision/operation/ack/<userId>`，再送開始訊息。

Topic：`vision/operation/start`，QoS 2，retain=false。

```json
{
  "userId": "6ad5c8c4a8c26b33e505c406",
  "backendInstanceId": "以runtime介面回傳的值替換",
  "requestId": "每次開始新建一個UUID"
}
```

backendInstanceId 與 requestId 為選用欄位，但測試工具會使用它們，避免 Windows／WSL 共用 broker 時接到另一套後端的 ACK。backendInstanceId 每次後端啟動會變，不能永久寫死。requestId 目前用於回覆配對，**後端尚未以它對 start 去重**，因此不要重複發送 start 來重試。

本次聯調要求操作控制程式帶上這兩欄，並只接受兩欄都符合的 ACK。若使用 test2，程式會自動取得並檢查，不需要人工複製 backendInstanceId。感測器驅動不必重複建立作業。

後端接受操作並成功通知 AI 後才回覆：

```json
{
  "opID": "後端建立的24位操作ID",
  "backendInstanceId": "本次後端instance值",
  "requestId": "與開始訊息相同的requestId"
}
```

ACK 表示作業已建立且 AI 接受該 operation，不代表第一幀已到、錄影已成功或相機已就緒。作業 startTime 目前由伺服器當下時間決定，不採發送端自訂的 startTime。

原始 UWB／IMU沒有作業 ID 必填檢查，會被掛到目前全域作業；請等 ACK 後再供應本次資料。若額外送 operationId、deviceId 或 sequence，目前不會用它們進行分流或去重。

### 結束

停止影像發送器並完成其收尾，再送 `vision/operation/end`，QoS 2，retain=false：

```json
{
  "opID": "本次ACK的操作ID",
  "endTime": "2026-10-19T08:00:00.000Z",
  "description": "Operator stopped acquisition"
}
```

`endTime` 為 ISO 8601 UTC。後端結束作業、用原始資料重算設備定位歷史，並通知 AI 結束。現在沒有「全部重算及封裝完成」的 MQTT ACK；publish 完成只代表 broker 交付，不等於歷史結果已全部就緒。

### 只測原始 UWB／IMU時的生命週期限制

目前仍以影像操作為主。沒有影像時，AI的起始等待／斷流規則可能自動結束操作；尚未新增可獨立長時間執行的「純感測器錄製模式」。因此只發原始資料可做短時間介面測試；完整聯調請同步啟動影像流程，或先實作獨立感測器模式後再做長時間量測。原始資料只有在啟用作業存在時才保存，不能只看broker有收到就認為資料庫會一直記錄。

## 7. 時間、頻率與資料品質約定

| 項目 | 交接約定 |
|---|---|
| 原始 UWB／IMU時間 | Unix epoch **毫秒 number**，採樣時間，不是 publish 完成時間 |
| Pose／RGB-D時間 | Unix epoch **奈秒 string**，同源或經校正的時鐘 |
| 建議初次聯調頻率 | UWB 10–20 Hz；IMU 50–100 Hz；融合 pose 20–50 Hz；這是聯調起點，不是已驗證的吞吐保證 |
| JSON 數字 | 有限 number；不用單位字串、null、NaN 或 Infinity 填量測 |
| 向量 | 三軸完整提供，即使某軸為 0 |
| 距離 | 公尺，不是公分／毫米 |
| 角速度 | 度／秒；若原始為 rad/s，先乘以 180/pi |
| 四元數 | 具名 w/x/y/z，不傳未說明順序的四元素 array |

現有 raw timestamp 若缺少、為 0 或無法轉成有效數字，程式會改用伺服器接收時間；這會降低時序可信度，所以交接時應視為不合格輸入，而不是依賴此 fallback。

現有原始感測輸入的防重送、時序驗證與資料過期處理仍有限。`hasUwbRanges`／`hasImuData` 是接收旗標，未依最後接收時間自動判斷斷線；只收到其中一類時，現有虛擬補值邏輯仍可能啟用。正式實驗前需約定掉資料與降級策略，確認來源後再錄製，不能把混入模擬值的紀錄當成純硬體實測。

## 8. 最小 Python 發送範例（原始資料）

在已開始且收到 ACK 的測試作業中執行。程式只發格式範例，不含感測器驅動或真實讀值。

```python
import json
import time
import paho.mqtt.client as mqtt

BROKER = "192.168.0.156"  # 主機的Wi-Fi IPv4；不是本機localhost
client = mqtt.Client(callback_api_version=mqtt.CallbackAPIVersion.VERSION2)
client.connect(BROKER, 1883, 60)
client.loop_start()

try:
    now_ms = time.time_ns() // 1_000_000
    uwb = {
        "timestamp": now_ms,
        "ranges": [
            {"stationId": i, "distance": d}
            for i, d in enumerate([6.00, 15.36, 10.39, 17.55, 5.93, 15.34, 10.35, 17.53])
        ],
    }
    imu = {
        "timestamp": now_ms,
        "acceleration": {"x": 0.012, "y": -0.021, "z": 0.003},
        "gyroscope": {"x": 0.15, "y": -0.08, "z": 1.20},
    }
    for topic, payload in [("vision/uwb/ranges", uwb), ("vision/imu/data", imu)]:
        msg = client.publish(topic, json.dumps(payload, allow_nan=False), qos=1, retain=False)
        msg.wait_for_publish(timeout=5)
        if not msg.is_published():
            raise RuntimeError(f"Publish timeout: {topic}")
finally:
    client.disconnect()
    client.loop_stop()
```

原始訊息目前沒有應用層 accepted ACK；請同時檢查伺服器日誌、RawSensorMeasurement 與畫面，不能只以 publish 成功驗收。

組員端安裝套件：

```bash
python -m pip install "paho-mqtt>=2,<3"
```

上面的程式一次發送一組範例數值，用於驗證格式；真實設備需改成硬體讀值並持續按量測頻率發送。IMU與UWB各保留自己的實際量測時間，不要只是為了看起來同步，把兩種不同時間的讀值都改成同一個發送時刻。

## 8.1 發送端與主機端各要執行什麼

| 機器 | 要執行 | 不需要執行 |
|---|---|---|
| 192.168.0.156主機 | Docker MongoDB／MQTT、平台後端、AI、需要時的MediaMTX | 不要另外開第二個 test2 搶同一作業 |
| 組員原始感測設備 | 感測器驅動、MQTT client、正確單位與時間戳 | Node平台、MongoDB、AI推論服務 |
| 影像／test2發送電腦 | 相機發送器，或Python＋FFmpeg＋測試影片 | 本機另一套平台後端／broker |

跨機 test2 指令：

```powershell
python .\AI\test\test2.py --server 192.168.0.156 --user-id 貼上遠端帳號ID --rgbd
```

若組員自行實作操作開始控制，就由該控制程式開始作業；不要再讓 test2 同時建立另一筆。需要影像端沿用既有 operationId 時，可依影像交接文件使用獨立發送器。

## 8.2 常見問題速查

| 現象 | 檢查 |
|---|---|
| 連不到192.168.0.156:1883 | Wi-Fi是否互通、主機IP、1883轉送／防火牆、Docker MQTT是否Up |
| 網站可以開，但test2影像失敗 | 另外檢查8000／8554；只有1883／3000不夠 |
| User not found／ObjectId CastError | 使用遠端資料庫的24位帳號ID，不是username |
| operation not ready／pose HTTP409 | ACK是否與目標backendInstanceId／requestId相符；操作是否結束；Windows與WSL是否重複開平台 |
| MQTT看得到但raw資料沒有 | 後端是否啟用作業、欄位格式、應用log；publish成功不等於DB保存 |
| 八站資料不完整／模擬值混入 | 確認兩個raw topics都持續到達，並檢查目前fallback限制 |
| 設備持續漂移或高度不合理 | acceleration重力／座標、角速度單位、基站ID與座標 |
| pose被拒絕 | hello是否完成、operation/session/clock是否一致、時間戳是否遞增 |
| 換Wi-Fi或重啟後突然不能連 | 重查主機IP、Docker／WSL服務、Windowsportproxy與防火牆 |

## 9. 組員需要交付與聯調驗收

請交付：

- 一份真實或錄製的 UWB／IMU JSON 範例，以及時間單位與採樣頻率。
- 八站硬體編號與世界座標對照表；UWB tag 與設備原點的安裝偏移。
- IMU 安裝方向、軸向、是否扣重力，以及 acceleration 所在座標系。
- 四元數方向、順序、座標手性；設備到世界的旋轉定義。
- 若演算法在伺服器執行：程式、依賴版本、初始化方式、單步輸入／輸出、重設方式及可重播範例。
- 相機、IMU、UWB 的時鐘來源與偏移校正方式。

正式接線前先共同填寫：broker位址、使用者ID、誰控制操作開始／結束、八站對照表、IMU座標／單位、時間來源，以及選A原始輸入或B已融合姿態。先用錄製資料驗證，再換即時硬體。

先做三個動作驗收：靜止時加速度接近 0；只旋轉時設備位置不應大幅移動；沿世界 +X／+Y 移動時，位置與姿態方向應符合定義。再檢查八站數值、原始資料筆數、操作結束後三種 Telemetry，以及歷史暫停時資料是否同步停止。

## 10. 對應程式

- `backend/src/mqtt/mqttClient.js`：topics、原始資料處理、開始／結束、pose 轉送。
- `backend/src/positioning/esEkf.js`：固定基站、單位、內建設備定位計算。
- `backend/src/models/RawSensorMeasurement.js`：原始資料保存結構。
- `backend/src/positioning/telemetryReplayWorker.js`：同一批原始資料的三演算法離線重算。
- `AI/rgbd_api.py`：session／clock 檢查與姿態接收。
- `AI/rgbd_sync.py`：時間插值、四元數、姿態來源時間。
- `AI/test/test2.py`：操作開始 ACK 配對範例。
- `REMOTE_TEST2.md`：發送電腦→192.168.0.156主機的四個埠與啟動流程。
- `EDGE_RGBD_HANDOVER.md`：相機影像、同幀封包與姿態對時。
- `WSL_DEPLOYMENT_COMMANDS.md`：主機部署、啟停、日誌與資料庫指令。

本文只定義目前可接的資料與必要交接約定；新增多設備、序號去重、斷線降級或外部人員定位演算法時，需同步更新程式與契約。
