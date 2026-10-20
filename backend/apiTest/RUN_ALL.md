# 完整 API 測試腳本

入口：`run-all.ps1`，預設主機 `192.168.0.156`。本次實作管理 API 並進行隔離測試，**未執行區網整合／刪除測試**。

## 目前可執行性

新版採嚴格復原模式。後端已提供下述七個安全管理 API；AI 也提供設定查詢及內部租約控制。未啟用、憑證不符、任一端尚未更新或仍有 active operation／未提交 RGB-D journal，均拒絕建立 checkpoint，不開始業務測試。

管理 API 預設停用；沒有跳過安全檢查的參數。後端與 AI **必須使用相同環境變數並重新啟動**（憑證至少 24 字元，建議隨機 32 bytes）：

```powershell
$env:API_TEST_ENABLED = '1'
$env:API_TEST_ADMIN_TOKEN = 'local-test-2026-change-this-token-123456' 
.\start-system.ps1 -reboot
```

Linux／WSL 在啟動服務的同一個 shell 設定：

```bash
export API_TEST_ENABLED=1
export API_TEST_ADMIN_TOKEN='local-test-2026-change-this-token-123456' 
bash start-system.sh -reboot
```

不得提交憑證至 Git。HTTP/MQTT 預設為明文區網連線，不適合直接暴露公網；實際部署需限制防火牆並配置 TLS／broker ACL。測試期間請停止其他邊緣端與 RTSP 發布端；這不是 MediaMTX 發布權限管理 API。

更新並重啟後，於測試端的專案根目錄執行：

```powershell
$env:API_TEST_ADMIN_TOKEN = 'local-test-2026-change-this-token-123456' 
.\backend\apiTest\run-all.ps1 -Server 127.0.0.1 -Seconds 15
```

需求：Node.js 18+、`backend/node_modules`、Python（含 numpy、OpenCV）、ffmpeg、ffprobe、兩支測試影片。可用 `-Server`、`-Python`、`-Color`、`-Depth`、`-Encode` 調整來源，與原腳本一致。

本機測試使用 `-Server 127.0.0.1`。若本機連接埠由 WSL 提供，仍然是在測 WSL 的服務，需在 WSL 啟動後端／AI 時設定管理環境變數。建立與驗證基準會計算封存檔的 SHA-256，在 `/mnt/d` 有大量小檔案時可能較久；管理請求最多等待 10 分鐘，DELETE 最多等待 2 分鐘。腳本等待時不要重複啟動第二輪，也不要刪除 checkpoint 檔案。

錄影已獨立於 OpenCV／偵測流程；作業建立後即準備兩路接收，RTSP 尚未發布時會自行重試，斷線重連使用新分段，最後直接 remux 成 MP4，不重新編碼。短探測參數為 analyzeduration=100000 μs、probesize=32768 bytes，接收逾時 3 秒。test2 與 RTSP 範例會檢查測試影片 GOP：已在約 1 秒內則直接用原檔；過長則先一次性產生 `runtime/stream-cache` 快取（H264、CRF 16、無 B-frame、約 1 秒 GOP），發布時仍用 copy。原影片保留，CRF 16 快取仍屬有損編碼；它不代表真實 metric depth，真實深度仍走 RGB-D uint16 同幀封包。真實攝影機請在邊緣編碼器設定約 1 秒 GOP／無 B-frame，而不是在伺服器反覆轉碼。

首次準備快取可能較久，來源預檢最多等待 10 分鐘。改變來源檔大小／修改時間會產生新快取；相同來源後續直接重用。錄影完整度門檻仍為 80%，沒有為了通過測試而調低。

歷史 MP4 檢查會帶 checkpoint 憑證，以串流下載至作業系統暫存目錄的獨立資料夾，再交給 ffprobe 讀取，不把整支影片保存在記憶體。成功、HTTP 錯誤、下載中斷或 ffprobe 失敗都會清除該暫存資料夾。下載最多 120 秒（閒置 30 秒）、單檔磁碟安全上限 2 GiB；一般 JSON API 仍限制 16 MiB。強制終止或斷電無法保證 finally 執行，可能留下系統暫存目錄中的 `vision-api-video-*`，但不會影響伺服器原始影片。

## 資料安全原則

- 建立與一般使用情境相同的資料，不在資料庫文件加測試標記。
- 只在客戶端 `runtime/apiTest/<run-id>.json` 保存新增 ID、請求意圖、checkpoint ID、覆蓋結果與復原結果。伺服器 checkpoint 必須同樣放 runtime／獨立控制儲存，不能殘留在業務資料庫。
- 新增請求發出前先記錄意圖，收到回應立即記錄 ID。不記錄明文密碼、JWT、管理憑證。
- 清理必須由伺服器核對「原始基準＋本次明確新增 ID＋父子關聯」。不能只按時間或名稱前綴刪除。
- 對遺失回應的新增請求，伺服器只能依明確的隨機測試 email、已確認的新使用者及新作業關聯找回候選，排除全部基準 ID。不能把所有基準以後的新增都當作測試資料。
- 不允許並行的真實作業／其他寫入。僅檢查一次沒有 active operation 不足以防競爭，checkpoint 須提供互斥租約，並在業務 HTTP/MQTT/AI 接收端確實執行。
- 遇到 API 失敗仍嘗試停止寫入、清理與設定復原。不得使用全資料庫清空／備份覆蓋作為補救。
- Ctrl+C 會嘗試收尾，但斷電或強制終止無法保證執行 finally。保留 runtime manifest 與伺服器 checkpoint，供管理員明確重試清理。現階段腳本沒有自動重啟恢復命令。

