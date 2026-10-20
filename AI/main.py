import cv2
import os
import asyncio
import subprocess
import threading
import time
import requests
from pathlib import Path
from contextlib import asynccontextmanager

from fastapi import FastAPI, Request, HTTPException
from fastapi.responses import JSONResponse
import maintenance
from pydantic import BaseModel, Field

from detector import detect
from rtsp_stream import get_dual_stream
from archive_recorder import ArchiveRecorder
from sender import get_current_operation, send_result, set_current_operation
from rgbd_api import router as rgbd_router, receiver as rgbd_receiver, recovery_worker, ROOT as rgbd_root

# Some OpenCV builds omit this optional logging API.
if hasattr(cv2, "setLogLevel"):
    cv2.setLogLevel(0)
COLOR_RTSP_URL = "rtsp://localhost:8554/cam-color"
DEPTH_RTSP_URL = "rtsp://localhost:8554/cam-depth"
cap = None
current_video_filenames = None
current_operation_id = None
archive_recorders = []
archive_lock = threading.RLock()
STREAM_END_TIMEOUT_SECONDS = 10
STREAM_START_TIMEOUT_SECONDS = 120
operation_started_at = None
operation_received_frame = False
simulation_config = {
    "detectionAlgorithm": "mock_yolo",
    "fusionAlgorithm": "ekf",
    # The backend owns the persisted multi-view optimisation because it needs
    # historical observations.  The selection is mirrored here so an AI
    # detector/localizer can consume exactly the same configuration later.
    "screwFusionAlgorithm": "average",
}


class OperationUpdate(BaseModel):
    opID: str = Field(pattern=r'^[0-9a-f]{24}$')


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
    return ArchiveRecorder(source_url, destination)


def _stop_archive_recorders():
    global archive_recorders
    for recorder in archive_recorders:
        recorder.request_stop()
    for recorder in archive_recorders:
        recorder.finish()
    archive_recorders = []


def stop_archive_recorders():
    with archive_lock:
        _stop_archive_recorders()


def ensure_archive_recorders():
    """Called by a separate task, never gated on OpenCV or detector throughput."""
    global archive_recorders
    with archive_lock:
        if current_video_filenames and not archive_recorders and maintenance.can_write(current_operation_id):
            archive_recorders = [
                start_archive_recorder(COLOR_RTSP_URL, Path(__file__).parent / 'video' / current_video_filenames['color']),
                start_archive_recorder(DEPTH_RTSP_URL, Path(__file__).parent / 'video' / current_video_filenames['depth']),
            ]
            print('Independent RTSP recorders armed (waiting/retrying for publishers)', flush=True)


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
            headers=maintenance.headers(),
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
    global operation_received_frame
    connect_stream()
    lost_count = 0

    while True:
        ret, frame = cap.read()
        if ret:
            if current_operation_id:
                operation_received_frame = True
            lost_count = 0
            config = simulation_config.copy()
            result = detect(
                frame,
                detection_algorithm=config["detectionAlgorithm"],
                fusion_algorithm=config["fusionAlgorithm"],
                screw_fusion_algorithm=config["screwFusionAlgorithm"],
            )
            # Paired mode owns localization. RTSP remains preview/archive only.
            if not rgbd_receiver.session_id:
                send_result(result, current_video_filenames["color"] if current_video_filenames else None)
        else:
            lost_count += 1
            if lost_count < STREAM_END_TIMEOUT_SECONDS * 10:
                time.sleep(0.1)
                continue

            if (not rgbd_receiver.connected and operation_received_frame):
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
    async def archive_watchdog():
        while True:
            ensure_archive_recorders()
            await asyncio.sleep(.1)
    recording = asyncio.create_task(archive_watchdog())
    async def paired_watchdog():
        while True:
            await asyncio.sleep(1)
            if (current_operation_id and operation_started_at is not None
                    and not operation_received_frame and not any(recorder.has_frames for recorder in archive_recorders) and not rgbd_receiver.last_packet_at
                    and time.monotonic() - operation_started_at > STREAM_START_TIMEOUT_SECONDS):
                await asyncio.to_thread(end_active_operation, 'No first frame within 120 seconds')
                if not current_operation_id:
                    await rgbd_receiver.reset(None)
            if (rgbd_receiver.session_id and rgbd_receiver.operation_id and rgbd_receiver.last_packet_at
                    and time.monotonic() - rgbd_receiver.last_packet_at > STREAM_END_TIMEOUT_SECONDS):
                await asyncio.to_thread(end_active_operation, 'RGB-D frame timeout (10 seconds)')
                if not current_operation_id:
                    await rgbd_receiver.reset(None)
    watchdog = asyncio.create_task(paired_watchdog())
    recovery = asyncio.create_task(recovery_worker())
    yield
    recording.cancel()
    try:
        await recording
    except asyncio.CancelledError:
        pass
    await receive_operation_end()
    recovery.cancel()
    try:
        await recovery
    except asyncio.CancelledError:
        pass
    watchdog.cancel()
    try:
        await watchdog
    except asyncio.CancelledError:
        pass
    if cap:
        cap.release()


