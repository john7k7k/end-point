---
tags: Raspberry Pi, Python, RealSense, MQTT, RGB-D, UWB, IMU
---

# 樹莓派 Python 串接指南

樹莓派擷取 RealSense 彩色與深度影像，透過 WebSocket 成對上傳。IMU、UWB 與作業開始／結束走 MQTT。Windows／WSL 主機執行平台、AI 和既有 broker。

## 1. 安裝與測試區網

將專案複製到 64 位元 Raspberry Pi OS。保留 `raspberry_pi_edge/` 與 `AI/` 在同一層，影像程式會沿用 `AI/rgbd_sync.py` 的封包編碼器。將 RealSense 接到 USB 3 埠。

```bash
cd raspberry_pi_edge
uname -m
python3 --version
lsusb -t
sudo apt update
sudo apt install -y python3-venv curl mosquitto-clients
bash setup.sh
source .venv/bin/activate

export SERVER=192.168.0.156
bash check_lan.sh "$SERVER"
```

`SERVER` 填 Windows 主機目前的 Wi-Fi 或乙太網路 IPv4。檢查程式會驗證 MQTT 訂閱與兩個 HTTP 端點。

| TCP 埠 | 用途 |
|---|---|
| 1883 | MQTT broker |
| 3000 | 平台後端與 `/api/device/runtime` |
| 8000 | AI 與 `/ws/rgbd` |
| 8554 | 既有 RTSP 預覽／錄影，使用 `test2.py --rgbd` 或需要 RTSP 時才開通 |

