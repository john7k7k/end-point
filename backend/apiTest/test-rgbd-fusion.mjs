import test from 'node:test';
import assert from 'node:assert/strict';
import { fuseFrame, publicFrame } from '../src/positioning/rgbdFusion.js';

const observation = (x = 1.25, y = 1.2) => ({ object: 'M4 hex screw', rawAbsolutePosition: { x, y, z: 1.1 }, cameraPosition: { x: 0, y: 0, z: 1.5 } });
const frame = observations => ({ frameId: 0, status: 'localized', result: { observations } });
test('same-frame association feeds all four algorithms without replacing measured position', () => {
  const f = frame([observation()]); const fusion = fuseFrame(f);
  assert.equal(fusion.detections[0].screwId, 'A-1');
  assert.equal(fusion.state['A-1'].algorithms.average.position.x, 1.25);
  assert.deepEqual(Object.keys(fusion.state['A-1'].algorithms), ['average', 'ekf', 'es_ekf', 'rmv_fgo']);
  const next = fuseFrame({ ...frame([observation(1.35)]), frameId: 1 }, { fusion });
  assert.equal(next.state['A-1'].observations.length, 2);
  assert.equal(next.state['A-1'].algorithms.average.position.x, 1.3);
  assert.equal(fusion.state['A-1'].observations.length, 1, 'previous immutable');
});
test('gates before assignment, one-to-one, class mismatch and distant observation rejected', () => {
  const result = fuseFrame(frame([observation(1.25), observation(1.3), observation(2.05), observation(10)]));
  const matched = result.detections.filter(o => o.association === 'matched');
  assert.equal(matched.length, 2);
  assert.equal(new Set(matched.map(o => o.screwId)).size, 2);
  assert.equal(fuseFrame(frame([{ ...observation(), object: 'M6 socket screw' }])).detections[0].association, 'unmatched');
});
test('no detection/invalid sync retains map but never creates a new measurement', () => {
  const fusion = fuseFrame(frame([observation()]));
  const next = fuseFrame({ frameId: 1, status: 'no_detection', devicePose: { position: { x: 1, y: 2, z: 3 } } }, { fusion });
  assert.deepEqual(next.state, fusion.state);
  assert.deepEqual(next.detections, []);
  assert.deepEqual(fuseFrame({ ...frame([observation()]), status: 'pair_time_mismatch' }).state, {});
  assert.equal(publicFrame({ fusion }).fusion.state['A-1'].observations, undefined);
});
