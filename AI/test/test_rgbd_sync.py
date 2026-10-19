import json
import struct
import sys
import unittest
from pathlib import Path

import numpy as np
sys.path.insert(0, str(Path(__file__).resolve().parents[1]))
from rgbd_sync import (FrameSequence, PoseBuffer, camera_point, decode_packet,
                       encode_packet, world_point)


def header():
    return dict(operationId='0'*24, sessionId='00000000-0000-4000-8000-000000000000',
                frameId=0, clockId='test-clock', colorCaptureTimeNs='1000000000',
                depthCaptureTimeNs='1000000000', calibrationId='default', depthAlignedToColor=True,
                depthScaleMeters=.001, dataSource='simulation',
                intrinsics={'fx': 100., 'fy': 100., 'cx': 10., 'cy': 10.})


class SyncTests(unittest.TestCase):
    def test_lossless_depth_roundtrip(self):
        depth = np.arange(400, dtype=np.uint16).reshape(20,20)*100
        h,c,d = decode_packet(encode_packet(header(), np.zeros((20,20,3), np.uint8), depth))
        np.testing.assert_array_equal(d, depth)
        self.assertEqual(h['colorCaptureTimeNs'], '1000000000')

    def test_truncated_packet(self):
        p = encode_packet(header(), np.zeros((20,20,3), np.uint8), np.ones((20,20), np.uint16))
        with self.assertRaises(ValueError):
            decode_packet(p[:-1])

    def test_unaligned_rejected(self):
        h = dict(header(), depthAlignedToColor=False)
        with self.assertRaises(ValueError):
            decode_packet(encode_packet(h, np.zeros((20,20,3), np.uint8), np.ones((20,20), np.uint16)))

    def test_order_drop_duplicate_and_skew(self):
        seq = FrameSequence()
        h = header()
        self.assertEqual(seq.accept(h), 'accepted')
        self.assertEqual(seq.accept(h), 'duplicate_or_out_of_order')
        h.update(frameId=3, colorCaptureTimeNs='1100000000', depthCaptureTimeNs='1150000000')
        self.assertEqual(seq.accept(h), 'pair_time_mismatch')
        self.assertEqual(seq.missing, 2)
        h.update(frameId=4, colorCaptureTimeNs='1000000000')
        self.assertEqual(seq.accept(h), 'non_monotonic_capture_time')

    def test_pose_interpolation_and_no_extrapolation(self):
        poses = PoseBuffer()
        poses.add(dict(timestampNs='1000000000', position=dict(x=0,y=0,z=0), quaternion=dict(w=1,x=0,y=0,z=0)))
        poses.add(dict(timestampNs='1100000000', position=dict(x=2,y=0,z=0), quaternion=dict(w=0,x=0,y=0,z=1)))
        p = poses.at(1050000000)
        self.assertAlmostEqual(p['position']['x'], 1)
        self.assertAlmostEqual(p['quaternion']['w'], 2**-.5)
        self.assertIsNone(poses.at(1200000000))

    def test_pose_gap_rejected(self):
        poses = PoseBuffer()
        for t in ('1000000000','2000000000'):
            poses.add(dict(timestampNs=t, position=dict(x=0,y=0,z=0), quaternion=dict(w=1,x=0,y=0,z=0)))
        self.assertIsNone(poses.at(1500000000))

    def test_metric_depth_and_world_transform(self):
        p = camera_point(np.full((20,20),1500,np.uint16), dict(x=10,y=10), header())
        self.assertEqual(p, dict(x=0.,y=0.,z=1.5))
        result = world_point(p, dict(position=dict(x=1,y=2,z=3), quaternion=dict(w=1,x=0,y=0,z=0)),
                             dict(rotationMatrix=np.eye(3).tolist(), translation=dict(x=0,y=0,z=0)))
        self.assertEqual(result, dict(x=1.,y=2.,z=4.5))

    def test_invalid_depth(self):
        self.assertIsNone(camera_point(np.zeros((20,20),np.uint16), dict(x=10,y=10), header()))


if __name__ == '__main__':
    unittest.main()
