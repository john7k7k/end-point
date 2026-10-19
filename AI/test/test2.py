import json
import os
import subprocess
import sys
import time
import uuid
import requests
from pathlib import Path

import paho.mqtt.client as mqtt

BASE_DIR = Path(__file__).parent
COLOR_VIDEO = BASE_DIR / "test_color.mp4"
DEPTH_VIDEO = BASE_DIR / "test_depth.mp4"
MQTT_BROKER = "localhost"
MQTT_PORT = 1883
USER_ID = os.environ.get("TEST_USER_ID", "6a63c329aa143d129866cf98")
TOPIC_START = "vision/operation/start"
TOPIC_END = "vision/operation/end"
TOPIC_ACK = f"vision/operation/ack/{USER_ID}"

color_process = None
depth_process = None
rgbd_process = None
RGBD_ENABLED = '--rgbd' in sys.argv
active_operation_id = None
BACKEND_URL = os.environ.get('BACKEND_URL', 'http://127.0.0.1:3000').rstrip('/')
backend_instance_id = None
pending_request_id = None


def stream_command(video_path, destination):
    return [
        "ffmpeg", "-re", "-stream_loop", "-1", "-i", str(video_path),
        "-c:v", "copy", "-an", "-rtsp_transport", "tcp", "-f", "rtsp", destination,
    ]


def start_streams():
    global color_process, depth_process, rgbd_process
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
    if RGBD_ENABLED:
        rgbd_process = subprocess.Popen([
            sys.executable, str(BASE_DIR / 'rgbd_sender.py'), '--operation-id', active_operation_id,
            '--backend', BACKEND_URL, '--color', str(COLOR_VIDEO), '--depth', str(DEPTH_VIDEO), '--controlled'
        ], stdin=subprocess.PIPE)


def stop_streams():
    global color_process, depth_process, rgbd_process
    if rgbd_process and rgbd_process.poll() is None:
        try:
            rgbd_process.stdin.write(b'q\n')
            rgbd_process.stdin.flush()
            rgbd_process.wait(timeout=10)
        except (BrokenPipeError, OSError, subprocess.TimeoutExpired):
            pass
    for process in (rgbd_process, color_process, depth_process):
        if process and process.poll() is None:
            process.terminate()
            try:
                process.wait(timeout=3)
            except subprocess.TimeoutExpired:
                process.kill()
    color_process = depth_process = None
    rgbd_process = None
    print("Stopped streams")


def on_connect(client, _userdata, _flags, reason_code, _properties=None):
    if reason_code == 0:
        client.subscribe(TOPIC_ACK)
        print(f"Subscribed to {TOPIC_ACK}")


def on_message(_client, _userdata, message):
    global active_operation_id, pending_request_id
    try:
        payload = json.loads(message.payload.decode("utf-8"))
        if (not pending_request_id or payload.get('backendInstanceId') != backend_instance_id
                or payload.get('requestId') != pending_request_id):
            print(f"Ignored unrelated ACK for {payload.get('opID', '?')} (different backend or request)", flush=True)
            return
        active_operation_id = payload["opID"]
        pending_request_id = None
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

    response = requests.get(f'{BACKEND_URL}/api/device/runtime', timeout=10)
    if response.status_code != 200:
        raise RuntimeError('Backend lacks runtime identification. Restart the updated backend before test2.')
    backend_instance_id = response.json()['backendInstanceId']
    print(f'Using backend {BACKEND_URL} ({backend_instance_id})', flush=True)
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
                if active_operation_id:
                    print('An operation is already active. Enter e before starting another.')
                    continue
                if pending_request_id:
                    print('Waiting for start acknowledgement. Enter e to cancel before retrying.')
                    continue
                pending_request_id = str(uuid.uuid4())
                client.publish(TOPIC_START, json.dumps({"userId": USER_ID,
                    'backendInstanceId': backend_instance_id, 'requestId': pending_request_id}), qos=2)
            elif command == "e":
                pending_request_id = None
                stop_streams()
                publish_end(client, "Stopped from test2")
            elif command == "q":
                stop_streams()
                publish_end(client, "test2 exited")
                break
    finally:
        stop_streams()
        client.loop_stop()
        client.disconnect()
