"""Build display-only depth previews for existing paired archives; raw depth is unchanged."""
import argparse
import os
from pathlib import Path
import cv2
import numpy as np
from rgbd_sync import decode_packet

def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--operation-id', required=True)
    args = parser.parse_args()
    if len(args.operation_id) != 24 or any(c not in '0123456789abcdef' for c in args.operation_id):
        parser.error('operation-id must be a 24-character ObjectId')
    root = Path(__file__).resolve().parent / 'video' / 'rgbd' / args.operation_id
    count = 0
    for source in root.glob('*/*.rgbd'):
        target = source.with_suffix('.depth.jpg')
        if target.exists():
            continue
        h, _, depth = decode_packet(source.read_bytes())
        preview = np.clip(depth.astype(float) * h['depthScaleMeters'] / 6 * 255, 0, 255).astype(np.uint8)
        ok, encoded = cv2.imencode('.jpg', preview)
        if not ok:
            raise ValueError(f'Cannot encode {source}')
        temporary = source.with_suffix('.depth.tmp')
        temporary.write_bytes(encoded.tobytes()); os.replace(temporary, target)
        count += 1
    print(f'Created {count} depth previews; raw packets unchanged.')

if __name__ == '__main__':
    main()
