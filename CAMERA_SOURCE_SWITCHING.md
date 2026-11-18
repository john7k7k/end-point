# RGB-D 來源切換 API

AI server 每次啟動都預設 `websocket`。模式與相機位址只存在目前 Python 程序的記憶體，重啟會恢復預設。切換 API 使用 AI 的 8000 埠。部署使用單一 Uvicorn worker，確保 API、WebSocket 與相機來源共用狀態。

原有 RGB-D 影格、辨識與定位結果繼續走既有儲存流程。來源設定由記憶體管理。

## API

查詢目前來源、operation、session、clock 與錯誤。

```http
GET http://192.168.0.156:8000/api/camera-source
```

切換為官方網路相機。`host` 填樹莓派 IP。下例啟用 SSH 服務控制，API 會釋放 WebSocket 取像程式，再啟動官方 `rs-server`。

```http
POST http://192.168.0.156:8000/api/camera-source
Content-Type: application/json

{
  "mode": "realsense_net",
  "host": "192.168.0.99",
  "width": 640,
  "height": 480,
  "fps": 30,
  "calibrationId": "default",
  "cameraId": "default",
  "managePiServices": true
}
```

切回 WebSocket。啟用過 SSH 控制後，省略 `managePiServices` 與 `host` 會沿用記憶體中的值，啟動樹莓派的發送服務。

```http
POST http://192.168.0.156:8000/api/camera-source
Content-Type: application/json

{"mode":"websocket"}
```

如果兩個相機來源由你自行啟停，設定 `managePiServices: false`。這時 API 只切換 AI 接收來源，切到官方模式前應先啟動對應 Pi 的 `rs-server`。

官方模式先檢查連線和第一組影格，最多等候 15 秒。沒有 active operation 時會完成取像測試、釋放接收程序，回傳 `state: "waiting"`，作業開始再連線。正在作業時會建立新 session，operation ID 延續。切回 WebSocket 後會等待發送端的新 hello。

錯誤設定回 422。連線、時鐘或 SDK 程式缺失回 503。未啟用 SSH 控制時，預先連線失敗會保留原來源與 session。啟用 SSH 控制時，失敗會嘗試重啟先前的 Pi 取像服務，並建立新 session。若復原也失敗，GET 會回報 `state: "error"` 與原因。

## 後台的官方 SDK 接收程式

`AI/native/realsense_net_bridge.cpp` 透過官方 `rs2::net_device` 連接樹莓派的 `rs-server`，取得 YUYV 彩色與 Z16 深度，執行深度對齊後，經程序管線交給 Python。Python 將它轉為既有 RGB-D 封包，沿用 AI、校正、pose 時間插值與後端融合。

後台需安裝包含 `realsense2-net` 的 librealsense SDK，並與 Pi 的 `rs-server` 使用相容版本。此功能來自官方文章的 `BUILD_NETWORK_DEVICE=ON` 實作。先在該 SDK 自己的目錄完成建置與安裝，再建置本專案的轉接程式。

```bash
# 在相容的 librealsense 原始碼目錄
cmake -S . -B build -DBUILD_NETWORK_DEVICE=ON -DBUILD_EXAMPLES=OFF -DBUILD_GRAPHICAL_EXAMPLES=OFF
cmake --build build -j2
sudo cmake --install build
sudo ldconfig

# 回到定位系統的 code 目錄
cmake -S AI/native -B AI/native/build
cmake --build AI/native/build --config Release
export REALSENSE_NET_BRIDGE="$PWD/AI/native/build/realsense-net-bridge"
export REALSENSE_PI_SSH_USER=realsense
```

Pi 端若也從 SDK 原始碼建置 `rs-server`，需改用 `-DBUILD_EXAMPLES=ON`，並加上 `-DFORCE_RSUSB_BACKEND=ON`。官方 v2.34.0 將 `tools/rs-server` 放在 `BUILD_EXAMPLES` 條件內，關閉此選項會只建置接收函式庫。建置後用 `command -v rs-server` 確認安裝位置，再填入 systemd 的 `ExecStart`。

Windows 可將 `REALSENSE_NET_BRIDGE` 指向已連結相容 SDK 的 `.exe`，並確保其 DLL 可以載入。Visual Studio 多組態建置通常會把執行檔放在 `build/Release`。WSL/Linux 的 server 使用 Linux 執行檔與該環境的 SSH 金鑰。

