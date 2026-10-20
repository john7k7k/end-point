# 平台 4D-GWO 人員／設備定位

## 啟用

Windows 前端已重新 build。重啟服務後重新整理網頁：

```powershell
.\start-system.ps1 -reboot
```

Linux／WSL 需先更新程式與前端建置，再重啟：

```bash
npm --prefix frontend run build
bash start-system.sh -reboot
```

在影像串流頁右側「UWB + IMU 融合資料」的即時演算法選單選擇 **4D-GWO + IMU**，切換即送出，不需額外套用。歷史影片的「演算法路徑」可勾選紫色 4D-GWO 路徑及對應設備。

這是人員／設備位置求解器；螺絲定位區塊的平均法、EKF、ES-EKF、RMV-FGO 是另一層，仍可獨立選用。4D-GWO 的設備位置與 IMU 姿態會提供給後續螺絲世界座標計算。

## 輸入與計算

沿用既有原始 UWB／IMU MQTT 交接格式，詳見 [MQTT_IMU_UWB_HANDOVER.md](MQTT_IMU_UWB_HANDOVER.md)。本功能不需要新 topic；請送原始距離，而不是只有上游已融合的位置。上游若只送完整設備 pose，平台不能由它反推原始距離。

內部距離格式為 `[{stationId: 0, distance: 3.21}, ...]`：stationId 是 0～7，distance 單位公尺。每次求解至少需要五個不同站的正有限距離，且幾何須足以辨識四維狀態；建議八站。重複站號不視為額外基地站。

狀態為 `[x, y, z, b]`，最小化以下平方殘差和：

```text
sum_i ( ||p - anchor_i|| + b - measured_range_i )^2
```

`b` 是所有距離共用的加性偏差，不是高度，也不是八站各自的 NLOS 偏差。本方法不保證校正各站獨立偏差。

位置來自 UWB 4D-GWO；姿態沿用既有 IMU 角速度積分／模擬 heading 管線。GWO 分支不使用加速度推進平移，等待下一筆 UWB 才更新位置。這不是完整的 UWB／INS 緊耦合濾波，也沒有新增真實 IMU 絕對航向校正。

## 設定

| 項目 | 平台設定 | 意義 |
| --- | --- | --- |
| 狼群／迭代 | 100／100 | 固定每次求解預算 |
| 初始化 | 全搜尋範圍均勻取樣 | 不加 warm start 或額外局部優化 |
| 收斂係數 | `a = 2(1 - (t/T)^2)` | 二次遞減 |
| 搜尋位置 | x: 0～20、y: 0～12、z: 0～2.8 m | 沿用平台場域 |
| 共同偏差 | 0～0.6 m | 包含零偏差，不強制補償至少 0.1 m |
| 距離標準差 | 0.08 m | 局部資訊矩陣的不確定度近似假設 |
| 位置標準差下限項 | 0.08 m | 位置方差額外加入 0.08²；非精度保證 |

八站座標（公尺，對應 stationId 0～7）：

```text
(0,0,0), (20,0,0), (0,12,0), (20,12,0),
(0,0,2.5), (20,0,2.5), (0,12,2.5), (20,12,2.5)
```

實際場域改動時須同步修改其他人員定位方法／3D 場域的基地站設定，不能只改畫面。

偏差範圍可用後端環境變數調整，需重啟才生效。例如還原 MATLAB 的 0.1～0.6 m：

```powershell
$env:GWO4D_BIAS_MIN = '0.1'
$env:GWO4D_BIAS_MAX = '0.6'
.\start-system.ps1 -reboot
```

```bash
export GWO4D_BIAS_MIN=0.1
export GWO4D_BIAS_MAX=0.6
bash start-system.sh -reboot
```

相同距離資料使用相同隨機種子，以便即時與事後重播一致；不宣稱與 MATLAB 隨機序列逐位元相同。原 MATLAB 的場域與噪聲條件也不同，不可直接把其模擬精度當成平台精度。

## 保存與歷史回放

- 串流中只跑當下選擇的方法；原始 UWB／IMU 持續存入 `RawSensorMeasurement`。
- 同幀影像的 `RgbdFrame.devicePose` 保留當時位置、姿態、原始量測與 `deviceLocalization`，其中含 b、範圍、有效站數與求解狀態。
- 作業結束後由獨立 worker 從相同原始資料重算 ES-EKF、互補濾波、加權平均、4D-GWO，依 `fusionAlgorithm` 分別存入 `OperatorTelemetry`。既有路徑輸出間隔為至少 200 ms。
- 歷史回放由資料庫讀取各路徑，沿用影片時間篩選；不重新產生隨機量測。
- 距離不足或幾何退化不會產生新的有效 GWO 位置；同幀 pose 請求會拒絕未就緒結果，歷史重算跳過未就緒 GWO 樣本。

舊影片不會憑空補上 GWO 路徑。已結束的作業若有原始資料，可先預覽重算：

```bash
node backend/scripts/rebuildDeviceTelemetry.mjs --operation-id OPERATION_ID
```

確認後加 `--apply`：會取代該作業的設備 Telemetry，不動原始量測、影片或既有同幀螺絲融合結果。資料庫依 `MONGODB_URI`，未設定時為 `mongodb://127.0.0.1:27017/vision_system`。無原始資料則無法補算。

## 驗證與限制

已通過求解器、選單設定 API、AI pose metadata、資料庫同幀保存／回放、作業結束後四路重算測試，且完成 Windows 前端 build。資料庫測試使用獨立 `vision_rgbd_sync_test`，不修改正式作業資料。

本機純求解器基準約 5 ms／次（100×100、八站），不含 YOLO、影像、網路及資料庫；這不是端到端延遲保證。真實感測器、高頻 MQTT 與完整瀏覽器串流仍須實測。局部資訊矩陣只提供近似不確定度，不是 GWO 全域收斂保證。

主要程式：`backend/src/positioning/gwo4d.js`。註冊清單：`backend/src/positioning/deviceAlgorithms.js`。
