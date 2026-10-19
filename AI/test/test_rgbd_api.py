import asyncio
import json
import socket
import sys
import tempfile
import threading
import time
import unittest
from pathlib import Path
from unittest.mock import patch

import numpy as np
import uvicorn
import requests
import websockets
from fastapi import FastAPI

sys.path.insert(0, str(Path(__file__).resolve().parents[1]))
import rgbd_api
from rgbd_sync import encode_packet
from test_rgbd_sync import header
from rgbd_transport import PairedPublisher


class Response:
    def raise_for_status(self):
        pass

    def json(self):
        return dict(key='default', rotationMatrix=np.eye(3).tolist(), translation=dict(x=0,y=0,z=0))


class APITests(unittest.TestCase):
    def test_websocket_pipeline_and_retry(self):
        app = FastAPI()
        app.include_router(rgbd_api.router)
        fresh = rgbd_api.RGBDReceiver()
        fresh.operation_id = '0'*24
        sock = socket.socket()
        sock.bind(('127.0.0.1', 0))
        port = sock.getsockname()[1]
        server = uvicorn.Server(uvicorn.Config(app, log_level='error', ws_max_size=16*1024*1024))
        thread = threading.Thread(target=lambda: server.run(sockets=[sock]), daemon=True)
        records = []
        failed = False
        def post(_url, json, **_kwargs):
            nonlocal failed
            if not failed:
                failed = True
                raise requests.ConnectionError('injected database service outage')
            records.append(json)
            return Response()
        with tempfile.TemporaryDirectory(prefix='rgbd-test-') as temp, \
                patch.object(rgbd_api, 'receiver', fresh), \
                patch.object(rgbd_api, 'ROOT', Path(temp)/'rgbd'), \
                patch.object(rgbd_api.requests, 'get', return_value=Response()), \
                patch.object(rgbd_api.requests, 'post', side_effect=post), \
                patch.object(rgbd_api, 'run_screw_detector', wraps=rgbd_api.run_screw_detector) as detector:
            thread.start()
            for _ in range(100):
                if server.started:
                    break
                time.sleep(.02)
            try:
                asyncio.run(self.exercise(port))
                self.assertEqual(len(records), 3)
                self.assertEqual(records[0]['status'], 'localized')
                self.assertIsNotNone(records[0]['result']['rawAbsolutePosition'])
                self.assertEqual(records[1]['status'], 'pair_time_mismatch')
                self.assertIsNone(records[1]['result'])
                self.assertEqual(len(list(Path(temp).rglob('*.rgbd'))), 3)
                self.assertEqual(detector.call_count, 2, 'retry does not regenerate inference')
                self.assertEqual(len(list(Path(temp).rglob('*.pending'))), 0)
                self.assertEqual(len(list(Path(temp).rglob('*.depth.jpg'))), 3)
            finally:
                server.should_exit = True
                thread.join(5)
                sock.close()

    async def exercise(self, port):
        h = header()
        async with websockets.connect(f'ws://127.0.0.1:{port}/ws/rgbd') as ws:
            await ws.send(json.dumps(dict(type='hello', **{k:h[k] for k in ('sessionId','operationId','clockId')})))
            self.assertEqual(json.loads(await ws.recv())['type'], 'ready')
            await ws.send(json.dumps(dict(type='pose', **{k:h[k] for k in ('sessionId','operationId','clockId')},
                                          timestampNs=h['colorCaptureTimeNs'], position=dict(x=0,y=0,z=0),
                                          quaternion=dict(w=1,x=0,y=0,z=0))))
            self.assertEqual(json.loads(await ws.recv())['type'], 'pose_accepted')
            p = encode_packet(h, np.zeros((20,20,3),np.uint8), np.full((20,20),1500,np.uint16))
            await ws.send(p)
            result = json.loads(await ws.recv())
            self.assertEqual(result['type'], 'error')
            self.assertFalse(result['persisted'])
            # Same frame must be retryable after persistence failure.
            await ws.send(p)
            result = json.loads(await ws.recv())
            self.assertTrue(result.get('persisted'), result)
            await ws.send(p)
            self.assertEqual(json.loads(await ws.recv())['status'], 'duplicate_or_out_of_order')
            h.update(frameId=2, colorCaptureTimeNs='1100000000', depthCaptureTimeNs='1200000000')
            await ws.send(encode_packet(h, np.zeros((20,20,3),np.uint8), np.full((20,20),1500,np.uint16)))
            self.assertEqual(json.loads(await ws.recv())['missingFrames'], 1)
            await ws.send(json.dumps(dict(type='end')))
            self.assertEqual(json.loads(await ws.recv())['type'], 'ended')
        publisher = PairedPublisher(f'ws://127.0.0.1:{port}/ws/rgbd', {k: h[k] for k in ('sessionId', 'operationId', 'clockId')})
        try:
            h.update(frameId=3, colorCaptureTimeNs='1300000000', depthCaptureTimeNs='1300000000')
            pose = dict(publisher.base, type='pose', timestampNs='1300000000', position=dict(x=1,y=0,z=0), quaternion=dict(w=1,x=0,y=0,z=0))
            p = encode_packet(h, np.zeros((20,20,3),np.uint8), np.full((20,20),1500,np.uint16))
            self.assertTrue((await publisher.frame(3, pose, p))['persisted'])
            await publisher.ws.close()  # Simulate a lost socket after successful ACK.
            publisher.ws = None
            self.assertEqual((await publisher.frame(3, pose, p))['status'], 'already_persisted')
            self.assertEqual((await publisher.end())['type'], 'ended')
        finally:
            await publisher.close()

    def test_no_detection_preserves_pose_and_pending_recovery(self):
        fresh = rgbd_api.RGBDReceiver()
        h = header()
        fresh.operation_id, fresh.session_id, fresh.clock_id = h['operationId'], h['sessionId'], h['clockId']
        fresh.pose(dict(operationId=h['operationId'],sessionId=h['sessionId'],clockId=h['clockId'],timestampNs=h['colorCaptureTimeNs'],
                        position=dict(x=1,y=2,z=1.5),quaternion=dict(w=1,x=0,y=0,z=0)))
        with tempfile.TemporaryDirectory(prefix='rgbd-recovery-') as temp, \
                patch.object(rgbd_api, 'ROOT', Path(temp)), patch.object(rgbd_api, 'receiver', fresh), \
                patch.object(rgbd_api, 'run_screw_detector', return_value=None), \
                patch.object(rgbd_api.requests, 'post', side_effect=requests.ConnectionError('offline')):
            with self.assertRaises(requests.ConnectionError):
                fresh.process(encode_packet(h,np.zeros((20,20,3),np.uint8),np.full((20,20),1500,np.uint16)))
            sidecar = next(Path(temp).rglob('*.json'))
            original = sidecar.read_bytes()
            record = json.loads(original)
            self.assertEqual(record['status'], 'no_detection')
            self.assertEqual(record['result']['observations'], [])
            self.assertEqual(record['devicePose']['position']['x'], 1)
            with patch.object(rgbd_api.requests, 'post', return_value=Response()):
                self.assertEqual(rgbd_api.replay_pending(), 1)
            self.assertEqual(sidecar.read_bytes(), original)
            self.assertFalse(list(Path(temp).rglob('*.pending')))


if __name__ == '__main__':
    unittest.main()
