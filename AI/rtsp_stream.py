import cv2
import os
import numpy as np

# Set before VideoCapture.open (CAP_PROP_BUFFERSIZE after open does not reduce
# FFmpeg's initial stream-information probe). Deployment may override these.
os.environ.setdefault('OPENCV_FFMPEG_CAPTURE_OPTIONS',
                      'rtsp_transport;tcp|analyzeduration;100000|probesize;32768')

def get_stream(url):
    cap = cv2.VideoCapture(url, cv2.CAP_FFMPEG,
                           [cv2.CAP_PROP_OPEN_TIMEOUT_MSEC, 3000,
                            cv2.CAP_PROP_READ_TIMEOUT_MSEC, 5000])
    cap.set(cv2.CAP_PROP_BUFFERSIZE, 1)
    return cap


class DualStream:
    def __init__(self, color_url, depth_url):
        self.color = get_stream(color_url)
        self.depth = get_stream(depth_url)

    def read(self):
        color_ok, color_frame = self.color.read()
        depth_ok, depth_frame = self.depth.read()
        if not color_ok or not depth_ok:
            return False, None
        if color_frame.shape[:2] != depth_frame.shape[:2]:
            depth_frame = cv2.resize(depth_frame, (color_frame.shape[1], color_frame.shape[0]))
        return True, np.vstack((color_frame, depth_frame))

    def release(self):
        self.color.release()
        self.depth.release()


def get_dual_stream(color_url, depth_url):
    return DualStream(color_url, depth_url)
