"""Platform operation control and JSON Lines sensor publishing."""
import argparse
import datetime as dt
import json
import math
import re
import sys
import threading
import uuid
from contextlib import contextmanager

import paho.mqtt.client as mqtt
import requests


@contextmanager
def connection(args, ack_topic=None):
    ready = threading.Event()
    errors = []
    replies = []
    received = threading.Event()
    client = mqtt.Client(mqtt.CallbackAPIVersion.VERSION2)

    def on_connect(client, userdata, flags, reason, properties):
        if reason.is_failure:
            errors.append(str(reason))
        elif ack_topic:
            client.subscribe(ack_topic, qos=2)
            return
        ready.set()

    def on_subscribe(client, userdata, mid, reasons, properties):
        errors.extend(str(reason) for reason in reasons if reason.is_failure)
        ready.set()

    def on_message(client, userdata, message):
        try:
            body = json.loads(message.payload)
        except (ValueError, UnicodeError):
            return
        if isinstance(body, dict) and message.topic == ack_topic and not message.retain:
            if body.get("requestId") == args.request_id and body.get("backendInstanceId") == args.backend_id:
                replies.append(body)
                received.set()

    client.on_connect = on_connect
    client.on_subscribe = on_subscribe
    client.on_message = on_message
    client.connect(args.server, args.mqtt_port, keepalive=30)
    client.loop_start()
    try:
        if not ready.wait(8) or errors:
            raise RuntimeError(f"MQTT connection or subscription failed: {errors or 'timeout'}")
        yield client, replies, received
    finally:
        client.disconnect()
        client.loop_stop()


def publish(client, topic, payload, qos):
    message = client.publish(topic, json.dumps(payload, allow_nan=False), qos=qos, retain=False)
    message.wait_for_publish(timeout=5)
    if not message.is_published():
        raise TimeoutError(f"No MQTT broker confirmation for {topic}")


def operation_id(value):
    if not re.fullmatch(r"[0-9a-f]{24}", value):
        raise ValueError("Expected a 24-character lowercase hexadecimal ObjectId")
    return value


def start(args):
    response = requests.get(f"http://{args.server}:{args.backend_port}/api/device/runtime", timeout=5)
    response.raise_for_status()
    args.backend_id = response.json()["backendInstanceId"]
    args.request_id = str(uuid.uuid4())
    with connection(args, f"vision/operation/ack/{args.user_id}") as (client, replies, received):
        publish(client, "vision/operation/start", {
            "userId": args.user_id,
            "backendInstanceId": args.backend_id,
            "requestId": args.request_id,
        }, 2)
        if not received.wait(15):
            raise TimeoutError("No matching operation ACK. Check server state before sending another start.")
        print(operation_id(replies[0]["opID"]), flush=True)


def end(args):
    with connection(args) as (client, _, _):
        publish(client, "vision/operation/end", {
            "opID": args.operation_id,
            "endTime": dt.datetime.now(dt.timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ"),
        }, 2)
    print("Broker confirmed end. Check operation status in the platform.")


def finite(value):
    return type(value) in (int, float) and math.isfinite(value)


def vector(data, keys):
    if not isinstance(data, dict) or not all(finite(data.get(key)) for key in keys):
        raise ValueError(f"Expected finite vector components {keys}")
    return {key: data[key] for key in keys}


def sensor_payload(kind, data, args):
    if kind == "pose":
        timestamp = data["timestampNs"]
        if not isinstance(timestamp, str) or not re.fullmatch(r"[0-9]{1,20}", timestamp) or int(timestamp) <= 0:
            raise ValueError("timestampNs must be a positive Unix nanosecond string")
        quaternion = vector(data["quaternion"], "wxyz")
        if not math.isclose(math.hypot(*quaternion.values()), 1, abs_tol=0.01):
            raise ValueError("Expected a normalized quaternion")
        return {**data, "position": vector(data["position"], "xyz"), "quaternion": quaternion,
                "operationId": args.operation_id, "sessionId": args.session_id, "clockId": args.clock_id}

    timestamp = data["timestamp"]
    if type(timestamp) is not int or not 10**12 <= timestamp < 10**13:
        raise ValueError("Expected Unix epoch milliseconds as an integer")
    if kind == "imu":
        return {"timestamp": timestamp, "acceleration": vector(data["acceleration"], "xyz"),
                "gyroscope": vector(data["gyroscope"], "xyz")}

    ranges = data["ranges"]
    stations = set()
    if not isinstance(ranges, list) or not ranges:
        raise ValueError("Expected a nonempty ranges list")
    for item in ranges:
        station, distance = item["stationId"], item["distance"]
        if type(station) is not int or station not in range(8) or station in stations:
            raise ValueError("Expected unique stationId values in 0..7")
        if not finite(distance) or distance <= 0:
            raise ValueError("Expected positive distance in metres")
        stations.add(station)
    return {"timestamp": timestamp, "ranges": ranges}


def lines(source):
    if source is None:
        yield from sys.stdin
        return
    import serial

    with serial.Serial(source.serial, baudrate=source.baud, timeout=1) as port:
        pending = bytearray()
        while True:
            pending.extend(port.read_until(size=8192))
            if len(pending) > 8192:
                raise ValueError("Serial JSON line exceeds 8192 bytes")
            if pending.endswith(b"\n"):
                yield bytes(pending)
                pending.clear()


def stream(args):
    topics = {"uwb": "vision/uwb/ranges", "imu": "vision/imu/data", "pose": "vision/device/pose"}
    with connection(args) as (client, _, _):
        for number, line in enumerate(lines(args if args.serial else None), start=1):
            if not line.strip():
                continue
            try:
                payload = sensor_payload(args.kind, json.loads(line), args)
            except (ValueError, TypeError, KeyError) as error:
                print(f"Skipped line {number}: {error}", file=sys.stderr)
                continue
            publish(client, topics[args.kind], payload, 1)


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--server", required=True)
    parser.add_argument("--mqtt-port", type=int, default=1883)
    commands = parser.add_subparsers(dest="command", required=True)
    begin = commands.add_parser("start")
    begin.add_argument("--user-id", type=operation_id, required=True)
    begin.add_argument("--backend-port", type=int, default=3000)
    finish = commands.add_parser("end")
    finish.add_argument("--operation-id", type=operation_id, required=True)
    sensor = commands.add_parser("stream")
    sensor.add_argument("kind", choices=("uwb", "imu", "pose"))
    sensor.add_argument("--serial")
    sensor.add_argument("--baud", type=int, default=115200)
    sensor.add_argument("--operation-id", type=operation_id)
    sensor.add_argument("--session-id", type=lambda value: str(uuid.UUID(value)))
    sensor.add_argument("--clock-id", default="realsense-unix-ns")
    args = parser.parse_args()
    if args.command == "stream" and args.kind == "pose" and not (args.operation_id and args.session_id):
        parser.error("pose requires --operation-id and --session-id")
    try:
        {"start": start, "end": end, "stream": stream}[args.command](args)
    except KeyboardInterrupt:
        return 130
    except (OSError, ValueError, KeyError, RuntimeError, requests.RequestException) as error:
        print(error, file=sys.stderr)
        return 1
    return 0


if __name__ == "__main__":
    sys.exit(main())
