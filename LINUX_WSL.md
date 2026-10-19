# Linux／WSL2 執行說明

此版本在單台 Linux 主機執行 Node 後端、Python AI 與 MediaMTX；前端由後端提供，不需額外啟動 Vite。MongoDB 與 MQTT 需先啟動。尚未接入真實 YOLO 權重或人員定位演算法，不需要 GPU。

## 1. 環境

- Linux x86_64／arm64、Bash、Python 3.10+、Node.js 22+、npm、FFmpeg。
- 建議 Ubuntu 24.04+ 或 WSL2 Ubuntu。較舊 Ubuntu 的 apt Node.js 版本可能不足，請先安裝 Node.js 22+，安裝程式會檢查版本。
- 若採以下資料庫容器方案，需要 Docker Engine 或已開啟該發行版 WSL integration 的 Docker Desktop，以及 Docker Compose v2。
- WSL 建議 clone 到 `~/end-point`，不要與 Windows 共用 `node_modules`／`.venv`。兩個系統的套件不可互用。
- Windows 和 WSL 不要同時啟動同一套測試；注意 localhost 轉送造成連接埠衝突。

Ubuntu 系統套件（由你執行，需要 sudo）：

```bash
sudo apt update
sudo apt install -y git curl ca-certificates python3 python3-venv python3-pip ffmpeg
node --version   # 必須 >=22；如果沒有，先安裝 Linux 版 Node.js
npm --version
```

## 2. 取得及安裝

這次新增的腳本需先提交／推送，遠端 clone 才會包含它們。

```bash
git clone https://github.com/john7k7k/end-point.git
cd end-point
bash scripts/setup-linux.sh
```

已 clone 則先 `git pull --ff-only`，再執行 setup。setup 會在 `.venv` 安裝 Python 套件、以 npm ci 安裝前後端套件、建置前端，並從官方 GitHub release 下載 MediaMTX **v1.17.1**、核對該 release SHA256。不要用 sudo 執行 setup。可重複執行；不修改資料庫。Python 為版本範圍，部署驗收後可另保存 `pip freeze` 作環境快照。

## 3. MongoDB／MQTT

若 Linux 已有服務，確保分別在 `127.0.0.1:27017`、`127.0.0.1:1883` 提供服務，不要重複啟動容器。

若沒有，可以使用提供的容器設定：

```bash
docker compose -f deploy/compose.infra.yml up -d
docker compose -f deploy/compose.infra.yml ps
bash start-system.sh --check
```

MongoDB 資料庫名稱為 `vision_system`，容器資料保存在 Docker volume；不是 Windows 原本的資料庫，不會自動複製舊帳號、影片或操作紀錄。若需要搬移資料，請另用 mongodump／mongorestore 與影像目錄備份。

此 MQTT 為本機匿名測試 broker，MongoDB 也無認證；Docker 只將連接埠綁定 loopback。不要改成公開網路。正式多機串接需另外配置設備身分驗證與 TLS。

## 4. 日常操作

```bash
bash start-system.sh             # 啟動；已啟動則提示，不重複開
bash start-system.sh -status
bash start-system.sh -stop       # 停止這個腳本管理的三個服務
bash start-system.sh -reboot
bash start-system.sh -reboot -nolog
```

頁面：`http://localhost:3000`。日誌：`runtime/linux/{mediamtx,backend,ai}.log`。`-nolog` 丟棄新服務 stdout/stderr，不產生 log／err；原有日誌不刪除。PID 狀態檔仍保存。腳本可從任意目錄執行；以程序群組管理服務及 FFmpeg 子程序，核對 PID 的啟動時間，不會按連接埠強殺其他程式。啟動失敗會回收本次已開啟服務。

`-stop` 不關閉 MongoDB／MQTT；如果也要停容器：

```bash
docker compose -f deploy/compose.infra.yml stop
```

不要使用 `docker compose down -v`，它會刪除資料庫 volume。

清空測試資料（不可復原，先備份）：

```bash
bash start-system.sh -refresh --confirm-delete
```

會停止應用服務，刪除 `vision_system` 除 `users` 外所有紀錄、`AI/video` 與 Linux 日誌，再啟動。只加 `-refresh` 會拒絕執行。不要在串流發送器仍執行時使用。此行不是一般更新或重啟指令。

## 5. 同幀測試

先在平台註冊帳戶，取得該使用者的資料庫 `_id`，再於另一個終端執行：

```bash
TEST_USER_ID=你的使用者_id .venv/bin/python AI/test/test2.py --rgbd
```

輸入 `s` 開始、`e` 結束、`q` 離開。啟動腳本不會自動執行 test2。這裡改用環境變數指定帳號，避免沿用 Windows 舊資料庫的固定 ID。

自動驗證（MongoDB 需啟動；使用隔離測試資料）：

```bash
python3 -m unittest discover -s scripts -p 'test_linux*.py' -v
.venv/bin/python -m unittest discover -s AI/test -p 'test_rgbd*.py' -v
RGBD_TEST_MONGO=mongodb://127.0.0.1:27017/vision_rgbd_sync_test \
  node --test backend/apiTest/test-rgbd.mjs backend/apiTest/test-rgbd-fusion.mjs
.venv/bin/python AI/test/rgbd_e2e.py
```

## 6. 遠端 Linux：先使用 SSH 通道

本腳本讓後端、AI、MediaMTX 綁定 loopback，關閉不需要的 RTMP/SRT，RTSP 使用 TCP，WebRTC 使用 TCP 8189。原型 API 並非全都有認證，**不要直接對公網開放 3000／8000／1883／27017 等連接埠**。

在你的本機開終端：

```bash
ssh -N -L 3000:127.0.0.1:3000 -L 8889:127.0.0.1:8889 \
  -L 8189:127.0.0.1:8189 user@server
```

然後本機瀏覽 `http://localhost:3000`。同幀播放器走 3000；舊版 WebRTC 預覽額外需要 8889 與 TCP 8189 的 ICE 通路。此路徑仍需在實際遠端網路驗收。建議先在伺服器本身執行 test2；真正的遠端邊緣設備尚需配置感測／影像通路與認證，不會因本腳本自動完成。

前端串流網址已改成瀏覽器目前主機，不再固定 localhost；如有 HTTPS 反向代理，可於建置時指定 `VITE_WEBRTC_BASE_URL`，例如 `VITE_WEBRTC_BASE_URL=https://media.example.com npm --prefix frontend run build`。反向代理、TLS、設備授權、備份及 systemd 開機自啟仍屬正式部署工作；本腳本不會改防火牆、開公網埠或註冊開機服務。WSL 關閉或主機重新啟動後需要再次啟動。
