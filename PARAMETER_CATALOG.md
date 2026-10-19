# 系統與模擬參數總表

> 最後依程式碼盤點：2026-08-06  
> 適用範圍：RGB-D 螺絲定位平台、UWB+IMU 操作員定位平台，以及兩個 Monte Carlo 模擬器。  
> 程式碼依據：`AI/main.py`、`AI/detector.py`、`backend/src/positioning/*.js`、`backend/src/mqtt/mqttClient.js`、`simulation/run_monte_carlo.py`、`simulation/run_screw_localization_monte_carlo.py`。

## 1. 讀法與參數來源分類

本文件刻意區分「模型有文獻依據」與「數值已由實驗標定」。目前專案**尚未有正式實測標定檔**；因此下列標為「實測修正值」的欄位目前均為待填，不可在報告中宣稱為已量測結果。

| 分類 | 定義 | 報告中可用的寫法 |
|---|---|---|
| **L：文獻模型／理論** | 數學形式或演算法有文獻支持；數字未必來自該文獻。 | 「依文獻採用距離相關深度雜訊模型。」 |
| **E：工程／經驗設定** | 為讓模擬、串流或系統運作而設定的數字。 | 「本研究採保守工程設定，後續將以實測校正。」 |
| **S：情境真值設定** | 用於建立可重現模擬場景的幾何、軌跡、隨機種子。 | 「模擬場域與軌跡設定如下。」 |
| **R：實測修正值** | 由真實相機、UWB、IMU、標靶或現場 log 擬合得到。 | 「依實測資料估計。」目前尚未填入。 |
| **N：數值保護／介面設定** | 迭代上限、正則化、逾時、buffer 等。 | 「為數值穩定與系統保護之設定。」 |

### 1.1 重要系統邊界

1. **操作員／設備定位融合**：平台目前可選 `ekf`、`complementary`、`weighted_average`，輸入為 8 個 UWB 基地站距離與 IMU 加速度、角速度。
2. **螺絲定位融合**：平台目前可選 `average`、`ekf`、`es_ekf`、`rmv_fgo`，輸入為經相機外參與設備 pose 轉至世界座標的螺絲觀測。
3. **螺絲 Monte Carlo 模擬器**：`run_screw_localization_monte_carlo.py` 是簡化的離線研究模型；其中 RMV-FGO 同時估計螺絲位置與局部設備 pose 修正，**不會回寫上游 UWB+IMU 結果**。
4. **目前 AI 偵測器為 mock**：`mock_yolo` 會隨機產生 bbox，尚不是訓練完成的 YOLO 權重；不可將目前平台的 bbox 精度視為真實 YOLO 成效。

---

## 2. 世界座標、基地站與平台虛擬場域

### 2.1 UWB+IMU 平台使用的場域與 8 基地站

來源：`backend/src/positioning/esEkf.js`

| 參數 | 值 | 類別 | 意涵與理由 | 實測修正方式 |
|---|---:|:---:|---|---|
| 場域長 × 寬 | `20 m × 12 m` | S | 平台 3D 視圖與虛擬操作員移動範圍。 | 以實際場域量測替換。 |
| 基地站高度 | `z=0` 與 `z=2.5 m` | S | 每個平面角落各配置低／高兩個站，提高 3D 幾何可觀測性。 | 測量各 anchor 相對世界原點之座標。 |
| Anchor 0 | `(0, 0, 0) m` | S | 左下低位基地站。 | R：全站儀／捲尺／CAD 座標。 |
| Anchor 1 | `(20, 0, 0) m` | S | 右下低位基地站。 | 同上。 |
| Anchor 2 | `(0, 12, 0) m` | S | 左上低位基地站。 | 同上。 |
| Anchor 3 | `(20, 12, 0) m` | S | 右上低位基地站。 | 同上。 |
| Anchor 4 | `(0, 0, 2.5) m` | S | 左下高位基地站。 | 同上。 |
| Anchor 5 | `(20, 0, 2.5) m` | S | 右下高位基地站。 | 同上。 |
| Anchor 6 | `(0, 12, 2.5) m` | S | 左上高位基地站。 | 同上。 |
| Anchor 7 | `(20, 12, 2.5) m` | S | 右上高位基地站。 | 同上。 |
| 設備初始位置 | `(10, 6, 1.45) m` | E/S | 位於場域中心、高度約人體佩戴設備高度。 | 由操作開始時實際 pose 初始化。 |
| 設備初始速度 | `(0, 0, 0) m/s` | E | 操作開始時假設靜止。 | 由 IMU／上次 telemetry 初始化。 |
| 初始四元數 | `(1, 0, 0, 0)` | E | 單位四元數，代表無初始旋轉。 | 由 IMU 靜態校正結果取代。 |
| 初始位置變異數 | `(0.4, 0.4, 0.4) m²` | E | 初始位置標準差約 `0.632 m`，避免濾波器一開始過度自信。 | 以初始定位誤差統計設定。 |

