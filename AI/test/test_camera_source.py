"""Exercise runtime source switching through the real HTTP/WebSocket routes."""
import asyncio
import json
from pathlib import Path
import socket
import struct
import sys
import threading
import time
import unittest
from unittest.mock import AsyncMock, patch

import numpy as np
import requests
import uvicorn
import websockets

sys.path.insert(0, str(Path(__file__).resolve().parents[1]))
import main
import rgbd_api
from camera_source import CameraSource, CameraSourceConfig, read_bridge_frame
from rgbd_sync import decode_packet


def native_header(clock='System Time'):
    timestamp = str(time.time_ns())
    return dict(width=2, height=2, colorFormat='yuyv', colorClock=clock, depthClock=clock,
                colorCaptureTimeNs=timestamp, depthCaptureTimeNs=timestamp,
                depthAlignedToColor=True, depthScaleMeters=.001,
                intrinsics=dict(fx=2., fy=2., cx=1., cy=1.))


class FakeBridge:
    def __init__(self):
        self.returncode = None
        self.stdout = asyncio.StreamReader()
        self.done = asyncio.Event()

    def terminate(self):
        self.returncode = 0
        self.stdout.feed_eof()
        self.done.set()

    kill = terminate

    async def wait(self):
        await self.done.wait()
        return self.returncode


class BridgeFrameTests(unittest.IsolatedAsyncioTestCase):
    async def test_yuyv_conversion_preserves_metric_depth(self):
        bridge = FakeBridge()
        raw = json.dumps(native_header()).encode()
        bridge.stdout.feed_data(struct.pack('!I', len(raw)) + raw + bytes([100, 128] * 4)
                                + np.full((2, 2), 1234, dtype='<u2').tobytes())
        header, color, depth = await read_bridge_frame(bridge, CameraSourceConfig(width=2, height=2))
        self.assertEqual(color.shape, (2, 2, 3))
        self.assertTrue(np.all(depth == 1234))
        self.assertEqual(header['depthScaleMeters'], .001)

    async def test_hardware_clock_requires_explicit_epoch_mapping(self):
        bridge = FakeBridge()
        header = native_header('Hardware Clock')
        raw = json.dumps(header).encode()
        bridge.stdout.feed_data(struct.pack('!I', len(raw)) + raw + bytes(16))
        with self.assertRaisesRegex(ValueError, 'cameraTimeOffsetNs'):
            await read_bridge_frame(bridge, CameraSourceConfig(width=2, height=2))


