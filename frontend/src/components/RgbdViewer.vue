<script setup>
import { ref, computed, watch, onMounted, onUnmounted, nextTick } from 'vue';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import api from '../api';

const props = defineProps({ operationId: String, mode: String, view: String, sessions: Array, selectedSession: String, showDetections: Boolean });
const session = ref(''), snapshot = ref(null), index = ref([]), paused = ref(false), error = ref('');
const algorithm = ref('average'), canvas = ref(null), sceneHost = ref(null), sceneTooltip = ref(null), timeMs = ref(0);
const labels = { average: '平均法（多幀座標平均）', ekf: 'EKF（靜態位置濾波）', es_ekf: 'ESKF（誤差狀態濾波）', rmv_fgo: 'RMV-FGO（強健多視角因子圖）' };
const shortLabels = { average: '平均法', ekf: 'EKF', es_ekf: 'ESKF', rmv_fgo: 'RMV-FGO' };
const number = n => Number.isFinite(Number(n)) && n != null ? Number(n).toFixed(3) : '—';
const devicePositionLabel = computed(() => pose.value ? `X ${number(pose.value.position.x)}　Y ${number(pose.value.position.y)}　Z ${number(pose.value.position.z)} m` : '—');
const frame = computed(() => snapshot.value?.frame);
const detections = computed(() => frame.value?.fusion?.detections || []);
const duration = computed(() => index.value.at(-1)?.videoTimeMs || 0);
const pose = computed(() => frame.value?.devicePose);
const showPath = ref(true);
const deviceLabels = { ekf: 'ES-EKF', complementary: '互補濾波', weighted_average: '加權平均', gwo4d: '4D-GWO + IMU' };
const deviceColors = { ekf: '#2563eb', complementary: '#059669', weighted_average: '#d97706', gwo4d: '#9333ea' };
const visibleAlgorithms = ref(['ekf', 'complementary', 'weighted_average', 'gwo4d']);
const selectedDeviceAlgorithm = ref('ekf');
const requestedDeviceAlgorithm = ref(null);
const deviceResults = computed(() => snapshot.value?.deviceAlgorithms || {});
const hasDeviceResults = computed(() => Object.keys(deviceResults.value).length > 0);
const sensorTelemetry = computed(() => pose.value?.uwbRanges?.length ? pose.value :
  Object.values(deviceResults.value).find(r => r.telemetry?.uwbRanges?.length)?.telemetry || pose.value);
const deviceLocalization = computed(() => (props.mode === 'history' && visibleAlgorithms.value.includes('gwo4d')
  ? deviceResults.value.gwo4d?.telemetry?.deviceLocalization : pose.value?.deviceLocalization));
const ranges = computed(() => sensorTelemetry.value?.uwbRanges || []);
const orientation = computed(() => {
  const q = pose.value?.quaternion;
  if (!q) return null;
  const e = new THREE.Euler().setFromQuaternion(new THREE.Quaternion(q.x, q.y, q.z, q.w), 'ZYX');
  return { x: THREE.MathUtils.radToDeg(e.x), y: THREE.MathUtils.radToDeg(e.y), z: THREE.MathUtils.radToDeg(e.z) };
});
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
const algorithmMeshes = {};
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
    if (props.mode === 'live') {
      algorithm.value = data.frame.selectedAlgorithm || algorithm.value;
      const incoming = data.frame.devicePose?.fusionAlgorithm;
      if (!requestedDeviceAlgorithm.value || incoming === requestedDeviceAlgorithm.value) {
        selectedDeviceAlgorithm.value = incoming || selectedDeviceAlgorithm.value;
        requestedDeviceAlgorithm.value = null;
      }
    }
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
  showPath.value = true;
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
async function selectDeviceAlgorithm() {
  requestedDeviceAlgorithm.value = selectedDeviceAlgorithm.value;
  try { await api.post('/simulation/config', { fusionAlgorithm: selectedDeviceAlgorithm.value }); }
  catch (err) {
    error.value = err.response?.data?.error || '設備融合演算法設定失敗。';
    if (!err.response?.data?.fusionAlgorithm) requestedDeviceAlgorithm.value = null;
  }
}
function boxStyle(d) {
  const b = d.bbox, m = frame.value.metadata;
  return { left: `${100 * b.x / m.width}%`, top: `${100 * b.y / m.height}%`, width: `${100 * b.width / m.width}%`, height: `${100 * b.height / m.height}%` };
}
function createScrewIcon(color) {
  const group = new THREE.Group();
  const material = new THREE.MeshStandardMaterial({ color, metalness: .72, roughness: .25 });
  const body = new THREE.Mesh(new THREE.CylinderGeometry(.045, .045, .25, 16), material); body.rotation.z = Math.PI / 2;
  const head = new THREE.Mesh(new THREE.CylinderGeometry(.105, .105, .045, 16), material); head.rotation.z = Math.PI / 2; head.position.x = -.14;
  group.add(body, head); return group;
}

