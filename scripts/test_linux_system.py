"""Run on Linux: python3 -m unittest discover -s scripts -p 'test_linux*.py' -v"""
import contextlib
import importlib.util
import io
import json
import os
from pathlib import Path
import subprocess
import sys
import tempfile
import unittest
from unittest.mock import patch

spec = importlib.util.spec_from_file_location('manager', Path(__file__).with_name('linux_system.py'))
manager = importlib.util.module_from_spec(spec)
spec.loader.exec_module(manager)


class ManagerTests(unittest.TestCase):
    def test_start_nolog_then_stop(self):
        spawned = []
        original_popen = subprocess.Popen
        def fake_service(*args, **kwargs):
            proc = original_popen([sys.executable, '-c', 'import time; time.sleep(60)'],
                                  stdin=kwargs['stdin'], stdout=kwargs['stdout'], stderr=kwargs['stderr'],
                                  start_new_session=True)
            spawned.append(proc)
            return proc
        with tempfile.TemporaryDirectory() as tmp, patch.object(manager, 'RUNTIME', Path(tmp)), \
                patch.object(manager, 'STATE', Path(tmp) / 'services.json'), patch.object(manager, 'check'), \
                patch.object(manager, 'port_open', side_effect=[False]*6+[True]*3), \
                patch.object(manager.urllib.request, 'urlopen') as urlopen, \
                patch.object(subprocess, 'Popen', side_effect=fake_service):
            urlopen.return_value.__enter__.return_value.status = 200
            try:
                manager.start({}, True)
                records = json.loads(manager.STATE.read_text())
                self.assertEqual(len(records), 3)
                self.assertEqual(list(Path(tmp).glob('*.log')), [])
                manager.stop(records)
                self.assertTrue(all(not manager.alive(r) for r in records.values()))
            finally:
                for proc in spawned:
                    if proc.poll() is None:
                        proc.kill()
                    proc.wait()

    def test_failed_start_reclaims_started_services(self):
        spawned = []
        original_popen = subprocess.Popen
        def fake_service(*args, **kwargs):
            if spawned:
                raise OSError('injected startup failure')
            proc = original_popen([sys.executable, '-c', 'import time; time.sleep(60)'], start_new_session=True)
            spawned.append(proc)
            return proc
        with tempfile.TemporaryDirectory() as tmp, patch.object(manager, 'RUNTIME', Path(tmp)), \
                patch.object(manager, 'STATE', Path(tmp) / 'services.json'), patch.object(manager, 'check'), \
                patch.object(manager, 'port_open', side_effect=[False]*6+[True]), \
                patch.object(subprocess, 'Popen', side_effect=fake_service):
            try:
                with self.assertRaisesRegex(OSError, 'injected'):
                    manager.start({}, False)
                self.assertEqual(json.loads(manager.STATE.read_text()), {})
            finally:
                for proc in spawned:
                    if proc.poll() is None:
                        proc.kill()
                    proc.wait()

    def test_process_group_stop_and_state(self):
        with tempfile.TemporaryDirectory() as tmp:
            proc = subprocess.Popen([sys.executable, '-c', 'import time; time.sleep(60)'], start_new_session=True)
            try:
                record = {'pid': proc.pid, 'start': manager.identity(proc.pid)}
                with patch.object(manager, 'STATE', Path(tmp) / 'services.json'):
                    self.assertTrue(manager.alive(record))
                    manager.save({'test': record})
                    manager.stop({'test': record})
                    self.assertFalse(manager.alive(record))
                    self.assertEqual(json.loads(manager.STATE.read_text()), {})
            finally:
                if proc.poll() is None:
                    proc.kill()
                proc.wait()

    def test_stale_pid_does_not_kill_another_process(self):
        with tempfile.TemporaryDirectory() as tmp, patch.object(manager, 'STATE', Path(tmp) / 'services.json'):
            manager.stop({'foreign': {'pid': os.getpid(), 'start': 'not-the-same-starttime'}})
            self.assertIsNotNone(manager.identity(os.getpid()))

    def test_refresh_requires_explicit_confirmation(self):
        with tempfile.TemporaryDirectory() as tmp, patch.object(manager, 'RUNTIME', Path(tmp)), \
                patch.object(manager, 'STATE', Path(tmp) / 'services.json'), \
                patch.object(sys, 'argv', ['manager', '-refresh']), patch.object(manager, 'stop') as stop:
            with self.assertRaisesRegex(RuntimeError, 'confirm-delete'):
                manager.main()
            stop.assert_not_called()

    def test_busy_port_is_not_killed(self):
        with patch.object(manager, 'check'), patch.object(manager, 'port_open', return_value=True), \
                patch.object(subprocess, 'Popen') as popen:
            with self.assertRaisesRegex(RuntimeError, 'occupied'):
                manager.start({}, True)
            popen.assert_not_called()

    def test_status_without_dependencies(self):
        with tempfile.TemporaryDirectory() as tmp, patch.object(manager, 'RUNTIME', Path(tmp)), \
                patch.object(manager, 'STATE', Path(tmp) / 'services.json'), \
                patch.object(sys, 'argv', ['manager', '-status']), contextlib.redirect_stdout(io.StringIO()) as output:
            manager.main()
            self.assertEqual(output.getvalue().count('stopped'), 3)
