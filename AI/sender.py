import requests
import time

NODE_JS_URL = "http://localhost:3000/api/detections"
OPERATION_API = "http://localhost:3000/api/operations/active"

current_operation_id = None

def get_current_operation():
    """查询当前活跃的 Operation，缓存其 ID"""
    global current_operation_id
    try:
        response = requests.get(OPERATION_API, timeout=2)
        if response.status_code == 200:
            data = response.json()
            current_operation_id = data["_id"]
            print(f"Retrieved active operation: {current_operation_id}")
            return data["_id"]
        else:
            print(f"No active operation found (status {response.status_code})")
            return None
    except Exception as e:
        print(f"Failed to get operation: {e}")
        return None

def set_current_operation(operation_id):
    """从後端推送直接设置 operationID"""
    global current_operation_id
    current_operation_id = operation_id
    print(f"Operation ID updated from backend: {current_operation_id}")

def send_result(result_data, video_filename=None):
    """
    将辨识结果发送到 Node.js 後端
    :param result_data: 辨识到的物件资讯 (由 detector.detect() 返回)
    :param video_filename: 当前录影的档名，方便後端與資料庫對照
    """
    global current_operation_id

    if not current_operation_id:
        print("Operation ID not set. Please call get_current_operation() first.")
        return False

    payload = {
        "operationId": current_operation_id,
        "timestamp": int(time.time() * 1000),
        "imageId": video_filename or "unknown",
        "objectClass": result_data.get("object", "unknown"),
        "detectionAlgorithm": result_data.get("detection_algorithm", "mock_yolo"),
        "screwFusionAlgorithm": result_data.get("screw_fusion_algorithm", "average"),
        "bbox": result_data.get("bbox", {}),
        "depth": result_data.get("raw_depth_value", 0),
        "sensors": [
            {
                "timestamp": int(time.time() * 1000),
                "imu": result_data.get("imu_data") is not None,
                "acceleration": result_data.get("imu_data", {}).get("acceleration"),
                "gyroscope": result_data.get("imu_data", {}).get("gyroscope"),
                "devicePosition": None
            }
        ] if result_data.get("imu_data") else []
    }

    retry_count = 0
    max_retries = 3

    while retry_count < max_retries:
        try:
            response = requests.post(
                NODE_JS_URL,
                json=payload,
                timeout=2
            )

            # 204 means the simulated camera currently has no screw in FOV.
            if response.status_code in [200, 201, 204]:
                return True
            else:
                print(f"Backend error: {response.status_code} - {response.text}")
                retry_count += 1
                if retry_count < max_retries:
                    time.sleep(0.5)

        except requests.Timeout:
            print(f"Request timeout (attempt {retry_count + 1}/{max_retries})")
            retry_count += 1
            if retry_count < max_retries:
                time.sleep(0.5)
        except Exception as e:
            print(f"Failed to send detection: {e}")
            retry_count += 1
            if retry_count < max_retries:
                time.sleep(0.5)

    print(f"Failed to send detection after {max_retries} attempts")
    return False
