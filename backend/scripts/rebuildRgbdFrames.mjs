// Upgrade first-phase RGB-D records only; never regenerate measurements.
import mongoose from 'mongoose';
import RgbdFrame from '../src/models/RgbdFrame.js';
import { fuseFrame } from '../src/positioning/rgbdFusion.js';
const arg = process.argv.indexOf('--operation-id');
const operationId = arg >= 0 && process.argv[arg + 1];
if (!mongoose.isValidObjectId(operationId)) throw new Error('Usage: node backend/scripts/rebuildRgbdFrames.mjs --operation-id <id> [--apply]');
const apply = process.argv.includes('--apply');
await mongoose.connect('mongodb://127.0.0.1:27017/vision_system');
try {
  let previous = null, first = null, changed = 0;
  const cursor = RgbdFrame.find({ operationId }).sort({ sessionId: 1, frameId: 1 }).lean().cursor();
  for await (const frame of cursor) {
    if (previous?.sessionId !== frame.sessionId) { previous = null; first = frame; }
    if (!frame.fusion?.version) {
      const update = { devicePose: frame.devicePose || frame.result?.devicePose || null,
        fusion: fuseFrame(frame, previous), selectedAlgorithm: frame.selectedAlgorithm || 'average',
        videoTimeMs: Number(BigInt(frame.captureTimeNs) - BigInt(first.captureTimeNs)) / 1e6 };
      if (apply) await RgbdFrame.updateOne({ _id: frame._id, 'fusion.version': { $exists: false } }, { $set: update });
      Object.assign(frame, update); changed++;
    }
    previous = frame;
  }
  console.log(`${apply ? 'Upgraded' : 'Would upgrade'} ${changed} RGB-D records. Original packets/observations are unchanged.`);
} finally { await mongoose.disconnect(); }
