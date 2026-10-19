"""Synthetic RGB-D publisher; does NOT treat a grayscale video as metric depth."""
import argparse
import asyncio
import json
import math
import sys
import time
import uuid
import threading
from pathlib import Path

import cv2
import numpy as np
import websockets

sys.path.insert(0, str(Path(__file__).resolve().parents[1]))
from rgbd_sync import encode_packet
from rgbd_transport import PairedPublisher


async def run(args):
    stop = threading.Event()
    if args.controlled:
        threading.Thread(target=lambda: (sys.stdin.readline(), stop.set()), daemon=True).start()
    session = str(uuid.uuid4())
    clock = 'simulation-host-unix-ns'
    base = dict(operationId=args.operation_id, sessionId=session, clockId=clock)
    cap = cv2.VideoCapture(str(args.color))
    if not cap.isOpened():
        raise ValueError(f'Cannot open {args.color}')
    start = time.time_ns()
    transport = PairedPublisher(args.url, base)
    try:
        print(f'RGB-D session {session}; all depth/pose data are synthetic', flush=True)
        index = 0
        while not stop.is_set() and (args.frames == 0 or index < args.frames):
            tick = time.monotonic()
            ok, color = cap.read()
            if not ok:
                cap.set(cv2.CAP_PROP_POS_FRAMES, 0)
                ok, color = cap.read()
                if not ok:
                    raise ValueError('empty test video')
            color = cv2.resize(color, (640, 360))
            timestamp = time.time_ns()
            seconds = (timestamp-start)/1e9
            depth = np.full(color.shape[:2], int(1500+100*math.sin(seconds)), np.uint16)
            pose = dict(base, type='pose', timestampNs=str(timestamp),
                        position={'x': 10+2*math.sin(seconds/5), 'y': 6+math.cos(seconds/5), 'z': 1.5},
                        quaternion={'w': math.cos(seconds/20), 'x': 0, 'y': 0, 'z': math.sin(seconds/20)})
            h = dict(base, frameId=index, colorCaptureTimeNs=str(timestamp),
                     depthCaptureTimeNs=str(timestamp + (50_000_000 if args.skew_every and index % args.skew_every == 0 else 0)),
                     calibrationId='default', depthScaleMeters=.001, depthAlignedToColor=True,
                     dataSource='simulation', intrinsics={'fx': 465., 'fy': 465., 'cx': 320., 'cy': 180.})
            packet = encode_packet(h, color, depth)
            if not args.drop_every or index % args.drop_every:
                reply = await transport.frame(index, pose, packet)
                print(json.dumps({k: v for k,v in reply.items() if k != 'result'}), flush=True)
                if args.duplicate_every and index % args.duplicate_every == 0:
                    await transport.ws.send(packet)
                    print(await transport.ws.recv(), flush=True)
            index += 1
            await asyncio.sleep(max(0, 1/args.fps-(time.monotonic()-tick)))
        print(await transport.end(), flush=True)
    finally:
        await transport.close()
        cap.release()


if __name__ == '__main__':
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--operation-id', required=True)
    parser.add_argument('--url', default='ws://127.0.0.1:8000/ws/rgbd')
    parser.add_argument('--color', type=Path, default=Path(__file__).with_name('test_color.mp4'))
    parser.add_argument('--fps', type=float, default=10)
    parser.add_argument('--frames', type=int, default=0, help='0 = loop until stopped')
    parser.add_argument('--drop-every', type=int, default=0)
    parser.add_argument('--duplicate-every', type=int, default=0)
    parser.add_argument('--skew-every', type=int, default=0)
    parser.add_argument('--controlled', action='store_true', help='stop cleanly on stdin line/EOF')
    options = parser.parse_args()
    if not 0 < options.fps <= 60 or min(options.frames, options.drop_every, options.duplicate_every, options.skew_every) < 0:
        parser.error('fps must be in (0,60]; counters must be nonnegative')
    try:
        asyncio.run(run(options))
    except KeyboardInterrupt:
        pass
