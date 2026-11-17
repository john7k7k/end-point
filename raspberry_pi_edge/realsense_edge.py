"""Probe a RealSense or publish its aligned RGB-D frames to the platform."""
import argparse
import json
import signal
import sys
import threading
import time
import uuid
from pathlib import Path

import numpy as np
import pyrealsense2 as rs
from websockets.exceptions import ConnectionClosed
from websockets.sync.client import connect

sys.path.insert(0, str(Path(__file__).resolve().parents[1] / "AI"))
from rgbd_sync import MAX_PAIR_SKEW_NS, encode_packet


def camera_timestamp_ns(frame):
    domain = frame.get_frame_timestamp_domain()
    if domain not in (rs.timestamp_domain.global_time, rs.timestamp_domain.system_time):
        raise ValueError(f"Camera clock is {domain}; configure epoch clock mapping before streaming")
    timestamp = round(frame.get_timestamp() * 1_000_000)
    if abs(timestamp - time.time_ns()) > 5_000_000_000:
        raise ValueError("Camera epoch timestamp differs from Pi time by over 5 seconds")
    return timestamp


class Publisher:
    def __init__(self, url, identity):
        self.url = url
        self.identity = identity
        self.ws = None

    def open(self):
        self.ws = connect(self.url, open_timeout=5, close_timeout=2)
        self.ws.send(json.dumps(dict(self.identity, type="hello")))
        reply = self.receive()
        if reply.get("type") != "ready":
            raise ValueError(f"RGB-D hello rejected: {reply}")
        return reply["lastFrameId"]

    def receive(self):
        return json.loads(self.ws.recv(timeout=8))

    def frame(self, frame_id, packet):
        for attempt in range(4):
            try:
                if self.ws is None and self.open() >= frame_id:
                    return {"frameId": frame_id, "persisted": True, "status": "already_persisted"}
                self.ws.send(packet)
                reply = self.receive()
                if reply.get("persisted") is True and reply.get("frameId") == frame_id:
                    return reply
                raise ValueError(f"Frame {frame_id} rejected: {reply}")
            except (OSError, ConnectionClosed):
                self.close()
                if attempt == 3:
                    raise
                time.sleep(0.5)

    def end(self):
        if self.ws is None:
            self.open()
        self.ws.send(json.dumps({"type": "end"}))
        reply = self.receive()
        if reply.get("type") != "ended":
            raise ValueError(f"RGB-D end rejected: {reply}")
        print(json.dumps(reply), flush=True)

    def close(self):
        if self.ws is not None:
            self.ws.close()
            self.ws = None


