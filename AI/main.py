import cv2
import subprocess
import threading
import time
import requests
from pathlib import Path
from contextlib import asynccontextmanager

from fastapi import FastAPI
from pydantic import BaseModel

from detector import detect
from rtsp_stream import get_dual_stream
from sender import get_current_operation, send_result, set_current_operation

cv2.setLogLevel(0)
COLOR_RTSP_URL = "rtsp://localhost:8554/cam-color"
DEPTH_RTSP_URL = "rtsp://localhost:8554/cam-depth"
cap = None
current_video_filenames = None
current_operation_id = None
archive_recorders = []
STREAM_END_TIMEOUT_SECONDS = 10
simulation_config = {
    "detectionAlgorithm": "mock_yolo",
    "fusionAlgorithm": "ekf",
    # The backend owns the persisted multi-view optimisation because it needs
    # historical observations.  The selection is mirrored here so an AI
    # detector/localizer can consume exactly the same configuration later.
    "screwFusionAlgorithm": "average",
}


class OperationUpdate(BaseModel):
    opID: str


class SimulationConfig(BaseModel):
    fusionAlgorithm: str
    screwFusionAlgorithm: str = "average"


def connect_stream():
    global cap
    if cap:
        cap.release()
    cap = get_dual_stream(COLOR_RTSP_URL, DEPTH_RTSP_URL)
    return cap


def start_video_writer(filename, width, height):
    """Write OpenCV BGR frames as browser-compatible H.264 MP4."""
    return subprocess.Popen(
        [
            "ffmpeg", "-y", "-f", "rawvideo", "-pix_fmt", "bgr24",
            "-video_size", f"{width}x{height}", "-framerate", "20", "-i", "-",
            "-an", "-c:v", "libx264", "-preset", "fast", "-crf", "18", "-pix_fmt", "yuv420p",
            "-movflags", "+faststart", filename,
        ],
        stdin=subprocess.PIPE,
        stdout=subprocess.DEVNULL,
        stderr=subprocess.DEVNULL,
    )


def start_live_publisher(path, width, height):
    """Publish separate optical/depth streams to MediaMTX for browser viewing."""
    return subprocess.Popen(
        [
            "ffmpeg", "-y", "-f", "rawvideo", "-pix_fmt", "bgr24",
            "-video_size", f"{width}x{height}", "-framerate", "20", "-i", "-",
            "-an", "-c:v", "libx264", "-preset", "fast", "-crf", "18", "-tune", "zerolatency",
            "-g", "20", "-keyint_min", "20", "-sc_threshold", "0", "-bf", "0",
            "-pix_fmt", "yuv420p", "-f", "rtsp", "-rtsp_transport", "tcp",
            f"rtsp://localhost:8554/{path}",
        ],
        stdin=subprocess.PIPE,
        stdout=subprocess.DEVNULL,
        stderr=subprocess.DEVNULL,
    )


def stop_video_writer(writer):
    if not writer:
        return
    if writer.stdin:
        writer.stdin.close()
    try:
        writer.wait(timeout=10)
    except subprocess.TimeoutExpired:
        writer.terminate()


def start_archive_recorder(source_url, destination):
    final_path = Path(destination)
    temporary_path = final_path.with_suffix(".mkv")
    process = subprocess.Popen(
        ["ffmpeg", "-y", "-rtsp_transport", "tcp", "-i", source_url, "-c:v", "copy", "-an", "-f", "matroska", str(temporary_path)],
        stdin=subprocess.PIPE, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL,
    )
    return {"process": process, "temporary": temporary_path, "final": final_path}