### 2.2 平台虛擬螺絲地圖

來源：`backend/src/positioning/screwWorkspace.js`

| ID | 類型 | 座標 ((x,y,z)) m | 類別 | 意涵 |
|---|---|---|:---:|---|
| A-1 | M4 hex screw | `(1.2, 1.2, 1.1)` | S | 左下角 M4 群組。 |
| A-2 | M4 hex screw | `(2.0, 1.2, 1.1)` | S | 左下角 M4 群組。 |
| B-1 | M6 socket screw | `(18.0, 1.2, 1.1)` | S | 右下角 M6 群組。 |
| B-2 | M6 socket screw | `(18.8, 1.2, 1.1)` | S | 右下角 M6 群組。 |
| B-3 | M6 socket screw | `(1.2, 10.8, 1.1)` | S | 左上角 M6 群組。 |
| B-4 | M6 socket screw | `(2.0, 10.8, 1.1)` | S | 左上角 M6 群組。 |
| A-3 | M4 hex screw | `(18.0, 10.8, 1.1)` | S | 右上角 M4 群組。 |
| A-4 | M4 hex screw | `(18.8, 10.8, 1.1)` | S | 右上角 M4 群組。 |
| 可見深度範圍 | `0.35–5.0 m` | E | 只有在相機前方且距離有效的螺絲可被虛擬辨識。 | 改用相機實際最小／最大可靠深度。 |
| 水平 FOV | `70°` | E | 平台虛擬相機可視角。 | 由內參和影像尺寸計算。 |
| 垂直 FOV | `52°` | E | 平台虛擬相機可視角。 | 同上。 |
| 鄰近提示距離 | `3.0 m` | E | 不受相機朝向影響；操作員接近任一螺絲即提示。 | 以作業安全距離與任務需求定義。 |

---

## 3. 即時操作員定位：UWB + IMU 融合參數

來源：`backend/src/positioning/esEkf.js`

### 3.1 共用 IMU 預測與 UWB 多邊定位

| 參數 | 值 | 類別 | 意涵與理由 | 實測修正方式 |
|---|---:|:---:|---|---|
| 有效 UWB 最少站數 | `4` | L/E | 3D 距離多邊定位至少需 4 個非退化基地站。 | 保留；若使用高度約束可另行設計。 |
| IMU 積分 (Delta t) 下限 | `0.001 s` | N | 避免同時間戳造成零除或無意義更新。 | 依 IMU 實際取樣率設定。 |
| IMU 積分 (Delta t) 上限 | `0.1 s` | N | 避免 MQTT 暫停後一次積分太長而使位置發散。 | 依可容忍封包間隔調整。 |
| 位置變異數增量 | `0.03 × dt` | E | IMU 預測後增加不確定性，承認慣性積分會漂移。 | 以靜置／步行 IMU 殘差擬合 (Q)。 |
| UWB 多邊定位最大迭代 | `5` | N | 非線性最小平方求解上限。 | 以殘差與運算時間測試。 |
| 單輪多邊定位修正上限 | 每軸 `±1 m` | N | 避免不良 range 造成單次跳變。 | 依最大步速與更新率設定。 |
| 多邊定位收斂門檻 | (|Delta p|<0.001 m) | N | 位置修正小於 1 mm 即停止迭代。 | 可採 (10^{-3})–(10^{-2}) m。 |
| UWB 殘差變異數下限 | `0.01 m²` | N | 避免反比權重除以接近零的變異數。 | 以 UWB 最小可信變異數取代。 |

### 3.2 操作員 EKF（程式稱為 error-state position correction）

| 參數 | 值 | 類別 | 意涵與理由 | 實測修正方式 |
|---|---:|:---:|---|---|
| 每筆 UWB range 更新迭代 | `2` 次 | E/N | 對 range 非線性量測做兩輪局部修正。 | 比較 1、2、3 次對延遲與殘差的影響。 |
| 分母中的量測雜訊項 | `0.08` | E | 出現在 (K=P h/(h^2P+0.08))，扮演 UWB range 量測變異數／調節項。 | 由 LOS、NLOS range 殘差分別擬合。 |
| 後驗變異數下限 | `0.01 m²` | N | 防止濾波器協方差降為零而失去後續修正能力。 | 由濾波一致性分析調整。 |

### 3.3 互補濾波與加權平均