def run(args, stop):
    pipeline = rs.pipeline()
    config = rs.config()
    config.enable_stream(rs.stream.color, args.width, args.height, rs.format.bgr8, args.fps)
    config.enable_stream(rs.stream.depth, args.width, args.height, rs.format.z16, args.fps)
    if args.serial:
        config.enable_device(args.serial)

    resolved = config.resolve(rs.pipeline_wrapper(pipeline))
    for sensor in resolved.get_device().query_sensors():
        if sensor.supports(rs.option.global_time_enabled):
            sensor.set_option(rs.option.global_time_enabled, 1)

    profile = pipeline.start(config)
    align = rs.align(rs.stream.color)
    publisher = None
    try:
        depth_scale = profile.get_device().first_depth_sensor().get_depth_scale()
        for _ in range(15):
            if stop.is_set():
                return
            pipeline.wait_for_frames(3000)

        if not args.probe:
            identity = {"operationId": args.operation_id, "sessionId": str(uuid.uuid4()),
                        "clockId": args.clock_id}
            publisher = Publisher(f"ws://{args.server}:{args.rgbd_port}/ws/rgbd", identity)
            publisher.open()
            print(json.dumps(dict(identity, type="ready")), flush=True)

        frame_id = 0
        next_capture = time.monotonic()
        while not stop.is_set() and (not args.frames or frame_id < args.frames):
            if stop.wait(max(0, next_capture - time.monotonic())):
                break
            frames = pipeline.wait_for_frames(3000)
            raw_color, raw_depth = frames.get_color_frame(), frames.get_depth_frame()
            if not raw_color or not raw_depth:
                continue
            aligned = align.process(frames)
            color_frame, depth_frame = aligned.get_color_frame(), aligned.get_depth_frame()
            if not color_frame or not depth_frame:
                continue
            color = np.asanyarray(color_frame.get_data())
            depth = np.asanyarray(depth_frame.get_data())
            if color.shape[:2] != depth.shape or depth.dtype != np.uint16:
                raise ValueError("Expected color and aligned uint16 depth with matching dimensions")
            calibration = color_frame.profile.as_video_stream_profile().get_intrinsics()
            intrinsics = {"fx": calibration.fx, "fy": calibration.fy, "cx": calibration.ppx, "cy": calibration.ppy}
            if args.probe:
                center = depth[depth.shape[0] // 2, depth.shape[1] // 2]
                print(json.dumps({"colorShape": color.shape, "depthShape": depth.shape,
                                  "depthScaleMeters": depth_scale, "centerDepthMeters": float(center) * depth_scale,
                                  "colorClock": str(raw_color.get_frame_timestamp_domain()),
                                  "depthClock": str(raw_depth.get_frame_timestamp_domain()),
                                  "intrinsics": intrinsics, "distortion": str(calibration.model)}))
                return

            color_time = camera_timestamp_ns(raw_color)
            depth_time = camera_timestamp_ns(raw_depth)
            if abs(color_time - depth_time) > MAX_PAIR_SKEW_NS:
                print(f"Skipped RGB-D pair: skew {abs(color_time - depth_time) / 1e6:.1f} ms", file=sys.stderr)
                continue
            header = dict(identity, frameId=frame_id, colorCaptureTimeNs=str(color_time),
                          depthCaptureTimeNs=str(depth_time), calibrationId=args.calibration_id,
                          depthScaleMeters=depth_scale, depthAlignedToColor=True,
                          dataSource="sensor", intrinsics=intrinsics)
            next_capture = time.monotonic() + 1 / args.send_fps
            reply = publisher.frame(frame_id, encode_packet(header, color, depth))
            print(json.dumps({key: reply.get(key) for key in ("frameId", "persisted", "status")}), flush=True)
            frame_id += 1
        if publisher is not None:
            publisher.end()
    finally:
        try:
            if publisher is not None:
                publisher.close()
        finally:
            pipeline.stop()


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--probe", action="store_true")
    parser.add_argument("--server")
    parser.add_argument("--rgbd-port", type=int, default=8000)
    parser.add_argument("--operation-id")
    parser.add_argument("--clock-id", default="realsense-unix-ns")
    parser.add_argument("--calibration-id", default="default")
    parser.add_argument("--serial", help="RealSense serial number")
    parser.add_argument("--width", type=int, default=640)
    parser.add_argument("--height", type=int, default=480)
    parser.add_argument("--fps", type=int, default=30)
    parser.add_argument("--send-fps", type=float, default=5)
    parser.add_argument("--frames", type=int, default=0, help="Number of confirmed frames; 0 runs until stopped")
    args = parser.parse_args()
    if not args.probe and not (args.server and args.operation_id):
        parser.error("streaming requires --server and --operation-id")
    if not 0 < args.send_fps <= args.fps or min(args.width, args.height) <= 0 or args.frames < 0:
        parser.error("Require positive dimensions, 0 < send-fps <= fps, and frames >= 0")
    stop = threading.Event()

    def request_stop(signum, frame):
        stop.set()

    signal.signal(signal.SIGINT, request_stop)
    signal.signal(signal.SIGTERM, request_stop)
    try:
        run(args, stop)
    except (OSError, ValueError, RuntimeError, ConnectionClosed) as error:
        print(error, file=sys.stderr)
        return 1
    return 0


if __name__ == "__main__":
    sys.exit(main())
