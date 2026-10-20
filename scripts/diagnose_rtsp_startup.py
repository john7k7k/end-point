"""Isolated RTSP startup timing; does not contact application APIs or MongoDB."""
import json
import os
from pathlib import Path
import shutil
import socket
import subprocess
import tempfile
import threading
import time

import cv2

ROOT = Path(__file__).resolve().parents[1]


def stop(process):
    if process.poll() is None:
        try:
            process.stdin.write(b'q\n')
            process.stdin.flush()
            process.wait(timeout=5)
        except (OSError, subprocess.TimeoutExpired):
            process.terminate()
            try:
                process.wait(timeout=3)
            except subprocess.TimeoutExpired:
                process.kill()
                process.wait()


def run_case(media, tuned):
    timings = {'case': 'reduced_probe' if tuned else 'current_defaults'}
    port = 18554
    with socket.socket() as probe:
        probe.bind(('127.0.0.1', port))
    with tempfile.TemporaryDirectory(prefix='vision-rtsp-timing-') as temporary:
        folder = Path(temporary)
        config = folder / 'mediamtx.yml'
        config.write_text(f'logLevel: warn\nrtspAddress: 127.0.0.1:{port}\nrtspTransports: [tcp]\nrtmp: no\nhls: no\nwebrtc: no\nsrt: no\napi: no\nplayback: no\npaths:\n  all_others:\n', encoding='utf-8')
        service = subprocess.Popen([str(media), str(config)], stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
        processes, captures = [], []
        try:
            for _ in range(100):
                try:
                    with socket.create_connection(('127.0.0.1', port), timeout=.1):
                        break
                except OSError:
                    time.sleep(.05)
            origin = time.monotonic()
            def elapsed():
                return round(time.monotonic() - origin, 3)
            for kind in ('color', 'depth'):
                url = f'rtsp://127.0.0.1:{port}/{kind}'
                processes.append(subprocess.Popen(['ffmpeg', '-v', 'error', '-re', '-stream_loop', '-1', '-i', str(ROOT / 'AI/test' / f'test_{kind}.mp4'), '-an', '-c:v', 'copy', '-rtsp_transport', 'tcp', '-f', 'rtsp', url], stdin=subprocess.PIPE, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL))
            time.sleep(.5)
            timings['open_begin'] = elapsed()
            os.environ['OPENCV_FFMPEG_CAPTURE_OPTIONS'] = ('rtsp_transport;tcp|analyzeduration;100000|probesize;32768' if tuned else 'rtsp_transport;tcp')
            for kind in ('color', 'depth'):
                capture = cv2.VideoCapture(f'rtsp://127.0.0.1:{port}/{kind}', cv2.CAP_FFMPEG)
                captures.append(capture)
                timings[kind + '_open_done'] = elapsed()
                if not capture.isOpened():
                    raise RuntimeError('capture failed: ' + kind)
            for kind, capture in zip(('color', 'depth'), captures):
                ok, _ = capture.read()
                timings[kind + '_read_done'] = elapsed()
                if not ok:
                    raise RuntimeError('first frame failed: ' + kind)
            timings['recorders_spawn'] = elapsed()
            recorders, readers = [], []
            def progress(process, kind):
                for line in process.stdout:
                    if line.startswith(b'frame=') and int(line.split(b'=')[1]) > 0:
                        timings.setdefault(kind + '_first_recorded_progress', elapsed())
            for kind in ('color', 'depth'):
                options = ['-analyzeduration', '100000', '-probesize', '32768'] if tuned else []
                process = subprocess.Popen(['ffmpeg', '-v', 'error', '-y', '-rtsp_transport', 'tcp', *options, '-i', f'rtsp://127.0.0.1:{port}/{kind}', '-c:v', 'copy', '-an', '-f', 'matroska', '-progress', 'pipe:1', '-stats_period', '0.1', str(folder / f'{kind}.mkv')], stdin=subprocess.PIPE, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
                recorders.append(process)
                reader = threading.Thread(target=progress, args=(process, kind), daemon=True)
                reader.start()
                readers.append(reader)
            # Fixed publisher lifetime, like run-all.ps1's --seconds.
            while time.monotonic() - origin < 25:
                time.sleep(.1)
            timings['publisher_stop_begin'] = elapsed()
            for process in processes:
                stop(process)
            for process in recorders:
                stop(process)
            for reader in readers:
                reader.join(2)
            for kind in ('color', 'depth'):
                result = subprocess.run(['ffprobe', '-v', 'error', '-show_entries', 'format=duration', '-of', 'json', str(folder / f'{kind}.mkv')], capture_output=True, text=True)
                if result.returncode:
                    timings[kind + '_error'] = result.stderr[-500:]
                    timings[kind + '_recorder_error'] = recorders[0 if kind == 'color' else 1].stderr.read().decode(errors='replace')[-500:]
                else:
                    timings[kind + '_mkv_duration'] = float(json.loads(result.stdout)['format']['duration'])
                    # Match production finalization: MP4 remux resets timestamps
                    # and drops any pre-keyframe gap present in the MKV timeline.
                    subprocess.run(['ffmpeg', '-v', 'error', '-y', '-i', str(folder / f'{kind}.mkv'), '-c:v', 'copy', '-an', '-movflags', '+faststart', str(folder / f'{kind}.mp4')], capture_output=True, check=True)
                    final = subprocess.run(['ffprobe', '-v', 'error', '-show_entries', 'format=duration,start_time', '-of', 'json', str(folder / f'{kind}.mp4')], capture_output=True, text=True, check=True)
                    timings[kind + '_mp4_duration'] = float(json.loads(final.stdout)['format']['duration'])
            return timings
        finally:
            for capture in captures:
                capture.release()
            for process in locals().get('recorders', []) + processes:
                stop(process)
            service.terminate()
            service.wait(timeout=5)


if __name__ == '__main__':
    media = ROOT / '.tools/mediamtx-1.17.1/mediamtx'
    if not media.exists():
        media = Path(shutil.which('mediamtx') or '')
    if not media.is_file():
        raise SystemExit('Run in the configured WSL environment with MediaMTX installed')
    results = []
    for tuned in (False, True):
        result = run_case(media, tuned)
        results.append(result)
        print(json.dumps(result, indent=2), flush=True)
    output = ROOT / 'runtime/diagnostics/rtsp-startup.json'
    output.parent.mkdir(parents=True, exist_ok=True)
    output.write_text(json.dumps(results, indent=2), encoding='utf-8')
