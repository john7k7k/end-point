"""RUN_RTSP_ARCHIVE_TEST=1 enables isolated MediaMTX integration (no DB writes)."""
import inspect
import json
import os
from pathlib import Path
import socket
import subprocess
import sys
import tempfile
import time
import unittest
from unittest.mock import patch

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / 'AI'))
from archive_recorder import ArchiveRecorder, RTSP_INPUT_OPTIONS
from stream_sources import keyframe_interval
import main


class RecordingTests(unittest.TestCase):
    def test_recording_is_not_gated_on_decoder(self):
        self.assertNotIn('start_archive_recorder(', inspect.getsource(main.process_stream))
        self.assertNotIn('stop_archive_recorders(', inspect.getsource(main.process_stream))
        with patch.object(main, 'current_video_filenames', {'color': 'c.mp4', 'depth': 'd.mp4'}), \
                patch.object(main, 'current_operation_id', 'a'*24), \
                patch.object(main, 'archive_recorders', []), \
                patch.object(main, 'start_archive_recorder', side_effect=['color-recorder', 'depth-recorder']) as start:
            main.ensure_archive_recorders()
            self.assertEqual(start.call_count, 2)
            main.ensure_archive_recorders()
            self.assertEqual(start.call_count, 2, 'polling must not create duplicate recorders')

    def test_bounded_probe_and_copy_remux(self):
        self.assertEqual(RTSP_INPUT_OPTIONS[RTSP_INPUT_OPTIONS.index('-analyzeduration')+1], '100000')
        self.assertEqual(RTSP_INPUT_OPTIONS[RTSP_INPUT_OPTIONS.index('-timeout')+1], '3000000')
        self.assertIn("'copy'", inspect.getsource(ArchiveRecorder))
        self.assertNotIn('libx264', inspect.getsource(ArchiveRecorder))

    @unittest.skipUnless(os.environ.get('RUN_RTSP_ARCHIVE_TEST') == '1', 'requires WSL MediaMTX and prepared demo sources')
    def test_records_before_decoding_and_survives_reconnect(self):
        media = ROOT / '.tools/mediamtx-1.17.1/mediamtx'
        with socket.socket() as check:
            check.bind(('127.0.0.1', 0))
            port = check.getsockname()[1]
        source = next((ROOT / 'runtime/stream-cache').glob('test_color-*.mp4'))
        self.assertLessEqual(keyframe_interval(source), 1.1)
        with tempfile.TemporaryDirectory(prefix='vision-record-test-') as temporary:
            folder = Path(temporary)
            config = folder / 'mediamtx.yml'
            config.write_text(f'logLevel: warn\nrtspAddress: 127.0.0.1:{port}\nrtspTransports: [tcp]\nrtmp: no\nhls: no\nwebrtc: no\nsrt: no\napi: no\nplayback: no\npaths:\n  all_others:\n')
            server = subprocess.Popen([str(media), str(config)], stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
            recorder, publisher = None, None
            try:
                for _ in range(100):
                    try:
                        with socket.create_connection(('127.0.0.1', port), timeout=.1):
                            break
                    except OSError:
                        time.sleep(.05)
                url = f'rtsp://127.0.0.1:{port}/color'
                recorder = ArchiveRecorder(url, folder / 'result.mp4')
                time.sleep(.6)  # Recorder must survive path-not-ready without OpenCV.
                def publish():
                    return subprocess.Popen(['ffmpeg', '-v', 'error', '-re', '-stream_loop', '-1', '-i', str(source), '-c:v', 'copy', '-an', '-rtsp_transport', 'tcp', '-f', 'rtsp', url], stdin=subprocess.PIPE, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
                def stop_publisher():
                    publisher.stdin.write(b'q\n')
                    publisher.stdin.flush()
                    publisher.wait(timeout=5)
                    publisher.stdin.close()
                publisher = publish()
                time.sleep(6)
                stop_publisher()
                time.sleep(.6)
                publisher = publish()
                time.sleep(6)
                stop_publisher()
                recorder.request_stop()
                recorder.finish()
                self.assertTrue(recorder.has_frames, repr(list(recorder.errors)))
                result = subprocess.run(['ffprobe', '-v', 'error', '-show_entries', 'format=duration', '-of', 'json', str(folder / 'result.mp4')], capture_output=True, text=True, check=True)
                duration = float(json.loads(result.stdout)['format']['duration'])
                self.assertGreaterEqual(duration, 9.6, f'only {duration}s saved across two 6s sessions')
                self.assertFalse(list(folder.glob('*.part*.mkv')), 'successful remux removes only its own segments')
                print(f'Isolated reconnect recording: {duration}s for 12s total publication', flush=True)
            finally:
                if publisher and publisher.poll() is None:
                    publisher.terminate()
                    publisher.wait(timeout=5)
                if recorder:
                    recorder.request_stop()
                    recorder.finish()
                server.terminate()
                server.wait(timeout=5)


if __name__ == '__main__':
    unittest.main()