| 演算法 | 參數 | 值 | 類別 | 意涵 |
|---|---|---:|:---:|---|
| Complementary | (alpha) | `0.86` | E | (hat p=alpha p_{IMU}+(1-alpha)p_{UWB})；每次 UWB 更新保留 86% 慣性預測、採用 14% UWB 位置。 |
| Complementary | 變異數下限 | `0.01 m²` | N | 避免不確定性過度縮小。 |
| Weighted average | 權重 | (w=1/sigma^2) | L | UWB 與 IMU 位置依其變異數反比加權。 |
| Weighted average | 變異數下限 | `0.01 m²` | N | 防止無限大權重。 |

> **注意**：(alpha=0.86) 是工程設定，不是由目前程式內任何實測資料求得。若 UWB 更新頻率改變，(alpha) 也應重新調整。

---

## 4. 即時螺絲定位平台參數

來源：`backend/src/positioning/screwFusion.js`、`backend/src/mqtt/mqttClient.js`。

### 4.1 RGB-D 到世界座標的目前平台簡化模型

| 參數 | 值 | 類別 | 意涵與理由 | 實測修正方式 |
|---|---:|:---:|---|---|
| 預設 bbox | `x=860, y=465, w=200, h=150 px` | E | MQTT 偵測未提供 bbox 時的 fallback；不可視為模型輸出。 | 偵測模型應永遠提供 bbox。 |
| 影像中心 | `(960, 540) px` | E | 對應 1920×1080 彩色畫面中心。 | 由實際影像尺寸與內參主點替代。 |
| 水平投影係數 | `0.577` | E | 將水平像素偏移與深度換算為相機座標的簡化係數。 | 改用 (f_x,c_x) 反投影。 |
| 垂直投影係數 | `0.325` | E | 將垂直像素偏移與深度換算為相機座標的簡化係數。 | 改用 (f_y,c_y) 反投影。 |
| 深度單位轉換 | `depthMeters × 100` | E | 偵測文件中以 cm 儲存深度。 | 統一規格為 m，避免單位混淆。 |
| 世界座標旋轉 | 僅使用 yaw | E | 目前以設備 yaw 轉換相機前方／橫向位置。 | 實機應使用完整四元數 (R_W^B) 與相機外參 (R_B^C,t_B^C)。 |

### 4.2 平台螺絲量測不確定性模型

平台內的即時螺絲融合與離線螺絲 Monte Carlo 模擬器使用**不同模型**，不可混用。

$$
\sigma_{lat}(d)=\min(0.12,\ 0.012+0.009d)\ \mathrm{m}
$$

$$
\sigma_{axial}(d)=\min(0.16,\ 0.018+0.014d)\ \mathrm{m}
$$

| 參數 | 值 | 類別 | 意涵 |
|---|---:|:---:|---|
| 最小深度輸入 | `0.2 m` | N | 深度缺失或過小時，避免不確定性模型失效。 |
| 橫向不確定性基礎值 | `0.012 m` | E | 平台簡化 RGB-D 量測誤差。 |
| 橫向距離係數 | `0.009 m/m` | E | 距離增加時的橫向不確定性成長。 |
| 橫向上限 | `0.12 m` | N/E | 防止遠距值無限制變大。 |
| 深度方向基礎值 | `0.018 m` | E | 平台簡化深度誤差。 |
| 深度方向距離係數 | `0.014 m/m` | E | 距離增加時的深度不確定性成長。 |
| 深度方向上限 | `0.16 m` | N/E | 防止遠距值無限制變大。 |

### 4.3 螺絲融合演算法

| 演算法 | 參數 | 值 | 類別 | 意涵 |
|---|---|---:|:---:|---|
| 共用 | 滑動視窗大小 | `60` 筆觀測 | E/N | 每顆螺絲僅保留最近 60 筆 average telemetry 作為當次融合輸入，限制運算量與資料庫查詢量。 |
| Average | 權重 | 等權平均 | E | 平均原始世界座標；同時計算散布與量測變異數。 |
| EKF | (Q_x,Q_y,Q_z) | `(6e-5, 6e-5, 1.2e-4) m²` | E | 靜態螺絲仍保留極小過程雜訊，以避免過度自信。 |
| ES-EKF | (Q_x,Q_y,Q_z) | `(4e-5, 4e-5, 8e-5) m²` | E | 誤差狀態版使用較小過程雜訊；目前為加性靜態點 ESKF。 |
| RMV-FGO | Huber 門檻 | `2.5` | L/E | 馬氏殘差超過 2.5 時，權重改為 (2.5/e)。Huber 形式有文獻依據，數值是工程設定。 |
| RMV-FGO | 最大 IRLS 迭代 | `8` | N | 即時平台採較低上限，避免阻塞串流。 |
| RMV-FGO | 收斂門檻 | `0.0001 m` | N | $\lVert p^{r+1}-p^r\rVert<0.1$ mm 時停止。 |
| 共用 | 數值常數 | `1e-9` | N | 防止分母為零。 |