## 測試順序

1. 檢查安全能力、服務、空閒狀態、來源影片，取得基準與互斥 checkpoint。
2. 註冊、登入、使用者清單／單筆、修改後查詢，低階建立第二個正常 User（使用真實 bcrypt hash）。
3. 用第二個使用者建立子作業，留給後續「使用者級聯刪除」案例。
4. HTTP 作業開始、AI 準備、active／清單／使用者作業／單筆查詢、修改。
5. 後端／AI 演算法設定、相機外參讀取、修改、重新讀取驗證。原始完整狀態由 checkpoint 保存。
6. 建立實際 Detection。若一直只回 204，就視為缺少正向 fixture，不把它當作 CRUD 已驗證。查詢、修改、再次查詢。
7. 即時定位、metadata frame 建立、session／frame／index／snapshot 查詢，結束 HTTP 作業，再查歷史定位與 Telemetry。
8. 偵測：刪除前查詢、DELETE、刪除後查詢，並檢查螺絲融合衍生資料是否清除。
9. 作業：刪除前查詢、DELETE、刪除後查詢，並檢查子資料／檔案是否清除。
10. MQTT start 與對應 ACK、八站 UWB、IMU、後端資料驗證。近螺絲距離 fixture 同時測通知 topic。
11. RTSP 彩色／深度發布、遠端 ffprobe 讀回、MQTT detection，停止發布後執行 RGB-D 同幀案例。
12. WebSocket hello、HTTP pose、MQTT pose、實際二進位彩色＋深度封包、保存確認、兩種影像讀取、snapshot 對應 pose 時間、WebSocket end。
13. MQTT end、endTime、歷史設備路徑、AI end、影片清單／Range 請求與 MP4 可讀性。錄影涵蓋不足列警告，整體不能 PASS。
14. 第二使用者：先確認其存在且仍有子作業，再 DELETE，查詢使用者與作業，核對全部後代資料已移除。
15. finally：停止本次發送端／連線，quiesce、清理其餘新增資料、精確復原設定、比較基準，輸出剩餘資料與未覆蓋項目。

HTTP 覆蓋矩陣自動讀取 `platform.http` 的編號，MQTT 同理讀取 `platform.mqtt`。任一例子未執行、資料驗證失敗、清理錯誤、原始資料變更、未恢復設定或警告存在，均不可顯示整體 PASS。前置條件或相依 fixture 失敗時，剩餘項目保留 `not_executed`，不偽造成功。

## 已實作的安全管理 API

全部路由僅測試管理員可用，預設停用，使用 `Authorization: Bearer ...`。不能因知道 ID 就允許任意刪除。錯誤請回非 2xx，且操作應可重試。

### GET `/api/testing/capabilities`

```json
{
  "version": 1,
  "runtimeOnlyLedger": true,
  "baselineGuard": true,
  "exclusiveLease": true,
  "exactSettingsRestore": true,
  "quiesceWriters": true,
  "ownedCascadeCleanup": true,
  "verifyBaseline": true
}
```

只有真正具備對應功能時才能宣告 true，不可為了讓腳本通過只新增假回應。

### POST `/api/testing/checkpoints`

輸入：`clientRunId`、`backendInstanceId`。回應：`id`（英數、底線、連字號）、`exclusive: true`、不含密碼內容的 `baseline` 摘要。

伺服器須保存各業務 collection 原始 ID／文件內容雜湊、原始相機外參（含原本不存在、`_id`、時間戳）、兩端演算法設定、必要執行狀態及檔案清單。若無法取得安全租約或存在進行中作業，須拒絕建立。

### POST `/api/testing/checkpoints/:id/inspect`

輸入：`owned`（本次已知新增 ID），以及 `root: {kind: "user" | "operation" | "detection", id: "..."}`。

回應 `remaining` 數量與具體殘留清單，需涵蓋父項、子資料、融合結果、影像檔，不能只檢查父項是否已刪。此介面只讀，不替 DELETE 補做級聯刪除。

### POST `/api/testing/checkpoints/:id/quiesce`

輸入：`owned`、`intents`。停止本次作業、錄影、重算及 pending 補送，等候寫入停止，並阻擋延遲訊息重新新增資料。不得停止非本次作業。

### POST `/api/testing/checkpoints/:id/cleanup`

輸入同上。伺服器先核對基準排除原有 ID，再清除剩餘測試新增資料和檔案。若原 API 的級聯刪除不完整，這只能是故障後補救，不能抹掉該 API 測試失敗的事實。

### POST `/api/testing/checkpoints/:id/restore`