網路方向分別為 Pi 到後台的 TCP 8000（WebSocket），以及後台到 Pi 的 TCP 22（SSH）與 TCP 8554（官方 RTSP 控制）。已核對的官方 v2.34.0 接收程式將 `REQUEST_STREAMING_OVER_TCP` 設為 0，影像經 RTP/UDP 傳送，還需讓協商的 UDP 接收埠能從 Pi 到達後台。WSL 的 TCP portproxy 僅處理前述 TCP 入口，官方串流另需驗證 UDP 可達性，例如使用原生 Linux 區網主機，或已配置並放行相應流量的 WSL 網路。後台的 MediaMTX 與 Pi 的 `rs-server` 各使用自己主機的 8554 埠。

## 樹莓派的自動切換設定

專案附有 `raspberry_pi_edge/realsense-edge.service` 與 `raspberry_pi_edge/rs-server.service`。範本使用帳號 `realsense`、專案路徑 `/opt/positioning`、已建立的 `.venv`，以及 `/usr/local/bin/rs-server`。安裝前依實機修改這些路徑與帳號。帳號需具備 RealSense USB 存取權。

```bash
# 在 Pi 上，以實際部署路徑執行
printf 'PLATFORM_SERVER=192.168.0.156\n' | sudo tee /etc/realsense-edge.env
sudo cp raspberry_pi_edge/realsense-edge.service /etc/systemd/system/
sudo cp raspberry_pi_edge/rs-server.service /etc/systemd/system/
sudo systemctl daemon-reload
sudo systemctl disable --now rs-server.service
sudo systemctl enable --now realsense-edge.service
```

`--follow-server` 會等待後台的 WebSocket 模式與 active operation，再開相機上傳，作業結束後重新等待。手動使用原來的 `--operation-id` 方式也保留。

後台執行帳號須能以 SSH 金鑰登入 Pi。先手動連線確認 SSH host key。Pi 的 sudoers 需允許該 SSH 帳號免密碼執行下列四個命令，可用 `sudo visudo -f /etc/sudoers.d/realsense-source` 編輯。

```sudoers
realsense ALL=(root) NOPASSWD: /usr/bin/systemctl start realsense-edge.service, /usr/bin/systemctl stop realsense-edge.service, /usr/bin/systemctl start rs-server.service, /usr/bin/systemctl stop rs-server.service
```

後台使用 `ssh -o BatchMode=yes` 和 `sudo -n` 執行固定的服務指令。啟用服務控制前，應將手動執行的相機程式交由上述服務管理，才能由 API 釋放 USB 裝置。AI server 重啟後來源恢復 WebSocket，Pi 的服務仍保留實際執行狀態。若 Pi 原本正在跑 `rs-server`，可打以下 API 讓硬體也回到 WebSocket 模式。

```json
{"mode":"websocket","host":"192.168.0.99","managePiServices":true}
```

## 時間同步與定位

切換會產生新的 session。從 GET 的 `operationId`、`sessionId`、`clockId` 更新 pose 發送端，並持續送入 `/api/rgbd/pose` 或原 MQTT topic。這樣既有 AI 才能用拍攝時間找到設備姿態。

官方接收程式會嘗試啟用 global time。Pi、後台與 UWB／IMU 來源需對時，RGB 與深度擷取時差上限沿用 20 ms。若 SDK 只提供 hardware clock，API 要提供實測的 `cameraTimeOffsetNs`，用原始擷取時間加上該偏移轉成 Unix ns。JSON 可用十進位字串傳遞此整數，避免 JavaScript 大整數精度損失。偏移須依相機啟動與時鐘漂移重新校正。錯誤訊息會提示缺少時鐘映射。

目前未進行真實 Pi、RealSense、SSH 與官方 SDK 動態連結聯測。自動測試使用替代取像程序驗證切換、失敗復原和 HTTP/WebSocket 生命週期。C++ 接收程式已使用官方 v2.34.0 標頭做語法檢查。真機驗收應確認內外參、深度尺度、RGB-D 對齊、有效 FPS、延遲與定位誤差。
