# WSL 從零部署與服務指令大全

更新日期：2026-10-19。對應本專案的 `start-system.sh`、`scripts/setup-linux.sh`、`scripts/linux_system.py` 與 `deploy/compose.infra.yml`。

## 先看：哪些服務在哪裡

| 服務 | 執行位置／管理方式 | 預設連接埠 |
|---|---|---|
| MongoDB | Docker Desktop 的 mongodb 容器 | 127.0.0.1:27017 |
| MQTT Mosquitto | Docker Desktop 的 mqtt 容器 | 127.0.0.1:1883 |
| Node.js 後端＋前端靜態網頁 | WSL 原生程序；start-system.sh 管理 | 127.0.0.1:3000 |
| Python AI | WSL `.venv`；start-system.sh 管理 | 127.0.0.1:8000 |
| MediaMTX | WSL Linux 執行檔；start-system.sh 管理 | RTSP TCP 8554、HLS 8888、WebRTC HTTP 8889／ICE TCP 8189 |
| test2 測試發送器 | 另一個 WSL 終端手動執行 | 連接 MQTT／RTSP／AI |

**以下標示 PowerShell 的指令在 Windows 執行；Bash 指令在 WSL Ubuntu 執行。不要混在同一種終端直接貼上。**

全新環境範例用 Ubuntu-24.04；如果你已經在用 Ubuntu-26.04，繼續用即可，將 PowerShell 指令的發行版名稱換成 `wsl -l -v` 顯示的名稱，不必再安裝另一套。

---

## 一、全新 WSL 到完整部署

### 1. 安裝 WSL2：Windows 系統管理員 PowerShell

```powershell
wsl --install -d Ubuntu-24.04
```

若要求重新啟動 Windows，完成後再繼續。第一次開啟 Ubuntu 時，建立 Linux 使用者名稱與密碼。sudo 輸入密碼時不顯示字元是正常情況。

查看與更新：

```powershell
wsl --update
wsl -l -v
wsl -d Ubuntu-24.04
```

`wsl -l -v` 中 Ubuntu 的 VERSION 應為 2。若仍是 1，關閉其中工作後轉換：

```powershell
wsl --set-version Ubuntu-24.04 2
```

### 2. 安裝 Docker Desktop：Windows

尚未安裝時，可在 PowerShell 執行：

```powershell
winget install --exact --id Docker.DockerDesktop
```

