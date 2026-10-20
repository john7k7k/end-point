import json
import unittest
from types import SimpleNamespace
from unittest.mock import patch
import test2

class AckTests(unittest.TestCase):
    def test_remote_routes_all_protocols_to_one_server(self):
        with patch.multiple(test2, MQTT_BROKER='localhost', MQTT_PORT=1883,
                BACKEND_URL='http://127.0.0.1:3000', RGBD_URL='ws://127.0.0.1:8000/ws/rgbd',
                RTSP_BASE_URL='rtsp://127.0.0.1:8554', USER_ID='old', TOPIC_ACK='old',
                RGBD_ENABLED=False, active_operation_id='operation', color_process=None, depth_process=None, rgbd_process=None):
            test2.configure_remote(SimpleNamespace(server='192.168.0.156', mqtt_port=1883,
                backend=None, rgbd_url=None, rtsp_base=None, user_id='a'*24,rgbd=True))
            self.assertEqual(test2.MQTT_BROKER,'192.168.0.156')
            self.assertEqual(test2.TOPIC_ACK,'vision/operation/ack/'+'a'*24)
            with patch.object(test2.subprocess,'Popen') as popen, \
                    patch.object(test2, 'prepare_short_gop', side_effect=lambda source: source):
                test2.start_streams()
                commands=[call.args[0] for call in popen.call_args_list]
                self.assertEqual(commands[0][-1],'rtsp://192.168.0.156:8554/cam-color')
                self.assertEqual(commands[1][-1],'rtsp://192.168.0.156:8554/cam-depth')
                child=commands[2]
                self.assertEqual(child[child.index('--url')+1],'ws://192.168.0.156:8000/ws/rgbd')
                self.assertEqual(child[child.index('--backend')+1],'http://192.168.0.156:3000')

    def test_foreign_and_stale_ack_cannot_override_operation(self):
        with patch.object(test2, 'backend_instance_id', 'local'), \
             patch.object(test2, 'pending_request_id', 'request-1'), \
             patch.object(test2, 'active_operation_id', None), \
             patch.object(test2, 'start_streams') as start:
            def send(**payload):
                test2.on_message(None, None, SimpleNamespace(payload=json.dumps(payload).encode()))
            send(opID='wrong', backendInstanceId='windows',requestId='request-1')
            send(opID='stale', backendInstanceId='local',requestId='request-old')
            send(opID='legacy')
            self.assertIsNone(test2.active_operation_id)
            start.assert_not_called()
            send(opID='correct',backendInstanceId='local',requestId='request-1')
            self.assertEqual(test2.active_operation_id,'correct')
            start.assert_called_once()
            send(opID='late',backendInstanceId='local',requestId='request-1')
            self.assertEqual(test2.active_operation_id,'correct')
            start.assert_called_once()
