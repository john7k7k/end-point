import { parentPort, workerData } from 'node:worker_threads';
import { resetAllFilters, predict, updateUwb, setHeading, getFilterState } from './esEkf.js';
const algorithms = ['ekf', 'complementary', 'weighted_average'];
const samples = workerData;
const rows = [];
let last = -Infinity;
if (samples.length) resetAllFilters(new Date(samples[0].timestamp).getTime());
for (const s of samples) {
  const t = new Date(s.timestamp).getTime(), p = s.payload;
  for (const a of algorithms) {
    if (s.source === 'imu' || s.source === 'simulation') predict(p.acceleration || {}, p.gyroscope || {}, t, a);
    if (s.source === 'uwb' || s.source === 'simulation') updateUwb(p.ranges || [], a);
    if (s.source === 'simulation' && Number.isFinite(p.heading)) setHeading(p.heading, a);
  }
  if (t - last < 200) continue;
  last = t;
  for (const a of algorithms) rows.push({ timestamp: new Date(t), fusionAlgorithm: a,
    dataSource: s.dataSource, telemetry: { ...getFilterState(a), updatedAt: new Date(t).toISOString() } });
}
parentPort.postMessage(rows);
