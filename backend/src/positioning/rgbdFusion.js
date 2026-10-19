import { hungarian } from './hungarian.js';
import { workspaceScrews } from './screwWorkspace.js';
import { fuseScrewObservations, screwFusionAlgorithms } from './screwFusion.js';

export const finitePoint = p => p && ['x', 'y', 'z'].every(k => Number.isFinite(p[k]));

// This path never reads the latest MQTT pose or substitutes a reference position
// for a measurement. The pose/extrinsics used by AI belong to this exact frame.
export function fuseFrame(frame, previous = null) {
  const state = structuredClone(previous?.fusion?.state || {});
  const observations = frame.result?.observations || (frame.result?.rawAbsolutePosition ? [frame.result] : []);
  const valid = frame.status === 'localized' ? observations.filter(o => finitePoint(o.rawAbsolutePosition)) : [];
  const candidates = workspaceScrews;
  const gate = .8;
  // Dummy columns permit unmatched observations. Gate BEFORE assignment so an
  // invalid edge cannot steal a valid match from another observation.
  const costs = valid.map(o => [
    ...candidates.map(c => {
      const p = o.rawAbsolutePosition;
      const distance = Math.hypot(p.x - c.x, p.y - c.y, p.z - c.z);
      const knownClass = candidates.some(s => s.type === (o.objectClass || o.object));
      return distance <= gate && (!knownClass || (o.objectClass || o.object) === c.type) ? distance : 1e6;
    }), ...valid.map(() => gate + .001)
  ]);
  const matches = hungarian(costs).filter(m => m.column < candidates.length && m.cost <= gate);
  const detections = observations.map(o => ({ ...o, association: 'unmatched' }));
  for (const match of matches) {
    const observation = valid[match.row], screw = candidates[match.column];
    const index = observations.indexOf(observation);
    const depth = observation.cameraPosition?.z || 1.5;
    const uncertainty = { x: Math.min(.12, .012 + depth * .009), y: Math.min(.12, .012 + depth * .009), z: Math.min(.16, .018 + depth * .014) };
    const history = [...(state[screw.id]?.observations || []), {
      frameId: frame.frameId, rawPosition: observation.rawAbsolutePosition, uncertainty
    }].slice(-60);
    const algorithms = Object.fromEntries(screwFusionAlgorithms.map(a => [a, fuseScrewObservations(a, history)]));
    state[screw.id] = { screwId: screw.id, type: screw.type, observations: history, algorithms, frameId: frame.frameId };
    detections[index] = { ...observation, screwId: screw.id, objectClass: screw.type,
      association: 'matched', associationDistance: match.cost, algorithms, observationCount: history.length };
  }
  return { state, detections, referenceScrews: structuredClone(previous?.fusion?.referenceScrews || workspaceScrews), gateMeters: gate, version: 1 };
}

export function publicFrame(doc) {
  if (!doc) return null;
  const frame = { ...doc };
  if (frame.fusion) frame.fusion = { ...frame.fusion, state: Object.fromEntries(Object.entries(frame.fusion.state || {})
    .map(([id, { observations = [], ...value }]) => [id, { ...value, observationCount: observations.length }])) };
  delete frame.rawPacketPath;
  return frame;
}