> **目前平台 RMV-FGO 的限制**：它是每顆螺絲的魯棒多視角 IRLS 加權平均，並未使用螺絲地圖先驗、設備 pose 修正狀態與完整 block information matrix；後者是在 `run_screw_localization_monte_carlo.py` 的研究型 RMV-FGO 中實作。報告中應清楚區分「平台簡化版」與「Monte Carlo 聯合因子圖版」。

---

## 5. 即時影像、AI 與通訊設定

來源：`AI/main.py`、`AI/rtsp_stream.py`、`AI/detector.py`、`AI/sender.py`、`backend/src/mqtt/mqttClient.js`。

### 5.1 RTSP 與影像處理

| 參數 | 值 | 類別 | 意涵 |
|---|---:|:---:|---|
| 彩色 RTSP URL | `rtsp://localhost:8554/cam-color` | E | 光學影像輸入通道。 |
| 深度 RTSP URL | `rtsp://localhost:8554/cam-depth` | E | 深度影像輸入通道。 |
| OpenCV stream buffer | `1` frame | N | 降低延遲，代價是網路不穩時可能直接丟棄舊幀。 |
| 尺寸不一致處理 | depth resize 至 color 尺寸 | E | 僅使兩張畫面尺寸相同；**不等於 RGB-D 幾何校正**。 |
| AI 處理／輸出幀率 | `20 fps` | E | FFmpeg raw-video writer 與 live publisher 的設定。 |
| H.264 CRF | `18` | E | 較高畫質的編碼品質設定。 |
| H.264 preset | `fast` | E | 壓縮效率與即時性折衷。 |
| live H.264 tune | `zerolatency` | E | 降低觀看端延遲。 |
| GOP / keyint | `20` frames | E | 約每秒一個 key frame（20 fps）。 |
| B-frames | `0` | N | 避免 WebRTC 對 H.264 B-frame 的相容性問題。 |
| stream 中斷判定 | `10 s` | E/N | 連續讀取失敗約 10 秒後結束 operation。 |
| AI→Backend HTTP timeout | `2 s`，最多重試 `3` 次 | N | 發送 detection 的可用性保護。 |
| Backend→AI config／operation timeout | `3 s` | N | 防止後端等待 AI 服務過久。 |

### 5.2 目前 mock 偵測器設定

| 參數 | 值 | 類別 | 意涵 |
|---|---:|:---:|---|
| 預設偵測演算法 | `mock_yolo` | E | 目前僅為 dispatch 名稱，不會載入 YOLO 權重。 |
| 可選偵測名稱 | `mock_yolo`、`template_matching`、`edge_based` | E | 三者目前皆回到相同 mock 偵測函式。 |
| bbox 尺寸 | `200 × 150 px` | E | mock bbox 固定大小。 |
| bbox 中心 | 彩色影像內隨機 | E | 用於展示介面，不具真實偵測意義。 |
| mock confidence | `0.9` | E | 固定展示值，不可用於精度分析。 |
| 深度取樣 | bbox 中心像素的 B 通道值 | E | mock depth lookup；實機應取 aligned depth，並用 bbox 內有效深度中位數／截尾平均。 |

### 5.3 MQTT 與資料記錄

| 項目 | 值 | 類別 | 意涵 |
|---|---:|:---:|---|
| MQTT broker | `mqtt://localhost:1883` | E | 本機開發 broker。 |
| operation start/end QoS | `2` | E | 確保作業開始、結束訊號至少一次且避免遺失。 |
| detection / UWB / IMU QoS | `1` | E | 允許至少一次傳遞；接收端需能處理重複訊息。 |
| 訂閱 topic | `vision/operation/start`、`vision/operation/end`、`vision/detection`、`vision/uwb/ranges`、`vision/imu/data` | E | 系統輸入主題。 |
| 通知 topic | `vision/notification`，QoS `1` | E | 操作員接近螺絲時的提示。 |
| 通知抑制時間 | `5 s` | E | 同一提示避免每個 telemetry 更新重複發送。 |
| 原始資料持久化 | `RawSensorMeasurement` | E | 每筆 UWB、IMU 或虛擬量測先存原始 payload；結束後重建各定位演算法 telemetry。 |

---

## 6. UWB + IMU Monte Carlo 模擬器

來源：`simulation/run_monte_carlo.py`。此模擬器比較設備定位的 `ekf`、`complementary`、`weighted_average`，並產生可寫入資料庫的 raw sensor payload。

### 6.1 實驗控制與真值軌跡

