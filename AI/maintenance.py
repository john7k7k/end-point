"""Runtime-only exclusive API-test lease; no markers in business documents."""
import json
import os
import secrets
from pathlib import Path

FILE = Path(os.environ.get('API_TEST_CHECKPOINT_ROOT', str(Path(__file__).resolve().parent.parent / 'runtime' / 'checkpoints'))) / 'ai-lease.json'
lease = json.loads(FILE.read_text(encoding='utf-8')) if FILE.exists() else None

def token_ok(value):
    expected = os.environ.get('API_TEST_ADMIN_TOKEN', '')
    return len(expected) >= 24 and secrets.compare_digest(expected, value or '')

def save(value):
    global lease
    FILE.parent.mkdir(parents=True, exist_ok=True)
    temporary = FILE.with_suffix('.tmp')
    temporary.write_text(json.dumps(value), encoding='utf-8')
    temporary.replace(FILE)
    lease = value

def headers():
    return {'Authorization': 'Bearer ' + os.environ.get('API_TEST_ADMIN_TOKEN', ''),
            'X-API-Test-Checkpoint': lease['id']} if lease else {}

def allowed(request_headers):
    return (not request_headers.get('x-api-test-checkpoint')) if not lease else (not lease.get('quiesced') and
        request_headers.get('x-api-test-checkpoint') == lease['id'] and
        token_ok(request_headers.get('authorization', '').removeprefix('Bearer ')))

def can_write(operation_id):
    return not lease or (not lease.get('quiesced') and operation_id == lease.get('operationId'))
