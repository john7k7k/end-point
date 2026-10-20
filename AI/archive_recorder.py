"""Independent, retryable RTSP stream-copy recording (no image decoding)."""
from collections import deque
from pathlib import Path
import subprocess
import threading
import time

# Deliberately bounded, but not zero: allow SPS/PPS/stream information to arrive.
RTSP_INPUT_OPTIONS = ['-rtsp_transport', 'tcp', '-timeout', '3000000',
                      '-analyzeduration', '100000', '-probesize', '32768']


class ArchiveRecorder:
    def __init__(self, url, destination):
        self.url, self.final = url, Path(destination)
        self.final.parent.mkdir(parents=True, exist_ok=True)
        self.stop_event = threading.Event()
        self.parts, self.errors = [], deque(maxlen=16)
        self.process = None
        self.lock = threading.Lock()
        self.finished = False
        self.has_frames = False
        self.thread = threading.Thread(target=self._run, daemon=True)
        self.thread.start()

    def _run(self):
        attempt = 0
        while not self.stop_event.is_set():
            part_has_frames = False
            part = self.final.with_suffix(f'.part{attempt:06d}.mkv')
            attempt += 1
            # A reconnect gets a NEW segment, never -y over an earlier recording.
            with self.lock:
                if self.stop_event.is_set():
                    break
                self.process = subprocess.Popen([
                    'ffmpeg', '-hide_banner', '-loglevel', 'error', '-y',
                    *RTSP_INPUT_OPTIONS, '-i', self.url, '-map', '0:v:0',
                    '-c:v', 'copy', '-an', '-progress', 'pipe:1', '-stats_period', '0.2',
                    '-f', 'matroska', str(part)],
                    stdin=subprocess.PIPE, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
                process = self.process
            def errors():
                for line in process.stderr:
                    self.errors.append(line.decode(errors='replace').strip())
            reader = threading.Thread(target=errors, daemon=True)
            reader.start()
            for line in process.stdout:
                if line.startswith(b'frame=') and int(line.split(b'=')[1]) > 0:
                    self.has_frames = True
                    part_has_frames = True
            process.wait()
            reader.join(2)
            process.stdin.close()
            process.stderr.close()
            process.stdout.close()
            if part.exists():
                if part.stat().st_size and part_has_frames:
                    self.parts.append(part)
                else:
                    part.unlink()  # Only this attempt's empty/header-only file.
            if self.stop_event.wait(.2):
                break

    def request_stop(self):
        self.stop_event.set()
        with self.lock:
            process = self.process
            if process and process.poll() is None:
                try:
                    process.stdin.write(b'q\n')
                    process.stdin.flush()
                except (BrokenPipeError, OSError, ValueError):
                    pass

    def finish(self):
        if self.finished:
            return
        self.request_stop()
        self.thread.join(6)
        if self.thread.is_alive():
            with self.lock:
                process = self.process
                if process and process.poll() is None:
                    process.terminate()
            self.thread.join(3)
        if self.thread.is_alive():
            with self.lock:
                self.process.kill()
            self.thread.join(3)
        if self.thread.is_alive():
            raise RuntimeError('RTSP recorder did not stop: ' + str(self.final))
        if not self.parts:
            self.finished = True
            return  # Operation ended before any publisher became available.
        listing = self.final.with_suffix('.concat.txt')
        temporary = self.final.with_suffix('.finalizing.tmp')
        def quote(path):
            return str(path.resolve()).replace('\\', '/').replace("'", "'\\''")
        listing.write_text(''.join(f"file '{quote(part)}'\n" for part in self.parts), encoding='utf-8')
        result = subprocess.run(['ffmpeg', '-hide_banner', '-loglevel', 'error', '-y',
                                 '-f', 'concat', '-safe', '0', '-i', str(listing),
                                 '-map', '0:v:0', '-c:v', 'copy', '-an',
                                 '-movflags', '+faststart', '-f', 'mp4', str(temporary)],
                                capture_output=True, timeout=30)
        if result.returncode:
            raise RuntimeError('Recording remux failed; raw segments retained: ' + result.stderr.decode(errors='replace')[-500:])
        temporary.replace(self.final)
        for part in self.parts:
            part.unlink(missing_ok=True)
        listing.unlink(missing_ok=True)
        self.finished = True
        print(f'RTSP archive finalized: {self.final.name}', flush=True)
