"""Pair file tracks before transport; grayscale MP4 is demo depth, not sensor depth."""
from pathlib import Path
import math
import cv2
import numpy as np


class PairedVideoReader:
    def __init__(self, color_path, depth_path, size=(640, 360)):
        self.color_path, self.depth_path = Path(color_path), Path(depth_path)
        self.size = size
        self.color = cv2.VideoCapture(str(self.color_path))
        self.depth = cv2.VideoCapture(str(self.depth_path))
        try:
            if not self.color.isOpened() or not self.depth.isOpened():
                raise ValueError(f'Cannot open both video tracks: {color_path}, {depth_path}')
            self.fps = self.color.get(cv2.CAP_PROP_FPS)
            depth_fps = self.depth.get(cv2.CAP_PROP_FPS)
            if not math.isfinite(self.fps) or self.fps <= 0 or abs(self.fps - depth_fps) > .01:
                raise ValueError('Paired test videos must have the same valid FPS; align them offline first')
            self.color_count = int(self.color.get(cv2.CAP_PROP_FRAME_COUNT))
            self.depth_count = int(self.depth.get(cv2.CAP_PROP_FRAME_COUNT))
            self.length = min(self.color_count, self.depth_count)
            if self.length < 1:
                raise ValueError('Both test video tracks must contain frames')
            self.cursor, self.loop = 0, 0
        except BaseException:
            self.close()
            raise

    def read(self):
        if self.cursor == self.length:
            # Never loop the shorter track independently of the longer track.
            if not self.color.set(cv2.CAP_PROP_POS_FRAMES, 0) or not self.depth.set(cv2.CAP_PROP_POS_FRAMES, 0):
                raise ValueError('Cannot rewind both tracks together')
            self.cursor = 0
            self.loop += 1
        color_ok, color = self.color.read()
        depth_ok, depth = self.depth.read()
        if not color_ok or not depth_ok:
            # A damaged/missing frame must not shift just one source forward.
            raise ValueError(f'Failed to decode paired source frame {self.cursor} in loop {self.loop}')
        source_index = self.cursor
        self.cursor += 1
        color = cv2.resize(color, self.size, interpolation=cv2.INTER_AREA)
        gray = cv2.cvtColor(depth, cv2.COLOR_BGR2GRAY) if depth.ndim == 3 else depth
        gray = cv2.resize(gray, self.size, interpolation=cv2.INTER_NEAREST)
        metadata = {
            'sourceFrameIndex': source_index, 'sourceLoop': self.loop,
            'sourceTimeMs': source_index * 1000 / self.fps,
            'sourceFps': self.fps, 'pairedSourceFrames': self.length,
            'colorSource': self.color_path.name, 'depthSource': self.depth_path.name,
            'pairingMethod': 'file-frame-index',
            'alignmentKind': 'demo-resize-assumption',
            'depthValueKind': 'pseudo-depth-from-gray-video',
            'depthMapping': {'grayMin': 0, 'grayMax': 255, 'metersMin': 0, 'metersMax': 6,
                             'zeroIsInvalid': True},
        }
        # Inverse of the AI preview's fixed 0..6 m display mapping. This keeps
        # test_depth.mp4's spatial information; it is NOT a calibrated distance.
        millimeters = np.rint(gray.astype(np.float64) * (6000 / 255)).astype(np.uint16)
        return color, millimeters, metadata

    def close(self):
        self.color.release()
        self.depth.release()
