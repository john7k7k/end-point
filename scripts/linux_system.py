"""Linux-only local service manager. Never kill arbitrary port owners."""
import argparse
import fcntl
import json
import os
from pathlib import Path
import shutil
import signal
import socket
import subprocess
import sys
import time
import urllib.request

ROOT = Path(__file__).resolve().parents[1]
RUNTIME = ROOT / 'runtime' / 'linux'
STATE = RUNTIME / 'services.json'
PYTHON = ROOT / '.venv' / 'bin' / 'python'
MEDIA = Path(os.environ.get('MEDIAMTX_BIN', str(ROOT / '.tools/mediamtx-1.17.1/mediamtx')))


def identity(pid):
    try:
        # starttime field 22; comm can contain spaces or parentheses.
        fields = Path(f'/proc/{pid}/stat').read_text().rsplit(')', 1)[1].split()
        return None if fields[0] == 'Z' else fields[19]
    except (OSError, IndexError):
        return None


def alive(record):
    return identity(record['pid']) == record['start'] and record['start'] is not None


def save(records):
    tmp = STATE.with_suffix('.tmp')
    tmp.write_text(json.dumps(records, indent=2))
    tmp.replace(STATE)


def stop(records):
    for name, record in reversed(list(records.items())):
        if not alive(record):
            continue
        pid = record['pid']
        if os.getpgid(pid) != pid:
            raise RuntimeError(f'Refusing to stop unexpected process group: {name}')
        os.killpg(pid, signal.SIGTERM)
        for _ in range(100):
            if not alive(record):
                break
            time.sleep(.1)
        if alive(record):
            os.killpg(pid, signal.SIGKILL)
        print(f'Stopped {name}')
    save({})


def port_open(port):
    try:
        with socket.create_connection(('127.0.0.1', port), timeout=.5):
            return True
    except OSError:
        return False


def check():
    for executable in ('node', 'ffmpeg'):
        if not shutil.which(executable):
            raise RuntimeError(f'Missing {executable}; run setup per LINUX_WSL.md')
    for file in (PYTHON, MEDIA, ROOT / 'frontend/dist/index.html', ROOT / 'backend/node_modules/mongoose/package.json'):
        if not file.exists():
            raise RuntimeError(f'Missing {file}; run bash scripts/setup-linux.sh')
    subprocess.run([str(PYTHON), '-c', 'import cv2,numpy,requests,fastapi,uvicorn,websockets,paho.mqtt.client'], check=True)
    for port, name in ((27017, 'MongoDB'), (1883, 'MQTT')):
        if not port_open(port):
            raise RuntimeError(f'{name} unavailable at 127.0.0.1:{port}; see LINUX_WSL.md')
    print('Dependency checks passed (database/broker TCP availability).')


