import jwt from 'jsonwebtoken';
import Operation from '../models/Operation.js';
import User from '../models/User.js';
import Pose from '../models/OperatorTelemetry.js';
import Raw from '../models/RawSensorMeasurement.js';
import { deviceAlgorithms } from '../positioning/deviceAlgorithms.js';

const axes = ['x', 'y', 'z'];
const objectId = value => typeof value === 'string' && /^[a-f0-9]{24}$/i.test(value);
const xyz = value => axes.every(axis => Number.isFinite(value?.[axis]) && Math.abs(value[axis]) <= 1e6);
const fail = (status, message) => { throw Object.assign(new Error(message), { httpStatus: status }); };
const bad = message => fail(400, message);
const date = value => {
  if (typeof value !== 'string' || !/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.\d{1,3})?(?:Z|[+-]\d\d:\d\d)$/.test(value)) bad('Use ISO 8601 timestamps with timezone');
  const result = new Date(value);
  if (!Number.isFinite(+result)) bad('Invalid timestamp');
  return result;
};
const bounds = (from, to) => {
  const start = date(from), end = date(to);
  if (start >= end) bad('from must be before to');
  return { $gte: start, $lt: end };
};
const integer = (raw, fallback, min, max) => {
  if (raw === undefined) return fallback;
  if (!['string', 'number'].includes(typeof raw) || !/^\d+$/.test(String(raw))) bad('Invalid integer parameter');
  const n = Number(raw);
  if (!Number.isSafeInteger(n) || n < min || n > max) bad(`Integer must be in [${min}, ${max}]`);
  return n;
};
const algorithm = id => deviceAlgorithms.includes(id) ? id : bad('Unsupported device algorithm');
const sort = { timestamp: 1, _id: 1 };
const MAX_ROWS = 20000;

const verify = (req) => {
  const secret = process.env.JWT_SECRET;
  if (!secret || secret.length < 32) fail(503, 'Configure JWT_SECRET (at least 32 characters) and restart the backend');
  const token = req.get('Authorization')?.match(/^Bearer (\S+)$/i)?.[1];
  let claims;
  try { claims = jwt.verify(token, secret, { algorithms: ['HS256'] }); }
  catch { fail(401, 'Valid login token required'); }
  if (!objectId(claims?.sub)) fail(401, 'Valid login token required');
  return claims.sub;
};

const page = async (model, filter, query) => {
  const limit = integer(query.limit, 200, 1, 500);
  if (query.cursor !== undefined) {
    if (typeof query.cursor !== 'string' || !/^\d+\.[a-f0-9]{24}$/i.test(query.cursor)) bad('Invalid cursor');
    const [ms, id] = query.cursor.split('.');
    const timestamp = new Date(Number(ms));
    if (!Number.isFinite(+timestamp)) bad('Invalid cursor timestamp');
    filter.$or = [{ timestamp: { $gt: timestamp } }, { timestamp, _id: { $gt: id } }];
  }
  const items = await model.find(filter).sort(sort).limit(limit + 1).lean();
  const more = items.length > limit;
  if (more) items.pop();
  const last = items.at(-1);
  return { items, nextCursor: more ? `${+last.timestamp}.${last._id}` : null };
};

function metrics(values) {
  if (!values.length) return null;
  const sorted = [...values].sort((a, b) => a - b);
  return {
    mean: values.reduce((a, b) => a + b, 0) / values.length,
    rmse: Math.sqrt(values.reduce((a, b) => a + b ** 2, 0) / values.length),
    p95: sorted[Math.ceil(.95 * sorted.length) - 1],
    max: sorted.at(-1)
  };
}

export function evaluateRows(rows, algorithms, target, { diagnostic, maxSensorAgeMs, offset, limit, includeSamples }) {
  return algorithms.map(fusionAlgorithm => {
    const excluded = {}, samples = [];
    let eligible = 0;
    for (const row of rows) {
      if (row.fusionAlgorithm !== fusionAlgorithm) continue;
      let reason;
      const p = row.provenance;
      const ages = [p?.lastUwbAt, p?.lastImuAt].map(t => t ? +row.timestamp - +t : Infinity);
      const ranges = row.telemetry?.uwbRanges;
      const validAnchorCount = Array.isArray(ranges) ? new Set(ranges.filter(r =>
        Number.isInteger(r?.stationId) && r.stationId >= 0 && r.stationId < 8 &&
        Number.isFinite(r.distance) && r.distance > 0).map(r => r.stationId)).size : null;
      if (!xyz(row.telemetry?.position)) reason = 'invalid_position';
      else if (row.telemetry?.deviceLocalization?.status && row.telemetry.deviceLocalization.status !== 'ready') reason = 'invalid_solution';
      else if (!diagnostic) {
        if (p?.mode !== 'replay' || !p?.inputClass) reason = 'unknown_provenance';
        else if (p.inputClass !== 'mqtt_only') reason = p.inputClass;
        else if (row.dataSource !== 'mqtt') reason = 'not_mqtt';
        else if (ages.some(age => !Number.isFinite(age) || age < 0 || age > maxSensorAgeMs)) reason = 'stale_or_missing_sensor';
        else if (validAnchorCount < (fusionAlgorithm === 'gwo4d' ? 5 : 4)) reason = 'insufficient_anchors';
      }
      if (reason) { excluded[reason] = (excluded[reason] || 0) + 1; continue; }
      eligible++;
      const positionM = row.telemetry.position;
      const deltaM = Object.fromEntries(axes.map(k => [k, positionM[k] - target[k]]));
      samples.push({
        id: row._id, timestamp: row.timestamp, positionM, groundTruthM: target, deltaM,
        horizontalErrorM: Math.hypot(deltaM.x, deltaM.y),
        error3dM: Math.hypot(deltaM.x, deltaM.y, deltaM.z),
        quaternion: row.telemetry.quaternion, validAnchorCount,
        deviceLocalization: row.telemetry.deviceLocalization, dataSource: row.dataSource,
        provenance: row.provenance ?? null
      });
    }
    return {
      fusionAlgorithm, sampleCount: eligible, excluded,
      horizontalM: metrics(samples.map(s => s.horizontalErrorM)),
      error3dM: metrics(samples.map(s => s.error3dM)),
      axisBiasM: eligible ? Object.fromEntries(axes.map(k => [k, samples.reduce((sum, s) => sum + s.deltaM[k], 0) / eligible])) : null,
      ...(includeSamples ? { samples: samples.slice(offset, offset + limit), nextSampleOffset: offset + limit < eligible ? offset + limit : null } : {})
    };
  });
}