function initScene() {
  if (renderer || !sceneHost.value) return;
  scene = new THREE.Scene(); scene.background = new THREE.Color(0xffffff);
  camera = new THREE.PerspectiveCamera(42, 1, .1, 100); camera.position.set(25, 19, 26);
  renderer = new THREE.WebGLRenderer({ antialias: true }); renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
  sceneHost.value.appendChild(renderer.domElement);
  controls = new OrbitControls(camera, renderer.domElement); controls.target.set(10, 1.1, 6); controls.enableDamping = true; controls.minDistance = 8; controls.maxDistance = 42; controls.update();
  scene.add(new THREE.HemisphereLight(0xffffff, 0xcbd5e1, 2));
  const light = new THREE.DirectionalLight(0xffffff, 2.5); light.position.set(5, 7, 4); scene.add(light);
  const floor = new THREE.Mesh(new THREE.PlaneGeometry(20, 12), new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: .95 }));
  floor.rotation.x = -Math.PI / 2; floor.position.set(10, -.02, 6); scene.add(floor);
  const grid = new THREE.GridHelper(20, 20, 0xcbd5e1, 0xe2e8f0); grid.scale.z = .6; grid.position.set(10, 0, 6); scene.add(grid);
  for (const x of [0, 20]) for (const y of [0, 12]) for (const z of [0, 2.5]) {
    const anchor = new THREE.Group();
    const material = new THREE.MeshStandardMaterial({ color: 0x3b82f6, roughness: .35, metalness: .35 });
    const base = new THREE.Mesh(new THREE.BoxGeometry(.24, .12, .24), material);
    const marker = new THREE.Mesh(new THREE.BoxGeometry(.1, .16, .1), material); marker.position.y = .14;
    anchor.add(base, marker);
    anchor.position.copy(point({ x, y, z })); anchor.userData.label = `基站 (${x}, ${y}, ${z}) m`; scene.add(anchor);
  }
  device = new THREE.Group();
  device.add(new THREE.Mesh(new THREE.SphereGeometry(.12, 20, 16), new THREE.MeshStandardMaterial({ color: 0x10b981, emissive: 0x10b981, emissiveIntensity: .22 })));
  const beam = new THREE.Mesh(new THREE.ConeGeometry(.45, 1.2, 24, 1, true), new THREE.MeshBasicMaterial({ color: 0x10b981, transparent: true, opacity: .2, side: THREE.DoubleSide }));
  // ConeGeometry tip is +Y. Rotate so tip is at local origin and base +Z.
  beam.rotation.x = -Math.PI / 2; beam.position.z = .6; device.add(beam); scene.add(device);
  trail = new THREE.Line(new THREE.BufferGeometry(), new THREE.LineBasicMaterial({ color: 0xdc2626 })); scene.add(trail);
  screws = new THREE.Group(); scene.add(screws);
  resize = new ResizeObserver(() => {
    const width = sceneHost.value.clientWidth;
    const height = sceneHost.value.clientHeight || 500;
    renderer.setSize(width, height); camera.aspect = width / height; camera.updateProjectionMatrix();
  }); resize.observe(sceneHost.value);
  const raycaster = new THREE.Raycaster();
  renderer.domElement.addEventListener('pointermove', event => {
    const bounds = renderer.domElement.getBoundingClientRect();
    raycaster.setFromCamera(new THREE.Vector2((event.clientX - bounds.left) / bounds.width * 2 - 1, -(event.clientY - bounds.top) / bounds.height * 2 + 1), camera);
    const hit = raycaster.intersectObjects(scene.children, true).map(h => {
      let object = h.object; while (object && !object.userData.label) object = object.parent; return object;
    }).find(Boolean);
    if (!sceneTooltip.value) return;
    sceneTooltip.value.style.display = hit ? 'block' : 'none';
    if (hit) {
      sceneTooltip.value.textContent = hit.userData.label;
      sceneTooltip.value.style.left = `${Math.min(event.clientX - bounds.left + 12, Math.max(0, bounds.width - 250))}px`;
      sceneTooltip.value.style.top = `${Math.min(event.clientY - bounds.top + 12, Math.max(0, bounds.height - 80))}px`;
    }
  });
  renderer.domElement.addEventListener('pointerleave', () => { if (sceneTooltip.value) sceneTooltip.value.style.display = 'none'; });
  renderer.setAnimationLoop(() => { controls.update(); renderer.render(scene, camera); });
}
function updateScene() {
  if (!renderer) return;
  device.visible = Boolean(pose.value) && showPath.value && !hasDeviceResults.value;
  trail.visible = showPath.value && !hasDeviceResults.value;
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
  for (const [id, color] of Object.entries(deviceColors)) {
    if (!algorithmMeshes[id]) {
      const group = device.clone(true);
      group.traverse(o => { if (o.material) { o.material = o.material.clone(); o.material.color.set(color); } });
      const line = new THREE.Line(new THREE.BufferGeometry(), new THREE.LineBasicMaterial({ color }));
      scene.add(group, line); algorithmMeshes[id] = { group, line };
    }
    const { group, line } = algorithmMeshes[id], result = deviceResults.value[id];
    const visible = props.mode === 'live' || visibleAlgorithms.value.includes(id);
    group.visible = visible && Boolean(result?.telemetry);
    line.visible = visible && Boolean(result?.trail?.length);
    line.geometry.dispose(); line.geometry = new THREE.BufferGeometry().setFromPoints((result?.trail || []).map(point));
    if (result?.telemetry) {
      const p = result.telemetry.position, q = result.telemetry.quaternion;
      group.position.copy(point(p));
      if (q) {
        const rotation = new THREE.Quaternion(q.x, q.y, q.z, q.w);
        const r = frame.value?.result?.calibration?.rotationMatrix || [[1,0,0],[0,1,0],[0,0,1]];
        const forward = new THREE.Vector3(r[0][2], r[1][2], r[2][2]).applyQuaternion(rotation);
        const up = new THREE.Vector3(-r[0][1], -r[1][1], -r[2][1]).applyQuaternion(rotation);
        group.up.copy(point(up)); group.lookAt(group.position.clone().add(point(forward)));
      }
      group.children[0].userData.label = `${deviceLabels[id]}：${fmt(p)} m`;
    }
  }
  for (const child of [...screws.children]) { child.traverse(o => { o.geometry?.dispose(); o.material?.dispose(); }); screws.remove(child); }
  for (const s of displayedScrews.value) {
    const p = s.position;
    const mesh = createScrewIcon(s.localized ? 0xf59e0b : s.type.includes('M4') ? 0x2563eb : 0x9333ea);
    mesh.position.copy(point(p)); mesh.userData.label = `${s.id}: ${fmt(p)} m`; screws.add(mesh);
  }
}
watch(() => props.sessions, sessions => {
  if (!sessions?.some(s => s._id === session.value)) session.value = sessions?.[0]?._id || '';
}, { immediate: true });
watch(() => props.selectedSession, sid => {
  if (sid && props.sessions?.some(s => s._id === sid)) session.value = sid;
}, { immediate: true });
watch([session, () => props.operationId, () => props.mode], reset);
watch(() => props.view, async () => {
  generation++;
  try { if (frame.value) await loadFrame(frame.value.frameId, true); } catch { error.value = '無法切換影像。'; }
});
onMounted(() => { initScene(); updateScene(); reset(); timer = setInterval(tick, 100); });
onUnmounted(() => {
  alive = false; generation++; clearInterval(timer); resize?.disconnect(); controls?.dispose();
  renderer?.setAnimationLoop(null);
  scene?.traverse(o => { o.geometry?.dispose(); if (o.material) o.material.dispose(); }); renderer?.dispose();
});
</script>

