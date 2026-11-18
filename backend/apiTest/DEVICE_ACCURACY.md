# 設備固定點定位精度 API

先在**啟動後端的環境**設定隨機、至少 32 字元的 `JWT_SECRET`，重啟並重新登入。請勿把密鑰、帳密或登入 token 提交至 Git。新的三支 API 只允許作業擁有者查詢，不變更原有 API 的存取規則。

使用 VS Code REST Client 開啟 `device-accuracy.http`，填入主機、既有帳號、作業 ID、靜止測試區間及量測 XYZ。執行登入後再送其他請求。時間含時區，查詢區間為 `[from, to)`，建議使用 UTC 的 `Z`。

- `GET /api/operations/:opId/device-poses`：查保存的融合資料，可選 `algorithm`。
- `GET /api/operations/:opId/raw-sensor-measurements`：查原始資料，可選 `source`（uwb、imu、simulation）。兩支 GET 都可用 `limit`（1–500）和上一頁的 `nextCursor`，其他篩選條件須保持一致。
- `POST /api/operations/:opId/device-accuracy/evaluate`：不寫入資料，用固定點真值計算各軸偏差、水平及三維距離的平均、RMSE、P95（nearest rank）與最大值。回傳每方法樣本數與排除原因；無樣本的統計回傳 null，不當成零誤差。

評估涵蓋整段時間中符合條件的樣本，超過 20,000 筆時須縮短區間。開啟 `includeSamples` 時，逐筆結果以各演算法各自的 `nextSampleOffset` 續查（使用原本的篩選設定，或只指定要續查的演算法）；分頁不改變該演算法的摘要。請在作業重算完成後查詢，查詢期間勿再重建該批資料。

## 資料判讀

- 本版對已保存的 `OperatorTelemetry` 評估。實測篩選使用新版本 worker 事後重算的資料，**不是現場當時送出的線上輸出精度**。務必使用平台世界座標以及與估計位置相同的 UWB 標籤參考點；固定點驗證不計算角度誤差。
- 僅在確認整次作業使用實體感測器時才送 `confirmHardwareInput: true`。MQTT 也能傳測試資料，系統不能從通道判斷硬體真偽。後端另外排除未知來源、曾混入系統模擬輸入的重算狀態、過舊或缺少的 UWB／IMU、有效站數不足，以及不合格定位解。
- 舊資料沒有 provenance 時，實測模式不納入；可送 `diagnostic: true` 檢查舊或模擬資料，但不可稱為硬體精度。若需要對舊作業實測，確認原始量測仍在後，可先用既有 `backend/scripts/rebuildDeviceTelemetry.mjs --operation-id ID` 檢查；`--apply` 會替換該作業的歷史融合位置，非測試文件的操作。
