"""Independent paired RGB-D ingestion. RTSP is preview, never a sync source."""
import asyncio
import json
import os
import time
import cv2
import numpy as np
from pathlib import Path
from uuid import UUID

import requests
from fastapi import APIRouter, WebSocket, WebSocketDisconnect

from detector import run_screw_detector
from rgbd_sync import FrameSequence, PoseBuffer, decode_packet, camera_point, world_point

router = APIRouter()
ROOT = Path(__file__).resolve().parent / 'video' / 'rgbd'
BACKEND = 'http://127.0.0.1:3000'


def persist_journal(sidecar, recovery=False):
    record = json.loads(sidecar.read_text(encoding='utf-8'))
    response = requests.post(f'{BACKEND}/api/rgbd/frames', json=dict(record, recovery=recovery), timeout=5)
    response.raise_for_status()
    sidecar.with_suffix('.committed').touch()
    sidecar.with_suffix('.pending').unlink(missing_ok=True)
    if (record['operationId'], record['sessionId']) == (receiver.operation_id, receiver.session_id) and record['frameId'] > receiver.sequence.last:
        receiver.sequence.last = record['frameId']
        receiver.sequence.last_time = int(record['captureTimeNs'])
        receiver.sequence.missing = record.get('missingFrames', 0)
    return record


def replay_pending(recover_unmarked=True):
    # Each session is replayed in frame order. Stop on failure, never skip over
    # an earlier uncommitted observation and thereby change a fusion window.
    count = 0
    for folder in ROOT.glob('*/*'):
        # Positive commit marker closes the crash window between writing JSON
        # and creating the pending marker (or receiving a successful HTTP ACK).
        if recover_unmarked:
            for sidecar in folder.glob('*.json'):
                if not sidecar.with_suffix('.committed').exists():
                    sidecar.with_suffix('.pending').touch(exist_ok=True)
        for marker in sorted(folder.glob('*.pending')):
            try:
                persist_journal(marker.with_suffix('.json'), recovery=True)
            except (OSError, ValueError, requests.RequestException) as error:
                print(f'RGB-D recovery blocked for {folder.name}: {error}')
                break
            count += 1
            if count >= 100:
                return count
    return count


async def recovery_worker():
    startup_scan = True
    while True:
        await asyncio.sleep(5)
        try:
            async with receiver.lock:
                await asyncio.to_thread(replay_pending, startup_scan)
                startup_scan = False
        except (OSError, ValueError, requests.RequestException) as error:
            print(f'RGB-D journal recovery pending: {error}')


