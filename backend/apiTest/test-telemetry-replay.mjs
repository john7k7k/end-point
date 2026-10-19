import test from 'node:test';
import assert from 'node:assert/strict';
import { Worker } from 'node:worker_threads';
import { getFilterState } from '../src/positioning/esEkf.js';

test('isolated replay computes three paths from identical raw measurements', async () => {
  const before = getFilterState();
  const anchors = [[0,0,0],[20,0,0],[0,12,0],[20,12,0],[0,0,2.5],[20,0,2.5],[0,12,2.5],[20,12,2.5]];
  const samples = Array.from({length: 20}, (_, i) => ({ timestamp: new Date(1700000000000 + i*100),
    source: 'simulation', dataSource: 'simulation', payload: {
      acceleration: {x:0,y:0,z:0}, gyroscope: {x:0,y:0,z:0}, heading: .2,
      ranges: anchors.map((p, stationId) => ({stationId, distance: Math.hypot(p[0]-5-i*.02,p[1]-3,p[2]-1.4)}))
    } }));
  const rows = await new Promise((resolve, reject) => {
    const w = new Worker(new URL('../src/positioning/telemetryReplayWorker.js', import.meta.url), {workerData:samples});
    w.once('message',resolve);w.once('error',reject);
  });
  assert.deepEqual([...new Set(rows.map(r=>r.fusionAlgorithm))].sort(), ['complementary','ekf','weighted_average']);
  assert.equal(rows.length,30);
  assert(rows.every(r=>r.telemetry.uwbRanges.length===8 && r.telemetry.imu && Number.isFinite(r.telemetry.position.x)));
  assert.deepEqual(getFilterState(),before,'offline replay must not reset live state');
});
