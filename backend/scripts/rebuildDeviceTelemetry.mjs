// Dry-run by default. Does not subscribe to MQTT or reset live filters.
import mongoose from 'mongoose';
import { Worker } from 'node:worker_threads';
import Raw from '../src/models/RawSensorMeasurement.js';
import Telemetry from '../src/models/OperatorTelemetry.js';
import Operation from '../src/models/Operation.js';
const args=process.argv.slice(2), id=args[args.indexOf('--operation-id')+1];
if(!args.includes('--operation-id') || !mongoose.isValidObjectId(id)) {
  console.error('Usage: node backend/scripts/rebuildDeviceTelemetry.mjs --operation-id ID [--apply]');
  process.exit(1);
}
try {
  await mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/vision_system');
  const op=await Operation.findById(id).lean();
  if(!op?.endTime) throw new Error('Only an existing ended operation can be rebuilt');
  const samples=await Raw.find({operationId:id}).sort({timestamp:1}).lean();
  if(!samples.length) throw new Error('No raw measurements; cannot reconstruct device algorithms');
  const rows=await new Promise((resolve,reject)=>{
    const w=new Worker(new URL('../src/positioning/telemetryReplayWorker.js',import.meta.url),
      {workerData:samples.map(({timestamp,source,dataSource,payload})=>({timestamp,source,dataSource,payload}))});
    w.once('message',resolve);w.once('error',reject);
    w.once('exit',code=>{if(code)reject(new Error(`Replay worker exited ${code}`));});
  });
  console.log(`${samples.length} raw samples -> ${rows.length} telemetry records (three algorithms)`);
  if(args.includes('--apply')) {
    await Telemetry.deleteMany({operationId:id});
    await Telemetry.insertMany(rows.map(r=>({...r,operationId:id})));
    console.log('Rebuilt stored telemetry. Images and raw measurements unchanged.');
  } else console.log('Dry run only. Add --apply to replace this operation telemetry.');
} catch(error) { console.error(error.message);process.exitCode=1; }
finally { await mongoose.disconnect(); }
