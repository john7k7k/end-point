# 同幀設備定位與 UWB／IMU 整合

## 新資料流程

`test2.py --rgbd` 啟動的 `rgbd_sender.py` 不再另行生成設備位置／姿態。每次取到測試影像後，透過 `/api/device/pose/:operationId` 取得後端 UWB／IMU 融合結果，沿用後端既有 MQTT／模擬感測資料來源與當下選定的設備演算法。

後端先確認原始感測資料寫入，再回覆姿態、八站距離、IMU、演算法名稱與時間。測試影像使用該樣本時間作模擬擷取時間；這不是已驗證的真實相機硬體同步。真實相機仍須送實際擷取時間與校正後的時鐘。

AI 的姿態緩衝保存感測附加資料，插值姿態時保留前一筆原始感測樣本，並用 `sensorTimeNs` 明確記錄其時間，不把量測值假裝成插值結果。姿態、感測資料隨同幀文件保存；缺少螺絲不影響設備資料。

## 即時與歷史

test2 啟動時先用 HTTP `/api/device/runtime` 確認後端 instance ID，再於 MQTT 開始訊息帶上 instance ID 與每次新的 request ID。只有相符的 ACK 才會啟動發送器；其他後端／舊請求的 ACK 會顯示 Ignored unrelated ACK。這可防止 Windows 與 WSL 共用 broker 時取到另一套後端建立的 operation ID。更新後需重啟後端與 test2；發送器的 BACKEND_URL 也會沿用同一個 HTTP 位址。

- 即時：右側提供 ES-EKF／互補濾波／加權平均選單，自動套用。只有選中的設備定位演算法執行，3D 顯示它的設備與路徑。
- 結束：從同一批 RawSensorMeasurement 在獨立 worker 中重算三種演算法，寫入 OperatorTelemetry。重算不改動即時濾波器狀態。
- 歷史：三個勾選項各有不同顏色、設備與攝影機方向。全部取消時不顯示設備或軌跡，基站與螺絲地圖保留。
- 歷史資料按影像擷取時間查詢，不讀未來樣本；最近姿態超過 250 ms 時不當成當前設備姿態。每演算法最多顯示最近 1000 筆路徑。
- 暫停／拖曳沿用同幀播放器，影像、資料與路徑以同一個 snapshot 提交，沒有另開即時資料輪詢填補歷史畫面。
- 螺絲融合選單與設備融合選單互相獨立。設備歷史重算不改寫既有螺絲融合結果。

## 如何驗證

1. 停止 test2，重啟所選環境的服務（Windows 與 WSL 不要同時執行）。
2. 網頁 Ctrl+F5；啟動 test2 --rgbd，輸入 s。
3. 基站八個距離與 IMU 應隨影格更新；切換設備演算法，後續幀的路徑跟著切換。
4. 暫停畫面確認數字與設備不動，再恢復跳到最新幀。
5. test2 輸入 e；等後端顯示 Rebuilt telemetry 後進入歷史影片。
6. 勾選兩種應有兩組路徑／設備，取消全部則沒有設備；暫停和拖曳均跟隨影格。

## 舊紀錄

舊版只有位置／四元數的 RGB-D 文件不會憑空增加原始量測。若同一作業已存有 RawSensorMeasurement，可先預覽重算，再明確套用：

```bash
node backend/scripts/rebuildDeviceTelemetry.mjs --operation-id 實際作業ID
node backend/scripts/rebuildDeviceTelemetry.mjs --operation-id 實際作業ID --apply
```

工具只允許已結束作業；`--apply` 會替換該作業的 OperatorTelemetry，影像與原始資料不變。先備份重要資料。舊版若原本用了兩組獨立模擬軌跡，重算設備路徑不會更改當時用於螺絲定位的 pose；比較新整合行為請錄製新作業。

## 測試

Python `test_rgbd*.py` 包含姿態附加資料保存與插值來源測試。Node 測試包含 `test-device-pipeline.mjs`（即時不寫三組 Telemetry、結束後三組重建）、`test-telemetry-replay.mjs`（重算隔離）、`test-rgbd.mjs`（同幀感測資料、三路歷史、不含未來資料）。使用獨立 `vision_rgbd_sync_test` 資料庫，不修改正式作業。
