"""Real AI packet -> HTTP -> Mongo -> media/history smoke test. --preview keeps UI open."""
import argparse
import json
import os
from pathlib import Path
import subprocess
import sys
import tempfile
import time
from unittest.mock import patch

import cv2
import numpy as np
import requests

sys.path.insert(0, str(Path(__file__).resolve().parents[1]))
import rgbd_api
from rgbd_sync import encode_packet
from test_rgbd_sync import header


def run(preview=False):
    workspace = Path(__file__).resolve().parents[2]
    with tempfile.TemporaryDirectory(prefix='rgbd-e2e-') as temp:
        env = dict(os.environ, RGBD_ARCHIVE_ROOT=str(Path(temp)))
        process = subprocess.Popen(['node', 'backend/apiTest/rgbd-e2e-server.mjs'], cwd=workspace,
                                   env=env, stdin=subprocess.PIPE, stdout=subprocess.PIPE, text=True)
        try:
            while True:
                line = process.stdout.readline()
                if not line:
                    raise RuntimeError('test backend did not start')
                if line.startswith('{'):
                    info = json.loads(line)
                    break
            base = f"http://127.0.0.1:{info['port']}"
            receiver = rgbd_api.RGBDReceiver()
            h = header(); h['operationId'] = info['operationId']
            h['intrinsics'] = dict(fx=465., fy=465., cx=320., cy=180.)
            receiver.operation_id, receiver.session_id, receiver.clock_id = h['operationId'], h['sessionId'], h['clockId']
            with patch.object(rgbd_api, 'ROOT', Path(temp)), patch.object(rgbd_api, 'BACKEND', base), patch.object(rgbd_api, 'receiver', receiver):
                for fid in range(40):
                    timestamp = time.time_ns() + fid * 100_000_000
                    h.update(frameId=fid, colorCaptureTimeNs=str(timestamp), depthCaptureTimeNs=str(timestamp))
                    depth_m = .4 + fid * .02
                    receiver.pose(dict(operationId=h['operationId'], sessionId=h['sessionId'], clockId=h['clockId'],
                                       timestampNs=str(timestamp), position=dict(x=1.2-depth_m, y=1.2, z=1.1), quaternion=dict(w=1,x=0,y=0,z=0)))
                    image = np.full((360, 640, 3), (220, 235, 245), np.uint8)
                    cv2.circle(image, (320, 180), 20, (20, 140, 40), -1)
                    cv2.putText(image, f'Frame {fid}', (30, 55), cv2.FONT_HERSHEY_SIMPLEX, 1.1, (30,30,30), 2)
                    detection = None if 10 <= fid < 15 else dict(object='M4 hex screw', confidence=.95,
                        center_coordinate=dict(x=320, y=180), bbox=dict(x=300,y=160,width=40,height=40))
                    with patch.object(rgbd_api, 'run_screw_detector', return_value=detection):
                        answer = receiver.process(encode_packet(h, image, np.full((360,640), round(depth_m*1000), np.uint16)))
                    assert answer['persisted']
                snapshot = requests.get(f"{base}/api/rgbd/snapshot/{h['operationId']}/{h['sessionId']}/latest").json()
                assert snapshot['frame']['frameId'] == 39
                assert len(snapshot['trail']) == 40
                assert snapshot['frame']['fusion']['state']['A-1']['observationCount'] == 35
                for kind in ['color', 'depth']:
                    response = requests.get(f"{base}/api/rgbd/media/{h['operationId']}/{h['sessionId']}/39/{kind}")
                    assert response.status_code == 200
                    assert cv2.imdecode(np.frombuffer(response.content, np.uint8), cv2.IMREAD_COLOR).shape == (360,640,3)
                missing = requests.get(f"{base}/api/rgbd/snapshot/{h['operationId']}/{h['sessionId']}/12").json()
                assert missing['frame']['fusion']['detections'] == []
                assert missing['frame']['devicePose'] is not None
                # Persist a real local journal while HTTP is unavailable, end
                # the operation, then verify ordered recovery is still allowed.
                h.update(frameId=40, colorCaptureTimeNs=str(int(h['colorCaptureTimeNs'])+100_000_000),
                         depthCaptureTimeNs=str(int(h['depthCaptureTimeNs'])+100_000_000))
                with patch.object(rgbd_api, 'run_screw_detector', return_value=None), \
                        patch.object(rgbd_api.requests, 'post', side_effect=requests.ConnectionError('injected outage')):
                    try:
                        receiver.process(encode_packet(h,image,np.full((360,640),1200,np.uint16)))
                    except requests.ConnectionError:
                        pass
                    else:
                        raise AssertionError('expected persistence failure')
                requests.post(f'{base}/api/test/end').raise_for_status()
                assert rgbd_api.replay_pending() == 1
                recovered = requests.get(f"{base}/api/rgbd/snapshot/{h['operationId']}/{h['sessionId']}/40").json()
                assert recovered['frame']['status'] == 'no_detection'
                assert not list(Path(temp).rglob('*.pending'))
                print('PASS: 40 stored frames, 35 matched observations, 4 fusion algorithms, RGB/depth media, no-detection pose.', flush=True)
                print('PASS: journal recovery after operation end (one additional no-pose frame).', flush=True)
                print(f'Preview: {base}', flush=True)
                if preview:
                    try:
                        input('Press Enter to clean up isolated test data and close preview.\n')
                    except EOFError:
                        pass
        finally:
            if process.poll() is None:
                process.stdin.write('stop\n'); process.stdin.flush(); process.wait(timeout=20)


if __name__ == '__main__':
    parser = argparse.ArgumentParser(); parser.add_argument('--preview', action='store_true')
    run(parser.parse_args().preview)