| 參數 | 值 | 類別 | 意涵 |
|---|---:|:---:|---|
| trial 數 | `100` | S | Monte Carlo 重複次數。 |
| 每 trial 時長 | `60 s` | S | 每次完整四角走訪時間。 |
| 取樣間隔 | `0.05 s` | S | 20 Hz，共約 1200 個樣本／trial。 |
| 隨機種子 | `42` | S | 確保結果可重現。 |
| warm-up 排除 | `2 s` | E | 統計 MAE/RMSE 時排除故意非真值初始化的收斂期；完整 telemetry 仍保留。 |
| 軌跡角落 | `(2,2) → (18,2) → (18,10) → (2,10) m` | S | 場域內四角平滑步行迴圈。 |
| 平面插值 | smoothstep (u^2(3-2u)) | S/L | 使位置、速度在段落銜接更平滑。 |
| 真值高度 | $z=1.40+0.05\sin(0.32t)$ m | S | 小幅人體／設備垂直擺動。 |

### 6.2 UWB、IMU 誤差生成

| 參數 | 值 | 類別 | 意涵與理由 | 實測修正方式 |
|---|---:|:---:|---|---|
| UWB LOS range 標準差 | `0.08 m` | E | 每個基地站距離量測的高斯雜訊。 | 固定 tag 與 anchor，計算 range residual std。 |
| UWB 掉包率 | `4%` | E | 每個基地站每筆量測缺失機率。 | 從 MQTT／UWB log 統計。 |
| NLOS 機率 | `10%` | E | 每個基地站進入 NLOS 誤差情境的機率。 | 以遮擋場景實測分類。 |
| NLOS 正偏差 | `0.45 m` | E | NLOS range 額外增加的平均偏差，並加入指數尾端。 | 以 NLOS range residual 分布擬合。 |
| 加速度白雜訊 std | `0.035 m/s²` | E | IMU 加速度量測雜訊。 | Allan variance 或靜置資料 std。 |
| 陀螺儀白雜訊 std | `0.35°/s` | E | z 軸角速度量測雜訊。 | Allan variance 或靜置資料 std。 |
| 加速度 bias random walk | `0.003 m/s²/√s` | E | 緩慢變化的加速度 bias。 | Allan variance bias instability。 |
| 陀螺 bias random walk | `0.03°/s/√s` | E | 緩慢變化的 gyro bias。 | 同上。 |
| filter 初始位置 | `(10,6,1.4) m` | S | 刻意不設為真值，使 warm-up 評估有意義。 | 實機使用起始定位結果。 |
| filter 初始位置變異數 | `0.4 m² / axis` | E | 初始不確定性。 | 以啟動時定位誤差統計設定。 |

### 6.3 此模擬器內三種設備定位演算法

| 演算法 | 參數 | 值 | 類別 | 意涵 |
|---|---|---:|:---:|---|
| EKF | UWB 更新輪數 | `2` | E/N | 每時刻對全部有效 range 進行兩輪逐站更新。 |
| EKF | UWB 分母雜訊項 | `0.08` | E | 與即時平台相同。 |
| Complementary | (alpha) | `0.86` | E | IMU 高頻預測與 UWB 絕對位置的混合比例。 |
| Weighted average | 權重 | inverse variance | L | 兩來源依不確定性加權。 |

---

## 7. 螺絲定位 Monte Carlo 模擬器

來源：`simulation/run_screw_localization_monte_carlo.py`。這是用於比較螺絲世界座標融合方法的主要研究模擬器。

### 7.1 實驗控制與場景幾何

| 參數 | 值 | 類別 | 意涵 |
|---|---:|:---:|---|
| 場域 | `20 × 12 × 2.8 m` | S | 螺絲定位模擬世界座標範圍。 |
| trial 數 | `50` | S | 程式預設重複次數；報告若寫 100 次，應以 CLI `--trials 100` 實際重跑。 |
| 時長 | `45 s` | S | 操作員走訪兩組螺絲的時長。 |
| 取樣間隔 | `0.20 s` | S | 5 Hz，約 225 幀／trial。 |
| seed | `20260802` | S | 結果可重現。 |
| 螺絲種類 | M4、M5 | S | 類別可用於 Hungarian 關聯限制。 |
| 螺絲數 | 8 | S | 左下與右上各一群，每類四顆。 |
| 螺絲高度 | `0.78 m` | S | 模擬工作面上的螺絲高度。 |

螺絲真值座標：

| ID | 類型 | ((x,y,z)) m |
|---|---|---|
| M4-A | M4 | `(1.40, 1.35, 0.78)` |
| M4-B | M4 | `(1.72, 1.35, 0.78)` |
| M5-A | M5 | `(1.40, 1.75, 0.78)` |
| M5-B | M5 | `(1.72, 1.75, 0.78)` |
| M4-C | M4 | `(18.25, 10.25, 0.78)` |
| M4-D | M4 | `(18.57, 10.25, 0.78)` |
| M5-C | M5 | `(18.25, 10.65, 0.78)` |
| M5-D | M5 | `(18.57, 10.65, 0.78)` |