若沒有 winget，從 [Docker 官方安裝頁](https://docs.docker.com/desktop/setup/install/windows-install/)下載安裝。

開啟 Docker Desktop，完成初始設定，確認：

1. Settings → General → Use the WSL 2 based engine。
2. Settings → Resources → WSL Integration → 啟用你的 Ubuntu。
3. Apply & Restart；使用 Linux containers。

重新開一個 Ubuntu 終端，在 **WSL Bash** 驗證：

```bash
docker version
docker compose version
```

`docker version` 需要同時看到 Client 與 Server。若只顯示找不到 docker，先修正 Docker Desktop 整合；此流程不需要再於 Ubuntu 安裝另一套 Docker Engine。

### 3. 避免 Windows 舊服務占用：Windows PowerShell

先在舊 test2 輸入 `q`。若 Windows 版平台仍在執行，於原本 Windows 專案目錄執行其停止腳本：

```powershell
.\start-system.ps1 -Stop
```

請在啟動 WSL 應用前做這一步；舊 PowerShell 腳本會依連接埠停止程序，WSL 已啟動後再執行可能影響其 Windows 轉送程序。

以系統管理員 PowerShell 檢查 Windows 原生資料庫／broker：

```powershell
Get-Service MongoDB,mosquitto -ErrorAction SilentlyContinue
Get-NetTCPConnection -LocalPort 1883,27017 -State Listen -ErrorAction SilentlyContinue
```

如果顯示 Windows 原生 MongoDB／Mosquitto 正在執行，且這次要改用 Docker：

```powershell
Stop-Service -Name MongoDB -ErrorAction SilentlyContinue
Stop-Service -Name mosquitto -ErrorAction SilentlyContinue
```

這是停止服務，不刪除 Windows 舊資料；不要讓 Windows 與 WSL 的後端同時訂閱同一個 broker。這也是前面出現不同 operation ID 的原因之一。

### 4. 安裝 Linux 系統套件：WSL Bash

```bash
sudo apt update
sudo apt install -y git curl ca-certificates rsync python3 python3-venv python3-pip ffmpeg
```

確認：

```bash
python3 --version
ffmpeg -version
```

本專案要求 Python 3.10+。若之後建立 venv 出現 ensurepip 缺少，安裝與目前 Python 相符的 venv 套件：

```bash
sudo apt install -y "python$(python3 -c 'import sys; print(f"{sys.version_info.major}.{sys.version_info.minor}")')-venv"
```

例如目前是 Python 3.14，實際相當於 `sudo apt install -y python3.14-venv`。若 apt 找不到該版本，先確認 Python 的安裝來源與 Ubuntu 版本，不要任意混裝另一個版本的 venv。

### 5. 安裝 Linux Node.js 22 與 npm：WSL Bash

使用 Linux nvm 安裝，避免誤用 Windows 的 npm。以下固定 nvm 安裝器版本，Node 使用 22 系列：

```bash
curl -fsSL https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.4/install.sh -o /tmp/endpoint-nvm-install.sh
bash /tmp/endpoint-nvm-install.sh

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"
nvm install 22
nvm alias default 22
nvm use 22
hash -r
```

驗證：

```bash
command -v node
command -v npm
node -p 'process.platform'
node --version
npm --version
```

預期 platform 是 `linux`；node／npm 位置應位於 `/home/<使用者>/.nvm/...`（或其他已安裝的 Linux 路徑），不能是 `/mnt/c/Program Files/nodejs/...`。nvm 安裝器通常會更新 `.bashrc`；新終端若找不到 node，重新載入 `source ~/.bashrc`。

如果已有正常的 Linux Node.js 22+ 與 npm，略過安裝即可，不必同時再用 apt 安裝 npm。

### 6. 將專案放在 WSL 原生檔案系統

建議固定使用：

```text
~/end-point
```

不要讓 Windows 和 WSL 共用 `.venv`、`node_modules`。在 `/mnt/d/` 安裝大量 Python／npm 套件曾造成安裝緩慢與後端啟動逾時。

#### A. 本機已有最新修改：從 Windows 專案複製（目前適用）

文件撰寫時，本機這批 Linux／同步介面修改尚未全部推上 GitHub。若要使用它們，先退出測試及停止應用，再在 WSL 建立一份新的專案副本：

```bash
mkdir -p ~/end-point
rsync -a \
  --exclude='.git/' \
  --exclude='node_modules/' \
  --exclude='.venv/' \
  --exclude='.cache/' \
  --exclude='.tools/' \
  --exclude='__pycache__/' \
  --exclude='runtime/' \
  --exclude='AI/video/' \
  --exclude='deliverables/' \
  --exclude='_ppt*/' \
  '/mnt/d/ncku/末端定位技術/code/' ~/end-point/
cd ~/end-point
```

此範例針對新的目的資料夾；若目的地已有自己的修改，先備份再複製。這份副本不含 `.git`，之後不能直接 `git pull`。原始資料庫、歷史影像及 runtime 未複製；測試影片 `AI/test/test_color.mp4`、`test_depth.mp4` 則會一併複製。

#### B. 最新修改已推送 GitHub：重新 clone

在另一份尚不存在的專案目錄執行：

```bash
cd ~
git clone https://github.com/john7k7k/end-point.git end-point
cd ~/end-point
```

如果 A 已建立 `~/end-point`，不要再直接執行這組 clone，請選一種來源流程或另取目錄名稱。這個分支只有在遠端已含完整腳本時才可部署。

確認必要檔案：

```bash
ls start-system.sh scripts/setup-linux.sh deploy/compose.infra.yml
ls AI/test/test2.py AI/test/rgbd_sender.py
ls AI/test/test_color.mp4 AI/test/test_depth.mp4
```

如果缺少檔案，先補齊相同版本的來源；不要直接使用舊版同名腳本。若 GitHub 版未保存測試影片，從現有專案複製上述兩個影片後才能執行 test2。

### 7. 安裝專案依賴與建置：WSL Bash

```bash
cd ~/end-point
bash scripts/setup-linux.sh
```

腳本依序執行：

1. 檢查 Python、Node、npm、FFmpeg、curl、tar。
2. 建立 `.venv` 並安裝 `AI/requirements.txt`。
3. 前後端分別執行 npm ci。
4. 建置 `frontend/dist`。
5. 下載 MediaMTX v1.17.1，校驗 SHA256，解壓至 `.tools/mediamtx-1.17.1/`。

不要用 sudo 執行這個腳本。看到下面訊息代表依賴安裝完成：

```text
Dependencies installed. Next: bash start-system.sh --check
```

Vite 的「chunks larger than 500 kB」為警告；以最後是否顯示 built 及指令是否成功結束為準。

### 8. 啟動資料庫與 MQTT：WSL Bash

```bash
cd ~/end-point
docker compose -f deploy/compose.infra.yml up -d
docker compose -f deploy/compose.infra.yml ps
```

確認 mongodb 與 mqtt 都是 Up，等幾秒後：

```bash
bash start-system.sh --check
```

應顯示 `Dependency checks passed`。這包含套件檢查與資料庫／broker TCP 可達性，不等於完整硬體驗收。

### 9. 啟動整套應用：WSL Bash

```bash
bash start-system.sh
```

成功訊息：

```text
Started mediamtx ...
Started backend ...
Started ai ...
Ready: http://localhost:3000 ; test2 is NOT started automatically.
```

Windows 瀏覽器開啟 `http://localhost:3000`。先註冊新帳號並登入；Docker 的 MongoDB 是獨立資料庫，Windows 舊帳號不會自動搬過來。

### 10. 查詢帳號 ID 並執行 test2

另開一個 WSL 終端：

```bash
cd ~/end-point
docker compose -f deploy/compose.infra.yml exec -T mongodb \
  mongosh vision_system --quiet \
  --eval 'db.users.find({}, {_id:1, username:1, name:1}).toArray()'
```

從結果複製該帳號 ObjectId 中的 24 位字串，設定後執行：

```bash
export TEST_USER_ID='貼上實際24位使用者ID'
.venv/bin/python AI/test/test2.py --rgbd
```

不要把帳號名稱 `john` 或文字 `john_id` 當成 ID。上述 placeholder 必須自行替換。

test2 應顯示 Using backend、Subscribed 等資訊，再輸入：

| 輸入 | 作用 |
|---|---|
| `s`＋Enter | 建立作業並開始測試串流 |
| `e`＋Enter | 停止串流並結束作業，觸發歷史重算 |
| `q`＋Enter | 停止串流、結束作業並退出 test2 |

觀察歷史三種設備演算法結果前，等待後端完成 `Rebuilt ... telemetry records ...`。測試深度、感測來源與辨識目前仍有模擬部分，不代表真實硬體已接入。

---

## 二、部署完成後：最常用的整套指令

以下都在 WSL 專案目錄執行：

```bash
cd ~/end-point
```

### 每次開機後啟動

先開 Docker Desktop，然後：

```bash
docker compose -f deploy/compose.infra.yml up -d
bash start-system.sh --check
bash start-system.sh
```

如果資料庫剛開還沒就緒，等幾秒再執行 check。test2 另外手動啟動。

### 完整停止（保留資料）

先在 test2 輸入 `q`，再執行：

```bash
bash start-system.sh -stop
docker compose -f deploy/compose.infra.yml stop
```

### 只重啟應用，保留資料庫／MQTT

先退出 test2：

```bash
bash start-system.sh -reboot
```

### 不輸出服務日誌

```bash
bash start-system.sh -reboot -nolog
```

不建立新的服務 log／err 輸出，舊日誌保留；PID 狀態檔仍存在。排錯時建議用有日誌的普通啟動方式。

### 查詢狀態

```bash
bash start-system.sh -status
docker compose -f deploy/compose.infra.yml ps -a
```

應用腳本的狀態只包含三個原生服務；容器狀態要另外用 compose 查看。

### 延長啟動等待

每個服務預設最多等 120 秒；允許設定 1–600 秒：

```bash
STARTUP_TIMEOUT_SECONDS=300 bash start-system.sh
```

已啟動時應改用 `-reboot`。持續逾時需查日誌，不要只一直增加秒數。

---

## 三、各服務指令速查

### MongoDB 容器

```bash
# 建立或啟動
docker compose -f deploy/compose.infra.yml up -d mongodb

# 停止／重新啟動
docker compose -f deploy/compose.infra.yml stop mongodb
docker compose -f deploy/compose.infra.yml restart mongodb

# 狀態與日誌
docker compose -f deploy/compose.infra.yml ps -a mongodb
docker compose -f deploy/compose.infra.yml logs --tail 100 mongodb
docker compose -f deploy/compose.infra.yml logs -f mongodb

# 進入資料庫
docker compose -f deploy/compose.infra.yml exec mongodb mongosh vision_system
```

mongosh 內常用指令：

```javascript
show collections
db.users.find({}, {_id: 1, username: 1, name: 1})
db.operations.find().sort({startTime: -1}).limit(5)
db.rawsensormeasurements.countDocuments()
db.rgbdframes.countDocuments()
db.operatortelemetries.aggregate([
  {$group: {_id: "$fusionAlgorithm", count: {$sum: 1}}}
])
exit
```

### MQTT Mosquitto 容器

```bash
docker compose -f deploy/compose.infra.yml up -d mqtt
docker compose -f deploy/compose.infra.yml stop mqtt
docker compose -f deploy/compose.infra.yml restart mqtt
docker compose -f deploy/compose.infra.yml ps -a mqtt
docker compose -f deploy/compose.infra.yml logs --tail 100 mqtt
docker compose -f deploy/compose.infra.yml logs -f mqtt
```

監看指定感測 topic（Ctrl+C 停止監看，不停止 broker）：

```bash
docker compose -f deploy/compose.infra.yml exec mqtt \
  mosquitto_sub -h 127.0.0.1 -t 'vision/uwb/ranges' -t 'vision/imu/data' -v
```

監看操作事件：

```bash
docker compose -f deploy/compose.infra.yml exec mqtt \
  mosquitto_sub -h 127.0.0.1 -t 'vision/operation/#' -v
```

### 後端、AI、MediaMTX：由管理腳本操作

```bash
bash start-system.sh
bash start-system.sh -stop
bash start-system.sh -reboot
bash start-system.sh -status
```

**目前腳本是三個服務一起管理，沒有 `--service ai` 或單一服務 restart 參數。** 日誌可分別查看：

```bash
tail -n 100 runtime/linux/backend.log
tail -n 100 runtime/linux/ai.log
tail -n 100 runtime/linux/mediamtx.log

tail -f runtime/linux/backend.log
tail -f runtime/linux/ai.log
tail -f runtime/linux/mediamtx.log
```

每條 `tail -f` 會持續占用終端，Ctrl+C 只停止看日誌。可另開終端執行其他指令。

HTTP 與連接埠檢查：

```bash
curl --max-time 5 -I http://127.0.0.1:3000/
curl --max-time 5 http://127.0.0.1:3000/api/device/runtime
curl --max-time 5 http://127.0.0.1:8000/api/rgbd/status
ss -ltnp | grep -E ':(1883|27017|3000|8000|8554|8888|8889|8189)\b'
```

### 個別前景執行：只供排錯

先退出 test2 並執行 `bash start-system.sh -stop`，避免重複啟動。MongoDB／MQTT 容器仍需執行。

後端：

```bash
cd ~/end-point/backend
APP_HOST=127.0.0.1 node src/app.js
```

AI（另一個終端）：

```bash
cd ~/end-point/AI
../.venv/bin/python main.py
```

MediaMTX（另一個終端；沿用管理腳本的本機 TCP 配置）：

```bash
cd ~/end-point/AI
MTX_RTSPADDRESS=127.0.0.1:8554 \
MTX_RTSPTRANSPORTS=tcp \
MTX_HLSADDRESS=127.0.0.1:8888 \
MTX_WEBRTCADDRESS=127.0.0.1:8889 \
MTX_WEBRTCLOCALUDPADDRESS='' \
MTX_WEBRTCLOCALTCPADDRESS=127.0.0.1:8189 \
MTX_WEBRTCADDITIONALHOSTS=127.0.0.1 \
MTX_RTMP=no MTX_SRT=no \
../.tools/mediamtx-1.17.1/mediamtx mediamtx.yml
```

這些前景程序用各自終端的 Ctrl+C 停止；不會登記在 `runtime/linux/services.json`。因此 `-status` 不會把手動程序當成腳本已管理服務，`-stop` 也不會停止它們。結束個別排錯後，先停止全部手動程序，再回專案目錄使用正常啟動腳本。

---

## 四、更新程式、前端建置與測試

### Git clone 版本更新

確認本地修改已妥善保存，退出 test2 並停止應用：

```bash
cd ~/end-point
bash start-system.sh -stop
git status --short
git pull --ff-only
bash scripts/setup-linux.sh
bash start-system.sh
```

如果 Git 回報本地修改衝突，先處理修改，不要使用 reset --hard 清掉。若是 rsync 複製版，改從原本來源同步需要的程式，不能直接 git pull。

### 只改前端時

```bash
cd ~/end-point
npm --prefix frontend run build
```

建置完成後瀏覽器 Ctrl+F5。既有後端會讀取新靜態檔，一般不需重啟；若先前完全沒有 frontend/dist，則應重啟後端讓其註冊靜態頁面路由。

### 只補裝相依套件

```bash
.venv/bin/python -m pip install -r AI/requirements.txt
npm --prefix backend ci
npm --prefix frontend ci
```

npm ci 會重新安裝對應的 node_modules；請先停止使用該依賴的程序。不可在同一目錄交替用 Windows 與 Linux 的 npm 安裝。

### 自動測試（獨立測試資料庫）

```bash
python3 -m unittest discover -s scripts -p 'test_linux*.py' -v
.venv/bin/python -m unittest discover -s AI/test -p 'test_rgbd*.py' -v
RGBD_TEST_MONGO=mongodb://127.0.0.1:27017/vision_rgbd_sync_test \
  node --test backend/tests/test-rgbd.mjs backend/tests/test-rgbd-fusion.mjs \
  backend/tests/test-telemetry-replay.mjs backend/tests/test-device-pipeline.mjs
.venv/bin/python AI/test/rgbd_e2e.py
```

MongoDB 需先啟動。這些測試使用隔離庫與測試作業，不要把測試 URI 換成正式資料庫名稱。

---

## 五、備份、清空與舊資料重算

### 備份資料庫與影像

先退出 test2，停止應用，但保持 MongoDB 容器執行，使資料在備份期間不再變動：

```bash
cd ~/end-point
bash start-system.sh -stop
mkdir -p backups
backup_stamp="$(date +%Y%m%d-%H%M%S)"
docker compose -f deploy/compose.infra.yml exec -T mongodb \
  mongodump --db vision_system --archive --gzip > "backups/vision_system-$backup_stamp.archive.gz"
if [ -d AI/video ]; then
  tar -czf "backups/ai-video-$backup_stamp.tar.gz" AI/video
fi
```

資料庫只保存紀錄，影像／RGB-D 封包在 `AI/video`，兩者都要備份。備份後如要繼續使用，執行 `bash start-system.sh`。

### 清空測試資料（有刪除效果）

退出 test2、確認備份後才使用：

```bash
bash start-system.sh -refresh --confirm-delete
```

會刪除 `vision_system` 除 users 外所有集合紀錄、專案 `AI/video` 以及 Linux 服務日誌，再啟動應用。不是解決連線錯誤或重啟的指令。沒有備份就無法還原被刪除的資料。

不要用 `docker compose down -v` 當一般停止指令，它會刪除 MongoDB 的 Docker volume，連帳號也可能一起遺失。平常使用 `stop`。

### 重建舊作業的三種設備定位結果

只有原始感測資料存在且作業已結束時適用：

```bash
node backend/scripts/rebuildDeviceTelemetry.mjs --operation-id 實際作業ID
node backend/scripts/rebuildDeviceTelemetry.mjs --operation-id 實際作業ID --apply
```

第一行只預覽，第二行替換該作業的 OperatorTelemetry。影像與原始感測資料保留；缺少原始資料時不能重建。

---

## 六、常見錯誤與對應處理

| 訊息／現象 | 原因與處理 |
|---|---|
| Missing ffmpeg | WSL 執行 `sudo apt install -y ffmpeg` |
| ensurepip unavailable | 安裝對應版本 `python3.x-venv`，重新執行 setup |
| npm 日誌出現在 C:\\Users | 混到 Windows npm；依第 5 步用 Linux nvm/node/npm，檢查 command -v |
| npm ci 找不到 lockfile | 先確認前後端各有 package-lock.json，以及 npm 不是 Windows 版本，不要先刪 lockfile |
| docker command could not be found | 開啟 Docker Desktop 對應 Ubuntu 的 WSL Integration |
| 1883／27017 bind failed | Windows Mosquitto／MongoDB 或另一容器占用；確認後停止重複服務 |
| MongoDB unavailable | compose up -d，確認容器 Up、稍等後 check |
| backend startup timed out | 查看 backend.log；/mnt/d 可能拖慢套件讀取；移到 ~/end-point，必要時暫時延長等待 |
| ai exited | 查看 ai.log，先處理 traceback；新版已對 cv2.setLogLevel 做相容處理 |
| operation not ready／pose 409 | 核對 ACK 的 operation ID 是否屬於同一套後端，退出舊 test2、重啟更新後服務；不要同時跑兩套平台 |
| User not found／CastError | TEST_USER_ID 必須是本資料庫實際的24位 ObjectId，不是帳號名稱 |
| SHA256 no properly formatted lines | 使用新版 setup，已處理校驗檔中的星號；不要跳過驗證 |
| 三條路徑／基站資料為空 | 先錄製新整合作業；舊版沒存原始感測量不能憑空補回 |

### Windows localhost 無法開網站

先在 WSL：

```bash
bash start-system.sh -status
curl --max-time 5 -I http://127.0.0.1:3000/
```

如果 WSL 回 HTTP 200，Windows 瀏覽器卻不能開，可能是 localhost 轉送問題。先退出 test2，停止應用及容器；Windows PowerShell 執行：

```powershell
wsl --shutdown
```

它會停止所有 WSL 發行版。重新開 Docker Desktop／Ubuntu，再依第二節啟動。若 shutdown 本身長時間卡住，先儲存工作再重新啟動 Windows；不要用 unregister、重設 Ubuntu 或 Docker Factory Reset 排除此問題。

### 從 Windows 檢查 3000

```powershell
curl.exe --max-time 5 -I http://127.0.0.1:3000/
Test-NetConnection 127.0.0.1 -Port 3000
```

---

## 七、區網與部署範圍

本手冊完成的是本機／WSL 單機部署。預設 MongoDB、MQTT、後端與媒體服務綁定 loopback，所以同 Wi-Fi 的其他設備尚不能直接連入。區網 MQTT 聯調需另外配置 broker 的對外綁定、帳密、Windows／WSL 網路轉送與防火牆。

不需要為了本機測試開放公網資料庫。遠端 Linux 沒有 Windows 時，Docker Desktop／WSL 安裝步驟需換成 Linux Docker Engine 安裝；應用腳本與 Compose 的使用方式則相同。

關閉 WSL 或 Windows 後原生應用不會自動重啟；目前沒有建立 systemd 開機服務。Docker 容器設定 restart unless-stopped，但仍依賴 Docker daemon 啟動，手動 stop 的容器也需再次啟動。

## 官方參考與專案文件

- [Microsoft：WSL 安裝](https://learn.microsoft.com/en-us/windows/wsl/install)
- [Microsoft：WSL 指令](https://learn.microsoft.com/en-us/windows/wsl/reference)
- [Docker Desktop：WSL2 整合](https://docs.docker.com/desktop/features/wsl/)
- [Docker Desktop：WSL 檔案系統建議](https://docs.docker.com/desktop/features/wsl/best-practices/)
- [nvm 官方安裝說明](https://github.com/nvm-sh/nvm)
- 專案簡版說明：`LINUX_WSL.md`
- MQTT 資料格式：`MQTT_IMU_UWB_HANDOVER.md`
- 同幀設備整合：`RGBD_DEVICE_INTEGRATION.md`
