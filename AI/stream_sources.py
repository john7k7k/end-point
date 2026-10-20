"""Prepare long-GOP demo files once, then publish them with stream copy."""
from fractions import Fraction
import hashlib
import json
from pathlib import Path
import subprocess
import uuid

ROOT = Path(__file__).resolve().parents[1]


def keyframe_interval(source, ffprobe='ffprobe'):
    result = subprocess.run([ffprobe, '-v', 'error', '-select_streams', 'v:0',
                             '-skip_frame', 'nokey', '-show_frames',
                             '-show_entries', 'frame=best_effort_timestamp_time:format=duration', '-show_format',
                             '-of', 'json', str(source)], capture_output=True, text=True, timeout=60, check=True)
    data = json.loads(result.stdout)
    timestamps = [float(row['best_effort_timestamp_time']) for row in data.get('frames', []) if 'best_effort_timestamp_time' in row]
    intervals = [b-a for a, b in zip(timestamps, timestamps[1:])]
    if timestamps and data.get('format', {}).get('duration'):
        intervals += [max(0, timestamps[0]), max(0, float(data['format']['duration'])-timestamps[-1])]
    return max(intervals, default=float('inf'))


def prepare_short_gop(source, ffmpeg='ffmpeg', ffprobe='ffprobe'):
    """Original file is never overwritten. Cache encoding is high-quality, NOT lossless."""
    source = Path(source).resolve()
    stat = source.stat()
    identity = f'{source}|{stat.st_size}|{stat.st_mtime_ns}|gop1-crf16-v1'
    key = hashlib.sha256(identity.encode()).hexdigest()[:24]
    folder = ROOT / 'runtime' / 'stream-cache'
    output = folder / f'{source.stem}-{key}.mp4'
    manifest = output.with_suffix('.json')
    if manifest.exists():
        data = json.loads(manifest.read_text(encoding='utf-8'))
        if data['reused_original']:
            return source
        if output.is_file() and output.stat().st_size == data['size']:
            return output
    interval = keyframe_interval(source, ffprobe)
    folder.mkdir(parents=True, exist_ok=True)
    if interval <= 1.1:
        manifest.write_text(json.dumps({'reused_original': True, 'interval': interval}), encoding='utf-8')
        return source
    info = subprocess.run([ffprobe, '-v', 'error', '-select_streams', 'v:0', '-show_entries',
                           'stream=avg_frame_rate', '-of', 'json', str(source)], capture_output=True, text=True, timeout=15, check=True)
    fps = float(Fraction(json.loads(info.stdout)['streams'][0]['avg_frame_rate']))
    gop = max(1, round(fps))
    temporary = folder / f'{key}-{uuid.uuid4().hex}.mp4'
    print(f'Preparing 1-second GOP cache once: {source.name}; originals unchanged (CRF 16)', flush=True)
    try:
        subprocess.run([ffmpeg, '-hide_banner', '-loglevel', 'error', '-y', '-i', str(source),
                        '-map', '0:v:0', '-an', '-c:v', 'libx264', '-preset', 'fast', '-crf', '16',
                        '-profile:v', 'high', '-pix_fmt', 'yuv420p', '-bf', '0', '-g', str(gop),
                        '-keyint_min', str(gop), '-sc_threshold', '0', '-movflags', '+faststart', str(temporary)], check=True, timeout=600)
        actual = keyframe_interval(temporary, ffprobe)
        if actual > 1.1:
            raise RuntimeError(f'Prepared GOP is too long: {actual}s')
        temporary.replace(output)
        manifest.write_text(json.dumps({'reused_original': False, 'interval': actual, 'size': output.stat().st_size}), encoding='utf-8')
    finally:
        temporary.unlink(missing_ok=True)
    return output
