import { randomUUID } from 'node:crypto';
import { requireLogin } from '../loginAuthorization.js';
import CameraIntrinsics from '../models/CameraIntrinsics.js';

export function parseCameraIntrinsics(body) {
  if (body?.enabled === false) return { enabled: false };
  const { enabled = true, width, height, fx, fy, cx, cy } = body || {};
  if (enabled !== true || ![width, height].every(n => Number.isSafeInteger(n) && n > 0) ||
      width * height > 4096 * 2160 ||
      ![fx, fy, cx, cy].every(Number.isFinite) || fx <= 0 || fy <= 0 ||
      cx < 0 || cx >= width || cy < 0 || cy >= height) return null;
  return { enabled, width, height, fx, fy, cx, cy };
}

const validId = id => /^[a-zA-Z0-9_-]{1,64}$/.test(id);

export async function getCameraIntrinsics(req, res) {
  const { cameraId } = req.params;
  if (!validId(cameraId)) return res.status(400).json({ error: 'Invalid cameraId' });
  res.set('Cache-Control', 'no-store');
  const profile = await CameraIntrinsics.findOne({ cameraId }).lean();
  res.json(profile ?? { cameraId, enabled: false });
}

export async function updateCameraIntrinsics(req, res) {
  if (!await requireLogin(req, res)) return;
  const { cameraId } = req.params;
  if (!validId(cameraId)) return res.status(400).json({ error: 'Invalid cameraId' });
  const profile = parseCameraIntrinsics(req.body);
  if (!profile) return res.status(400).json({ error: 'Expected positive fx/fy, image width/height, and cx/cy within image' });
  res.json(await CameraIntrinsics.findOneAndUpdate({ cameraId },
    { $set: { ...profile, revision: randomUUID() } },
    { upsert: true, new: true, runValidators: true }).lean());
}
