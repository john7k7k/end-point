import { timingSafeEqual } from 'node:crypto';
import { existsSync, mkdirSync, readFileSync, writeFileSync, renameSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
export const directory = (process.env.API_TEST_CHECKPOINT_ROOT || fileURLToPath(new URL('../../../runtime/checkpoints/', import.meta.url))) + '/';
mkdirSync(directory, { recursive: true });
const leaseFile = directory + 'lease.json';
export let lease = existsSync(leaseFile) ? JSON.parse(readFileSync(leaseFile, 'utf8')) : null;
export const blockedOperations = new Set();
export const blockedUsers = new Set();
export const pending = new Set();
export function saveLease(value) {
  writeFileSync(leaseFile + '.tmp', JSON.stringify(value), { mode: 0o600 });
  renameSync(leaseFile + '.tmp', leaseFile); lease = value;
}
export function tokenMatches(value) {
  const expected = Buffer.from(process.env.API_TEST_ADMIN_TOKEN || '');
  const actual = Buffer.from(value || '');
  return expected.length >= 24 && expected.length === actual.length && timingSafeEqual(expected, actual);
}
export function internalHeaders() {
  return lease ? { Authorization: `Bearer ${process.env.API_TEST_ADMIN_TOKEN}`, 'X-API-Test-Checkpoint': lease.id } : {};
}
export function permitted(id, token) {
  return !lease ? !id : (!lease.quiesced && id === lease.id && tokenMatches(token));
}
export async function track(task) {
  // Start immediately: MQTT sensor availability/reset ordering must not move
  // to a later microtask merely because the write is now being tracked.
  const promise = (async () => task())(); pending.add(promise);
  try { return await promise; } finally { pending.delete(promise); }
}
export async function drain() {
  let timer;
  try { await Promise.race([Promise.allSettled([...pending]), new Promise((_, reject) => {
    timer = setTimeout(() => reject(new Error('writers did not become idle')), 30000); timer.unref();
  })]); } finally { clearTimeout(timer); }
}
export function trackRouter(router) {
  for (const layer of router.stack) if (layer.route) for (const entry of layer.route.stack) {
    if (entry.method === 'delete') continue;
    const handler = entry.handle;
    entry.handle = (req, res, next) => track(() => handler(req, res, next));
  }
  return router;
}
export function guard(req, res, next) {
  if (req.path.startsWith('/testing/')) return next();
  if (!['GET', 'HEAD', 'OPTIONS', 'DELETE'].includes(req.method)) {
    const ids = (req.path + JSON.stringify(req.body)).match(/[a-f0-9]{24}/gi) || [];
    if (ids.some(id => blockedOperations.has(id) || blockedUsers.has(id))) return res.status(409).json({ error: 'Resource is being deleted' });
  }
  if (!permitted(req.get('X-API-Test-Checkpoint'), req.get('Authorization')?.replace(/^Bearer /, ''))) {
    return res.status(423).json({ error: 'Exclusive maintenance checkpoint is active' });
  }
  // Original business IDs may be queried, but never mutated by a test.
  if (lease && !['GET', 'HEAD', 'OPTIONS'].includes(req.method)) {
    const ids = (req.path + JSON.stringify(req.body)).match(/[a-f0-9]{24}/gi) || [];
    if (ids.some(id => lease.originalIds.includes(id.toLowerCase()))) return res.status(409).json({ error: 'Baseline resource is protected' });
  }
  const completion = new Promise(resolve => { res.once('finish', resolve); res.once('close', resolve); });
  // DELETE must not wait for its own response during a writer drain.
  if (req.method !== 'DELETE') { pending.add(completion); completion.finally(() => pending.delete(completion)); }
  next();
}
