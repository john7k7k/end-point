# 物件偵測測試串流

`test_color.mp4` 與 `test.mp4` 是以 OpenCV 公開的 `vtest.avi` 行人序列，透過 Ultralytics YOLO 產生的物件偵測範例。影片已經燒錄 bounding box、類別名稱與信心值，並編碼為 H.264 Baseline、無 B-frame，可直接由 `test2.py` 以 `cam-color` 串流。

`test_depth.mp4` 與彩色影片逐格對齊，但它是**模擬深度視覺化**，不是量測到的 RGB-D 深度資料；用途僅限測試深度通道、前端切換與同步。請勿將它當成螺絲絕對定位或演算法精度實驗資料。

若要重新建立影片，於專案根目錄執行：

```powershell
python AI/test/build_object_detection_demo.py --duration 30
```

來源：OpenCV `samples/data/vtest.avi`（OpenCV repository）；模型：Ultralytics `yolo11n.pt`。第一次執行可能下載來源影片與模型。