設備由下列 waypoint 經 smoothstep 插值移動：

`(3.2,2.8,1.55) → (2.8,2.1,1.55) → (2.6,1.8,1.55) → (7.0,4.0,1.55) → (12.8,7.5,1.55) → (17.2,9.3,1.55) → (17.5,9.6,1.55) → (17.7,9.9,1.55) → (14.2,8.0,1.55) → (8.0,4.2,1.55) → (3.2,2.8,1.55)`。

其高度另加上：

$$
z_B(t)=1.55+0.035\sin(0.55t)\ \mathrm{m}
$$

設備 yaw 始終朝向目前最近的螺絲。這些皆屬 S：用於讓視角改變、同類螺絲相鄰與關聯問題可被重現，不是現場實測軌跡。

### 7.2 相機可見性與 RGB-D 雜訊

| 參數 | 值 | 類別 | 意涵與理由 | 實測修正方式 |
|---|---:|:---:|---|---|
| 前向有效距離 | `0.35–3.2 m` | E/S | 螺絲進入相機前方且在此範圍才可觀測。 | 依 D405／實際相機可靠工作距離。 |
| 水平半視角 | `48°` | E | 可見條件 $\lvert\theta_h\rvert\leq48^\circ$。 | 由實際 $f_x$、影像寬度計算。 |
| 垂直半視角 | `34°` | E | 可見條件 $\lvert\theta_v\rvert\leq34^\circ$。 | 由實際 $f_y$、影像高度計算。 |
| 偵測漏失率 | `22%` | E | 模擬遮擋、反光與模型漏檢。 | 用有標註影片計算 recall／miss rate。 |
| pixel std | `1.8 px` | E，模型 L | bbox 中心像素不確定性；以 $d\sigma_{px}/f$ 傳至橫向公尺誤差。 | 固定標靶連續偵測，估計 bbox 中心 RMSE。 |
| 模擬焦距 | `930 px` | E | 像素誤差轉橫向誤差用。 | 取相機標定的 (f_x,f_y)。 |
| 橫向誤差下限 | `0.002 m` | E/N | $\sigma_{lat}=\max(0.002,d\sigma_{px}/930)$。 | 由近距離靜態量測決定。 |
| 基礎深度 std | `0.012 m` | E，模型 L | (sigma_d(d)=0.012+0.006d^2) 的常數項。 | 固定深度平面／螺絲標靶重複量測。 |
| 二次深度係數 | `0.006 m/m²` | E，模型 L | 描述深度不確定性隨距離二次增加；並非文獻直接給出的固定係數。 | 多個距離擬合 (a+bd^2)。 |
| 深度離群率 | `8%` | E | 模擬深度邊界混合像素與反光。 | 依深度殘差超出 gate 的比例估計。 |
| 離群平均偏移 | `(0.28,0.24,0.18) m` | E | 模擬深度錯取時的明顯正向／橫向偏差。 | 由錯誤深度樣本分布擬合。 |
| 離群 std | `(0.08,0.08,0.06) m` | E | 離群偏差的隨機散布。 | 同上。 |

相機座標協方差的目前簡化形式：

$$
\mathbf{\Sigma}_{C}=\operatorname{diag}
\left(\sigma_d^2,\sigma_{lat}^2,\sigma_{lat}^2\right)
$$

$$
\sigma_d(d)=0.012+0.006d^2,\qquad
\sigma_{lat}(d)=\max\left(0.002,\frac{d\times1.8}{930}\right)
$$

這是對角協方差簡化。實機版建議用反投影 Jacobian 將像素、深度、外參與設備 pose 的完整協方差傳遞至世界座標。

### 7.3 模擬的上游 UWB+IMU pose 殘差

| 參數 | 值 | 類別 | 意涵 | 實測修正方式 |
|---|---:|:---:|---|---|
| 每幀位置 std | `0.080 m` | E | 上游融合結果的隨機位置殘差。 | 真實 pose 對 ground truth 誤差 std。 |
| 每幀 yaw std | `1.8°` | E | 上游融合結果的隨機航向殘差。 | IMU／外部姿態真值差的 std。 |
| 每 trial 固定位置 bias std | `0.085 m` | E | 基站幾何／外參誤差造成，不會隨多幀平均消失。 | 每次操作的平均殘差分布。 |
| 每 trial 固定 yaw bias std | `2.5°` | E | 校正或航向參考誤差。 | 多次啟動校正結果。 |
| 位置漂移步進 std | `0.003 m` | E | 相關慢漂移，不用獨立白雜訊造成不自然跳動。 | 由 pose residual 自相關函數擬合。 |
| 漂移自回歸係數 | `0.985` | E | 使相鄰時間的漂移具有連續性。 | 由殘差時間相關性擬合。 |
| 較差 pose 情境機率 | `6%` | E | 少量 NLOS／校正失敗 trial，製造實際常見長尾。 | 按場景分類統計。 |
| 較差位置 bias std | `0.36 m` | E | NLOS 或幾何不佳時的額外位置偏差。 | NLOS 場景誤差分布。 |
| 較差 yaw bias std | `7°` | E | 較差姿態校正情境。 | 實機航向殘差分布。 |

