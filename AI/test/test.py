import time
import paho.mqtt.client as mqtt

# 1. 設定 Broker 資訊（這裡使用免費公開的測試伺服器）
MQTT_BROKER = "localhost"
MQTT_PORT = 1883
MQTT_TOPIC = "vision/operation/start"
MQTT_MSG = """{ 
    "userId": "699d92bec9f64dc1ecc349c2",
    "startTime": "2025-05-20T10:00:00Z"
}"""

# 2. 初始化用戶端 (適用於 paho-mqtt 2.x 版本)
client = mqtt.Client(callback_api_version=mqtt.CallbackAPIVersion.VERSION2)

print(f"正在連線到 Broker: {MQTT_BROKER}...")

# 3. 建立連線
client.connect(MQTT_BROKER, MQTT_PORT, 60)

# 4. 發送訊息
# publish(主題, 訊息內容)
result = client.publish(MQTT_TOPIC, MQTT_MSG)

# 等待訊息確保成功發送出去
result.wait_for_publish()
print(f"訊息已成功發送到主題 [{MQTT_TOPIC}]，內容: {MQTT_MSG}")

# 5. 斷開連線
client.disconnect()
print("已中斷連線。")