<template>
  <section class="rgbd-viewer">
    <label v-if="sessions.length > 1 && !selectedSession">影片 <select v-model="session"><option v-for="s in sessions" :key="s._id" :value="s._id">{{ s._id }}（{{ s.count }} 幀）</option></select></label>
    <div class="stream-workspace">
      <div class="stream-main">
        <div class="video-viewport">
          <canvas ref="canvas" />
          <div v-if="showDetections && frame" class="detection-layer">
            <div v-for="(d, i) in detections.filter(d => d.bbox)" :key="i" class="detection-box" :class="{ 'label-below': d.bbox.y < 30 }" :style="boxStyle(d)"><span>{{ d.objectClass || d.object || '螺絲' }} · {{ number(d.cameraPosition?.z) }} m</span></div>
          </div>
        <div class="video-playback-controls"><button type="button" :aria-label="paused ? '播放' : '暫停'" :title="paused ? '播放' : '暫停'" @click="toggle">{{ paused ? '▶' : '⏸' }}</button>
          <input v-if="mode === 'history'" type="range" :value="timeMs" min="0" :max="duration" step="1" @input="seek" />
          <span>{{ Math.floor(timeMs / 1000) }}<template v-if="mode === 'history'"> / {{ Math.floor(duration / 1000) }}</template> 秒</span>
        </div>
        </div>
      </div>
      <aside class="stream-sidebar"><section class="side-section screw-position-card">
        <h3>螺絲定位</h3>
        <label class="screw-fusion-control">螺絲定位融合演算法<select v-model="algorithm" @change="selectAlgorithm"><option v-for="(label, id) in labels" :key="id" :value="id">{{ label }}</option></select></label>
        <p v-if="!detections.length" class="no-screw-localization">尚未偵測到螺絲；選擇的演算法會在下一筆螺絲觀測到達後套用。</p>
        <article v-for="(d, i) in detections" :key="i">
          <p>{{ d.objectClass || d.object || '螺絲' }}　深度 {{ number(d.cameraPosition?.z) }} m</p>
          <p>模型：{{ frame?.result?.detectionIsSimulated ? 'mock_yolo' : (frame?.metadata?.detectionAlgorithm || '—') }}<br>設備 UWB + IMU：{{ pose?.fusionAlgorithm || '—' }}</p>
          <p>相機／設備座標：{{ fmt(pose?.position) }} m</p>
          <p>螺絲相機座標：{{ fmt(d.cameraPosition) }} m</p>
          <p>原始絕對座標：{{ fmt(d.rawAbsolutePosition) }} m</p>
          <p class="absolute-position">{{ shortLabels[algorithm] }}結果：{{ fmt(d.algorithms?.[algorithm]?.position) }} m</p>
          <small v-if="d.observationCount">觀測 {{ d.observationCount }} 幀｜創新量 {{ number(d.algorithms?.[algorithm]?.innovation) }} m｜1σ {{ fmt(d.algorithms?.[algorithm]?.uncertainty) }} m</small>
        </article>
        <p v-if="frame && !pose">此幀缺少可配對姿態，不使用舊姿態推算。</p>
        <details v-if="frame" class="frame-details"><summary>同幀資料資訊</summary><p>Frame {{ frame.frameId }}</p><p>擷取時間戳：{{ frame.captureTimeNs }} ns</p></details>
        <p v-if="frame?.status === 'pair_time_mismatch'">RGB-D 時間差超出門檻，此幀不進行定位。</p>
      </section></aside>
    </div>
    <section class="telemetry-dashboard">
      <div class="position-scene-card">
        <div class="scene-heading"><div><h3>操作空間建模</h3></div><span>拖曳可旋轉、滾輪可縮放；停留於圖示可查看座標</span></div>
        <p class="nearby-screw-alert" :class="{ inactive: !nearby }">{{ nearby || '附近目前沒有螺絲。' }}</p>
        <div ref="sceneHost" class="three-scene"><div ref="sceneTooltip" class="three-tooltip"></div></div>
        <div class="scene-legend"><span><i class="legend-anchor"></i>基地站</span><span><i class="legend-device"></i>設備／攝影機光錐</span><span><i class="legend-screw"></i>M4（藍）／M6（紫）；金色為可辨識</span></div>
      </div>
      <aside class="fusion-data-card">
        <h3>UWB + IMU 融合資料</h3>
        <div class="current-position"><strong>融合輸出設備位置</strong><span>{{ devicePositionLabel }}</span></div>
        <p v-if="deviceLocalization" class="gwo-diagnostics"><strong>4D-GWO</strong><br>
          共同距離偏差 b：{{ number(deviceLocalization.biasMeters) }} m<br>
          搜尋範圍：{{ deviceLocalization.biasBounds?.join(' ～ ') || '—' }} m<br>
          有效基地站：{{ deviceLocalization.validAnchorCount ?? 0 }}；狀態：{{ deviceLocalization.status === 'ready' ? '已定位' : '等待有效距離量測' }}
        </p>
        <div class="sensor-columns"><div><h4>UWB：8 個基地站距離（m）</h4>
        <div class="uwb-range-grid"><span v-for="i in 8" :key="i">站 {{ i }}：{{ ranges.find(r => r.stationId === i - 1)?.distance?.toFixed(3) ?? '—' }}</span></div>
        <small v-if="!ranges.length">此同幀紀錄未保存基地站原始量測。</small>
        </div><div class="imu-readout"><h4>IMU 即時量測</h4><p>加速度：{{ fmt(sensorTelemetry?.imu?.acceleration) }} m/s²</p><p>角速度：{{ fmt(sensorTelemetry?.imu?.gyroscope) }} °/s</p><p>姿態：Roll {{ number(orientation?.x) }}°、Pitch {{ number(orientation?.y) }}°、Yaw {{ number(orientation?.z) }}°</p></div></div>
        <div v-if="mode === 'history'" class="path-algorithm-menu"><strong>演算法路徑</strong>
          <template v-if="hasDeviceResults"><label v-for="(label, id) in deviceLabels" :key="id" :style="{color: deviceColors[id]}" class="trail-toggle"><input v-model="visibleAlgorithms" :value="id" type="checkbox" @change="updateScene" /><span>{{ label }}</span></label></template>
          <template v-else><label><input v-model="showPath" type="checkbox" @change="updateScene" /><span>原始設備定位路徑</span></label><small>此紀錄尚無演算法比較結果；需有原始資料才能重算。</small></template>
        </div>
        <label v-else class="path-note">UWB + IMU 融合演算法<select v-model="selectedDeviceAlgorithm" @change="selectDeviceAlgorithm"><option v-for="(label, id) in deviceLabels" :key="id" :value="id">{{ label }}</option></select></label>
        <RouterLink class="calibration-link" to="/settings/camera-extrinsics">設定 RGB-D 相機外參 →</RouterLink>
      </aside>
    </section>
    <p v-if="error" class="alert">{{ error }}</p>
  </section>
</template>

<style scoped>
/* Layout, cards, typography and controls use the reference StreamPage styles. */
.stream-main, .stream-sidebar, .position-scene-card, .fusion-data-card { min-width: 0; }
.video-viewport > canvas { display: block; width: 100%; height: 100%; object-fit: contain; }
.three-scene :deep(canvas) { display: block; width: 100%; height: 100%; }
article + article { margin-top: 12px; padding-top: 10px; border-top: 1px solid #cbd5e1; }
.frame-details { margin-top: 12px; font-size: .78rem; color: #8fa5c8; overflow-wrap: anywhere; }
.frame-details summary { cursor: pointer; }
.frame-details p { font-size: .75rem; }
.fusion-data-card small { font-size: .78rem; color: #64748b; }
</style>