世界座標觀測協方差：

$$
\mathbf{\Sigma}_{W}=
\mathbf{R}_{WC}\mathbf{\Sigma}_{C}\mathbf{R}_{WC}^{T}
+\mathbf{\Sigma}_{p}
+\mathbf{J}_{\psi}\sigma_{\psi}^{2}\mathbf{J}_{\psi}^{T}
$$

它將 RGB-D 深度／像素雜訊、設備平移不確定性與 yaw 誤差一併傳遞到螺絲世界座標。

### 7.4 關聯與螺絲融合演算法設定

| 模組 | 參數 | 值 | 類別 | 意涵與理由 |
|---|---|---:|:---:|---|
| Hungarian | 類別限制 | M4 僅配 M4；M5 僅配 M5 | E | 不同類別成本設為 `1e6`，直接排除。 |
| Hungarian | 關聯成本 | 平方馬氏距離 | L | (d^2=(z-l)^TR^{-1}(z-l))。 |
| Hungarian | gate | (d^2≤36)，即 (d≤6) | E | 寬鬆 6σ 工程 gate，用以容忍模擬的 pose 系統偏差；非嚴格卡方門檻。 |
| EKF | 過程雜訊 | `diag(1.5e-5,1.5e-5,2.5e-5) m²` | E | 靜態螺絲仍保留約 3.9、3.9、5.0 mm／frame 的不確定性增量。 |
| ES-EKF | 創新門檻 | (d_{innov}=3.0) | E/L | 大於 3 時不拒絕量測，而是膨脹其 (R)。 |
| ES-EKF | (R) 膨脹 | $R\leftarrow R(d/3)^2$ | E | 降低 gross observation 的 Kalman gain。 |
| RMV-FGO | 螺絲地圖先驗 std | `0.300 m` | E | 地圖可被觀測修正，但避免 gauge ambiguity 與漂移。 |
| RMV-FGO | 設備平移先驗 std | `0.040 m` | E | 僅允許內部局部 pose 修正，避免覆寫上游定位。 |
| RMV-FGO | yaw 先驗 std | `1.0°` | E | 限制局部航向修正量。 |
| RMV-FGO | Huber (delta) | `2.8` | E/L | 馬氏殘差超過此值時以 (delta/e) 降權。 |
| RMV-FGO | 最大迭代 | `25` | N | 批次 IRLS／Gauss-Newton 類求解上限。 |
| RMV-FGO | 收斂門檻 | (|x^{r+1}-x^r|<1e-7) | N | 程式內部數值停止條件。 |
| 所有解法 | 對角正則化 | (1e-10I) | N | 避免資訊矩陣近奇異。 |

> 關聯 gate 的實務建議：若已完成實測協方差校正，三維 95%、99%、99.7% 的卡方 gate 約為 (7.815)、(11.345)、(14.16)。目前 36 是為了模擬含大型 pose bias 的保守情境；實機不可直接沿用，應由正確／錯誤配對的 NIS 分布重新選定。

---

## 8. 文獻對應表