若 Windows 本機通、樹莓派不通，依專案 `REMOTE_TEST2.md` 檢查 portproxy、防火牆與 Wi-Fi 隔離。若 `pyrealsense2` 缺少 ARM64 wheel，比對 ARM64 與 CPython 版本後選擇相容環境或依官方文件編譯。USB 看得到、SDK 枚舉不到時，檢查官方 udev 規則、USB 線與速度。 [pyrealsense2 套件](https://pypi.org/project/pyrealsense2/#files) · [RealSense Linux 安裝](https://github.com/realsenseai/librealsense/blob/master/doc/installation.md)

## 2. 先測 RealSense

```bash
python realsense_edge.py --probe
```

預設彩色 BGR8、深度 Z16、640×480、30 FPS。若相機不支援，可用 `--width`、`--height`、`--fps` 改為型號支援的共同 profile，多相機可加 `--serial` 選擇。結果會列出兩張影像尺寸、內參、畸變模型、時間域與中央像素距離。用量尺比對中央像素，深度原值乘 `depthScaleMeters` 得公尺，原值 0 表示無效深度。

## 3. 從 MQTT 建立作業

在平台登入後取得主機資料庫的使用者 ObjectId，查詢指令見專案 `MQTT_IMU_UWB_HANDOVER.md`。每個終端先進入 `raspberry_pi_edge`，啟用虛擬環境，並設定相同的 `SERVER`。

```bash
export USER_ID=填入平台使用者ObjectId
OP_ID=$(python mqtt_edge.py --server "$SERVER" start --user-id "$USER_ID") &&
  printf 'OP_ID=%s\n' "$OP_ID"
```

程式從 HTTP 取得 `backendInstanceId`，等 ACK 訂閱完成後發送 start，並檢查回覆的 `backendInstanceId` 和 `requestId`。若逾時，先查平台是否已建立作業，再決定如何恢復。整次聯調由這個控制終端建立一筆作業。

| Topic | 發送 QoS | 內容 |
|---|---:|---|
| `vision/operation/start` | 2 | `userId`、`backendInstanceId`、`requestId` |
| `vision/operation/ack/<userId>` | 依後端 | 操作端以 QoS 2 訂閱，取回 `opID` |
| `vision/uwb/ranges` | 1 | UWB 各站距離 |
| `vision/imu/data` | 1 | 線性加速度、角速度 |
| `vision/device/pose` | 1 | 有外部融合器時使用的設備姿態 |
| `vision/operation/end` | 2 | `opID`、`endTime` |

全部發送皆為 `retain=false`。MQTT broker 確認與應用層 ACK 分別檢查。 [Paho Python 文件](https://eclipse.dev/paho/clients/python/docs/)

## 4. 接 IMU／UWB

每行一個 UTF-8 JSON object。感測器提供 JSON Lines 時可以直接讀序列埠，其他格式則先用模組專用程式轉成下列格式，再經標準輸入傳給 MQTT 發送器。每個實體序列埠由一個程式讀取。

```json
{"timestamp":1794800000000,"ranges":[{"stationId":0,"distance":1.52},{"stationId":1,"distance":3.26}]}
```

```json
{"timestamp":1794800000000,"acceleration":{"x":0.01,"y":0.0,"z":0.02},"gyroscope":{"x":0.1,"y":0.0,"z":-0.3}}
```

使用實際量測時間，單位 Unix epoch **毫秒**。UWB 站號為 0–7，距離為公尺，省略無效站。IMU 角速度為設備座標 **°/s**，加速度為世界座標下**已扣重力**的 **m/s²**。若來源為 RealSense 原始 IMU，轉接層須先做角速度單位轉換、重力補償及座標旋轉。靜止時應檢查線性加速度接近零。

```bash
# UWB 模組已直接輸出上述 JSON Lines 時
python mqtt_edge.py --server "$SERVER" stream uwb --serial /dev/ttyUSB0 --baud 115200

# IMU 已由轉接程式送到 FIFO 時
python mqtt_edge.py --server "$SERVER" stream imu < /tmp/imu.jsonl

# 另一個終端監看 broker
mosquitto_sub -h "$SERVER" -v -t vision/uwb/ranges -t vision/imu/data
```

`/tmp/imu.jsonl` 為範例輸入路徑，可替換成轉接程式的管線或測試檔。測試檔中的固定時間戳只適合驗證格式。實際驗收查該作業的 `RawSensorMeasurement`，確認有 `dataSource: "mqtt"` 的 `uwb` 與 `imu`，避免把平台模擬資料誤認為硬體資料。

## 5. 傳送真實 RGB-D 影像

在相機終端設定同一個 `SERVER`，將下例的 `OP_ID` 換成第 3 步輸出的值。

```bash
export OP_ID=填入本次作業ID
python realsense_edge.py --server "$SERVER" --operation-id "$OP_ID" --send-fps 5
```

程式等待 WebSocket `ready` 後印出 `operationId`、`sessionId` 和 `clockId`。影像以 JPEG、對齊彩色座標的原始 PNG16 深度與 metadata 組包。每幀等 `persisted: true`，暫時斷線時沿用 session 與同一幀封包重連。可用 `--frames 20` 做限量上傳測試。

上機先核對 `--calibration-id` 對應平台的相機外參，以及鏡頭畸變與針孔模型誤差。程式使用 RealSense 對齊與串流內參，若實際鏡頭需要額外去畸變，須成對處理彩色和深度並更新對應內參。

## 6. 接上姿態並驗證對時

影像程式啟用 RealSense global time（若相機感測器支援），串流時要求 SDK 提供 epoch 時間域。若只有 hardware clock，需依型號加上硬體時鐘到 Unix epoch 的映射與漂移校正。獨立定位端與樹莓派需對時。相機時間用 Unix epoch **奈秒字串**，彩色／深度擷取時差須在 20 ms 內。

若已有外部融合器，待相機印出 `ready` 後，把其 `sessionId` 與 `clockId` 給 pose 發送端。融合器可輸出以下格式的 JSON Lines，姿態時間用實際量測時刻，且嚴格遞增。

```json
{"timestampNs":"1794800000000000000","position":{"x":5.0,"y":3.0,"z":1.4},"quaternion":{"w":1.0,"x":0.0,"y":0.0,"z":0.0}}
```

```bash
python mqtt_edge.py --server "$SERVER" stream pose \
  --operation-id "$OP_ID" --session-id "$SESSION_ID" \
  --clock-id "$CLOCK_ID" < /tmp/pose.jsonl
```

`SESSION_ID`、`CLOCK_ID` 使用相機輸出的值。位置單位公尺，四元數表示設備到世界的旋轉。融合器持續供應姿態，影像需位於有效前後樣本之間，平台允許兩筆最大間隔 200 ms，並約等 100 ms 收等待中的姿態。若只有原始 IMU／UWB，可先驗證入庫和影像通路；要沿用伺服器內建融合做同幀定位，需另外接出帶實際量測時間的 pose。現有示範 API 的回覆時間由伺服器產生，適合測試影片流程。

## 7. 收尾與驗收

1. 驗證該作業有 IMU 和 UWB 實測原始資料。
2. 驗證 RGB-D 幀已保存，再做靜止和緩慢移動測試。若出現 `pose_unavailable`，查 pose 來源、識別碼、時間與發送頻率。若出現深度錯位，查成對取幀、對齊與校正。
3. 相機端按 Ctrl+C，等待最後一幀與 WebSocket `ended`。停止 IMU、UWB 與 pose 發送後，在控制終端結束作業。

```bash
python mqtt_edge.py --server "$SERVER" end --operation-id "$OP_ID"
```

到平台確認作業已結束及歷史資料可查。若相機報錯退出，先核對最後一幀是否保存與平台作業狀態。相機程式重新啟動會建立新 session，應配合新的作業。

## 檔案對照

| 檔案 | 用途 |
|---|---|
| `raspberry_pi_edge/setup.sh` | 建立虛擬環境與安裝 Python 套件 |
| `raspberry_pi_edge/check_lan.sh` | 檢查 MQTT、後端和 AI 區網通路 |
| `raspberry_pi_edge/mqtt_edge.py` | 作業控制、IMU／UWB／pose JSON Lines 發送 |
| `raspberry_pi_edge/realsense_edge.py` | RealSense 探測、成對擷取、WebSocket 上傳 |

平台規格另見專案 `MQTT_IMU_UWB_HANDOVER.md`、`EDGE_RGBD_HANDOVER.md`、`REMOTE_TEST2.md`。
