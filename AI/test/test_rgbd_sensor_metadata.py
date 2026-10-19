import sys
from pathlib import Path
import unittest
sys.path.insert(0, str(Path(__file__).resolve().parents[1]))
from rgbd_sync import PoseBuffer

class SensorMetadataTests(unittest.TestCase):
    def test_exact_and_interpolated_sensor_provenance(self):
        buffer = PoseBuffer()
        sample = dict(timestampNs='1000000000', position=dict(x=1,y=2,z=3),
            quaternion=dict(w=1,x=0,y=0,z=0), fusionAlgorithm='ekf',
            uwbRanges=[dict(stationId=i,distance=2+i) for i in range(8)],
            imu=dict(acceleration=dict(x=0,y=0,z=0)))
        buffer.add(sample)
        buffer.add({**sample,'timestampNs':'1100000000','position':dict(x=2,y=2,z=3)})
        exact = buffer.at(1000000000)
        self.assertEqual(exact['uwbRanges'],sample['uwbRanges'])
        self.assertEqual(exact['fusionAlgorithm'],'ekf')
        interpolated = buffer.at(1050000000)
        self.assertEqual(interpolated['position']['x'],1.5)
        self.assertEqual(interpolated['sensorTimeNs'],'1000000000')
        self.assertIsNone(buffer.at(1200000000))