| 編號 | 文獻 | 支撐內容 | 與本專案數值的關係 |
|---|---|---|---|
| [1] | P. Peng *et al.*, “An Indoor Positioning Method Based on UWB and Visual Fusion,” *Sensors*, 22(4), 1394, 2022, doi: [10.3390/s22041394](https://doi.org/10.3390/s22041394). | UWB 與視覺融合的系統架構。 | 支撐系統方向；**不直接提供本專案所有 UWB 誤差值**。 |
| [2] | F. Dellaert and M. Kaess, “Factor Graphs for Robot Perception,” *Foundations and Trends in Robotics*, 6(1–2), 1–139, 2017, doi: [10.1561/2300000043](https://doi.org/10.1561/2300000043). | 因子圖、MAP、非線性最小平方、Jacobian 與資訊矩陣。 | 支撐 RMV-FGO 形式；先驗 std、迭代上限由本專案設定。 |
| [3] | P. J. Huber, “Robust Estimation of a Location Parameter,” *The Annals of Mathematical Statistics*, 35(1), 73–101, 1964, doi: [10.1214/aoms/1177703732](https://doi.org/10.1214/aoms/1177703732). | Huber loss／M-estimation。 | 支撐魯棒降權形式；(delta=2.5,2.8) 是本專案工程值。 |
| [4] | D. P. Frost, O. Kähler, and D. W. Murray, “Object-Aware Bundle Adjustment for Correcting Monocular Scale Drift,” *ICRA*, 2016, pp. 4770–4776, doi: [10.1109/ICRA.2016.7487680](https://doi.org/10.1109/ICRA.2016.7487680). | 物件視覺量測與偵測不確定性；文中點量測採像素尺度雜訊。 | 支撐像素級量測不確定性的概念；`1.8 px` 非該文直接數值。 |
| [5] | A. Chatterjee and V. M. Govindu, “Noise in Structured-Light Stereo Depth Cameras: Modeling and its Applications,” *arXiv*, 2015, doi: [10.48550/arXiv.1505.01936](https://doi.org/10.48550/arXiv.1505.01936). | 結構光立體深度雜訊隨距離呈二次關係。 | 支撐 (a+bd^2) 形式；`0.012`、`0.006` 是本專案模擬係數。 |
| [6] | K. Khoshelham and S. O. Elberink, “Accuracy and Resolution of Kinect Depth Data for Indoor Mapping Applications,” *Sensors*, 12(2), 1437–1454, 2012, doi: [10.3390/s120201437](https://doi.org/10.3390/s120201437). | 深度隨距離增加而誤差增加的實驗證據。 | 支撐距離相關深度誤差；不可直接搬用至 D405。 |
| [7] | H. W. Kuhn, “The Hungarian Method for the Assignment Problem,” *Naval Research Logistics Quarterly*, 2(1–2), 83–97, 1955, doi: [10.1002/nav.3800020109](https://doi.org/10.1002/nav.3800020109). | 最小總成本一對一指派。 | 支撐 Hungarian 關聯；類別限制與 36 gate 是本專案設定。 |
| [8] | Y. Bar-Shalom, X.-R. Li, and T. Kirubarajan, *Estimation with Applications to Tracking and Navigation*. Wiley, 2001, doi: [10.1002/0471221279](https://doi.org/10.1002/0471221279). | 馬氏距離、驗證 gate 與追蹤估計。 | 支撐關聯 gate／NIS 概念；實際 gate 應由資料校正。 |

---

## 9. 實測校正計畫：將 E 轉為 R

| 目標參數 | 建議量測方法 | 輸出／更新位置 |
|---|---|---|
| RGB bbox pixel std | 固定已知螺絲／AprilTag，收集 (N) 幀 bbox 中心，計算相對真值 RMSE。 | 更新 (sigma_{px})；最好依 confidence 與距離分箱。 |
| 深度 (a,b) | 在多個已知距離、不同入射角與螺絲材質下重複量測，擬合 (sigma_d(d)=a+bd^2)。 | 更新 depth noise model 與 (R)。 |
| 相機內外參 | 棋盤格／AprilTag 校正內參；以手眼或已知標靶求 (R_B^C,t_B^C)。 | 取代平台簡化投影係數 `0.577, 0.325`。 |
| UWB range noise／NLOS | 固定 tag 於已知位置，分 LOS/NLOS 記錄 8 個 range residual。 | 更新 range (R)、NLOS 機率、bias 與關聯 gate。 |
| IMU noise 與 bias random walk | 靜置資料做 Allan variance；步行資料驗證。 | 更新 IMU (Q)、bias random walk。 |
| 設備 pose 殘差 | 用 motion capture、全站儀或高可信 ground truth 對照 UWB+IMU 輸出。 | 更新 $\Sigma_p$、$\sigma_\psi$、固定 bias 與漂移模型。 |
| 螺絲關聯 gate | 標註正確／錯誤配對，繪製平方馬氏距離 ROC／CDF。 | 選擇 (chi^2) gate 或資料驅動門檻。 |
| Huber (delta) 與 FGO 先驗 | 在驗證集以 MAE、P95、錯配率、延遲做 grid search。 | 更新 (delta)、地圖先驗與 pose 軟先驗。 |

## 10. 報告使用注意事項

1. 對 `1.8 px`、`0.012+0.006d² m`、`0.08 m` UWB range std、NLOS 機率等數值，應稱為「目前保守模擬設定」，不可稱為 D405 或現場 UWB 的原廠／實測規格。
2. 對演算法本身可引用文獻；對數值必須標示其來源分類。
3. 平台即時螺絲融合與研究模擬器 RMV-FGO 的狀態與先驗不同；比較結果時需寫清楚使用哪一個版本。
4. 實機上應使用完整相機內參、RGB-depth 對齊、四元數姿態與相機外參；目前 mock 偵測與簡化投影僅供平台展示與資料流測試。
