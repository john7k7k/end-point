import random

def detect(frame, imu_data=None, detection_algorithm="mock_yolo", fusion_algorithm="depth_lookup", screw_fusion_algorithm="average"):
    # print(frame.shape)  # (2160, 1920, 3)

    # 1. 获取影像尺寸 (1920x2160)
    full_h, full_w, _ = frame.shape
    half_h = full_h // 2  # 1080

    # 2. 定义中心点座标 (针对彩色区)
    center_x = full_w // 2 # 960
    center_y = half_h // 2 # 540


    depth_map = frame[half_h:, :]  # 下半张图是深度图
    color_map = frame[:half_h, :]   # 上半张图是彩色图

    # 3. 获取侦测物件的中心点座标 (假设已经有一个辨识函数 identify_object，会回传物件名称、信心度、以及中心点座标)
    detection_result = run_screw_detector(color_map, detection_algorithm)
    center_x = detection_result["center_coordinate"]["x"]
    center_y = detection_result["center_coordinate"]["y"]

    # 4. 读取该点的深度值
    # 注意：cv2 读取格式是 [y, x]
    pixel_value = depth_map[center_y, center_x]

    # 5. 将像素值转为深度数值
    # 如果是灰阶模拟，BGR 三值相同，取其中一个即可
    # 在 RealSense 中，这可能代表距离，例如 0-255 映射到 0-10公尺
    raw_depth = fuse_depth(depth_map, center_x, center_y, fusion_algorithm)

    result = {
        "object": detection_result["object"],
        "confidence": detection_result["confidence"],
        "center_coordinate": {"x": center_x, "y": center_y},
        "raw_depth_value": raw_depth,
        "bbox": detection_result["bbox"]
        ,"detection_algorithm": detection_algorithm
        ,"fusion_algorithm": fusion_algorithm
        # The backend performs the persisted multi-view fusion after this frame
        # is transformed into the world frame.  Carry the AI-selected method in
        # the result so both services share the same configuration contract.
        ,"screw_fusion_algorithm": screw_fusion_algorithm
    }

    if imu_data:
        result["imu_data"] = imu_data

    return result


def run_screw_detector(color_frame, algorithm):
    """Algorithm dispatch point. Implement each screw detector here later."""
    if algorithm not in {"mock_yolo", "template_matching", "edge_based"}:
        raise ValueError(f"Unsupported detection algorithm: {algorithm}")
    return identify_object(color_frame)


def fuse_depth(depth_map, center_x, center_y, algorithm):
    """Algorithm dispatch point. Implement each RGB-D fusion method here later."""
    if algorithm not in {"ekf", "complementary", "weighted_average", "gwo4d"}:
        raise ValueError(f"Unsupported fusion algorithm: {algorithm}")
    return int(depth_map[center_y, center_x][0])

def identify_object(color_frame):
    # 这是你的AI辨识演算法，输入是上半张图(彩色图)，输出是物体名称、信心度、以及中心点座标和边界框
    # 你可以使用 Fast R-CNN、YOLO 等工具来实现
    # 模拟一个随机的中心点座标，实际上你会从你的模型输出中获得这些数值
    center_x = random.randint(0, color_frame.shape[1]-1)
    center_y = random.randint(0, color_frame.shape[0]-1)

    # 模拟 bbox: 以中心点为基准，生成一个 200x150 的边界框
    bbox_width = min(200, color_frame.shape[1])
    bbox_height = min(150, color_frame.shape[0])
    bbox_x = max(0, center_x - bbox_width // 2)
    bbox_y = max(0, center_y - bbox_height // 2)

    # 确保 bbox 不超出图像边界
    if bbox_x + bbox_width > color_frame.shape[1]:
        bbox_x = color_frame.shape[1] - bbox_width
    if bbox_y + bbox_height > color_frame.shape[0]:
        bbox_y = color_frame.shape[0] - bbox_height

    # 这里先回传一个假资料，代表侦测到某个物体了
    return {
        "object": "screw_simulated",
        "center_coordinate": {"x": center_x, "y": center_y},
        "confidence": 0.9,
        "bbox": {
            "x": bbox_x,
            "y": bbox_y,
            "width": bbox_width,
            "height": bbox_height
        }
    }
