# test_color.mp4／test_depth.mp4 同幀串接

## 使用方式

本次修改為 `test2.py --rgbd` 接入真實存在的兩個測試影片來源，不再以整張相同距離的平面取代深度影片。

先退出原本 test2，再在啟動平台的同一個環境執行：

```bash
TEST_USER_ID=實際使用者ID .venv/bin/python AI/test/test2.py --rgbd
```

Windows PowerShell：

```powershell
$env:TEST_USER_ID='實際使用者ID'
python .\AI\test\test2.py --rgbd
```

輸入 s 開始、e 結束、q 退出。網頁切換光學／深度，讀取同一組封包中對應的影像。後端封包與前端 API 沿用現有格式，本次只改測試發送端；不需重新建置前端。需要錄製新操作才能看到新深度內容，舊紀錄不會被改寫。

## 同幀來源配對

```text
test_color.mp4 ─┐
               ├─ 同一來源索引 → 共同尺寸 → 一組 RGB-D 封包 → AI／儲存／歷史播放
test_depth.mp4 ─┘
```

兩路 RTSP `cam-color`／`cam-depth` 仍沿用 test2 的預覽與獨立錄影發布；**同幀定位與同幀播放器依據上圖的封包，不依據兩條 RTSP 的到達順序**。本次沒有新增一條具有兩個 media track 的 RTSP session，也沒有替獨立 RTSP MP4 建立逐幀 PTS 對照。

目前手上的兩支測試檔案：

| 檔案 | 解析度 | FPS | 幀數 |
|---|---|---|---|
| test_color.mp4 | 958×534 | 30 | 1103 |
| test_depth.mp4 | 922×536 | 30 | 1192 |

這兩支不是已驗證的相機成對原始 RGB-D。測試程式假設來源第 n 幀互相對應；尺寸縮放只能用來展示，不能建立真正的彩色／深度幾何 alignment。

處理規則：

- 兩來源 FPS 必須相同，否則停止並要求先離線對齊。
- 使用共同的前 `min(colorCount, depthCount)` 幀；目前為1103幀。
- 到共同尾端時兩來源一起 rewind；depth 額外89幀不獨立播放，避免下一圈錯配。
- 其中一路解碼失敗，停止回報，不單獨跳過某一路繼續配對。
- 目前輸出預設10組／秒、每組讀一對來源影格；背壓下可更慢，屬測試播放，不保證和來源30 FPS實時速度相同。
- 來源索引與循環數不受獨立 RTSP 預覽進度控制。測試本機的同幀封包內兩影像一致，但不保證獨立 RTSP 預覽與封包在同一時刻播到相同內容。

每幀 metadata 保存 sourceFrameIndex、sourceLoop、sourceTimeMs、sourceFps、pairedSourceFrames、colorSource、depthSource、pairingMethod、alignmentKind 與深度映射資訊。sourceTimeMs 是檔案相對時間，不替代該封包使用的設備取樣／模擬擷取時間。

## 灰階影片與距離

MP4 是8-bit顯示影片，不能恢復真實相機的原始深度。本次定義明確的示範映射：

```text
demo_depth_mm = round(gray / 255 × 6000)
depthScaleMeters = 0.001
0 代表無效
```

AI 原本的固定0–6 m預覽會把這個值轉回灰階，因此深度畫面可以保留影片的輪廓與明暗，而不是一整片均勻灰色。壓縮與取整會帶來小差異。

這些米制值只用於展示管線，**不能用來做實際定位精度實驗**。文字、影片壓縮與繪製的框線也會進入灰階映射。Metadata 明確標示：

```json
{
  "dataSource": "simulation",
  "depthValueKind": "pseudo-depth-from-gray-video",
  "alignmentKind": "demo-resize-assumption",
  "depthMapping": {
    "grayMin": 0,
    "grayMax": 255,
    "metersMin": 0,
    "metersMax": 6,
    "zeroIsInvalid": true
  }
}
```

真實相機改接時應直接傳 aligned uint16 深度與實際 scale／內參，移除這個灰階映射，並使用真實擷取時間。不能只把 dataSource 改成 sensor。

## 單獨測試發送器

在既有有效作業、AI 已接受該 opID，且沒有其他同幀發送器的情況下：

```bash
.venv/bin/python AI/test/rgbd_sender.py \
  --operation-id 實際操作ID \
  --color AI/test/test_color.mp4 \
  --depth AI/test/test_depth.mp4 \
  --fps 10 --frames 30
```

此工具會查詢後端的 `/api/device/pose/:operationId` 取得同一組 UWB／IMU 設備位置與姿態；不要另外建立虛構的 pose 軌跡。跨機可另指定 --backend 與 --url，仍需先處理網路可達性。

## 測試

```bash
.venv/bin/python -m unittest discover -s AI/test -p 'test_rgbd_paired_video.py' -v
.venv/bin/python AI/test/rgbd_e2e.py --paired-videos
```

Windows 使用 python 替代 .venv/bin/python。第二個指令使用隔離 MongoDB 測試庫，驗證實際兩影片→封包→儲存→深度影像 API。它不建立正式操作，也不修改來源影片。

程式：`AI/test/paired_video.py`、`AI/test/rgbd_sender.py`、`AI/test/test2.py`。
