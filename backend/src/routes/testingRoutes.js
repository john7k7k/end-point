import { Router } from 'express';
import mongoose from 'mongoose';
import { createHash, randomUUID } from 'node:crypto';
import { readFile, writeFile, rename } from 'node:fs/promises';
import { createReadStream } from 'node:fs';
import path from 'node:path';
import User from '../models/User.js';
import Operation from '../models/Operation.js';
import Detection from '../models/Detection.js';
import Camera from '../models/CameraExtrinsics.js';
import { backendInstanceId } from '../runtimeIdentity.js';
import { getSimulationConfigValue, setSimulationConfigValue } from '../controllers/simulationController.js';
import { directory, lease, saveLease, tokenMatches, internalHeaders, drain, pending } from '../maintenance/lease.js';
import { descendants, videoRoot, rgbdRoot, filesUnder, operationFiles, validId, deleteUser, deleteOperation, deleteDetection } from '../maintenance/cascade.js';
const router = Router();
const { EJSON } = mongoose.mongo.BSON;
const digest = value => createHash('sha256').update(EJSON.stringify(value, { relaxed: false })).digest('hex');
const file = id => path.join(directory, id + '.json');
async function save(cp) { await writeFile(file(cp.id) + '.tmp', EJSON.stringify(cp), { mode: 0o600 }); await rename(file(cp.id) + '.tmp', file(cp.id)); }
async function load(id) { if (!/^[a-z0-9-]{36}$/.test(id)) throw new Error('Invalid checkpoint'); return EJSON.parse(await readFile(file(id), 'utf8')); }
async function ai(route, body, method = 'POST') {
  const response = await fetch('http://127.0.0.1:8000/api/' + route, { method, headers: { 'Content-Type': 'application/json', ...internalHeaders(), Authorization: `Bearer ${process.env.API_TEST_ADMIN_TOKEN}` }, body: body === undefined ? undefined : JSON.stringify(body), signal: AbortSignal.timeout(15000) });
  if (!response.ok) throw Object.assign(new Error(`AI ${route}: HTTP ${response.status}`), { aiStatus: response.status }); return response.json();
}
async function snapshot() {
  const result = {};
  for (const { name } of await mongoose.connection.db.listCollections().toArray()) {
    if (name.startsWith('system.')) continue;
    const rows = await mongoose.connection.db.collection(name).find({}).sort({ _id: 1 }).toArray();
    result[name] = Object.fromEntries(rows.map(row => [String(row._id), digest(row)]));
  }
  return result;
}
async function archive() {
  const result = {};
  const relative = path.relative(videoRoot, rgbdRoot);
  const contained = relative === '' || (!relative.startsWith('..') && !path.isAbsolute(relative));
  const names = [...new Set([...await filesUnder(videoRoot), ...(contained ? [] : await filesUnder(rgbdRoot))])];
  let cursor = 0;
  await Promise.all(Array.from({ length: Math.min(8, names.length) }, async () => {
    while (cursor < names.length) {
      const name = names[cursor++], hash = createHash('sha256');
      for await (const chunk of createReadStream(name)) hash.update(chunk);
      result[name] = hash.digest('hex');
    }
  }));
  return result;
}
const same = (a, b) => JSON.stringify(a) === JSON.stringify(b);
async function owned(cp, input = {}) {
  cp.owned ||= { users: [], operations: [], detections: [] };
  const original = new Set(Object.values(cp.documents).flatMap(rows => Object.keys(rows)));
  for (const kind of ['users', 'operations', 'detections']) for (const id of input.owned?.[kind] || []) {
    validId(id); if (original.has(id)) throw new Error('Refusing baseline ID: ' + id);
    if (!cp.owned[kind].includes(id)) cp.owned[kind].push(id);
  }
  for (const intent of input.intents || []) if (intent.lookupEmail) {
    const row = await User.findOne({ email: intent.lookupEmail }).lean();
    if (row && !original.has(String(row._id)) && !cp.owned.users.includes(String(row._id))) cp.owned.users.push(String(row._id));
  }
  for (const row of await Operation.find({ userId: { $in: cp.owned.users } }).lean()) {
    const id = String(row._id); if (original.has(id)) throw new Error('Baseline child operation is protected');
    if (!cp.owned.operations.includes(id)) cp.owned.operations.push(id);
  }
  for (const row of await Detection.find({ operationId: { $in: cp.owned.operations } }).lean()) {
    const id = String(row._id); if (original.has(id)) throw new Error('Baseline detection is protected');
    if (!cp.owned.detections.includes(id)) cp.owned.detections.push(id);
  }
  await save(cp); return cp.owned;
}
async function inspect(cp, root) {
  const all = cp.owned;
  let users = [], operations = [], detections = [];
  if (!root) ({ users, operations, detections } = all);
  else {
    validId(root.id);
    const kind = { user: 'users', operation: 'operations', detection: 'detections' }[root.kind];
    if (!kind || !all[kind].includes(root.id)) throw new Error('Root is not owned by checkpoint');
    cp.roots ||= {};
    const key = root.kind + '/' + root.id;
    let tree = cp.roots[key];
    if (!tree) {
      users = root.kind === 'user' ? [root.id] : [];
      operations = root.kind === 'operation' ? [root.id] : (await Operation.find({ userId: { $in: users } }).lean()).map(r => String(r._id));
      detections = root.kind === 'detection' ? [root.id] : (await Detection.find({ operationId: { $in: operations } }).lean()).map(r => String(r._id));
      cp.roots[key] = tree = { users, operations, detections }; await save(cp);
    }
    ({ users, operations, detections } = tree);
  }
  const records = {};
  for (const [model, filter] of [[User, { _id: { $in: users } }], [Operation, { _id: { $in: operations } }], ...descendants.map(model => [model, model === Detection ? { $or: [{ operationId: { $in: operations } }, { _id: { $in: detections } }] } : { $or: [{ operationId: { $in: operations } }, ...(model.modelName === 'ScrewLocalizationTelemetry' ? [{ detectionId: { $in: detections } }] : [])] }])]) {
    records[model.collection.name] = (await model.find(filter).select('_id').lean()).map(r => String(r._id));
  }
  const files = (await Promise.all(operations.map(operationFiles))).flat();
  return { remaining: Object.values(records).reduce((n, rows) => n + rows.length, 0) + files.length, records, files };
}
router.use((req, res, next) => {
  if (process.env.API_TEST_ENABLED !== '1') return res.sendStatus(404);
  if (!tokenMatches(req.get('Authorization')?.replace(/^Bearer /, ''))) return res.sendStatus(401);
  next();
});
// Serialize checkpoint transitions, including overlapping retries after timeouts.
let managementTail = Promise.resolve();
const exclusive = handler => async (req, res, next) => {
  const previous = managementTail;
  let release; managementTail = new Promise(resolve => { release = resolve; });
  await previous;
  try { await handler(req, res, next); } catch (error) { next(error); } finally { release(); }
};
router.get('/capabilities', (_req, res) => res.json({ version: 1, runtimeOnlyLedger: true, baselineGuard: true, exclusiveLease: true, exactSettingsRestore: true, quiesceWriters: true, ownedCascadeCleanup: true, verifyBaseline: true }));
let acquiring = false;
router.post('/checkpoints', exclusive(async (req, res) => {
  if (lease || acquiring) return res.status(423).json({ error: 'Checkpoint already active; recover it before creating another' });
  if (req.body.backendInstanceId !== backendInstanceId) return res.status(409).json({ error: 'Backend instance mismatch' });
  acquiring = true;
  const id = randomUUID();
  let aiAttempted = false, aiAcquired = false;
  try {
    saveLease({ id, quiesced: true, originalIds: [] });
    await drain();
    if (await Operation.exists({ endTime: null })) throw new Error('Active operation exists');
    aiAttempted = true;
    const aiState = await ai('testing/lease', { id, action: 'acquire' });
    aiAcquired = true;
    const documents = await snapshot();
    const cp = { id, clientRunId: String(req.body.clientRunId || ''), documents, files: await archive(), camera: await Camera.collection.findOne({ key: 'default' }), backendConfig: { ...getSimulationConfigValue() }, aiConfig: aiState.config, owned: { users: [], operations: [], detections: [] } };
    const pipeline = await import('../mqtt/mqttClient.js');
    if (pipeline.getActiveTelemetryOperation()) throw new Error('Telemetry receiver is not idle');
    cp.pipeline = pipeline.capturePipelineRuntime();
    await save(cp);
    if (res.destroyed) throw new Error('Checkpoint client disconnected before lease handoff');
    saveLease({ id, quiesced: false, originalIds: Object.values(documents).flatMap(rows => Object.keys(rows)), originalFiles: Object.keys(cp.files) });
    res.status(201).json({ id, exclusive: true, baseline: { collections: Object.fromEntries(Object.entries(documents).map(([name, rows]) => [name, Object.keys(rows).length])), files: Object.keys(cp.files).length } });
  } catch (error) {
    let rolledBack = !aiAttempted || (!aiAcquired && Boolean(error.aiStatus));
    if (!rolledBack) {
      try { await ai('testing/lease', { id, action: 'release' }); rolledBack = true; } catch { /* fail closed */ }
    }
    if (rolledBack) saveLease(null);
    else await save({ id, acquisitionFailed: true, error: error.message });
    res.status(409).json({ error: error.message, checkpointId: id, recoveryRequired: !rolledBack });
  } finally { acquiring = false; }
}));
for (const action of ['inspect', 'quiesce', 'cleanup', 'restore', 'verify']) router.post('/checkpoints/:id/' + action, exclusive(async (req, res) => {
  try {
    const cp = await load(req.params.id);
    if (cp.acquisitionFailed) {
      // No business writes were admitted. Retry release after restoring AI connectivity.
      await ai('testing/lease', { id: cp.id, action: 'release' });
      saveLease(null); return res.json({ acquisitionRolledBack: true });
    }
    if (lease?.id !== cp.id) {
      if (!lease && action === 'verify' && cp.verified) return res.json(cp.verification);
      throw new Error('Checkpoint is not active');
    }
    await owned(cp, req.body);
    if (action === 'inspect') return res.json(await inspect(cp, req.body.root));
    if (action === 'quiesce') {
      saveLease({ ...lease, quiesced: true });
      await ai('testing/lease', { id: cp.id, action: 'quiesce' });
      const pipeline = await import('../mqtt/mqttClient.js'); pipeline.setActiveTelemetryOperation(null);
      await drain(); await pipeline.waitForTelemetryWrites();
      cp.quiesced = true; await save(cp); return res.json({ writersIdle: true });
    }
    if (!cp.quiesced) throw new Error('Quiesce checkpoint before cleanup/restore/verify');
    if (action === 'cleanup') {
      for (const id of cp.owned.users) await deleteUser(id);
      for (const id of cp.owned.operations) await deleteOperation(id);
      for (const id of cp.owned.detections) await deleteDetection(id);
      return res.json(await inspect(cp));
    }
    if (action === 'restore') {
      if (cp.camera) await Camera.collection.replaceOne({ key: 'default' }, cp.camera, { upsert: true });
      else await Camera.collection.deleteOne({ key: 'default' });
      setSimulationConfigValue(cp.backendConfig);
      await ai('testing/lease', { id: cp.id, action: 'restore', config: cp.aiConfig });
      const pipeline = await import('../mqtt/mqttClient.js'); pipeline.restorePipelineRuntime(cp.pipeline);
      cp.restored = true; await save(cp); return res.json({ restored: true });
    }
    const now = await snapshot(), files = await archive(), differences = [];
    for (const name of new Set([...Object.keys(cp.documents), ...Object.keys(now)])) for (const id of new Set([...Object.keys(cp.documents[name] || {}), ...Object.keys(now[name] || {})])) {
      if (cp.documents[name]?.[id] !== now[name]?.[id]) differences.push({ collection: name, id, change: !cp.documents[name]?.[id] ? 'added' : !now[name]?.[id] ? 'deleted' : 'modified' });
    }
    const fileDifferences = [...new Set([...Object.keys(files), ...Object.keys(cp.files)])].filter(f => files[f] !== cp.files[f]);
    const remaining = await inspect(cp);
    const aiConfig = await ai('simulation-config', undefined, 'GET');
    const pipeline = await import('../mqtt/mqttClient.js');
    const settingsRestored = digest(await Camera.collection.findOne({ key: 'default' })) === digest(cp.camera) && same(getSimulationConfigValue(), cp.backendConfig) && Object.entries(cp.aiConfig).every(([key, value]) => aiConfig[key] === value) && digest(pipeline.capturePipelineRuntime()) === digest(cp.pipeline);
    const result = { originalDataUnchanged: differences.length === 0 && fileDifferences.length === 0, settingsRestored, writersIdle: pending.size === 0, testDataRemaining: remaining.remaining - remaining.files.length, testFilesRemaining: remaining.files.length, differences, fileDifferences, remaining };
    if (result.originalDataUnchanged && result.settingsRestored && result.writersIdle && !remaining.remaining) {
      await ai('testing/lease', { id: cp.id, action: 'release' });
      cp.verified = true; cp.verification = result; await save(cp); saveLease(null);
    }
    res.json(result);
  } catch (error) { res.status(409).json({ error: error.message }); }
}));
export default router;
