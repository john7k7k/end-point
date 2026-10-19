"""RGB-D v1 wire format and capture-time pose interpolation (no network I/O)."""
import json
import math
import struct
from collections import deque

import cv2
import numpy as np

MAX_PACKET_BYTES = 16 * 1024 * 1024
MAX_HEADER_BYTES = 16384
MAX_PAIR_SKEW_NS = 20_000_000  # Initial engineering limit: 20 ms, not calibration.
MAX_POSE_GAP_NS = 200_000_000


def encode_packet(header, color, depth):
    if depth.dtype != np.uint16 or depth.ndim != 2:
        raise ValueError("depth must be raw uint16, aligned to color")
    ok_c, c = cv2.imencode('.jpg', color, [cv2.IMWRITE_JPEG_QUALITY, 90])
    ok_d, d = cv2.imencode('.png', depth)
    if not ok_c or not ok_d:
        raise ValueError("image encoding failed")
    h = dict(header, version=1, colorEncoding='jpeg', depthEncoding='png16',
             width=color.shape[1], height=color.shape[0],
             colorBytes=len(c), depthBytes=len(d))
    raw = json.dumps(h, allow_nan=False).encode('utf-8')
    return struct.pack('!I', len(raw)) + raw + c.tobytes() + d.tobytes()


def decode_packet(packet):
    if not 4 < len(packet) <= MAX_PACKET_BYTES:
        raise ValueError("invalid packet length")
    size = struct.unpack('!I', packet[:4])[0]
    if not 0 < size <= MAX_HEADER_BYTES or 4 + size >= len(packet):
        raise ValueError("invalid header length")
    h = json.loads(packet[4:4 + size])
    if not isinstance(h, dict):
        raise ValueError('header must be a JSON object')
    if h.get('version') != 1 or h.get('colorEncoding') != 'jpeg' or h.get('depthEncoding') != 'png16':
        raise ValueError("unsupported RGB-D encoding/version")
    for key in ('sessionId', 'operationId', 'calibrationId', 'clockId'):
        if not isinstance(h.get(key), str) or not 0 < len(h[key]) <= 128:
            raise ValueError(f"invalid {key}")
    for key in ('frameId', 'width', 'height', 'colorBytes', 'depthBytes'):
        if type(h.get(key)) is not int or h[key] < (0 if key == 'frameId' else 1):
            raise ValueError(f"invalid {key}")
    if h['frameId'] > 2**53 - 1 or h['width'] * h['height'] > 4096 * 2160:
        raise ValueError("frame ID or dimensions exceed limits")
    # Decimal strings retain nanosecond precision in JSON/JavaScript.
    for key in ('colorCaptureTimeNs', 'depthCaptureTimeNs'):
        if not isinstance(h.get(key), str) or not h[key].isdigit() or len(h[key]) > 20:
            raise ValueError(f"{key} must be a positive decimal string")
    if h.get('depthAlignedToColor') is not True:
        raise ValueError("depth must be aligned to color before transmission")
    if h.get('dataSource') not in ('simulation', 'sensor'):
        raise ValueError("dataSource must be simulation or sensor")
    scale = h.get('depthScaleMeters')
    if not isinstance(scale, (float, int)) or not math.isfinite(scale) or not 0 < scale <= 1:
        raise ValueError("invalid depthScaleMeters")
    intrinsics = h.get('intrinsics', {})
    for key in ('fx', 'fy', 'cx', 'cy'):
        value = intrinsics.get(key)
        if not isinstance(value, (int, float)) or not math.isfinite(value):
            raise ValueError(f"invalid intrinsics.{key}")
    if intrinsics['fx'] <= 0 or intrinsics['fy'] <= 0:
        raise ValueError("focal lengths must be positive")
    offset = 4 + size
    if offset + h['colorBytes'] + h['depthBytes'] != len(packet):
        raise ValueError("payload length mismatch")
    color = cv2.imdecode(np.frombuffer(packet[offset:offset+h['colorBytes']], np.uint8), cv2.IMREAD_COLOR)
    depth = cv2.imdecode(np.frombuffer(packet[offset+h['colorBytes']:], np.uint8), cv2.IMREAD_UNCHANGED)
    shape = (h['height'], h['width'])
    if color is None or depth is None or color.shape[:2] != shape or depth.shape != shape or depth.dtype != np.uint16:
        raise ValueError("decoded image shape/type mismatch")
    return h, color, depth


