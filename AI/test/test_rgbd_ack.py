import json
import unittest
from types import SimpleNamespace
from unittest.mock import patch
import test2

class AckTests(unittest.TestCase):
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
