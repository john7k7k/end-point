"""Build WebRTC-safe RGB and pseudo-depth streams for the local demo.

The source clip is OpenCV's public ``vtest.avi`` pedestrian sequence.  YOLO
inference is run once while this script builds the file, so the resulting RGB
test clip visibly contains real object-detection boxes and labels without
requiring the stream publisher to run a model.  The system's current runtime
detector still owns the detection records shown in the web UI.

``test_depth.mp4`` is intentionally a *pseudo-depth visualisation*: the public
source has no RGB-D sensor depth channel.  It is suitable for checking the
separate depth-stream transport and UI, but must not be used as geometric depth
input or as an accuracy experiment data source.

The output uses H.264 Baseline with zero B-frames.  This is required by the
MediaMTX/WebRTC path used by ``test2.py``.
"""

from __future__ import annotations

import argparse
import shutil
import subprocess
import tempfile
import urllib.request
from pathlib import Path

import cv2
import numpy as np
from ultralytics import YOLO


BASE_DIR = Path(__file__).resolve().parent
DEFAULT_SOURCE_URL = "https://raw.githubusercontent.com/opencv/opencv/4.x/samples/data/vtest.avi"
DEFAULT_MODEL = "yolo11n.pt"


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Create the object-detection stream demo videos.")
    parser.add_argument("--source", type=Path, help="Optional local source video. Uses OpenCV vtest.avi by default.")
    parser.add_argument("--duration", type=float, default=30.0, help="Output duration in seconds (default: 30).")
    parser.add_argument("--model", default=DEFAULT_MODEL, help="Ultralytics detector model (default: yolo11n.pt).")
    parser.add_argument("--keep-source", action="store_true", help="Keep the downloaded public source clip.")
    return parser.parse_args()


def download_source(target: Path) -> None:
    print(f"Downloading public demo source: {DEFAULT_SOURCE_URL}")
    urllib.request.urlretrieve(DEFAULT_SOURCE_URL, target)


def write_depth_frame(frame: np.ndarray, boxes: np.ndarray) -> np.ndarray:
    """Create a clearly labelled simulated depth view aligned to the RGB frame."""
    height, width = frame.shape[:2]
    # The lower part of the scene is rendered brighter, as a simple visual cue
    # for a nearby ground-plane region.  This is a stream/UI sample only.
    background = np.tile(np.linspace(35, 115, height, dtype=np.uint8)[:, None], (1, width))
    depth = background.copy()
    for x1, y1, x2, y2 in boxes.astype(int):
        y_center = max(0, min(height - 1, (y1 + y2) // 2))
        near_value = int(235 - 135 * (y_center / max(1, height - 1)))
        cv2.rectangle(depth, (max(0, x1), max(0, y1)), (min(width - 1, x2), min(height - 1, y2)), near_value, -1)
        cv2.rectangle(depth, (max(0, x1), max(0, y1)), (min(width - 1, x2), min(height - 1, y2)), 255, 2)

    depth_bgr = cv2.cvtColor(depth, cv2.COLOR_GRAY2BGR)
    cv2.rectangle(depth_bgr, (0, 0), (width, 38), (18, 18, 18), -1)
    cv2.putText(
        depth_bgr,
        "SIMULATED DEPTH STREAM - UI / TRANSPORT DEMO ONLY",
        (14, 26),
        cv2.FONT_HERSHEY_SIMPLEX,
        0.62,
        (235, 235, 235),
        2,
        cv2.LINE_AA,
    )
    return depth_bgr


def transcode_web_compatible(source: Path, destination: Path, fps: float) -> None:
    command = [
        "ffmpeg",
        "-y",
        "-i",
        str(source),
        "-an",
        "-c:v",
        "libx264",
        "-profile:v",
        "baseline",
        "-level:v",
        "3.1",
        "-pix_fmt",
        "yuv420p",
        "-g",
        str(max(1, round(fps))),
        "-keyint_min",
        str(max(1, round(fps))),
        "-sc_threshold",
        "0",
        "-bf",
        "0",
        "-movflags",
        "+faststart",
        str(destination),
    ]
    subprocess.run(command, check=True)


def main() -> None:
    args = parse_args()
    if args.duration <= 0:
        raise ValueError("--duration must be greater than zero")

    downloaded_source = False
    if args.source:
        source = args.source.resolve()
    else:
        source = BASE_DIR / "_object_detection_source.avi"
        if not source.exists():
            download_source(source)
            downloaded_source = True

    if not source.exists():
        raise FileNotFoundError(source)

    cap = cv2.VideoCapture(str(source))
    if not cap.isOpened():
        raise RuntimeError(f"Cannot open source video: {source}")
    fps = cap.get(cv2.CAP_PROP_FPS) or 10.0
    width = int(cap.get(cv2.CAP_PROP_FRAME_WIDTH))
    height = int(cap.get(cv2.CAP_PROP_FRAME_HEIGHT))
    max_frames = max(1, round(args.duration * fps))
    print(f"Generating {max_frames} frames at {fps:.2f} FPS ({width}x{height}) with {args.model}.")

    model = YOLO(args.model)
    temp_dir = Path(tempfile.mkdtemp(prefix="object_detection_demo_", dir=BASE_DIR))
    color_intermediate = temp_dir / "color.avi"
    depth_intermediate = temp_dir / "depth.avi"
    writer_args = (cv2.VideoWriter_fourcc(*"MJPG"), fps, (width, height))
    color_writer = cv2.VideoWriter(str(color_intermediate), *writer_args)
    depth_writer = cv2.VideoWriter(str(depth_intermediate), *writer_args)

    try:
        for frame_index in range(max_frames):
            ok, frame = cap.read()
            if not ok:
                break
            result = model(frame, verbose=False)[0]
            boxes = result.boxes.xyxy.cpu().numpy() if result.boxes is not None else np.empty((0, 4))
            color_frame = result.plot()
            cv2.rectangle(color_frame, (0, 0), (width, 38), (18, 18, 18), -1)
            cv2.putText(
                color_frame,
                "YOLO OBJECT DETECTION DEMO",
                (14, 26),
                cv2.FONT_HERSHEY_SIMPLEX,
                0.72,
                (255, 255, 255),
                2,
                cv2.LINE_AA,
            )
            color_writer.write(color_frame)
            depth_writer.write(write_depth_frame(frame, boxes))
            if (frame_index + 1) % max(1, round(fps * 5)) == 0:
                print(f"  processed {frame_index + 1}/{max_frames} frames")
    finally:
        cap.release()
        color_writer.release()
        depth_writer.release()

    color_output = BASE_DIR / "test_color.mp4"
    depth_output = BASE_DIR / "test_depth.mp4"
    transcode_web_compatible(color_intermediate, color_output, fps)
    transcode_web_compatible(depth_intermediate, depth_output, fps)
    # Preserve the historical test.mp4 entry point as the annotated RGB clip.
    shutil.copy2(color_output, BASE_DIR / "test.mp4")
    shutil.rmtree(temp_dir, ignore_errors=True)

    if downloaded_source and not args.keep_source:
        source.unlink(missing_ok=True)
    print("Created test.mp4, test_color.mp4, and test_depth.mp4.")


if __name__ == "__main__":
    main()
