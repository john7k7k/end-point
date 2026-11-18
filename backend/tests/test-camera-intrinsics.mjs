import { test } from 'node:test';
import assert from 'node:assert/strict';
import CameraIntrinsics from '../src/models/CameraIntrinsics.js';
import User from '../src/models/User.js';
import jwt from 'jsonwebtoken';
import { tokenSecret } from '../src/loginAuthorization.js';
import { updateCameraExtrinsics } from '../src/controllers/calibrationController.js';
import { getCameraIntrinsics, updateCameraIntrinsics } from '../src/controllers/cameraIntrinsicsController.js';

test('camera override requires a token, validates dimensions and supports disabling', async t => {
  const token = 'Bearer ' + jwt.sign({ sub: '000000000000000000000001' }, tokenSecret);
  let accountExists = true;
  t.mock.method(User, 'exists', async () => accountExists);
  const previous = process.env.CAMERA_CALIBRATION_TOKEN;
  process.env.CAMERA_CALIBRATION_TOKEN = token;
  t.after(() => {
    if (previous === undefined) delete process.env.CAMERA_CALIBRATION_TOKEN;
    else process.env.CAMERA_CALIBRATION_TOKEN = previous;
  });
  let saved;
  t.mock.method(CameraIntrinsics, 'findOne', () => ({ lean: async () => saved }));
  const write = t.mock.method(CameraIntrinsics, 'findOneAndUpdate', (filter, update) => ({
    lean: async () => (saved = { ...saved, ...filter, ...update.$set })
  }));
  const res = { code: 200, status(n) { this.code = n; return this; }, set() {}, json(value) { this.body = value; } };
  const req = { params: { cameraId: 'default' }, get: () => '', body: {} };
  await getCameraIntrinsics(req, res);
  assert.deepEqual(res.body, { cameraId: 'default', enabled: false });
  await updateCameraIntrinsics(req, res);
  assert.equal(res.code, 401);
  req.get = () => token;
  await updateCameraIntrinsics(req, res);
  assert.equal(res.code, 400);
  assert.equal(write.mock.callCount(), 0);
  req.body = { width: 640, height: 360, fx: 465, fy: 466, cx: 320, cy: 180 };
  await updateCameraIntrinsics(req, res);
  assert.equal(saved.fx, 465);
  assert.equal(saved.enabled, true);
  const revision = saved.revision;
  req.body = { enabled: false };
  await updateCameraIntrinsics(req, res);
  await getCameraIntrinsics(req, res);
  assert.equal(res.body.enabled, false);
  assert.notEqual(res.body.revision, revision);
  accountExists = false;
  await updateCameraIntrinsics(req, res);
  assert.equal(res.code, 401);
  req.get = () => 'Bearer invalid';
  await updateCameraExtrinsics(req, res);
  assert.equal(res.code, 401);
  req.get = () => 'Bearer ' + jwt.sign({ sub: '000000000000000000000001' }, tokenSecret, { expiresIn: -1 });
  await updateCameraIntrinsics(req, res);
  assert.equal(res.code, 401);
});
