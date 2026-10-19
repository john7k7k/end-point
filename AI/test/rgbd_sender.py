"""Paired RGB/depth-video demo publisher with explicitly labelled pseudo-depth."""
import argparse
import asyncio
import json
import sys
import time
import uuid
import threading
from pathlib import Path

import requests

sys.path.insert(0, str(Path(__file__).resolve().parents[1]))
from rgbd_sync import encode_packet
from rgbd_transport import PairedPublisher
from paired_video import PairedVideoReader


async def run(args):
    stop = threading.Event()
    if args.controlled:
        threading.Thread(target=lambda: (sys.stdin.readline(), stop.set()), daemon=True).start()
    session = str(uuid.uuid4())
    clock = 'simulation-host-unix-ns'
    base = dict(operationId=args.operation_id, sessionId=session, clockId=clock)
    reader = PairedVideoReader(args.color, args.depth)
    transport = PairedPublisher(args.url, base)
    try:
        print(f'RGB-D session {session}; paired color/depth video, demo depth (gray 0..255 -> 0..6 m)', flush=True)
        print(f'Paired common segment: {reader.length} frames at source {reader.fps:g} FPS; '
              f'color={reader.color_count}, depth={reader.depth_count}; both tracks rewind together.', flush=True)
        index = 0
        while not stop.is_set() and (args.frames == 0 or index < args.frames):
            tick = time.monotonic()
            color, depth, source = await asyncio.to_thread(reader.read)
            # Reuse the backend's raw UWB/IMU -> selected filter pipeline.
            # This is a simulated capture at that sample time, not hardware timing.
            response = await asyncio.to_thread(requests.get,
                f'{args.backend}/api/device/pose/{args.operation_id}', timeout=5)
            response.raise_for_status()
            telemetry = response.json()
            timestamp = int(telemetry['timestampNs'])
            pose = dict(base, type='pose', timestampNs=str(timestamp),
                        position=telemetry['position'], quaternion=telemetry['quaternion'],
                        uwbRanges=telemetry.get('uwbRanges', []), imu=telemetry.get('imu'),
                        fusionAlgorithm=telemetry['fusionAlgorithm'])
            h = dict(base, frameId=index, colorCaptureTimeNs=str(timestamp),
                     depthCaptureTimeNs=str(timestamp + (50_000_000 if args.skew_every and index % args.skew_every == 0 else 0)),
                     calibrationId='default', depthScaleMeters=.001, depthAlignedToColor=True,
                     dataSource='simulation', intrinsics={'fx': 465., 'fy': 465., 'cx': 320., 'cy': 180.},
                     **source)
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
        reader.close()


if __name__ == '__main__':
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--operation-id', required=True)
    parser.add_argument('--backend', default='http://127.0.0.1:3000')
    parser.add_argument('--url', default='ws://127.0.0.1:8000/ws/rgbd')
    parser.add_argument('--color', type=Path, default=Path(__file__).with_name('test_color.mp4'))
    parser.add_argument('--depth', type=Path, default=Path(__file__).with_name('test_depth.mp4'))
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
