import sys
from pathlib import Path
import tempfile
import unittest
from unittest.mock import patch
import cv2
import numpy as np

sys.path.insert(0, str(Path(__file__).resolve().parents[1]))
from paired_video import PairedVideoReader
from rgbd_sync import encode_packet, decode_packet
from test_rgbd_sync import header


def video(path, count, fps=10):
    writer = cv2.VideoWriter(str(path), cv2.VideoWriter_fourcc(*'MJPG'), fps, (64, 48))
    if not writer.isOpened():
        raise RuntimeError('MJPG test encoder unavailable')
    for i in range(count):
        gray = np.tile(np.arange(64, dtype=np.uint8)*3, (48, 1))
        image = cv2.cvtColor(gray, cv2.COLOR_GRAY2BGR)
        image[:, :8] = 20 + 20*i
        writer.write(image)
    writer.release()


class PairedVideoTests(unittest.TestCase):
    def test_joint_loop_and_lossless_depth_packet(self):
        with tempfile.TemporaryDirectory() as folder:
            color, depth = Path(folder)/'color.avi', Path(folder)/'depth.avi'
            video(color, 3); video(depth, 5)
            reader = PairedVideoReader(color, depth, size=(64,48))
            try:
                seen = []
                for i in range(8):
                    rgb, raw, source = reader.read()
                    seen.append((source['sourceLoop'],source['sourceFrameIndex']))
                    self.assertGreater(np.unique(raw).size, 20, 'depth preserves video spatial structure')
                    self.assertEqual(raw.dtype,np.uint16)
                    h, _, decoded = decode_packet(encode_packet({**header(), **source, 'frameId':i},rgb,raw))
                    np.testing.assert_array_equal(raw,decoded)
                    self.assertEqual(h['depthValueKind'],'pseudo-depth-from-gray-video')
                    # AI fixed-scale preview reconstructs source grayscale (within quantisation).
                    expected = cv2.cvtColor(rgb,cv2.COLOR_BGR2GRAY)
                    preview = np.clip(raw.astype(float)*.001/6*255,0,255).astype(np.uint8)
                    self.assertLessEqual(np.max(np.abs(preview.astype(int)-expected.astype(int))),1)
                self.assertEqual(seen,[(0,0),(0,1),(0,2),(1,0),(1,1),(1,2),(2,0),(2,1)])
            finally: reader.close()

    def test_fps_mismatch_is_rejected(self):
        with tempfile.TemporaryDirectory() as folder:
            color, depth = Path(folder)/'color.avi', Path(folder)/'depth.avi'
            video(color,3,10); video(depth,3,20)
            with self.assertRaisesRegex(ValueError,'same valid FPS'):
                PairedVideoReader(color,depth)

    def test_unilateral_decode_failure_never_uses_next_frame(self):
        with tempfile.TemporaryDirectory() as folder:
            color, depth = Path(folder)/'color.avi', Path(folder)/'depth.avi'
            video(color,3); video(depth,3)
            reader = PairedVideoReader(color,depth)
            original = reader.depth
            try:
                with patch.object(reader,'depth') as broken:
                    broken.read.return_value=(False,None)
                    with self.assertRaisesRegex(ValueError,'paired source frame 0'):
                        reader.read()
                    self.assertEqual(reader.cursor,0)
            finally:
                reader.depth=original
                reader.close()
