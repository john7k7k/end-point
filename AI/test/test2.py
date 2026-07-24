import json
import subprocess
import sys
import time
from pathlib import Path

import paho.mqtt.client as mqtt

BASE_DIR = Path(__file__).parent
COLOR_VIDEO = BASE_DIR / "test_color.mp4"
DEPTH_VIDEO = BASE_DIR / "test_depth.mp4"
MQTT_BROKER = "localhost"
MQTT_PORT = 1883
USER_ID = "6a63c329aa143d129866cf98"
TOPIC_START = "vision/operation/start"
TOPIC_END = "vision/operation/end"
TOPIC_ACK = f"vision/operation/ack/{USER_ID}"

color_process = None
depth_process = None
active_operation_id = None


def stream_command(video_path, destination):
    return [
        "ffmpeg", "-re", "-stream_loop", "-1", "-i", str(video_path),
        "-c:v", "copy", "-an", "-rtsp_transport", "tcp", "-f", "rtsp", destination,
    ]


def start_streams():
    global color_process, depth_process
    if color_process or depth_process:
        return
    color_process = subprocess.Popen(
        stream_command(COLOR_VIDEO, "rtsp://localhost:8554/cam-color"),
        stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL,
    )
    depth_process = subprocess.Popen(
        stream_command(DEPTH_VIDEO, "rtsp://localhost:8554/cam-depth"),
        stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL,
    )
    print("Started cam-color and cam-depth streams")


def stop_streams():
    global color_process, depth_process
    for process in (color_process, depth_process):
        if process:
            process.terminate()
            try:
                process.wait(timeout=3)
            except subprocess.TimeoutExpired:
                process.kill()
    color_process = depth_process = None
    print("Stopped streams")


def on_connect(client, _userdata, _flags, reason_code, _properties=None):
    if reason_code == 0:
        client.subscribe(TOPIC_ACK)
        print(f"Subscribed to {TOPIC_ACK}")


def on_message(_client, _userdata, message):
    global active_operation_id
    try:
        payload = json.loads(message.payload.decode("utf-8"))
        active_operation_id = payload["opID"]
    except (json.JSONDecodeError, KeyError):
        return
    start_streams()


def publish_end(client, reason):
    global active_operation_id
    if not active_operation_id:
        return
    client.publish(TOPIC_END, json.dumps({
        "opID": active_operation_id,
        "endTime": time.strftime("%Y-%m-%dT%H:%M:%SZ", time.gmtime()),
        "description": reason,
    }), qos=2)
    active_operation_id = None


if __name__ == "__main__":
    if not COLOR_VIDEO.exists() or not DEPTH_VIDEO.exists():
        raise FileNotFoundError("Run the video split step first: test_color.mp4 and test_depth.mp4 are required.")

    client = mqtt.Client(callback_api_version=mqtt.CallbackAPIVersion.VERSION2)
    client.on_connect = on_connect
    client.on_message = on_message
    client.connect(MQTT_BROKER, MQTT_PORT, 60)
    client.loop_start()
    print("Type s to start, e to end, q to quit.")

    try:
        while True:
            command = sys.stdin.readline().strip().lower()
            if command == "s":
                client.publish(TOPIC_START, json.dumps({"userId": USER_ID}), qos=2)
            elif command == "e":
                publish_end(client, "Stopped from test2")
                stop_streams()
            elif command == "q":
                publish_end(client, "test2 exited")
                break
    finally:
        stop_streams()
        client.loop_stop()
        client.disconnect()
