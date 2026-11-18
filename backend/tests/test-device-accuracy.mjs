import { test } from 'node:test';
import assert from 'node:assert/strict';
import { once } from 'node:events';
import { Worker } from 'node:worker_threads';
import express from 'express';
import jwt from 'jsonwebtoken';
import { evaluateRows, mountDeviceAccuracy } from '../src/routes/deviceAccuracy.js';

const timestamp = new Date('2026-11-17T06:30:15Z');
const target = { x: 0, y: 0, z: 0 };
const rangeRows = Array.from({ length: 5 }, (_, stationId) => ({ stationId, distance: 5 }));
const first = {
  _id: '000000000000000000000001', timestamp, fusionAlgorithm: 'gwo4d', dataSource: 'mqtt',
  provenance: { mode: 'replay', inputClass: 'mqtt_only', lastUwbAt: timestamp, lastImuAt: timestamp },
  telemetry: { position: { x: 3, y: 4, z: 12 }, uwbRanges: rangeRows }
};
const opts = { diagnostic: false, maxSensorAgeMs: 1000, offset: 0, limit: 1, includeSamples: true };
const rows = [
  first,
  { ...first, telemetry: { ...first.telemetry, position: target } },
  { ...first, provenance: { ...first.provenance, inputClass: 'simulation_in_state' } },
  { ...first, provenance: undefined },
  { ...first, provenance: { ...first.provenance, lastImuAt: new Date(+timestamp - 1001) } }
];

test('strict accuracy filters provenance and freshness; paging does not alter the summary', () => {
  const [r] = evaluateRows(rows, ['gwo4d'], target, opts);
  assert.equal(r.sampleCount, 2);
  assert.deepEqual(r.excluded, { simulation_in_state: 1, unknown_provenance: 1, stale_or_missing_sensor: 1 });
  assert.deepEqual(r.axisBiasM, { x: 1.5, y: 2, z: 6 });
  assert.deepEqual(r.error3dM, { mean: 6.5, rmse: Math.sqrt(169 / 2), p95: 13, max: 13 });
  assert.equal(r.samples[0].horizontalErrorM, 5);
  assert.equal(r.nextSampleOffset, 1);
  const [next] = evaluateRows(rows, ['gwo4d'], target, { ...opts, offset: 1 });
  assert.deepEqual(next.error3dM, r.error3dM);
  assert.equal(next.nextSampleOffset, null);
  assert.equal(evaluateRows(rows, ['ekf'], target, opts)[0].error3dM, null);
  assert.equal(evaluateRows(rows, ['gwo4d'], target, { ...opts, diagnostic: true })[0].sampleCount, 5);
});

test('replay retains simulation provenance across later MQTT records', async () => {
  const zeros = { x: 0, y: 0, z: 0 };
  const samples = [
    { source: 'uwb', dataSource: 'mqtt', payload: { ranges: rangeRows } },
    { source: 'imu', dataSource: 'mqtt', payload: { acceleration: zeros, gyroscope: zeros } },
    { source: 'simulation', dataSource: 'simulation', payload: { ranges: rangeRows, acceleration: zeros, gyroscope: zeros } },
    { source: 'uwb', dataSource: 'mqtt', payload: { ranges: rangeRows } }
  ].map((s, i) => ({ ...s, timestamp: new Date(+timestamp + i * 250) }));
  const worker = new Worker(new URL('../src/positioning/telemetryReplayWorker.js', import.meta.url), { workerData: samples });
  const [result] = await once(worker, 'message');
  const ekf = result.filter(r => r.fusionAlgorithm === 'ekf');
  assert.deepEqual(ekf.map(r => r.provenance.inputClass), ['unknown', 'mqtt_only', 'simulation_in_state', 'simulation_in_state']);
});

test('HTTP endpoints enforce operation ownership, validate inputs and expose all three queries', async t => {
  const secret = 'test-only-secret-for-device-accuracy-0123456789';
  const prior = process.env.JWT_SECRET;
  process.env.JWT_SECRET = secret;
  t.after(() => { if (prior === undefined) delete process.env.JWT_SECRET; else process.env.JWT_SECRET = prior; });
  const id = 'abcdef0123456789abcdef01', owner = 'abcdef0123456789abcdef02';
  const auth = { Authorization: 'Bearer ' + jwt.sign({ sub: owner }, secret) };
  const filters = [];
  const mock = items => ({ find(filter) {
    filters.push(filter);
    return { sort: () => ({ limit: n => ({ lean: async () => items.slice(0, n) }) }) };
  } });
  const app = express();
  app.use(express.json());
  const router = express.Router();
  mountDeviceAccuracy(router, {
    operation: { exists: async q => q._id === id && q.userId === owner },
    user: { exists: async () => true },
    poses: mock([first, { ...first, _id: '000000000000000000000002' }]),
    raw: mock([{ source: 'uwb', timestamp, payload: { ranges: rangeRows } }])
  });
  app.use('/api/operations', router);
  const server = app.listen(0, '127.0.0.1');
  await once(server, 'listening');
  t.after(() => server.close());
  const base = `http://127.0.0.1:${server.address().port}/api/operations/`;
  const from = '2026-11-17T06:30:00Z', to = '2026-11-17T06:31:00Z';
  const url = base + id + '/device-poses?from=' + from + '&to=' + to + '&limit=1';
  assert.equal((await fetch(url)).status, 401);
  assert.equal((await fetch(url.replace(id, owner), { headers: auth })).status, 404);
  assert.equal((await fetch(url + '&algorithm=bogus', { headers: auth })).status, 400);
  const posePage = await (await fetch(url, { headers: auth })).json();
  assert.equal(posePage.items.length, 1);
  assert.ok(posePage.nextCursor);
  assert.equal((await fetch(url + '&cursor=' + posePage.nextCursor, { headers: auth })).status, 200);
  assert.equal(filters.at(-1).$or[1]._id.$gt, first._id);
  const rawPage = await (await fetch(base + id + '/raw-sensor-measurements?source=uwb&from=' + from + '&to=' + to, { headers: auth })).json();
  assert.equal(rawPage.items[0].source, 'uwb');
  const evaluate = body => fetch(base + id + '/device-accuracy/evaluate', {
    method: 'POST', headers: { ...auth, 'Content-Type': 'application/json' }, body: JSON.stringify(body)
  });
  const body = { from, to, groundTruth: { type: 'static', coordinateFrame: 'workspace_world', referencePoint: 'uwb_tag', positionM: target }, algorithms: ['gwo4d'] };
  assert.equal((await evaluate(body)).status, 400);
  const response = await evaluate({ ...body, confirmHardwareInput: true });
  assert.equal(response.status, 200);
  assert.equal((await response.json()).results[0].error3dM.p95, 13);
});
