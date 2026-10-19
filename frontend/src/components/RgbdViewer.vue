<script setup>
import { ref, computed, watch, onMounted, onUnmounted, nextTick } from 'vue';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import api from '../api';

const props = defineProps({ operationId: String, mode: String, view: String, sessions: Array, showDetections: Boolean });
const session = ref(''), snapshot = ref(null), index = ref([]), paused = ref(false), error = ref('');
const algorithm = ref('average'), canvas = ref(null), sceneHost = ref(null), timeMs = ref(0);
const labels = { average: '平均法', ekf: 'EKF', es_ekf: 'ES-EKF', rmv_fgo: 'RMV-FGO' };
const frame = computed(() => snapshot.value?.frame);
const detections = computed(() => frame.value?.fusion?.detections || []);
const duration = computed(() => index.value.at(-1)?.videoTimeMs || 0);
const pose = computed(() => frame.value?.devicePose);
const fmt = p => p ? ['x', 'y', 'z'].map(k => Number(p[k]).toFixed(3)).join(', ') : '—';
const qfmt = q => q ? ['w', 'x', 'y', 'z'].map(k => Number(q[k]).toFixed(4)).join(', ') : '—';
const displayedScrews = computed(() => (frame.value?.fusion?.referenceScrews || []).map(s => ({
  ...s, position: frame.value?.fusion?.state?.[s.id]?.algorithms?.[algorithm.value]?.position || s,
  localized: Boolean(frame.value?.fusion?.state?.[s.id])
})));
const nearby = computed(() => {
  const p = pose.value?.position; if (!p) return '';
  const close = displayedScrews.value.map(s => ({ ...s, distance: Math.hypot(p.x-s.position.x, p.y-s.position.y, p.z-s.position.z) }))
    .filter(s => s.distance <= 3).sort((a, b) => a.distance-b.distance)[0];
  return close ? `附近有 ${close.type}（${close.id}），距離 ${close.distance.toFixed(2)} m。` : '';
});
let timer, busy = false, generation = 0, alive = true, lastTick = 0, playhead = 0;
let scene, camera, renderer, controls, device, trail, screws, resize;
const point = p => new THREE.Vector3(p.x, p.z, p.y);

async function fetchIndex() {
  const op = props.operationId, sid = session.value, epoch = generation;
  const rows = [];
  let after = -1;
  while (alive && epoch === generation) {
    const { data } = await api.get(`/rgbd/frames/${op}`, { params: { sessionId: sid, after, index: 1, limit: 500 } });
    rows.push(...data);
    if (data.length < 500) break;
    after = data.at(-1).frameId;
  }
  if (epoch === generation) index.value = rows;
}

async function loadFrame(id, force = false) {
  const epoch = generation, op = props.operationId, sid = session.value, view = props.view;
  const { data } = await api.get(`/rgbd/snapshot/${op}/${sid}/${id}`);
  if (!force && data.frame.frameId === frame.value?.frameId && data.frame.sessionId === frame.value?.sessionId) return;
  // Decode before commit: no displayed bbox/pose may get ahead of the image.
  const url = `/rgbd/media/${op}/${sid}/${data.frame.frameId}/${view}`;
  const imageData = await api.get(url, { responseType: 'blob' });
  const bitmap = await createImageBitmap(imageData.data);
  try {
    if (!alive || epoch !== generation || view !== props.view) return;
    const element = canvas.value;
    if (!element) return;
    element.width = bitmap.width; element.height = bitmap.height;
    element.getContext('2d').drawImage(bitmap, 0, 0);
    snapshot.value = data;
    timeMs.value = data.frame.videoTimeMs || 0;
    if (props.mode === 'live') algorithm.value = data.frame.selectedAlgorithm || algorithm.value;
    error.value = '';
    await nextTick(); initScene(); updateScene();
  } finally { bitmap.close(); }
}

