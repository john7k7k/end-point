# 從另一台電腦啟動 test2，送到實驗室 WSL 主機

目前主機 Wi-Fi 位址：`192.168.0.156`。本文件假設該主機 Windows 本身可連到自己的 `127.0.0.1:1883`、3000、8000、8554。

## 1. 四條連線都要指向同一台主機

| 連接埠 | 用途 |
|---|---|
| 1883/TCP | MQTT 操作開始、ACK、結束 |
| 3000/TCP | 後端識別與設備姿態取樣，及網站 |
| 8000/TCP | RGB-D WebSocket 同幀封包上傳 |
| 8554/TCP | 彩色／深度兩路 RTSP 預覽與錄影發布 |

目前 test2 的 RTSP 使用 TCP，所以此測試不需另外開 RTSP UDP 埠。MongoDB 不需要開放給發送電腦。

## 2. 主機端補開影像轉送

在 **192.168.0.156 主機**的系統管理員 PowerShell，先確認影像服務在本機正常：

```powershell
Test-NetConnection 127.0.0.1 -Port 8000
Test-NetConnection 127.0.0.1 -Port 8554
```

兩者都 True 後，新增 LAN 位址到現有本機服務的轉送：

```powershell
Start-Service iphlpsvc
netsh interface portproxy add v4tov4 listenaddress=192.168.0.156 listenport=8000 connectaddress=127.0.0.1 connectport=8000
netsh interface portproxy add v4tov4 listenaddress=192.168.0.156 listenport=8554 connectaddress=127.0.0.1 connectport=8554
New-NetFirewallRule -Name 'Endpoint-LAN-Image' -DisplayName 'Endpoint LAN image upload' -Direction Inbound -Action Allow -Protocol TCP -LocalAddress 192.168.0.156 -LocalPort 8000,8554 -RemoteAddress LocalSubnet -Profile Any
netsh interface portproxy show all
```

這沿用前面1883／3000的Windows轉送方法，不需要讓 AI 改監聽其他網卡。若同名防火牆規則已存在，先查看既有規則，不必重複新增。

這是受控實驗室區網的原型測試通路；目前 AI 上傳介面沒有完整設備認證。不要做路由器公網轉送。Windows 的 WSL localhost 轉送必須先正常，這些規則才能轉到 WSL；若主機本機檢查不通，先處理服務或 WSL。

Wi-Fi IP 若改變，這些綁定舊位址的規則也要更新。

## 3. 發送端檢查連線

在 **執行 test2 的電腦** PowerShell：

```powershell
Test-NetConnection 192.168.0.156 -Port 1883
Test-NetConnection 192.168.0.156 -Port 3000
Test-NetConnection 192.168.0.156 -Port 8000
Test-NetConnection 192.168.0.156 -Port 8554
```

四個都要 True。直接用瀏覽器檢查 `http://192.168.0.156:3000/api/device/runtime`，應看到 backendInstanceId 與 platform=linux。

## 4. 取得遠端帳號 ID

先開 `http://192.168.0.156:3000` 註冊或登入帳戶。帳號 ID 必須取自遠端資料庫，不是本機 Windows 的帳號 ID。

在主機的 **WSL 專案目錄**：

```bash
docker compose -f deploy/compose.infra.yml exec -T mongodb \
  mongosh vision_system --quiet \
  --eval 'db.users.find({}, {_id:1, username:1, name:1}).toArray()'
```

複製正確帳號的24位 ObjectId。

## 5. 發送端啟動

本機只需要 Python 套件、FFmpeg、test2 與它使用的程式，以及 `AI/test/test_color.mp4`、`test_depth.mp4`；不需要啟動本機 Node、AI、MQTT 或資料庫。

Windows PowerShell，在本機專案目錄：

```powershell
python .\AI\test\test2.py --server 192.168.0.156 --user-id 貼上遠端帳號ID --rgbd
```

若發送端也使用 WSL：

```bash
.venv/bin/python AI/test/test2.py --server 192.168.0.156 --user-id 貼上遠端帳號ID --rgbd
```

--server 會統一設定四個服務；不用再手動修改程式裡的 localhost。另可指定 --backend、--rgbd-url、--rtsp-base、--mqtt-port，供不同連接埠或代理部署使用。

啟動時會先檢查影像埠、取得後端識別，再連線 broker。看到 Using backend、遠端各個位址與 Subscribed 後輸入 s；e 結束、q 退出。不要在遠端主機同時啟動另一個 test2。

## 6. 驗收

1. 主機後端只建立一筆本次操作，ACK 的 backendInstanceId 與本機取得的一致。
2. 本機出現 Started cam-color and cam-depth streams，RGB-D 回覆 persisted=true。
3. 在遠端網站切即時串流，光學／深度皆有畫面，UWB／IMU與設備軌跡持續更新。
4. e 結束後，遠端完成歷史重算並可回放。

同幀播放器使用3000提供影像與結果。若另外要從遠端瀏覽器使用舊版 WebRTC RTSP 預覽，還需設定8889與8189的媒體通路／ICE；它們不屬於本次 test2 上傳必須開放的四個埠。

目前 test_depth.mp4 為示範灰階映射，UWB／IMU未收到硬體資料時也可能使用模擬來源。測試成功代表跨機傳輸與平台流程完成，不代表硬體量測已完成。
