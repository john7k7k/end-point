"""Process-local selection of the RGB-D producer and official SDK bridge."""
import asyncio
import ipaddress
import json
import os
import struct
import time
from pathlib import Path
from typing import Literal
from uuid import uuid4

import numpy as np
import cv2
import requests
from pydantic import BaseModel, Field, model_validator

from rgbd_sync import MAX_PAIR_SKEW_NS, decode_packet, encode_packet


class CameraSourceConfig(BaseModel):
    mode: Literal['websocket', 'realsense_net'] = 'websocket'
    host: str | None = None
    width: int = Field(default=640, ge=1, le=4096)
    height: int = Field(default=480, ge=1, le=2160)
    fps: Literal[6, 15, 30, 60] = 30
    calibrationId: str = Field(default='default', min_length=1, max_length=128)
    cameraId: str = Field(default='default', pattern=r'^[a-zA-Z0-9_-]{1,64}$')
    cameraTimeOffsetNs: int | None = None
    managePiServices: bool = False

    @model_validator(mode='after')
    def validate_host(self):
        if self.host is not None and ipaddress.ip_address(self.host).version != 4:
            raise ValueError('host must be the Pi IPv4 address')
        if self.mode == 'realsense_net' and not self.host:
            raise ValueError('realsense_net requires the Pi IPv4 address')
        if self.mode == 'realsense_net' and self.width % 2:
            raise ValueError('The YUYV color profile requires an even width')
        return self


def bridge_path():
    suffix = '.exe' if os.name == 'nt' else ''
    return Path(os.environ.get('REALSENSE_NET_BRIDGE', str(
        Path(__file__).parent / 'native' / 'build' / f'realsense-net-bridge{suffix}')))


async def pi_service(host, action, service):
    """Use an administrator-configured SSH identity and fixed systemd unit names."""
    user = os.environ.get('REALSENSE_PI_SSH_USER')
    if not user or not user.replace('_', '').replace('-', '').isalnum():
        raise ValueError('Set REALSENSE_PI_SSH_USER and configure SSH keys / sudo for Pi service control')
    # host is validated before constructing the SSH destination. No shell runs locally.
    host = str(ipaddress.IPv4Address(host))
    process = await asyncio.create_subprocess_exec(
        'ssh', '-o', 'BatchMode=yes', '-o', 'ConnectTimeout=5', f'{user}@{host}',
        f'sudo -n /usr/bin/systemctl {action} {service}',
        stdout=asyncio.subprocess.DEVNULL, stderr=asyncio.subprocess.PIPE)
    try:
        _, stderr = await asyncio.wait_for(process.communicate(), 15)
        if process.returncode:
            raise ValueError(f'Pi service {action} failed: {stderr.decode(errors="replace")[-1000:]}')
    except BaseException:
        await stop_process(process)
        raise


async def stop_process(process):
    if process.returncode is None:
        try:
            process.terminate()
        except ProcessLookupError:
            pass
        try:
            await asyncio.wait_for(process.wait(), 3)
        except asyncio.TimeoutError:
            process.kill()
            await process.wait()


async def read_bridge_frame(process, config):
    """The helper emits a length-prefixed JSON header followed by raw YUYV/Z16."""
    size = struct.unpack('!I', await process.stdout.readexactly(4))[0]
    if not 0 < size <= 16384:
        raise ValueError('Invalid native bridge header length')
    header = json.loads(await process.stdout.readexactly(size))
    width, height = header['width'], header['height']
    if (width, height) != (config.width, config.height):
        raise ValueError('Native bridge resolution differs from requested profile')
    count = width * height
    if header['colorFormat'] != 'yuyv' or width % 2:
        raise ValueError('Expected even-width YUYV from the official network SDK')
    yuyv = np.frombuffer(await process.stdout.readexactly(count * 2), np.uint8).reshape(height, width, 2)
    color = cv2.cvtColor(yuyv, cv2.COLOR_YUV2BGR_YUY2)
    depth = np.frombuffer(await process.stdout.readexactly(count * 2), '<u2').reshape(height, width).astype(np.uint16)
    for stream in ('color', 'depth'):
        offset = config.cameraTimeOffsetNs
        clock = header[f'{stream}Clock'].lower().replace(' ', '_')
        if clock not in ('hardware_clock', 'system_time', 'global_time'):
            raise ValueError(f'Unsupported camera clock: {clock}')
        if clock == 'hardware_clock' and offset is None:
            raise ValueError('Camera uses hardware_clock; supply a measured cameraTimeOffsetNs to map capture time to Unix ns')
        timestamp = int(header[f'{stream}CaptureTimeNs']) + (offset or 0)
        if abs(timestamp - time.time_ns()) > 5_000_000_000:
            raise ValueError('Camera capture time differs from server time by over 5 seconds; check Pi clock/offset')
        header[f'{stream}CaptureTimeNs'] = str(timestamp)
    if abs(int(header['colorCaptureTimeNs']) - int(header['depthCaptureTimeNs'])) > MAX_PAIR_SKEW_NS:
        raise ValueError('Native RGB-D pair exceeds the 20 ms capture-time limit')
    return header, color, depth