def start(records, no_log):
    startup_timeout = float(os.environ.get('STARTUP_TIMEOUT_SECONDS', '120'))
    if not 1 <= startup_timeout <= 600:
        raise RuntimeError('STARTUP_TIMEOUT_SECONDS must be between 1 and 600')
    if any(alive(r) for r in records.values()):
        raise RuntimeError('Managed services already running; use -reboot or -status')
    check()
    for port in (3000, 8000, 8554, 8888, 8889, 9997):
        if port_open(port):
            raise RuntimeError(f'Port {port} occupied; not stopping an unrelated process')
    # Safe default for SSH tunnelling. No unauthenticated public media listeners.
    media_env = dict(os.environ, MTX_RTSPADDRESS='127.0.0.1:8554', MTX_RTSPTRANSPORTS='tcp',
                     MTX_HLSADDRESS='127.0.0.1:8888', MTX_WEBRTCADDRESS='127.0.0.1:8889',
                     MTX_WEBRTCLOCALUDPADDRESS='', MTX_WEBRTCLOCALTCPADDRESS='127.0.0.1:8189',
                     MTX_WEBRTCADDITIONALHOSTS='127.0.0.1', MTX_RTMP='no', MTX_SRT='no')
    app_env = dict(os.environ, APP_HOST='127.0.0.1', PYTHONUNBUFFERED='1')
    definitions = [
        ('mediamtx', [str(MEDIA), str(ROOT / 'AI/mediamtx.yml')], ROOT / 'AI', media_env, 8889, None),
        ('backend', ['node', 'src/app.js'], ROOT / 'backend', app_env, 3000, 'http://127.0.0.1:3000/'),
        ('ai', [str(PYTHON), 'main.py'], ROOT / 'AI', app_env, 8000, 'http://127.0.0.1:8000/openapi.json'),
    ]
    records = {}
    try:
        for name, command, cwd, env, port, url in definitions:
            with open(os.devnull if no_log else RUNTIME / f'{name}.log', 'ab') as log:
                proc = subprocess.Popen(command, cwd=cwd, env=env, stdin=subprocess.DEVNULL,
                                        stdout=log, stderr=log, start_new_session=True)
            records[name] = {'pid': proc.pid, 'start': identity(proc.pid)}
            save(records)
            deadline = time.monotonic() + startup_timeout
            while time.monotonic() < deadline:
                if proc.poll() is not None:
                    raise RuntimeError(f'{name} exited; inspect runtime/linux/{name}.log')
                if port_open(port):
                    try:
                        if url:
                            with urllib.request.urlopen(url, timeout=1) as response:
                                if response.status != 200:
                                    continue
                        break
                    except OSError:
                        pass
                time.sleep(.2)
            else:
                raise RuntimeError(f'{name} startup timed out after {startup_timeout:g}s; inspect runtime/linux/{name}.log. WSL /mnt drives may load dependencies slowly.')
            print(f'Started {name} (PID {proc.pid})')
    except BaseException:
        stop(records)
        raise
    print('Ready: http://localhost:3000 ; test2 is NOT started automatically.')


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    group = parser.add_mutually_exclusive_group()
    group.add_argument('-stop', '--stop', action='store_true')
    group.add_argument('-reboot', '--reboot', action='store_true')
    group.add_argument('-status', '--status', action='store_true')
    group.add_argument('--check', action='store_true')
    group.add_argument('-refresh', '--refresh', action='store_true')
    parser.add_argument('-nolog', '--nolog', action='store_true')
    parser.add_argument('--confirm-delete', action='store_true')
    args = parser.parse_args()
    RUNTIME.mkdir(parents=True, exist_ok=True)
    with (RUNTIME / 'manager.lock').open('w') as lock:
        fcntl.flock(lock, fcntl.LOCK_EX | fcntl.LOCK_NB)
        records = json.loads(STATE.read_text()) if STATE.exists() else {}
        if args.status:
            for name in ('mediamtx', 'backend', 'ai'):
                print(f'{name}: {"running" if name in records and alive(records[name]) else "stopped"}')
            return
        if args.check:
            check()
            return
        if args.refresh and not args.confirm_delete:
            raise RuntimeError('-refresh deletes local videos/logs and ALL vision_system records except users. Add --confirm-delete only after backup.')
        if args.stop or args.reboot or args.refresh:
            stop(records)
            records = {}
        if args.stop:
            return
        if args.refresh:
            check()
            # Fixed targets only; never follow a symlink out of this checkout.
            video = ROOT / 'AI/video'
            if video.is_symlink() or video.resolve() != ROOT / 'AI/video':
                raise RuntimeError('Refusing to clear symlinked archive directory')
            subprocess.run(['node', str(ROOT / 'backend/scripts/refreshRuntimeData.js')], check=True)
            if video.exists():
                shutil.rmtree(video)
            video.mkdir()
            for log in RUNTIME.glob('*.log'):
                log.unlink()
            print('Removed archived videos, Linux logs and non-user database records; no undo without backup.')
        start(records, args.nolog)


if __name__ == '__main__':
    try:
        main()
    except Exception as exc:
        print(f'Error: {exc}', file=sys.stderr)
        sys.exit(1)