async function tick() {
  if (busy || !session.value || paused.value) return;
  busy = true;
  try {
    if (props.mode === 'live') await loadFrame('latest');
    else if (index.value.length) {
      const now = performance.now();
      playhead = Math.min(duration.value, playhead + (lastTick ? now - lastTick : 0)); lastTick = now;
      const target = [...index.value].reverse().find(f => f.videoTimeMs <= playhead) || index.value[0];
      await loadFrame(target.frameId);
      if (playhead >= duration.value) paused.value = true;
    }
  } catch (err) { error.value = err.response?.data?.error || '同幀影像或資料讀取失敗，請檢查後端與封包檔案。'; }
  finally { busy = false; }
}

async function reset() {
  generation++; snapshot.value = null; index.value = []; timeMs.value = 0; playhead = 0; lastTick = 0;
  paused.value = props.mode === 'history';
  if (canvas.value) canvas.value.getContext('2d').clearRect(0, 0, canvas.value.width, canvas.value.height);
  updateScene();
  if (!session.value) return;
  try {
    if (props.mode === 'history') {
      await fetchIndex();
      if (index.value.length) await loadFrame(index.value[0].frameId, true);
    } else await loadFrame('latest', true);
  } catch (err) { error.value = err.response?.data?.error || '無法讀取同幀紀錄。'; }
}
async function seek(event) {
  generation++; paused.value = true; playhead = Number(event.target.value); lastTick = 0;
  const target = [...index.value].reverse().find(f => f.videoTimeMs <= playhead) || index.value[0];
  try { if (target) await loadFrame(target.frameId, true); } catch { error.value = '無法讀取指定幀。'; }
}
function toggle() {
  generation++; paused.value = !paused.value; lastTick = 0;
  if (!paused.value && props.mode === 'history' && playhead >= duration.value) playhead = 0;
  if (!paused.value) tick();
}
async function selectAlgorithm() {
  updateScene();
  if (props.mode !== 'live') return;
  try { await api.post('/simulation/config', { screwFusionAlgorithm: algorithm.value }); }
  catch (err) { error.value = err.response?.data?.error || '演算法設定失敗。'; }
}
function boxStyle(d) {
  const b = d.bbox, m = frame.value.metadata;
  return { left: `${100 * b.x / m.width}%`, top: `${100 * b.y / m.height}%`, width: `${100 * b.width / m.width}%`, height: `${100 * b.height / m.height}%` };
}