class CameraSource:
    def __init__(self, receiver):
        self.receiver = receiver
        self.config = CameraSourceConfig()
        self.lock = asyncio.Lock()
        self.task = None
        self.process = None
        self.stopping = False
        self.state = 'waiting'
        self.error = None

    def status(self):
        state = ('streaming' if self.config.mode == 'websocket' and self.receiver.connected
                 and self.receiver.session_id else self.state)
        return dict(**self.config.model_dump(), state=state, error=self.error,
                    operationId=self.receiver.operation_id, sessionId=self.receiver.session_id,
                    clockId=self.receiver.clock_id, lastFrameId=self.receiver.sequence.last)

    async def prepare(self, config):
        path = bridge_path()
        if not path.is_file():
            raise ValueError(f'Official SDK bridge is missing: {path}. Build AI/native and set REALSENSE_NET_BRIDGE.')
        process = await asyncio.create_subprocess_exec(
            str(path.resolve()), config.host, str(config.width), str(config.height), str(config.fps),
            stdout=asyncio.subprocess.PIPE,
            limit=16 * 1024 * 1024)
        try:
            first = await asyncio.wait_for(read_bridge_frame(process, config), 15)
            # Validate depth scale, intrinsics and payload before replacing a working source.
            header, color, depth = first
            decode_packet(encode_packet(dict(header, operationId='0' * 24, sessionId=str(uuid4()),
                                             clockId='realsense-net-unix-ns', frameId=0,
                                             calibrationId=config.calibrationId, cameraId=config.cameraId,
                                             dataSource='sensor'), color, depth))
            return process, first
        except BaseException:
            await stop_process(process)
            raise

    async def stop(self):
        self.stopping = True
        if self.process is not None:
            await stop_process(self.process)
        if self.task is not None:
            await self.task
        self.task = self.process = None
        self.stopping = False

    async def disconnect_websocket(self):
        # Invalidate messages that were waiting for a pose or receiver.lock.
        async with self.receiver.lock:
            self.receiver.source_generation += 1
            socket = self.receiver.websocket
            self.receiver.websocket = None
            self.receiver.connected = False
        if socket is not None:
            try:
                await socket.close(code=1012, reason='Camera source changed')
            except RuntimeError:
                pass

    async def select(self, config):
        async with self.lock:
            if 'managePiServices' not in config.model_fields_set and self.config.managePiServices:
                config = config.model_copy(update={'managePiServices': True})
            if config.managePiServices and not config.host:
                config = config.model_copy(update={'host': self.config.host})
            if config.managePiServices and not config.host:
                raise ValueError('Supply the Pi host when enabling managePiServices')
            if config == self.config and (config.mode == 'websocket' or self.state == 'streaming'):
                return self.status()
            if config.managePiServices:
                return await self.select_managed(config)
            candidate = None
            try:
                if config.mode == 'realsense_net':
                    candidate, first = await self.prepare(config)
                await self.stop()
                # Claim the receiver before closing the old publisher, so reconnects cannot race.
                async with self.receiver.lock:
                    self.receiver.source_mode = 'switching'
                await self.disconnect_websocket()
                await self.receiver.reset(self.receiver.operation_id)
                self.config = config
                self.receiver.source_mode = config.mode
                self.error = None
                self.state = 'waiting'
                if candidate is not None:
                    if self.receiver.operation_id:
                        self.start(candidate, first)
                        candidate = None
                return self.status()
            finally:
                if candidate is not None:
                    await stop_process(candidate)

    async def select_managed(self, config):
        previous = self.config
        if previous.managePiServices and previous.host != config.host:
            raise ValueError('Managed switching currently requires the same Pi host')
        # Both units access the same USB device. Release the producer before starting the other.
        async with self.receiver.lock:
            self.receiver.source_mode = 'switching'
        await self.stop()
        await self.disconnect_websocket()
        candidate = None
        try:
            await pi_service(config.host, 'stop', 'realsense-edge.service')
            await pi_service(config.host, 'stop', 'rs-server.service')
            if config.mode == 'realsense_net':
                await pi_service(config.host, 'start', 'rs-server.service')
                candidate, first = await self.prepare(config)
            await self.receiver.reset(self.receiver.operation_id)
            self.config = config
            self.receiver.source_mode = config.mode
            self.state, self.error = 'waiting', None
            if config.mode == 'websocket':
                await pi_service(config.host, 'start', 'realsense-edge.service')
            elif self.receiver.operation_id:
                self.start(candidate, first)
                candidate = None
            return self.status()
        except Exception as error:
            # Restart the former producer with a fresh session after releasing USB.
            if candidate is not None:
                await stop_process(candidate)
                candidate = None
            self.config = previous
            await self.receiver.reset(self.receiver.operation_id)
            self.receiver.source_mode = previous.mode
            self.state, self.error = 'waiting', str(error) or type(error).__name__
            try:
                await pi_service(config.host, 'stop', 'realsense-edge.service')
                await pi_service(config.host, 'stop', 'rs-server.service')
                if previous.mode == 'websocket':
                    await pi_service(config.host, 'start', 'realsense-edge.service')
                else:
                    await pi_service(previous.host, 'start', 'rs-server.service')
                    if self.receiver.operation_id:
                        process, first = await self.prepare(previous)
                        self.start(process, first)
            except Exception as rollback_error:
                self.state = 'error'
                self.error = f'{error}; restoring previous Pi source also failed: {rollback_error}'
                raise ValueError(self.error) from error
            raise
        finally:
            if candidate is not None:
                await stop_process(candidate)

    def start(self, process, first):
        self.process = process
        self.receiver.session_id = str(uuid4())
        self.receiver.clock_id = 'realsense-net-unix-ns'
        self.receiver.last_packet_at = time.monotonic()
        self.state = 'streaming'
        self.task = asyncio.create_task(self.run(process, first))

    async def operation_start(self, operation_id):
        # Caller holds self.lock, shared by source changes and operation lifecycle.
        async with self.receiver.lock:
            self.receiver.source_mode = 'switching'
        await self.stop()
        await self.disconnect_websocket()
        await self.receiver.reset(operation_id)
        self.receiver.source_mode = self.config.mode
        self.state, self.error = 'waiting', None
        if self.config.mode == 'realsense_net':
            try:
                process, first = await self.prepare(self.config)
                self.start(process, first)
            except (OSError, ValueError, KeyError, asyncio.TimeoutError, asyncio.IncompleteReadError) as error:
                self.state, self.error = 'error', str(error) or type(error).__name__

    async def run(self, process, first):
        frame_id = 0
        identity = dict(operationId=self.receiver.operation_id, sessionId=self.receiver.session_id,
                        clockId=self.receiver.clock_id, calibrationId=self.config.calibrationId,
                        cameraId=self.config.cameraId, dataSource='sensor', sourceTransport='realsense_net')
        try:
            while not self.stopping:
                header, color, depth = first
                packet = encode_packet(dict(header, **identity, frameId=frame_id), color, depth)
                capture = int(header['colorCaptureTimeNs'])
                for _ in range(10):
                    if self.receiver.poses.at(capture) is not None or self.stopping:
                        break
                    await asyncio.sleep(.01)
                committed = False
                while not self.stopping and not committed:
                    async with self.receiver.lock:
                        previous = (self.receiver.sequence.last, self.receiver.sequence.last_time, self.receiver.sequence.missing)
                        try:
                            # The journal recovery worker may have committed this retry meanwhile.
                            result = (dict(persisted=True) if self.receiver.sequence.last == frame_id
                                      else await asyncio.to_thread(self.receiver.process, packet))
                            if result.get('persisted') is not True:
                                raise ValueError(f'Native frame rejected: {result["status"]}')
                            committed = True
                            self.error = None
                        except requests.RequestException as error:
                            self.receiver.sequence.last, self.receiver.sequence.last_time, self.receiver.sequence.missing = previous
                            self.error = str(error)
                        except Exception:
                            self.receiver.sequence.last, self.receiver.sequence.last_time, self.receiver.sequence.missing = previous
                            raise
                    if not committed:
                        await asyncio.sleep(.5)
                frame_id += 1
                if self.stopping:
                    break
                first = await asyncio.wait_for(read_bridge_frame(process, self.config), 10)
        except Exception as error:
            if not self.stopping:
                self.state, self.error = 'error', str(error) or type(error).__name__
        finally:
            await stop_process(process)
