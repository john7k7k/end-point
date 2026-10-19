"""Exercise the real app's operation-update -> status -> WebSocket handshake."""
import asyncio
import json
from pathlib import Path
import socket
import sys
import threading
import time
import unittest
from unittest.mock import patch
import requests
import uvicorn
import websockets

sys.path.insert(0, str(Path(__file__).resolve().parents[1]))
import main
import rgbd_api


class LifecycleTests(unittest.TestCase):
    def test_operation_update_reaches_websocket_receiver(self):
        sock = socket.socket()
        sock.bind(('127.0.0.1', 0))
        port = sock.getsockname()[1]
        server = uvicorn.Server(uvicorn.Config(main.app, lifespan='off', log_level='error'))
        thread = threading.Thread(target=lambda: server.run(sockets=[sock]), daemon=True)
        thread.start()
        try:
            for _ in range(100):
                if server.started:
                    break
                time.sleep(.05)
            op = 'a'*24
            with patch.object(main, 'stop_archive_recorders'):
                reply = requests.post(f'http://127.0.0.1:{port}/api/operation-update', json={'opID': op}, timeout=5)
                self.assertEqual(reply.status_code, 200)
            state = requests.get(f'http://127.0.0.1:{port}/api/rgbd/status', timeout=5).json()
            self.assertEqual(state['operationId'], op)
            async def handshake():
                async with websockets.connect(f'ws://127.0.0.1:{port}/ws/rgbd') as ws:
                    await ws.send(json.dumps(dict(type='hello', operationId=op,
                        sessionId='00000000-0000-4000-8000-000000000001', clockId='test')))
                    return json.loads(await ws.recv())
            self.assertEqual(asyncio.run(handshake())['type'], 'ready')
        finally:
            server.should_exit = True
            thread.join(10)
            sock.close()


if __name__ == '__main__':
    unittest.main()