app = FastAPI(lifespan=lifespan)
app.include_router(rgbd_router)
rgbd_receiver.config = lambda: simulation_config.copy()

@app.middleware('http')
async def maintenance_guard(request: Request, call_next):
    admin_read = (request.method == 'GET' and request.url.path == '/api/simulation-config'
                  and maintenance.token_ok(request.headers.get('authorization', '').removeprefix('Bearer ')))
    if request.url.path != '/api/testing/lease' and not admin_read and not maintenance.allowed(request.headers):
        return JSONResponse({'error': 'Exclusive maintenance checkpoint is active'}, status_code=423)
    return await call_next(request)

@app.get('/api/simulation-config')
async def get_simulation_config():
    return simulation_config.copy()

@app.post('/api/testing/lease')
async def testing_lease(request: Request):
    if os.environ.get('API_TEST_ENABLED') != '1':
        raise HTTPException(404)
    if not maintenance.token_ok(request.headers.get('authorization', '').removeprefix('Bearer ')):
        raise HTTPException(401)
    data = await request.json()
    action, identifier = data.get('action'), data.get('id')
    if not isinstance(identifier, str) or len(identifier) != 36:
        raise HTTPException(400, 'Invalid lease ID')
    if action == 'acquire':
        if maintenance.lease or current_operation_id or rgbd_receiver.connected or rgbd_receiver.operation_id:
            raise HTTPException(409, 'AI operation/session/lease is active')
        async with rgbd_receiver.lock:
            if any(not item.with_suffix('.committed').exists() for item in rgbd_root.glob('*/*/*.json')):
                raise HTTPException(409, 'Uncommitted RGB-D journals exist; recover them before testing')
            maintenance.save({'id': identifier, 'quiesced': False, 'operationId': None})
        return {'config': simulation_config.copy()}
    if action == 'release' and not maintenance.lease:
        return {'status': 'success'}  # Retry after a lost release response.
    if not maintenance.lease or maintenance.lease['id'] != identifier:
        raise HTTPException(409, 'Lease mismatch')
    if action == 'quiesce':
        maintenance.save({**maintenance.lease, 'quiesced': True})
        await receive_operation_end()
    elif action == 'restore':
        if not maintenance.lease.get('quiesced'):
            raise HTTPException(409, 'Quiesce first')
        simulation_config.clear()
        simulation_config.update(data['config'])
    elif action == 'release':
        maintenance.save(None)
    else:
        raise HTTPException(400, 'Unknown action')
    return {'status': 'success'}


@app.post("/api/simulation-config")
async def receive_simulation_config(config: SimulationConfig):
    global simulation_config
    simulation_config["fusionAlgorithm"] = config.fusionAlgorithm
    simulation_config["screwFusionAlgorithm"] = config.screwFusionAlgorithm
    return {"status": "success", **simulation_config}


@app.post("/api/operation-update")
async def receive_operation_update(update: OperationUpdate):
    global current_video_filenames, current_operation_id, archive_recorders
    global operation_started_at, operation_received_frame
    if current_operation_id == update.opID and current_video_filenames:
        return {"status": "success", "opID": update.opID}
    operation_started_at = time.monotonic()
    operation_received_frame = False
    if maintenance.lease:
        maintenance.save({**maintenance.lease, 'operationId': update.opID})
    await rgbd_receiver.reset(update.opID)
    with archive_lock:
        stop_archive_recorders()
        set_current_operation(update.opID)
        current_operation_id = update.opID
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
    with archive_lock:
        # Disable creation before waiting for existing ffmpeg processes to stop.
        current_video_filenames = None
        current_operation_id = None
        set_current_operation(None)
        stop_archive_recorders()
    await rgbd_receiver.reset(None)
    return {"status": "success"}


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=8000, ws_max_size=16 * 1024 * 1024, ws_max_queue=2)
