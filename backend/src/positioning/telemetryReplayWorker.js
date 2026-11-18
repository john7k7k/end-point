import { parentPort, workerData } from 'node:worker_threads';
import { resetAllFilters, predict, updateUwb, setHeading, getFilterState } from './esEkf.js';
import { deviceAlgorithms as algorithms } from './deviceAlgorithms.js';
const samples = workerData;
const rows = [];
let last = -Infinity;
let lastUwbAt, lastImuAt, hasSimulation = false, hasUnknown = false;
if (samples.length) resetAllFilters(new Date(samples[0].timestamp).getTime());
for (const s of samples) {
  const t = new Date(s.timestamp).getTime(), p = s.payload;
  // Filter state carries earlier inputs forward, not just the last record's source.
  if (s.source === 'simulation' || s.dataSource === 'simulation') hasSimulation = true;
  else if (s.dataSource !== 'mqtt') hasUnknown = true;
  else if (s.source === 'uwb' && Array.isArray(p.ranges) && new Set(p.ranges.filter(r =>
    Number.isInteger(r?.stationId) && r.stationId >= 0 && r.stationId < 8 &&
    Number.isFinite(r.distance) && r.distance > 0).map(r => r.stationId)).size >= 4) lastUwbAt = new Date(t);
  else if (s.source === 'imu' && ['x', 'y', 'z'].every(axis =>
    Number.isFinite(p.acceleration?.[axis]) && Number.isFinite(p.gyroscope?.[axis]))) lastImuAt = new Date(t);
  for (const a of algorithms) {
    if (s.source === 'imu' || s.source === 'simulation') predict(p.acceleration || {}, p.gyroscope || {}, t, a);
    if (s.source === 'uwb' || s.source === 'simulation') updateUwb(p.ranges || [], a);
    if (s.source === 'simulation' && Number.isFinite(p.heading)) setHeading(p.heading, a);
  }
  if (t - last < 200) continue;
  last = t;
  for (const a of algorithms) {
    const telemetry = getFilterState(a);
    if (a === 'gwo4d' && telemetry.deviceLocalization?.status !== 'ready') continue;
    rows.push({ timestamp: new Date(t), fusionAlgorithm: a,
      provenance: { mode: 'replay', lastUwbAt, lastImuAt,
        inputClass: hasSimulation ? 'simulation_in_state' : hasUnknown || !lastUwbAt || !lastImuAt ? 'unknown' : 'mqtt_only' },
      dataSource: s.dataSource, telemetry: { ...telemetry, updatedAt: new Date(t).toISOString() } });
  }
}
parentPort.postMessage(rows);