export function mountDeviceAccuracy(router, { operation = Operation, user = User, poses = Pose, raw = Raw } = {}) {
  const scoped = handler => async (req, res, next) => {
    try {
      const userId = verify(req), opId = req.params.opId;
      if (!objectId(opId)) bad('Invalid operation id');
      if (!await user.exists({ _id: userId })) fail(401, 'Account no longer exists');
      if (!await operation.exists({ _id: opId, userId })) fail(404, 'Operation not found or not owned by this account');
      res.set('Cache-Control', 'no-store');
      res.json(await handler(req, opId));
    } catch (error) {
      if (error.httpStatus) return res.status(error.httpStatus).json({ error: error.message });
      next(error);
    }
  };

  router.get('/:opId/device-poses', scoped(async ({ query }, operationId) => {
    const filter = { operationId, timestamp: bounds(query.from, query.to) };
    if (query.algorithm !== undefined) filter.fusionAlgorithm = algorithm(query.algorithm);
    return { operationId, ...await page(poses, filter, query) };
  }));

  router.get('/:opId/raw-sensor-measurements', scoped(async ({ query }, operationId) => {
    const filter = { operationId, timestamp: bounds(query.from, query.to) };
    if (query.source !== undefined) {
      if (!['uwb', 'imu', 'simulation'].includes(query.source)) bad('Unsupported sensor source');
      filter.source = query.source;
    }
    return { operationId, ...await page(raw, filter, query) };
  }));

  router.post('/:opId/device-accuracy/evaluate', scoped(async ({ body }, operationId) => {
    const { from, to, groundTruth, algorithms = deviceAlgorithms, includeSamples = false,
      diagnostic = false, confirmHardwareInput = false } = body ?? {};
    const timestamp = bounds(from, to);
    if (groundTruth?.type !== 'static' || groundTruth.coordinateFrame !== 'workspace_world' ||
        groundTruth.referencePoint !== 'uwb_tag' || !xyz(groundTruth.positionM)) bad('Provide finite static XYZ truth in workspace_world for uwb_tag');
    if (!Array.isArray(algorithms) || !algorithms.length || algorithms.length > deviceAlgorithms.length) bad('Provide a nonempty list of device algorithms');
    const selected = [...new Set(algorithms.map(algorithm))];
    if ([diagnostic, includeSamples, confirmHardwareInput].some(v => typeof v !== 'boolean')) bad('Expected boolean options');
    if (!diagnostic && !confirmHardwareInput) bad('Confirm MQTT used physical sensors or use diagnostic:true');
    const maxSensorAgeMs = integer(body.maxSensorAgeMs, 1000, 1, 10000);
    const offset = integer(body.sampleOffset, 0, 0, MAX_ROWS);
    const limit = integer(body.sampleLimit, 200, 1, 500);
    const rows = await poses.find({ operationId, timestamp, fusionAlgorithm: { $in: selected } })
      .sort(sort).limit(MAX_ROWS + 1).lean();
    if (rows.length > MAX_ROWS) fail(422, 'Too many samples; narrow the time window');
    return { operationId, from: timestamp.$gte, to: timestamp.$lt, groundTruth,
      evaluationMode: diagnostic ? 'diagnostic_unfiltered' : 'mqtt_only_replay',
      hardwareInputConfirmedByCaller: !diagnostic && confirmHardwareInput,
      maxSensorAgeMs: diagnostic ? null : maxSensorAgeMs, p95Method: 'nearest_rank',
      results: evaluateRows(rows, selected, groundTruth.positionM, { diagnostic, maxSensorAgeMs, offset, limit, includeSamples }) };
  }));
}