精確復原原相機外參、兩端演算法設定與受影響的接收狀態。原來不存在外參文件時，刪除本次新增的外參文件；原來存在時保留原 `_id`、時間戳與全部欄位。不回復或覆寫其他人的業務資料。

### POST `/api/testing/checkpoints/:id/verify`

```json
{
  "originalDataUnchanged": true,
  "settingsRestored": true,
  "writersIdle": true,
  "testDataRemaining": 0,
  "testFilesRemaining": 0
}
```

失敗時附上 collection／ID／檔案及原因，不要傳原始密碼或憑證。不能只比較資料筆數。確認完成後方可釋放互斥租約；未復原時保留故障資訊與可重試的 checkpoint。

## 業務 DELETE 與限制

- User DELETE 依 userId 刪除其作業，再刪使用者。
- Operation DELETE 停止該作業接收與錄影，等待寫入與同幀佇列，再移除 Detection、RawSensorMeasurement、OperatorTelemetry、ScrewLocalizationTelemetry、RgbdFrame 與該 opID 的封存檔。先刪後代、最後刪父項，失敗可重試。
- Detection DELETE 需作業已結束，否則回 409。刪除該筆與衍生螺絲結果，再依時間重算剩餘偵測的融合結果。
- MongoDB 為 standalone 時無跨 collection 交易保證；中途失敗會回錯，不宣稱原子成功。inspect／verify 會列殘留，不能用 finally 的補救成功掩蓋業務 DELETE 測試失敗。
- 基準比對涵蓋各 collection 的文件 ID 與 SHA-256，以及封存檔內容雜湊；不是只比筆數。外參使用原始 BSON 文件精確還原，不透過會更新 updatedAt 的一般 PUT。
- checkpoint 保存在伺服器 `runtime/checkpoints/<id>.json`，僅保存文件雜湊、原外參、設定、檔案雜湊及本次 ID。`lease.json` 與 `ai-lease.json` 供重啟後維持封鎖，均不寫入業務資料庫，也不記錄管理憑證。
- 原本不存在的外參會刪除本次新增文件；原本存在則保留 `_id` 與時間戳。其他基準資料若遭更動，**只報告、不覆蓋還原**，租約保留，需管理員調查。
- 同時保存並復原後端濾波器內部狀態、感測資料可用旗標與通知節流狀態；AI 需以空閒、無 session、無待補送 journal 狀態進入測試，結束時停止錄影並清空接收 session。
- 測試端正常 HTTP 與 WebSocket 帶 `X-API-Test-Checkpoint` 和 Bearer；MQTT 額外攜帶 `_checkpoint`、`_adminToken`，後端核對後立即移除，**不進入原始量測 payload 或資料表**。舊測試訊息在租約釋放後亦會拒絕。
- 不阻擋直接使用 MongoDB 管理工具寫入；這類越過應用程式的更動會被 verify 偵測，但無法事先攔截。

## 手動呼叫／中斷後恢復

以下 PowerShell 在專案根目錄執行。管理員須保留 runtime 中的 checkpoint ID；不要直接刪除租約檔解除封鎖。

```powershell
$base = 'http://192.168.0.156:3000/api'
$headers = @{ Authorization = "Bearer $env:API_TEST_ADMIN_TOKEN" }
Invoke-RestMethod "$base/testing/capabilities" -Headers $headers
# 建立時需 backendInstanceId；測試腳本會自動完成此流程。
$runtime = Invoke-RestMethod "$base/device/runtime"
$body = @{clientRunId='manual';backendInstanceId=$runtime.backendInstanceId} | ConvertTo-Json
$cp = Invoke-RestMethod "$base/testing/checkpoints" -Method Post -Headers $headers -ContentType 'application/json' -Body $body

# 一般業務請求需額外帶 checkpoint，避免被互斥保護拒絕。
$businessHeaders = @{Authorization=$headers.Authorization; 'X-API-Test-Checkpoint'=$cp.id}
# 中斷後改成已記錄的 ID：$id = 'runtime 報告裡的 checkpoint ID'
$id = $cp.id
# owned/intents 應從該次 runtime/apiTest/<run-id>.json 讀取，不要填原始資料 ID。
$report = Get-Content 'runtime/apiTest/請替換為該次報告.json' -Raw | ConvertFrom-Json
$payload = @{owned=$report.owned;intents=$report.intents} | ConvertTo-Json -Depth 30
foreach ($action in @('inspect','quiesce','cleanup','restore','verify')) {
  Invoke-RestMethod "$base/testing/checkpoints/$id/$action" -Method Post -Headers $headers -ContentType 'application/json' -Body $payload
}
```

若 checkpoint 建立回 `recoveryRequired: true`，尚未放行任何業務測試，但 AI 可能已取得租約。先恢復 AI 連線，再對回傳的 `checkpointId` 呼叫 quiesce，會重試撤回建立，回 `acquisitionRolledBack: true`。不要在此狀態建立第二次測試。

AI 新增 `GET http://192.168.0.156:8000/api/simulation-config`；內部 `POST /api/testing/lease` 僅由管理後端協調 acquire／quiesce／restore／release，與七個對外管理 API 分開。一般使用者不應直接呼叫內部控制介面。