class RGBDReceiver:
    def __init__(self):
        self.operation_id = None
        self.session_id = None
        self.clock_id = None
        self.sequence = FrameSequence()
        self.poses = PoseBuffer()
        self.connected = False
        self.last_packet_at = 0
        self.lock = asyncio.Lock()
        self.config = lambda: {'detectionAlgorithm': 'mock_yolo'}

    async def reset(self, operation_id):
        async with self.lock:
            self.operation_id = operation_id
            self.session_id = self.clock_id = None
            self.sequence = FrameSequence()
            self.poses = PoseBuffer()
            self.last_packet_at = 0

    def pose(self, data):
        if (data.get('operationId'), data.get('sessionId'), data.get('clockId')) != (
                self.operation_id, self.session_id, self.clock_id):
            raise ValueError('pose operation/session/clock mismatch')
        self.poses.add(data)

    def process(self, packet):
        received_ns = time.time_ns()
        h, color, depth = decode_packet(packet)
        if h['operationId'] != self.operation_id:
            raise ValueError('operation mismatch; wait for operation-update before sending')
        # UUID prevents arbitrary paths, operationId is validated separately.
        UUID(h['sessionId'])
        if len(h['operationId']) != 24 or any(c not in '0123456789abcdef' for c in h['operationId']):
            raise ValueError('invalid operationId')
        if self.session_id != h['sessionId'] or self.clock_id != h['clockId']:
            raise ValueError('send hello with matching session/clock first')
        self.last_packet_at = time.monotonic()
        status = self.sequence.accept(h)
        if status in ('duplicate_or_out_of_order', 'non_monotonic_capture_time'):
            return {'type': 'result', 'frameId': h['frameId'], 'status': status}
        folder = ROOT / h['operationId'] / h['sessionId']
        folder.mkdir(parents=True, exist_ok=True)
        target = folder / f"{h['frameId']:012d}.rgbd"
        sidecar = target.with_suffix('.json')
        # A retry uses the original inference/config, not new random mock data.
        if sidecar.exists():
            record = persist_journal(sidecar, recovery=True)
            return dict(type='result', frameId=h['frameId'], status=record['status'], persisted=True,
                        missingFrames=self.sequence.missing, result=record['result'])
        for pending in sorted(folder.glob('*.pending')):
            persist_journal(pending.with_suffix('.json'), recovery=True)
        pose = self.poses.at(int(h['colorCaptureTimeNs']))
        result = None
        config = self.config().copy()
        if status == 'accepted':
            detected = run_screw_detector(color, config['detectionAlgorithm'])
            detected = detected if isinstance(detected, list) else [detected] if detected else []
            calibration = None
            if pose is not None and detected:
                response = requests.get(f'{BACKEND}/api/calibration/camera-extrinsics', timeout=2)
                response.raise_for_status()
                calibration = response.json()
                # The current platform has one extrinsics profile only.
                if h['calibrationId'] != calibration.get('key', 'default'):
                    status = 'calibration_mismatch'
            observations = []
            for detection in detected:
                point = camera_point(depth, detection['center_coordinate'], h)
                absolute = world_point(point, pose, calibration) if point is not None and pose and calibration and status != 'calibration_mismatch' else None
                observations.append(dict(detection, cameraPosition=point, rawAbsolutePosition=absolute))
            if status != 'calibration_mismatch':
                status = ('no_detection' if not observations else 'pose_unavailable' if pose is None
                          else 'localized' if any(o['rawAbsolutePosition'] for o in observations) else 'invalid_depth')
            result = dict(observations=observations, devicePose=pose, calibration=calibration,
                          detectionIsSimulated=config['detectionAlgorithm'] == 'mock_yolo')
            # Compatibility for existing diagnostic clients; canonical list can
            # contain zero, one, or multiple detections.
            if observations:
                result.update(observations[0])
        # Keep the complete lossless depth + color + metadata for deterministic replay.
        # Atomic replace also makes retry after a backend outage safe.
        temporary = target.with_suffix('.tmp')
        temporary.write_bytes(packet)
        os.replace(temporary, target)
        # Fixed metric range (0–6 m), not per-frame auto contrast. Raw uint16
        # depth remains untouched in the packet; this JPEG is display-only.
        preview = np.clip(depth.astype(float) * h['depthScaleMeters'] / 6 * 255, 0, 255).astype(np.uint8)
        ok, encoded = cv2.imencode('.jpg', preview)
        if not ok:
            raise ValueError('depth preview encoding failed')
        preview_path = target.with_suffix('.depth.jpg')
        temporary_preview = target.with_suffix('.depth.tmp')
        temporary_preview.write_bytes(encoded.tobytes())
        os.replace(temporary_preview, preview_path)
        record = dict(operationId=h['operationId'], sessionId=h['sessionId'], frameId=h['frameId'],
                      captureTimeNs=h['colorCaptureTimeNs'], receivedTimeNs=str(received_ns),
                      processedTimeNs=str(time.time_ns()), status=status, metadata=h,
                      missingFrames=self.sequence.missing, result=result,
                      devicePose=pose, selectedAlgorithm=config.get('screwFusionAlgorithm', 'average'),
                      rawPacketPath=target.relative_to(ROOT.parent).as_posix(),
                      videoTimeMs=None)  # No fabricated mapping to independently recorded RTSP.
        # Sidecar survives MongoDB/network failure; never acknowledge persisted on failure.
        temporary_json = target.with_suffix('.json.tmp')
        temporary_json.write_text(json.dumps(record, ensure_ascii=False, allow_nan=False), encoding='utf-8')
        os.replace(temporary_json, sidecar)
        target.with_suffix('.pending').touch()
        persist_journal(sidecar)
        return dict(type='result', frameId=h['frameId'], status=status, persisted=True,
                    missingFrames=self.sequence.missing, result=result)


receiver = RGBDReceiver()


@router.post('/api/rgbd/pose')
async def receive_pose(data: dict):
    from fastapi import HTTPException
    async with receiver.lock:
        try:
            receiver.pose(data)
        except (ValueError, KeyError, TypeError) as error:
            raise HTTPException(status_code=422, detail=str(error)) from error
    return {'status': 'accepted'}


