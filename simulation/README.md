# UWB + IMU Monte Carlo 模擬器

此工具在 20 m × 12 m × 2.5 m 場域中模擬 8 個 UWB 基地站、操作員真實軌跡、IMU bias / 雜訊、UWB LOS / NLOS 偏差與封包遺失，並比較：

- `ekf`：位置誤差狀態式 Kalman 更新
- `complementary`：IMU 預測 + UWB 低頻校正
- `weighted_average`：依 IMU / UWB 不確定性做反變異數加權

## 執行

```powershell
cd D:\ncku\末端定位技術\code\simulation
python run_monte_carlo.py --trials 100 --duration 60 --seed 42
```

預設會排除前 2 秒的濾波器初始化／收斂期，不將其納入 `summary.json`、`trial_metrics.csv` 與誤差 CDF 的統計。完整資料仍保留於 `telemetry.csv` 與誤差隨時間圖中；可用 `--warmup-seconds 0` 保留全部樣本，或自行指定秒數。

結果預設輸出到 `simulation/output/<timestamp>/`：

- `summary.json`：MAE、RMSE、P50、P95、P99、成功率
- `trial_metrics.csv`：每次 trial、每個演算法的指標
- `raw_sensor_measurements.jsonl`：代表性 trial 的原始 IMU + 8 站 UWB 量測，可對應後端 `RawSensorMeasurement` payload
- `telemetry.csv`：代表性 trial 的真值與三種演算法 telemetry
- `trajectory.png`、`error_cdf.png`、`error_over_time.png`

## 重要參數

```powershell
python run_monte_carlo.py --trials 200 --duration 120 --uwb-dropout 0.08 --nlos-probability 0.12 --nlos-bias 0.45
```