def stop_archive_recorders():
    global archive_recorders
    for recorder in archive_recorders:
        process = recorder["process"]
        if process.poll() is None:
            try:
                process.stdin.write(b"q\n")
                process.stdin.flush()
                process.stdin.close()
                process.wait(timeout=10)
            except subprocess.TimeoutExpired:
                process.terminate()
                try:
                    process.wait(timeout=3)
                except subprocess.TimeoutExpired:
                    process.kill()
            except (BrokenPipeError, OSError, ValueError):
                pass
        if recorder["temporary"].exists():
            result = subprocess.run(
                ["ffmpeg", "-y", "-i", str(recorder["temporary"]), "-c:v", "copy", "-an", "-movflags", "+faststart", str(recorder["final"])],
                stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL,
            )
            if result.returncode == 0:
                recorder["temporary"].unlink()
    archive_recorders = []


def end_active_operation(reason):
    global current_operation_id, current_video_filenames
    if not current_operation_id:
        return
    try:
        response = requests.post(
            "http://localhost:3000/api/device/operation/end",
            json={
                "opID": current_operation_id,
                "endTime": time.strftime("%Y-%m-%dT%H:%M:%SZ", time.gmtime()),
                "description": reason,
            },
            timeout=3,
        )
        response.raise_for_status()
    except Exception as error:
        print(f"Failed to end operation after stream loss: {error}")
        return
    print(f"Operation ended: {current_operation_id} ({reason})")
    stop_archive_recorders()
    set_current_operation(None)
    current_operation_id = None
    current_video_filenames = None


def process_stream():
    global cap, current_video_filenames, simulation_config, archive_recorders
    connect_stream()
    lost_count = 0

    while True:
        ret, frame = cap.read()
        if ret:
            lost_count = 0
            if current_video_filenames and not archive_recorders:
                archive_recorders = [
                    start_archive_recorder(COLOR_RTSP_URL, f"video/{current_video_filenames['color']}"),
                    start_archive_recorder(DEPTH_RTSP_URL, f"video/{current_video_filenames['depth']}"),
                ]
                print("Started direct RTSP archive recording")
            config = simulation_config.copy()
            result = detect(
                frame,
                detection_algorithm=config["detectionAlgorithm"],
                fusion_algorithm=config["fusionAlgorithm"],
                screw_fusion_algorithm=config["screwFusionAlgorithm"],
            )
            send_result(result, current_video_filenames["color"] if current_video_filenames else None)
        else:
            lost_count += 1
            if lost_count < STREAM_END_TIMEOUT_SECONDS * 10:
                time.sleep(0.1)
                continue

            stop_archive_recorders()
            end_active_operation(f"Stream disconnected for {STREAM_END_TIMEOUT_SECONDS} seconds")

            while True:
                try:
                    connect_stream()
                    ok, _ = cap.read()
                    if ok:
                        break
                except Exception:
                    pass
                time.sleep(2)
            lost_count = 0


@asynccontextmanager
async def lifespan(_app: FastAPI):
    if not get_current_operation():
        print("No active operation found; waiting for an operation update.")
    thread = threading.Thread(target=process_stream, daemon=True)
    thread.start()
    yield
    if cap:
        cap.release()


app = FastAPI(lifespan=lifespan)


@app.post("/api/simulation-config")
async def receive_simulation_config(config: SimulationConfig):
    global simulation_config
    simulation_config["fusionAlgorithm"] = config.fusionAlgorithm
    simulation_config["screwFusionAlgorithm"] = config.screwFusionAlgorithm
    return {"status": "success", **simulation_config}


@app.post("/api/operation-update")
async def receive_operation_update(update: OperationUpdate):
    global current_video_filenames, current_operation_id, archive_recorders
    set_current_operation(update.opID)
    current_operation_id = update.opID
    stop_archive_recorders()
    timestamp = int(time.time())
    current_video_filenames = {
        "color": f"color_detect_{update.opID}_{timestamp}.mp4",
        "depth": f"depth_detect_{update.opID}_{timestamp}.mp4",
    }
    archive_recorders = []
    return {"status": "success", "opID": update.opID}


@app.post("/api/operation-end")
async def receive_operation_end():
    global current_operation_id, current_video_filenames
    stop_archive_recorders()
    set_current_operation(None)
    current_operation_id = None
    current_video_filenames = None
    return {"status": "success"}


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=8000)
