"""Unit checks only: never publishes a stream or contacts the lab server."""
import importlib.util
from pathlib import Path
import tempfile
import unittest

SOURCE = Path(__file__).resolve().parents[1] / 'apiTest/rtsp_publish.py'
spec = importlib.util.spec_from_file_location('rtsp_example', SOURCE)
module = importlib.util.module_from_spec(spec)
spec.loader.exec_module(module)


class PublisherTests(unittest.TestCase):
    def test_default_server_paths(self):
        args = module.parser().parse_args([])
        self.assertEqual(args.host, '192.168.0.156')
        self.assertEqual(args.port, 8554)
        self.assertEqual(args.color.name, 'test_color.mp4')
        self.assertEqual(args.depth.name, 'test_depth.mp4')

    def test_copy_and_safe_encoding_commands(self):
        args = module.parser().parse_args([])
        url = 'rtsp://192.168.0.156:8554/cam-color'
        cmd = module.command(Path('source.mp4'), url, args)
        self.assertIn('copy', cmd)
        self.assertIn('-stream_loop', cmd)
        self.assertIn('-an', cmd)
        self.assertEqual(cmd[-1], url)
        args.encode = True
        args.once = True
        cmd = module.command(Path('source.mp4'), url, args)
        self.assertIn('libx264', cmd)
        self.assertEqual(cmd[cmd.index('-bf') + 1], '0')
        self.assertNotIn('-stream_loop', cmd)

    def test_validation_rejects_bad_host_same_file_and_same_stream_path(self):
        with tempfile.TemporaryDirectory() as folder:
            color, depth = [Path(folder) / name for name in ('color.mp4', 'depth.mp4')]
            color.touch()
            depth.touch()
            args = module.parser().parse_args(['--color', str(color), '--depth', str(depth)])
            module.validate(args)
            args.depth_path = args.color_path
            with self.assertRaises(ValueError):
                module.validate(args)
            args.depth_path = 'cam-depth'
            args.host = 'http://192.168.0.156'
            with self.assertRaises(ValueError):
                module.validate(args)
            args.host = '192.168.0.156'
            args.depth = color
            with self.assertRaises(ValueError):
                module.validate(args)


if __name__ == '__main__':
    unittest.main()
