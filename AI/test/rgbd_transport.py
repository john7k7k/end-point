"""Bounded stop-and-wait transport. Reconnects with the same session/frame."""
import asyncio
import json
import websockets

class PairedPublisher:
    def __init__(self, url, base):
        self.url, self.base = url, base
        self.ws = None
        self.last_pose = -1
        self.last_frame = -1

    async def connect(self):
        if self.ws:
            await self.ws.close()
        self.ws = await websockets.connect(self.url, max_size=16*1024*1024, max_queue=2, open_timeout=3)
        await self.ws.send(json.dumps(dict(self.base, type='hello')))
        ready = json.loads(await asyncio.wait_for(self.ws.recv(), 8))
        if ready.get('type') != 'ready':
            raise RuntimeError(ready)
        self.last_pose = int(ready.get('lastPoseTimeNs') or -1)
        self.last_frame = ready.get('lastFrameId', -1)

    async def frame(self, frame_id, pose, packet):
        # Never read a new video frame while this one has not been acknowledged.
        for attempt in range(30):
            try:
                if not self.ws:
                    await self.connect()
                if frame_id <= self.last_frame:
                    return dict(type='result', frameId=frame_id, persisted=True, status='already_persisted')
                if int(pose['timestampNs']) > self.last_pose:
                    await self.ws.send(json.dumps(pose))
                    reply = json.loads(await asyncio.wait_for(self.ws.recv(), 8))
                    if reply.get('type') != 'pose_accepted':
                        raise RuntimeError(reply)
                    self.last_pose = int(pose['timestampNs'])
                await self.ws.send(packet)
                reply = json.loads(await asyncio.wait_for(self.ws.recv(), 8))
                if reply.get('persisted') or reply.get('status') == 'duplicate_or_out_of_order':
                    self.last_frame = frame_id
                    return reply
                raise RuntimeError(reply)
            except (OSError, TimeoutError, websockets.ConnectionClosed, RuntimeError) as error:
                if self.ws:
                    await self.ws.close()
                self.ws = None
                if attempt == 29:
                    raise RuntimeError(f'RGB-D frame {frame_id} not acknowledged after retries: {error}') from error
                await asyncio.sleep(.25)

    async def end(self):
        if not self.ws:
            await self.connect()
        await self.ws.send(json.dumps({'type': 'end'}))
        reply = json.loads(await asyncio.wait_for(self.ws.recv(), 10))
        if reply.get('type') != 'ended':
            raise RuntimeError(reply)
        return reply

    async def close(self):
        if self.ws:
            await self.ws.close()