class FrameSequence:
    def __init__(self):
        self.last = -1
        self.last_time = -1
        self.missing = 0

    def accept(self, header):
        fid = header['frameId']
        timestamp = int(header['colorCaptureTimeNs'])
        if fid <= self.last:
            return 'duplicate_or_out_of_order'
        if timestamp <= self.last_time:
            return 'non_monotonic_capture_time'
        self.missing += max(0, fid - self.last - 1)
        self.last, self.last_time = fid, timestamp
        if abs(timestamp - int(header['depthCaptureTimeNs'])) > MAX_PAIR_SKEW_NS:
            return 'pair_time_mismatch'
        return 'accepted'


def normalize_quaternion(q):
    q = np.array([q[k] for k in ('w', 'x', 'y', 'z')], dtype=float)
    length = np.linalg.norm(q)
    if not np.all(np.isfinite(q)) or length < 1e-10:
        raise ValueError("invalid quaternion")
    return q / length


def slerp(a, b, ratio):
    dot = float(a @ b)
    if dot < 0:
        b, dot = -b, -dot
    dot = min(1., max(-1., dot))
    if dot > .9995:
        q = a + ratio * (b - a)
        return q / np.linalg.norm(q)
    theta = math.acos(dot)
    return (math.sin((1-ratio)*theta)*a + math.sin(ratio*theta)*b) / math.sin(theta)


class PoseBuffer:
    def __init__(self):
        self.samples = deque(maxlen=1000)

    def add(self, sample):
        t = int(sample['timestampNs'])
        p = np.array([sample['position'][k] for k in ('x', 'y', 'z')], dtype=float)
        q = normalize_quaternion(sample['quaternion'])
        if not np.all(np.isfinite(p)) or t < 0:
            raise ValueError('invalid pose')
        if self.samples and t <= self.samples[-1][0]:
            raise ValueError('pose timestamps must increase')
        self.samples.append((t, p, q))

    def at(self, timestamp):
        for t, p, q in self.samples:
            if t == timestamp:
                return self.result(p, q, t, t)
        for a, b in zip(self.samples, list(self.samples)[1:]):
            if a[0] < timestamp < b[0] and b[0] - a[0] <= MAX_POSE_GAP_NS:
                ratio = (timestamp-a[0]) / (b[0]-a[0])
                return self.result(a[1]*(1-ratio)+b[1]*ratio, slerp(a[2], b[2], ratio), a[0], b[0])
        return None  # Never silently extrapolate stale/latest pose.

    @staticmethod
    def result(p, q, before, after):
        return dict(position=dict(zip(('x','y','z'), p.tolist())),
                    quaternion=dict(zip(('w','x','y','z'), q.tolist())),
                    beforeTimeNs=str(before), afterTimeNs=str(after))


def camera_point(depth, center, header):
    x, y = int(center['x']), int(center['y'])
    patch = depth[max(0,y-2):y+3, max(0,x-2):x+3]
    valid = patch[patch > 0]
    if not valid.size:
        return None
    z = float(np.median(valid)) * header['depthScaleMeters']
    intr = header['intrinsics']
    return {'x': (x-intr['cx'])*z/intr['fx'], 'y': (y-intr['cy'])*z/intr['fy'], 'z': z}


def world_point(point, pose, extrinsics):
    """Camera right/down/forward -> body via calibrated R_C^B -> world."""
    p = np.array([point[k] for k in ('x','y','z')])
    r = np.asarray(extrinsics['rotationMatrix'], dtype=float)
    t = np.array([extrinsics['translation'][k] for k in ('x','y','z')])
    w, x, y, z = normalize_quaternion(pose['quaternion'])
    rotation = np.array([[1-2*(y*y+z*z), 2*(x*y-z*w), 2*(x*z+y*w)],
                         [2*(x*y+z*w), 1-2*(x*x+z*z), 2*(y*z-x*w)],
                         [2*(x*z-y*w), 2*(y*z+x*w), 1-2*(x*x+y*y)]])
    result = rotation @ (r @ p + t) + np.array([pose['position'][k] for k in ('x','y','z')])
    if not np.all(np.isfinite(result)):
        raise ValueError('invalid camera extrinsics')
    return dict(zip(('x','y','z'), result.tolist()))
