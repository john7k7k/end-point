import { Router } from 'express';
import { blockedOperations } from '../maintenance/lease.js';
import mongoose from 'mongoose';
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import RgbdFrame from '../models/RgbdFrame.js';
import Operation from '../models/Operation.js';
import OperatorTelemetry from '../models/OperatorTelemetry.js';
import { fuseFrame, publicFrame, finitePoint } from '../positioning/rgbdFusion.js';
import { getSimulationConfigValue } from '../controllers/simulationController.js';
import { deviceAlgorithms as algorithms } from '../positioning/deviceAlgorithms.js';

const router = Router();
const root = process.env.RGBD_ARCHIVE_ROOT || fileURLToPath(new URL('../../../AI/video/rgbd/', import.meta.url));
const queues = new Map();
export async function drainRgbd(id) { await Promise.allSettled([...queues].filter(([key]) => key.startsWith(id + '/')).map(([, queue]) => queue.tail)); }
const validSession = s => typeof s === 'string' && /^[0-9a-f-]{36}$/i.test(s);
const validId = s => mongoose.isValidObjectId(s);
const ns = s => typeof s === 'string' && /^\d{1,20}$/.test(s);
const packetPath = f => path.join(root, String(f.operationId), f.sessionId, `${String(f.frameId).padStart(12, '0')}.rgbd`);

router.post('/frames', async (req, res) => {
  const data = req.body;
  if (!validId(data.operationId) || !validSession(data.sessionId) || !Number.isSafeInteger(data.frameId) || data.frameId < 0 ||
      !['captureTimeNs', 'receivedTimeNs', 'processedTimeNs'].every(k => ns(data[k])) ||
      !['localized', 'no_detection', 'invalid_depth', 'pose_unavailable', 'calibration_mismatch', 'pair_time_mismatch'].includes(data.status)) {
    return res.status(400).json({ error: 'invalid RGB-D frame metadata' });
  }
  const pose = data.devicePose || data.result?.devicePose;
  const observations = data.result?.observations;
  if ((pose && (!finitePoint(pose.position) || !['w', 'x', 'y', 'z'].every(k => Number.isFinite(pose.quaternion?.[k])))) ||
      (observations && (!Array.isArray(observations) || observations.length > 100 || observations.some(o =>
        !o || (o.rawAbsolutePosition && !finitePoint(o.rawAbsolutePosition)) || (o.cameraPosition && !finitePoint(o.cameraPosition)))))) {
    return res.status(400).json({ error: 'invalid pose or observations' });
  }
  const queueKey = `${data.operationId}/${data.sessionId}`;
  const queue = queues.get(queueKey) || { tail: Promise.resolve(), count: 0 };
  if (queue.count >= 2) return res.status(429).json({ error: 'frame queue full; retry same frame' });
  queues.set(queueKey, queue); queue.count++;
  const task = queue.tail.then(async () => {
    if (blockedOperations.has(String(data.operationId))) return res.status(409).json({ error: 'Operation is being deleted' });
    const key = { operationId: data.operationId, sessionId: data.sessionId, frameId: data.frameId };
    const existing = await RgbdFrame.findOne(key).lean();
    if (existing) return res.status(201).json({ id: existing._id, frameId: existing.frameId, status: existing.status });
    const operation = await Operation.findById(data.operationId).lean();
    if (!operation) return res.status(404).json({ error: 'operation not found' });
    if (operation.endTime) {
      // Recovery is restricted to a local journal written before operation end.
      let journal;
      if (data.recovery === true) {
        try { journal = JSON.parse(await readFile(packetPath(key).replace(/\.rgbd$/, '.json'), 'utf8')); } catch { /* reject */ }
      }
      if (!journal || journal.captureTimeNs !== data.captureTimeNs ||
          BigInt(journal.receivedTimeNs) >= BigInt(operation.endTime.getTime() + 1) * 1000000n) {
        return res.status(409).json({ error: 'operation has ended' });
      }
    }
    const previous = await RgbdFrame.findOne({ operationId: data.operationId, sessionId: data.sessionId }).sort({ frameId: -1 }).lean();
    if (previous && (data.frameId <= previous.frameId || BigInt(data.captureTimeNs) <= BigInt(previous.captureTimeNs))) {
      return res.status(409).json({ error: 'out-of-order frame; replay pending journal in order' });
    }
    const first = previous && await RgbdFrame.findOne({ operationId: data.operationId, sessionId: data.sessionId }).sort({ frameId: 1 }).lean();
    const row = { ...key, captureTimeNs: data.captureTimeNs, receivedTimeNs: data.receivedTimeNs,
      processedTimeNs: data.processedTimeNs, status: data.status, missingFrames: data.missingFrames,
      metadata: data.metadata, result: data.result, devicePose: data.devicePose || data.result?.devicePose || null,
      rawPacketPath: data.rawPacketPath,
      selectedAlgorithm: data.selectedAlgorithm || getSimulationConfigValue().screwFusionAlgorithm,
      videoTimeMs: Number(BigInt(data.captureTimeNs) - BigInt(first?.captureTimeNs || data.captureTimeNs)) / 1e6 };
    row.fusion = fuseFrame(row, previous);
    // One atomic canonical document: pose, association, all screw algorithms.
    const frame = await RgbdFrame.create(row);
    res.status(201).json({ id: frame._id, frameId: frame.frameId, status: frame.status });
  });
  queue.tail = task.catch(() => {});
  try { await task; } catch (error) { res.status(500).json({ error: error.message }); }
  finally { if (--queue.count === 0) queues.delete(queueKey); }
});