function initScene() {
  if (renderer || !sceneHost.value) return;
  scene = new THREE.Scene(); scene.background = new THREE.Color(0xffffff);
  camera = new THREE.PerspectiveCamera(48, 1, .1, 100); camera.position.set(24, 19, 23);
  renderer = new THREE.WebGLRenderer({ antialias: true }); renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
  sceneHost.value.appendChild(renderer.domElement);
  controls = new OrbitControls(camera, renderer.domElement); controls.target.set(10, 0, 6); controls.update();
  scene.add(new THREE.HemisphereLight(0xffffff, 0x888888, 3));
  const grid = new THREE.GridHelper(20, 20, 0x64748b, 0xdce3ed); grid.scale.z = .6; grid.position.set(10, 0, 6); scene.add(grid);
  for (const x of [0, 20]) for (const y of [0, 12]) for (const z of [0, 2.5]) {
    const anchor = new THREE.Mesh(new THREE.BoxGeometry(.25, .25, .25), new THREE.MeshBasicMaterial({ color: 0x2563eb }));
    anchor.position.copy(point({ x, y, z })); anchor.userData.label = `基站 (${x}, ${y}, ${z}) m`; scene.add(anchor);
  }
  device = new THREE.Group();
  device.add(new THREE.Mesh(new THREE.SphereGeometry(.13), new THREE.MeshBasicMaterial({ color: 0x10b981 })));
  const beam = new THREE.Mesh(new THREE.ConeGeometry(.5, 1.5, 24, 1, true), new THREE.MeshBasicMaterial({ color: 0x10b981, transparent: true, opacity: .2, side: THREE.DoubleSide }));
  // ConeGeometry tip is +Y. Rotate so tip is at local origin and base +Z.
  beam.rotation.x = -Math.PI / 2; beam.position.z = .75; device.add(beam); scene.add(device);
  trail = new THREE.Line(new THREE.BufferGeometry(), new THREE.LineBasicMaterial({ color: 0xdc2626 })); scene.add(trail);
  screws = new THREE.Group(); scene.add(screws);
  resize = new ResizeObserver(() => {
    const width = sceneHost.value.clientWidth;
    renderer.setSize(width, 380); camera.aspect = width / 380; camera.updateProjectionMatrix();
  }); resize.observe(sceneHost.value);
  const raycaster = new THREE.Raycaster();
  renderer.domElement.addEventListener('pointermove', event => {
    const bounds = renderer.domElement.getBoundingClientRect();
    raycaster.setFromCamera(new THREE.Vector2((event.clientX - bounds.left) / bounds.width * 2 - 1, -(event.clientY - bounds.top) / bounds.height * 2 + 1), camera);
    const hit = raycaster.intersectObjects(scene.children, true).find(h => h.object.userData.label);
    renderer.domElement.title = hit?.object.userData.label || '';
  });
  renderer.setAnimationLoop(() => { controls.update(); renderer.render(scene, camera); });
}
function updateScene() {
  if (!renderer) return;
  device.visible = Boolean(pose.value);
  if (pose.value) {
    device.position.copy(point(pose.value.position));
    const q = pose.value.quaternion;
    const body = new THREE.Matrix4().makeRotationFromQuaternion(new THREE.Quaternion(q.x, q.y, q.z, q.w));
    const calibration = frame.value.result?.calibration;
    const r = calibration?.rotationMatrix || [[1, 0, 0], [0, 1, 0], [0, 0, 1]];
    const extrinsic = new THREE.Matrix4().set(r[0][0], r[0][1], r[0][2], 0, r[1][0], r[1][1], r[1][2], 0, r[2][0], r[2][1], r[2][2], 0, 0, 0, 0, 1);
    const forward = new THREE.Vector3(0, 0, 1).applyMatrix4(extrinsic).applyMatrix4(body);
    const up = new THREE.Vector3(0, -1, 0).applyMatrix4(extrinsic).applyMatrix4(body);
    device.up.copy(point(up)); device.lookAt(device.position.clone().add(point(forward)));
  }
  trail.geometry.dispose(); trail.geometry = new THREE.BufferGeometry().setFromPoints((snapshot.value?.trail || []).map(point));
  for (const child of [...screws.children]) { child.geometry.dispose(); child.material.dispose(); screws.remove(child); }
  for (const s of displayedScrews.value) {
    const p = s.position;
    const mesh = new THREE.Mesh(new THREE.SphereGeometry(.11), new THREE.MeshBasicMaterial({ color: s.localized ? 0xf59e0b : s.type.includes('M4') ? 0x2563eb : 0x9333ea }));
    mesh.position.copy(point(p)); mesh.userData.label = `${s.id}: ${fmt(p)} m`; screws.add(mesh);
  }
}
watch(() => props.sessions, sessions => {
  if (!sessions?.some(s => s._id === session.value)) session.value = sessions?.[0]?._id || '';
}, { immediate: true });
watch([session, () => props.operationId, () => props.mode], reset);
watch(() => props.view, async () => {
  generation++;
  try { if (frame.value) await loadFrame(frame.value.frameId, true); } catch { error.value = '無法切換影像。'; }
});
onMounted(() => { reset(); timer = setInterval(tick, 100); });
onUnmounted(() => {
  alive = false; generation++; clearInterval(timer); resize?.disconnect(); controls?.dispose();
  renderer?.setAnimationLoop(null);
  scene?.traverse(o => { o.geometry?.dispose(); if (o.material) o.material.dispose(); }); renderer?.dispose();
});
</script>