@router.get('/api/rgbd/status')
async def status():
    return dict(operationId=receiver.operation_id, sessionId=receiver.session_id,
                connected=receiver.connected, lastFrameId=receiver.sequence.last,
                missingFrames=receiver.sequence.missing)


@router.websocket('/ws/rgbd')
async def receive_rgbd(ws: WebSocket):
    await ws.accept()
    if receiver.connected:
        await ws.close(code=1008, reason='only one RGB-D publisher is allowed')
        return
    receiver.connected = True
    try:
        while True:
            message = await asyncio.wait_for(ws.receive(), timeout=10)
            if message['type'] == 'websocket.disconnect':
                break
            try:
                # Let an independently arriving MQTT pose supply the right-hand
                # interpolation sample. Do not hold the pose buffer lock while waiting.
                if message.get('bytes') is not None:
                    raw = message['bytes']
                    if len(raw) > 4:
                        import struct
                        header_size = struct.unpack('!I', raw[:4])[0]
                        if 0 < header_size <= 16384:
                            pending_header = json.loads(raw[4:4+header_size])
                            if not isinstance(pending_header, dict):
                                raise ValueError('header must be a JSON object')
                            capture = int(pending_header.get('colorCaptureTimeNs', '0'))
                            for _ in range(10):
                                if receiver.poses.at(capture) is not None:
                                    break
                                await asyncio.sleep(.01)
                async with receiver.lock:
                    if message.get('bytes') is not None:
                        # One frame in flight, explicit ACK backpressure. No unbounded AI queue.
                        previous = (receiver.sequence.last, receiver.sequence.last_time, receiver.sequence.missing)
                        try:
                            result = await asyncio.to_thread(receiver.process, message['bytes'])
                        except Exception:
                            receiver.sequence.last, receiver.sequence.last_time, receiver.sequence.missing = previous
                            raise
                    else:
                        data = json.loads(message['text'])
                        if not isinstance(data, dict):
                            raise ValueError('message must be a JSON object')
                        if data.get('type') == 'hello':
                            UUID(data['sessionId'])
                            if not receiver.operation_id or data['operationId'] != receiver.operation_id:
                                raise ValueError('operation not ready')
                            if receiver.session_id not in (None, data['sessionId']):
                                raise ValueError('new session requires a new operation')
                            if receiver.clock_id not in (None, data['clockId']):
                                raise ValueError('clock cannot change during a session')
                            receiver.session_id, receiver.clock_id = data['sessionId'], data['clockId']
                            # Resume the same session after AI restart. Uncommitted
                            # journals remain retryable; only committed frames set ACK.
                            folder = ROOT / receiver.operation_id / receiver.session_id
                            for saved in sorted(folder.glob('*.json'), reverse=True):
                                if not saved.with_suffix('.committed').exists():
                                    continue
                                record = json.loads(saved.read_text(encoding='utf-8'))
                                if record['frameId'] > receiver.sequence.last:
                                    receiver.sequence.last = record['frameId']
                                    receiver.sequence.last_time = int(record['captureTimeNs'])
                                    receiver.sequence.missing = record.get('missingFrames', 0)
                                break
                            receiver.last_packet_at = time.monotonic()
                            result = {'type': 'ready', 'maxInFlight': 1, 'lastFrameId': receiver.sequence.last,
                                      'lastPoseTimeNs': str(receiver.poses.samples[-1][0]) if receiver.poses.samples else None}
                        elif data.get('type') == 'pose':
                            receiver.pose(data)
                            result = {'type': 'pose_accepted'}
                        elif data.get('type') == 'end':
                            folder = ROOT / receiver.operation_id / receiver.session_id
                            for pending in sorted(folder.glob('*.pending')):
                                await asyncio.to_thread(persist_journal, pending.with_suffix('.json'), True)
                            result = {'type': 'ended', 'lastFrameId': receiver.sequence.last}
                        else:
                            raise ValueError('unknown message type')
                await ws.send_json(result)
                if result['type'] == 'ended':
                    break
            except (ValueError, KeyError, TypeError, OSError, requests.RequestException) as error:
                await ws.send_json({'type': 'error', 'error': str(error), 'persisted': False})
    except (WebSocketDisconnect, asyncio.TimeoutError):
        pass
    finally:
        receiver.connected = False
        if ws.client_state.name == 'CONNECTED':
            await ws.close()
