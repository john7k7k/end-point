import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { readdir, lstat, unlink, rmdir } from 'node:fs/promises';
import User from '../models/User.js';
import Operation from '../models/Operation.js';
import Detection from '../models/Detection.js';
import Raw from '../models/RawSensorMeasurement.js';
import Operator from '../models/OperatorTelemetry.js';
import Screw from '../models/ScrewLocalizationTelemetry.js';
import Frame from '../models/RgbdFrame.js';
import { lease, blockedOperations, blockedUsers, internalHeaders, drain } from './lease.js';
import { rebuildScrewFusionForOperation } from '../positioning/screwFusion.js';
export const videoRoot = path.resolve(process.env.VIDEO_ARCHIVE_ROOT || fileURLToPath(new URL('../../../AI/video/', import.meta.url)));
export const rgbdRoot = path.resolve(process.env.RGBD_ARCHIVE_ROOT || path.join(videoRoot, 'rgbd'));
export const descendants = [Detection, Raw, Operator, Screw, Frame];
function protectIds(ids) {
  if (lease && ids.some(id => lease.originalIds.includes(String(id)))) throw new Error('Refusing to modify baseline records');
}
export function validId(id) { if (!/^[a-f0-9]{24}$/i.test(String(id))) throw Object.assign(new Error('Invalid resource ID'), { status: 400 }); return String(id).toLowerCase(); }
export async function filesUnder(root) {
  const result = [];
  async function walk(folder) {
    try { if ((await lstat(folder)).isSymbolicLink()) throw new Error(`Archive symlink is not allowed: ${folder}`); }
    catch (e) { if (e.code === 'ENOENT') return; throw e; }
    let entries; try { entries = await readdir(folder, { withFileTypes: true }); } catch (e) { if (e.code === 'ENOENT') return; throw e; }
    for (const entry of entries) {
      const full = path.join(folder, entry.name);
      if (entry.isSymbolicLink()) throw new Error(`Archive symlink is not allowed: ${full}`);
      if (entry.isDirectory()) await walk(full); else result.push(full);
    }
  }
  await walk(root); return result.sort();
}
export async function operationFiles(id) {
  validId(id);
  // Flat RTSP recordings are at the root. Do not recursively scan every other
  // operation's RGB-D packets on each inspect/delete (especially slow in WSL).
  let entries;
  try {
    if ((await lstat(videoRoot)).isSymbolicLink()) throw new Error('Archive symlink is not allowed');
    entries = await readdir(videoRoot, { withFileTypes: true });
  }
  catch (error) { if (error.code !== 'ENOENT') throw error; entries = []; }
  const regular = entries.filter(entry => !entry.isDirectory() &&
    ['detect_', 'color_detect_', 'depth_detect_'].some(prefix => entry.name.startsWith(prefix + id + '_')))
    .map(entry => { if (entry.isSymbolicLink()) throw new Error('Archive symlink is not allowed'); return path.join(videoRoot, entry.name); });
  return [...regular, ...await filesUnder(path.join(rgbdRoot, id))];
}
export async function stopOperation(id) {
  id = validId(id); blockedOperations.add(id);
  const pipeline = await import('../mqtt/mqttClient.js');
  const row = await Operation.findById(id).lean();
  if (!lease?.quiesced && (pipeline.getActiveTelemetryOperation() === id || (row && !row.endTime))) {
    const state = await fetch('http://127.0.0.1:8000/api/rgbd/status', { headers: internalHeaders(), signal: AbortSignal.timeout(5000) });
    if (!state.ok) throw new Error(`AI status unavailable: ${state.status}`);
    if ((await state.json()).operationId === id) {
      const response = await fetch('http://127.0.0.1:8000/api/operation-end', { method: 'POST', headers: internalHeaders(), signal: AbortSignal.timeout(30000) });
      if (!response.ok) throw new Error(`AI stop failed: ${response.status}`);
    }
  }
  if (pipeline.getActiveTelemetryOperation() === id) pipeline.setActiveTelemetryOperation(null);
  await pipeline.waitForTelemetryWrites();
  await drain();
  const { drainRgbd } = await import('../routes/rgbdRoutes.js'); await drainRgbd(id);
}
export async function deleteOperation(id) {
  id = validId(id);
  protectIds([id]);
  for (const model of descendants) protectIds((await model.find({ operationId: id }).select('_id').lean()).map(row => row._id));
  if (lease && (await operationFiles(id)).some(file => lease.originalFiles?.includes(file))) throw new Error('Refusing to delete a baseline archive');
  await stopOperation(id);
  const files = await operationFiles(id);
  // Keep the parent until descendants/files succeed so a retry can discover them.
  for (const model of descendants) await model.deleteMany({ operationId: id });
  for (const file of files) await unlink(file);
  const folder = path.join(rgbdRoot, id);
  async function empty(dir) {
    let entries; try { entries = await readdir(dir, { withFileTypes: true }); } catch (e) { if (e.code === 'ENOENT') return; throw e; }
    for (const entry of entries) if (entry.isDirectory()) await empty(path.join(dir, entry.name));
    await rmdir(dir);
  }
  await empty(folder); await Operation.deleteOne({ _id: id });
  return { message: 'deleted', operationId: id, files: files.length };
}
export async function deleteUser(id) {
  id = validId(id); protectIds([id]); blockedUsers.add(id); await drain();
  for (const operation of await Operation.find({ userId: id }).select('_id').lean()) await deleteOperation(String(operation._id));
  await User.deleteOne({ _id: id }); return { message: 'deleted', userId: id };
}
export async function deleteDetection(id) {
  id = validId(id); protectIds([id]); const row = await Detection.findById(id);
  if (!row) return { message: 'deleted' };
  const operation = await Operation.findById(row.operationId).lean();
  if (operation && !operation.endTime) throw Object.assign(new Error('End operation before deleting/rebuilding detections'), { status: 409 });
  protectIds((await Detection.find({ operationId: row.operationId }).select('_id').lean()).map(item => item._id));
  protectIds((await Screw.find({ operationId: row.operationId }).select('_id').lean()).map(item => item._id));
  await Screw.deleteMany({ detectionId: id }); await Detection.deleteOne({ _id: id });
  await rebuildScrewFusionForOperation(row.operationId);
  return { message: 'deleted', detectionId: id };
}