router.get('/sessions/:operationId', async (req, res) => {
  if (!validId(req.params.operationId)) return res.status(400).json({ error: 'invalid operationId' });
  const match = { operationId: new mongoose.Types.ObjectId(req.params.operationId) };
  // Metadata-only API probes are valid records, but cannot drive an image viewer.
  // Keep the unfiltered API for diagnostics and backward compatibility.
  if (req.query.mediaOnly === '1') match.rawPacketPath = { $type: 'string', $ne: '' };
  res.json(await RgbdFrame.aggregate([
    { $match: match },
    { $group: { _id: '$sessionId', count: { $sum: 1 }, lastFrameId: { $max: '$frameId' }, durationMs: { $max: '$videoTimeMs' }, updatedAt: { $max: '$updatedAt' } } },
    { $sort: { updatedAt: -1 } }
  ]));
});

router.get('/frames/:operationId', async (req, res) => {
  if (!validId(req.params.operationId)) return res.status(400).json({ error: 'invalid operationId' });
  const filter = { operationId: req.params.operationId };
  if (req.query.sessionId) filter.sessionId = String(req.query.sessionId);
  if (req.query.after !== undefined) {
    const after = Number(req.query.after);
    if (!Number.isSafeInteger(after)) return res.status(400).json({ error: 'invalid after' });
    filter.frameId = { $gt: after };
  }
  const limit = Math.max(1, Math.min(500, Number(req.query.limit) || 100));
  const query = RgbdFrame.find(filter).sort({ frameId: 1 }).limit(limit);
  if (req.query.index === '1') query.select('frameId sessionId videoTimeMs captureTimeNs status');
  res.json((await query.lean()).map(publicFrame));
});

router.get('/snapshot/:operationId/:sessionId/:frameId', async (req, res) => {
  const { operationId, sessionId, frameId } = req.params;
  if (!validId(operationId) || !validSession(sessionId) || (frameId !== 'latest' && !/^\d+$/.test(frameId))) return res.sendStatus(400);
  const filter = { operationId, sessionId };
  if (frameId !== 'latest') filter.frameId = Number(frameId);
  const frame = await RgbdFrame.findOne(filter).sort({ frameId: -1 }).lean();
  if (!frame) return res.sendStatus(404);
  const trail = await RgbdFrame.find({ operationId, sessionId, frameId: { $lte: frame.frameId }, devicePose: { $ne: null } })
    .sort({ frameId: -1 }).limit(1000).select('frameId devicePose').lean();
  const operation = await Operation.findById(operationId).select('endTime').lean();
  const timestamp = new Date(Number(BigInt(frame.captureTimeNs) / 1000000n));
  const deviceAlgorithms = {};
  if (operation?.endTime) {
    await Promise.all(algorithms.map(async algorithm => {
      const rows = await OperatorTelemetry.find({ operationId, fusionAlgorithm: algorithm, timestamp: { $lte: timestamp } })
        .sort({ timestamp: -1 }).limit(1000).lean();
      // A missing/stale pose must not be presented as matching this image.
      const newest = rows[0];
      deviceAlgorithms[algorithm] = { trail: rows.reverse().map(r => r.telemetry.position),
        telemetry: newest && timestamp - new Date(newest.timestamp) <= 250 ? newest.telemetry : null };
    }));
  } else if (frame.devicePose?.fusionAlgorithm) {
    const algorithm = frame.devicePose.fusionAlgorithm;
    deviceAlgorithms[algorithm] = { telemetry: frame.devicePose,
      trail: [...trail].reverse().filter(r => r.devicePose?.fusionAlgorithm === algorithm).map(r => r.devicePose.position) };
  }
  res.json({ frame: publicFrame(frame), trail: trail.reverse().map(f => f.devicePose?.position).filter(Boolean), deviceAlgorithms });
});

router.get('/media/:operationId/:sessionId/:frameId/:kind', async (req, res) => {
  const { operationId, sessionId, frameId, kind } = req.params;
  if (!validId(operationId) || !validSession(sessionId) || !/^\d{1,16}$/.test(frameId) || !['color', 'depth'].includes(kind)) return res.sendStatus(400);
  try {
    const f = { operationId, sessionId, frameId: Number(frameId) };
    if (!await RgbdFrame.exists(f)) return res.sendStatus(404);
    let bytes;
    if (kind === 'depth') bytes = await readFile(packetPath(f).replace(/\.rgbd$/, '.depth.jpg'));
    else {
      const packet = await readFile(packetPath(f));
      const size = packet.readUInt32BE(0), h = JSON.parse(packet.subarray(4, 4 + size));
      bytes = packet.subarray(4 + size, 4 + size + h.colorBytes);
    }
    res.type('jpg').set('Cache-Control', 'private, max-age=31536000, immutable').send(bytes);
  } catch { res.status(404).json({ error: 'frame image unavailable' }); }
});
export default router;
