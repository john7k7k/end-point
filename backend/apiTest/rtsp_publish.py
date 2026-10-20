#!/usr/bin/env python3
"""將本機彩色／深度影片循環推送到平台 RTSP，Python 只需標準函式庫。

需求：本機 PATH 有 ffmpeg、ffprobe；伺服器 MediaMTX 已啟動且開放 TCP 8554。
從專案根目錄執行：
  python backend/apiTest/rtsp_publish.py --dry-run
  python backend/apiTest/rtsp_publish.py
  python backend/apiTest/rtsp_publish.py --color /path/color.mp4 --depth /path/depth.mp4
  python backend/apiTest/rtsp_publish.py --encode --seconds 30
預設來源為 AI/test/test_color.mp4、AI/test/test_depth.mp4（影片不在 Git 內，需自行備妥）。
預設主機 192.168.0.156，路徑 cam-color、cam-depth，兩路均用 RTSP-over-TCP。

預設發布時直接 copy H264。來源 GOP 超過約 1 秒時，先一次性建立 CRF 16 的短 GOP
快取（runtime/stream-cache），不覆蓋原檔；快取編碼不是數學無損，之後不重複編碼。
若來源含 B-frame／非 H264／非 8-bit 420，會拒絕並提示
--encode。此選項以 libx264、CRF 18、無 B-frame 轉碼，會增加負載且不是無損壓縮。
來源兩檔必須已拆分，不會把上下拼接影片當作兩路。

本範例只示範 RTSP 傳輸，不建立作業、不偽造 frameId、不傳原始 metric depth。
平台完整展示時先用 platform.mqtt 開始作業並等 ACK，停止本程式後再送 operation/end。
Ctrl+C 會正常結束兩個 ffmpeg，讓 RTSP 連線釋放，但不自行結束 DB 作業。
VLC 可直接讀 rtsp://.../cam-color。瀏覽器 WebRTC 須走 MediaMTX 的 8889 埠，不能直接讀 RTSP URL。
雙路 RTSP 的啟動時間不保證同幀。要驗證 bbox＋深度＋pose 精確同步，請用現有：
  python AI/test/test2.py --server 192.168.0.156 --user-id 真實使用者ID --rgbd
test2 自帶 RTSP publisher，不可與本程式同時發布相同路徑。
同幀 sender 以 test_depth.mp4 換算的深度仍為模擬值，真實 RGB-D 要送 uint16 深度。
"""

import argparse
import json
import os
from pathlib import Path
import re
import shlex
import shutil
import socket
import subprocess
import sys
import time

ROOT = Path(__file__).resolve().parents[2]
sys.path.insert(0, str(ROOT / 'AI'))
from stream_sources import prepare_short_gop


def parser():
    result = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    result.add_argument('--host', default='192.168.0.156', help='MediaMTX IPv4／主機名，不含 scheme 或 port')
    result.add_argument('--port', type=int, default=8554)
    result.add_argument('--color', type=Path, default=ROOT / 'AI/test/test_color.mp4')
    result.add_argument('--depth', type=Path, default=ROOT / 'AI/test/test_depth.mp4')
    result.add_argument('--color-path', default='cam-color')
    result.add_argument('--depth-path', default='cam-depth')
    result.add_argument('--encode', action='store_true', help='以 libx264 重新編碼，移除 B-frame')
    result.add_argument('--once', action='store_true', help='兩檔各播放一次，不循環')
    result.add_argument('--seconds', type=float, default=0, help='測試秒數，0 表示直到 Ctrl+C／來源結束')
    result.add_argument('--dry-run', action='store_true', help='檢查來源與命令，不連線、不發布')
    return result


def validate(options):
    if not re.fullmatch(r'[A-Za-z0-9][A-Za-z0-9.-]*', options.host):
        raise ValueError('--host 請填 IPv4／主機名，不含 http://、冒號或路徑')
    if not 1 <= options.port <= 65535 or not 0 <= options.seconds < float('inf'):
        raise ValueError('port 須為 1～65535，seconds 須為有限非負數')
    paths = [options.color_path, options.depth_path]
    if paths[0] == paths[1] or any(not re.fullmatch(r'[A-Za-z0-9_-]+', p) for p in paths):
        raise ValueError('兩個 RTSP path 須不同，且只能含英數、底線與連字號')
    for source in (options.color, options.depth):
        if not source.is_file():
            raise ValueError(f'找不到來源影片：{source}，請以 --color／--depth 指定')
    if options.color.resolve() == options.depth.resolve():
        raise ValueError('彩色與深度必須是兩個已拆分的檔案')