class CameraSourceAPITests(unittest.TestCase):
    def setUp(self):
        self.receiver = rgbd_api.RGBDReceiver()
        self.source = CameraSource(self.receiver)
        self.records = []
        self.processes = []

        def process(packet):
            header, color, depth = decode_packet(packet)
            self.assertEqual(header['sourceTransport'], 'realsense_net')
            self.assertEqual(header['operationId'], self.receiver.operation_id)
            self.assertEqual(header['sessionId'], self.receiver.session_id)
            self.assertEqual(depth.dtype, np.uint16)
            self.receiver.sequence.accept(header)
            self.records.append(header)
            return dict(persisted=True, status='localized')

        self.receiver.process = process

        async def prepare(config):
            bridge = FakeBridge()
            self.processes.append(bridge)
            return bridge, (native_header(), np.zeros((2, 2, 3), np.uint8), np.ones((2, 2), np.uint16))

        self.prepare = AsyncMock(side_effect=prepare)
        self.patches = [patch.object(main, 'camera_source', self.source),
                        patch.object(main, 'rgbd_receiver', self.receiver),
                        patch.object(rgbd_api, 'receiver', self.receiver),
                        patch.object(main, 'current_operation_id', None),
                        patch.object(main, 'current_video_filenames', None),
                        patch.object(main, 'stop_archive_recorders'),
                        patch.object(main, 'set_current_operation'),
                        patch.object(main.maintenance, 'lease', None),
                        patch('camera_source.pi_service', new_callable=AsyncMock),
                        patch.object(self.source, 'prepare', self.prepare)]
        for item in self.patches:
            item.start()
        import camera_source
        self.pi_service = camera_source.pi_service
        self.sock = socket.socket()
        self.sock.bind(('127.0.0.1', 0))
        self.base = f'http://127.0.0.1:{self.sock.getsockname()[1]}'
        self.server = uvicorn.Server(uvicorn.Config(main.app, lifespan='off', log_level='error'))
        self.thread = threading.Thread(target=lambda: self.server.run(sockets=[self.sock]), daemon=True)
        self.thread.start()
        for _ in range(100):
            if self.server.started:
                return
            time.sleep(.02)
        self.fail('API server failed to start')

    def tearDown(self):
        try:
            requests.post(self.base + '/api/operation-end', timeout=10)
        finally:
            self.server.should_exit = True
            self.thread.join(10)
            self.sock.close()
            for item in reversed(self.patches):
                item.stop()

    def select(self, **config):
        return requests.post(self.base + '/api/camera-source', json=config, timeout=20)

    def start_operation(self):
        response = requests.post(self.base + '/api/operation-update', json={'opID': 'a' * 24}, timeout=5)
        self.assertEqual(response.status_code, 200)

    def test_default_and_invalid_selection_do_not_change_mode(self):
        self.assertEqual(requests.get(self.base + '/api/camera-source').json()['mode'], 'websocket')
        self.assertEqual(self.select(mode='unknown').status_code, 422)
        self.assertEqual(self.select(mode='realsense_net', host='invalid').status_code, 422)
        self.assertEqual(self.source.config.mode, 'websocket')
        self.prepare.assert_not_awaited()

    def test_live_switch_closes_old_socket_and_preserves_operation(self):
        self.start_operation()

        async def exercise():
            url = self.base.replace('http:', 'ws:') + '/ws/rgbd'
            async with websockets.connect(url) as ws:
                await ws.send(json.dumps(dict(type='hello', operationId='a' * 24,
                    sessionId='00000000-0000-4000-8000-000000000001', clockId='edge')))
                self.assertEqual(json.loads(await ws.recv())['type'], 'ready')
                response = await asyncio.to_thread(self.select, mode='realsense_net', host='192.168.0.99', width=2, height=2)
                self.assertEqual(response.status_code, 200, response.text)
                self.assertEqual(response.json()['operationId'], 'a' * 24)
                with self.assertRaises(websockets.exceptions.ConnectionClosed):
                    await ws.recv()
            async with websockets.connect(url) as rejected:
                with self.assertRaises(websockets.exceptions.ConnectionClosed):
                    await rejected.recv()

        asyncio.run(exercise())
        for _ in range(100):
            if self.records:
                break
            time.sleep(.01)
        response = self.select(mode='websocket')
        self.assertEqual(response.status_code, 200)
        self.assertTrue(self.records)
        self.assertTrue(all(p.returncode is not None for p in self.processes))
        self.assertIsNone(response.json()['sessionId'])
        self.assertEqual(response.json()['operationId'], 'a' * 24)

    def test_failed_probe_preserves_existing_session(self):
        self.start_operation()
        self.receiver.session_id = '00000000-0000-4000-8000-000000000001'
        self.prepare.side_effect = ValueError('Camera unavailable')
        response = self.select(mode='realsense_net', host='192.168.0.99')
        self.assertEqual(response.status_code, 503)
        self.assertEqual(self.source.config.mode, 'websocket')
        self.assertEqual(self.receiver.session_id, '00000000-0000-4000-8000-000000000001')

    def test_selection_before_operation_and_operation_restart(self):
        response = self.select(mode='realsense_net', host='192.168.0.99', width=2, height=2)
        self.assertEqual(response.json()['state'], 'waiting')
        self.assertEqual(self.processes[0].returncode, 0)
        self.start_operation()
        first_session = requests.get(self.base + '/api/camera-source').json()['sessionId']
        requests.post(self.base + '/api/operation-end', timeout=5)
        self.assertEqual(self.source.config.mode, 'realsense_net')
        self.start_operation()
        self.assertNotEqual(first_session, self.receiver.session_id)
        self.assertEqual(CameraSource(rgbd_api.RGBDReceiver()).config.mode, 'websocket')

    def test_managed_switch_controls_both_pi_services_and_switches_back(self):
        response = self.select(mode='realsense_net', host='192.168.0.99', width=2, height=2, managePiServices=True)
        self.assertEqual(response.status_code, 200, response.text)
        self.assertEqual([call.args[1:] for call in self.pi_service.await_args_list],
                         [('stop', 'realsense-edge.service'), ('stop', 'rs-server.service'),
                          ('start', 'rs-server.service')])
        self.pi_service.reset_mock()
        response = self.select(mode='websocket')
        self.assertEqual(response.status_code, 200, response.text)
        self.assertTrue(response.json()['managePiServices'])
        self.assertEqual([call.args[1:] for call in self.pi_service.await_args_list],
                         [('stop', 'realsense-edge.service'), ('stop', 'rs-server.service'),
                          ('start', 'realsense-edge.service')])

    def test_managed_probe_failure_restarts_previous_pi_producer(self):
        self.prepare.side_effect = ValueError('Network camera failed')
        response = self.select(mode='realsense_net', host='192.168.0.99', managePiServices=True)
        self.assertEqual(response.status_code, 503, response.text)
        self.assertEqual(self.source.config.mode, 'websocket')
        self.assertEqual(self.pi_service.await_args_list[-1].args,
                         ('192.168.0.99', 'start', 'realsense-edge.service'))

    def test_native_persistence_retry_keeps_the_same_frame(self):
        self.start_operation()
        process = self.receiver.process
        attempts = []

        def transient_failure(packet):
            header, _, _ = decode_packet(packet)
            attempts.append((header['sessionId'], header['frameId']))
            if len(attempts) == 1:
                raise requests.ConnectionError('Temporary backend outage')
            return process(packet)

        self.receiver.process = transient_failure
        response = self.select(mode='realsense_net', host='192.168.0.99', width=2, height=2)
        self.assertEqual(response.status_code, 200, response.text)
        for _ in range(150):
            if self.records:
                break
            time.sleep(.01)
        self.assertEqual(len(attempts), 2)
        self.assertEqual(attempts[0], attempts[1])
        self.assertEqual(self.source.state, 'streaming')
        self.assertIsNone(self.source.error)


if __name__ == '__main__':
    unittest.main()