<template>
  <section class="rgbd-viewer">
    <label v-if="sessions.length > 1">同幀紀錄 <select v-model="session"><option v-for="s in sessions" :key="s._id" :value="s._id">{{ s._id }}（{{ s.count }} 幀）</option></select></label>
    <div class="rgbd-grid">
      <div>
        <div class="rgbd-image">
          <canvas ref="canvas" />
          <div v-if="showDetections && frame" class="rgbd-boxes">
            <div v-for="(d, i) in detections.filter(d => d.bbox)" :key="i" class="rgbd-box" :style="boxStyle(d)"><span>{{ d.screwId || '未關聯螺絲' }}</span></div>
          </div>
        </div>
        <div class="rgbd-controls"><button type="button" :title="paused ? '播放' : '暫停'" @click="toggle">{{ paused ? '▶' : '⏸' }}</button>
          <input v-if="mode === 'history'" type="range" :value="timeMs" min="0" :max="duration" step="1" @input="seek" />
          <span>{{ (timeMs / 1000).toFixed(2) }} s · Frame {{ frame?.frameId ?? '—' }}</span>
        </div>
        <p class="rgbd-notice">{{ nearby || '附近目前沒有螺絲。' }}</p>
        <div ref="sceneHost" class="rgbd-scene" />
        <small>設備軌跡（紅）／設備與攝影機方向（綠）／螺絲融合位置（金）</small>
      </div>
      <aside>
        <h3>螺絲定位</h3>
        <label>螺絲融合演算法<select v-model="algorithm" @change="selectAlgorithm"><option v-for="(label, id) in labels" :key="id" :value="id">{{ label }}</option></select></label>
        <p v-if="!detections.length">此幀沒有螺絲偵測結果。</p>
        <article v-for="(d, i) in detections" :key="i">
          <strong>{{ d.screwId || '未通過關聯門檻' }}</strong>
          <p>相機座標：{{ fmt(d.cameraPosition) }} m</p>
          <p>原始世界座標：{{ fmt(d.rawAbsolutePosition) }} m</p>
          <p>融合位置：{{ fmt(d.algorithms?.[algorithm]?.position) }} m</p>
          <small v-if="d.observationCount">融合觀測：{{ d.observationCount }} 幀</small>
        </article>
        <h3>同幀設備姿態</h3>
        <p>位置：{{ fmt(pose?.position) }} m</p>
        <p>四元數（w, x, y, z）：{{ qfmt(pose?.quaternion) }}</p>
        <p v-if="frame && !pose">此幀缺少可配對姿態，不使用舊姿態推算。</p>
        <p v-if="frame">擷取時間戳：{{ frame.captureTimeNs }} ns</p>
        <p v-if="frame?.status === 'pair_time_mismatch'">RGB-D 時間差超出門檻，此幀不進行定位。</p>
      </aside>
    </div>
    <p v-if="error" class="alert">{{ error }}</p>
  </section>
</template>

<style scoped>
.rgbd-grid { display: grid; grid-template-columns: minmax(0, 1fr) 300px; gap: 20px; }
.rgbd-image { position: relative; background: #111; }
canvas { display: block; width: 100%; height: auto; }
.rgbd-boxes { position: absolute; inset: 0; pointer-events: none; }
.rgbd-box { position: absolute; border: 2px solid #22c55e; box-sizing: border-box; }
.rgbd-box span { position: absolute; top: 0; left: 0; background: #14532d; color: white; font-size: 12px; white-space: nowrap; }
.rgbd-controls { display: flex; align-items: center; gap: 12px; padding: 8px 0; }
.rgbd-controls input { flex: 1; min-width: 50px; }
.rgbd-controls span { font-size: 13px; white-space: nowrap; }
.rgbd-scene { min-height: 380px; background: white; border: 1px solid #cbd5e1; }
.rgbd-notice { min-height: 24px; margin: 8px 0; }
aside { border: 1px solid #94a3b8; border-radius: 10px; padding: 16px; overflow-wrap: anywhere; }
article { padding: 12px 0; border-bottom: 1px solid #94a3b8; }
label { display: grid; gap: 8px; } select { color: #111; background: white; max-width: 100%; }
@media (max-width: 900px) { .rgbd-grid { grid-template-columns: 1fr; } }
</style>