def probe(source, executable):
    reply = subprocess.run([executable, '-v', 'error', '-select_streams', 'v:0',
                            '-show_entries', 'stream=codec_name,has_b_frames,width,height,pix_fmt',
                            '-of', 'json', str(source)], capture_output=True, text=True, timeout=15, check=True)
    streams = json.loads(reply.stdout).get('streams', [])
    if not streams:
        raise ValueError(f'無視訊軌：{source}')
    return streams[0]


def command(source, url, options, executable='ffmpeg'):
    args = [executable, '-hide_banner', '-loglevel', 'warning', '-re']
    if not options.once:
        args += ['-stream_loop', '-1']
    args += ['-i', str(source), '-map', '0:v:0', '-an']
    if options.encode:
        fps = 30  # The live encode mode explicitly uses 30 FPS / one-second GOP.
        args += ['-c:v', 'libx264', '-preset', 'veryfast', '-tune', 'zerolatency',
                 '-crf', '18', '-bf', '0', '-r', str(fps), '-g', str(fps), '-keyint_min', str(fps), '-sc_threshold', '0', '-pix_fmt', 'yuv420p',
                 '-vf', 'pad=ceil(iw/2)*2:ceil(ih/2)*2']
    else:
        args += ['-c:v', 'copy']
    return args + ['-rtsp_transport', 'tcp', '-f', 'rtsp', url]


def stop(process):
    if process.poll() is not None:
        return
    try:
        process.stdin.write(b'q\n')
        process.stdin.flush()
        process.wait(timeout=5)
    except (BrokenPipeError, OSError, subprocess.TimeoutExpired):
        process.terminate()
        try:
            process.wait(timeout=3)
        except subprocess.TimeoutExpired:
            process.kill()
            process.wait()
    finally:
        if process.stdin:
            process.stdin.close()


def run(options):
    validate(options)
    ffmpeg, ffprobe = shutil.which('ffmpeg'), shutil.which('ffprobe')
    if not ffmpeg or not ffprobe:
        raise ValueError('需在本機安裝 ffmpeg 與 ffprobe，並加入 PATH')
    commands = []
    for label, source, destination in [('color', options.color, options.color_path),
                                        ('depth', options.depth, options.depth_path)]:
        info = probe(source, ffprobe)
        safe = (info.get('codec_name') == 'h264' and info.get('has_b_frames') == 0
                and info.get('pix_fmt') in ('yuv420p', 'yuvj420p'))
        if not options.encode and not safe:
            raise ValueError(f'{label} 不符合瀏覽器直送條件：{info}。改用 --encode，或先準備 H264 無 B-frame 檔案。')
        url = f'rtsp://{options.host}:{options.port}/{destination}'
        prepared = source.resolve() if options.encode else prepare_short_gop(source, ffmpeg, ffprobe)
        args = command(prepared, url, options, ffmpeg)
        printable = subprocess.list2cmdline(args) if os.name == 'nt' else shlex.join(args)
        print(f'{label}: {info}\n{printable}', flush=True)
        commands.append(args)
    if options.dry_run:
        print('dry-run 完成，未連線或發布。')
        return
    for attempt in range(3):
        try:
            with socket.create_connection((options.host, options.port), timeout=5):
                pass
            break
        except OSError as error:
            if attempt == 2:
                raise RuntimeError(f'RTSP TCP 連線失敗 {options.host}:{options.port}，已重試 3 次：{error}') from error
            print(f'RTSP TCP 暫時無回應，重試 {attempt + 2}/3…', flush=True)
            time.sleep(1)
    processes = []
    try:
        for args in commands:
            processes.append(subprocess.Popen(args, stdin=subprocess.PIPE))
        started = time.monotonic()
        print('兩路已啟動，按 Ctrl+C 停止。', flush=True)
        while True:
            results = [process.poll() for process in processes]
            for result in results:
                if result is not None and result != 0:
                    raise RuntimeError(f'ffmpeg 結束碼 {result}，請檢查上方錯誤與伺服器路徑／發布權限。')
            if all(result is not None for result in results):
                break
            if not options.once and any(result is not None for result in results):
                raise RuntimeError('其中一路提早結束，停止另一個通道。')
            if options.seconds and time.monotonic() - started >= options.seconds:
                break
            time.sleep(.1)
    except KeyboardInterrupt:
        print('\n停止 RTSP 發布…', flush=True)
    finally:
        for process in processes:
            stop(process)
    print('RTSP 已停止。若有開啟平台作業，請另送 operation/end。')


if __name__ == '__main__':
    try:
        run(parser().parse_args())
    except (ValueError, RuntimeError, OSError, subprocess.SubprocessError) as error:
        print(f'Error: {error}', file=sys.stderr)
        sys.exit(1)
