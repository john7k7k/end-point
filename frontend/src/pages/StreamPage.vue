<script setup>
import { computed, nextTick, onMounted, onUnmounted, ref, watch } from 'vue';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import api from '../api';

const operations = ref([]), videos = ref([]), detections = ref([]), telemetryRecords = ref([]);
const sourceMode = ref('history'), selectedOperationId = ref(''), selectedVideoName = ref('');
const viewMode = ref('color'), fusionAlgorithm = ref('ekf'), showDetections = ref(true);
const currentTime = ref(0), duration = ref(0), isPlaying = ref(false), videoPlayer = ref(null);
const positioning = ref(null), loading = ref(true), saving = ref(false), error = ref(''), message = ref('');
const simulationTick = ref(0);
const livePaused = ref(false), liveFrameKey = ref(0);
const positionTrail = ref([]);
const sceneContainer = ref(null), sceneTooltip = ref(null);
const anchors = [
  { id: 1, x: 0, y: 0, z: 0 }, { id: 2, x: 20, y: 0, z: 0 },
  { id: 3, x: 0, y: 12, z: 0 }, { id: 4, x: 20, y: 12, z: 0 },
  { id: 5, x: 0, y: 0, z: 2.5 }, { id: 6, x: 20, y: 0, z: 2.5 },
  { id: 7, x: 0, y: 12, z: 2.5 }, { id: 8, x: 20, y: 12, z: 2.5 }
];
const rawScrews = [
  { id: 'A-1', type: 'M4 hex screw', x: 1.2, y: 1.2, z: 1.1 }, { id: 'A-2', type: 'M4 hex screw', x: 2, y: 1.2, z: 1.1 },
  { id: 'B-1', type: 'M6 socket screw', x: 18, y: 1.2, z: 1.1 }, { id: 'B-2', type: 'M6 socket screw', x: 18.8, y: 1.2, z: 1.1 },
  { id: 'B-3', type: 'M6 socket screw', x: 1.2, y: 10.8, z: 1.1 }, { id: 'B-4', type: 'M6 socket screw', x: 2, y: 10.8, z: 1.1 },
  { id: 'A-3', type: 'M4 hex screw', x: 18, y: 10.8, z: 1.1 }, { id: 'A-4', type: 'M4 hex screw', x: 18.8, y: 10.8, z: 1.1 }
];
let positionTimer;
let lastHistoryPositionSecond = -1;
let renderer, scene, camera, controls, deviceGroup, screwGroup, trailLine, raycaster, pointer, sceneFrame, resizeObserver;
const rawScrewGroups = new Map();

const activeOperation = computed(() => operations.value
  .filter((operation) => !operation.endTime)
  .sort((a, b) => new Date(b.startTime) - new Date(a.startTime))[0] || null);
const historyOperations = computed(() => operations.value.filter((operation) => operation._id !== activeOperation.value?._id));
const liveStartTime = computed(() => activeOperation.value?.startTime ? new Date(activeOperation.value.startTime).toLocaleString('zh-TW') : '尚未開始作業');

const modeVideos = computed(() => videos.value.filter((video) => video.kind === viewMode.value || video.kind === 'combined'));
const selectedVideo = computed(() => modeVideos.value.find((video) => video.filename === selectedVideoName.value));
const selectedVideoDetections = computed(() => {
  const matched = detections.value.filter((item) => item.imageId === selectedVideo.value?.filename);
  return matched.length ? matched : detections.value;
});
const simulatedScrew = computed(() => ({
  _id: 'simulated-screw', objectClass: '螺絲', depth: Number((118 + Math.sin(simulationTick.value * .18) * 3).toFixed(1)),
  bbox: { x: Math.round(860 + Math.sin(simulationTick.value * .14) * 22), y: Math.round(465 + Math.cos(simulationTick.value * .11) * 12), width: 200, height: 150 }
}));
const virtualDetectionVisible = computed(() => Math.floor((simulationTick.value + 20) / 4) % 13 !== 0);
const activeDetection = computed(() => {
  if (sourceMode.value === 'live') return detections.value.at(-1) || simulatedScrew.value;
  if (!selectedVideoDetections.value.length) return null;
  const startedAt = new Date(selectedVideoDetections.value[0].timestamp).getTime() || (selectedVideo.value?.startedAt ? selectedVideo.value.startedAt * 1000 : null);
  if (!startedAt) return selectedVideoDetections.value[0] || simulatedScrew.value;
  const target = startedAt + currentTime.value * 1000;
  return selectedVideoDetections.value.reduce((closest, item) =>
    Math.abs(new Date(item.timestamp).getTime() - target) < Math.abs(new Date(closest.timestamp).getTime() - target) ? item : closest
  );
});
const hasStoredDetection = computed(() => sourceMode.value === 'live' ? detections.value.length > 0 : selectedVideoDetections.value.length > 0);
const hasVisibleMedia = computed(() => sourceMode.value === 'live' ? Boolean(activeOperation.value) : Boolean(selectedVideo.value));
const showDetectionOverlay = computed(() => showDetections.value && !livePaused.value && hasVisibleMedia.value && Boolean(activeDetection.value) && (hasStoredDetection.value || virtualDetectionVisible.value));
const displayName = computed(() => !activeDetection.value ? '未偵測到螺絲' : ['example_object', 'screw_simulated'].includes(activeDetection.value.objectClass) ? '螺絲' : activeDetection.value.objectClass);
const liveStreamUrl = computed(() => `http://localhost:8889/${viewMode.value === 'depth' ? 'cam-depth' : 'cam-color'}`);
const cubeStyle = computed(() => {
  const o = positioning.value?.telemetry.orientation || { roll: 0, pitch: 0, yaw: 0 };
  return { transform: `rotateX(${o.roll}deg) rotateY(${o.pitch}deg) rotateZ(${o.yaw}deg)` };
});
const format = (value) => Number(value ?? 0).toFixed(3);
const rebuildDatabaseTrail = () => {
  const cutoff = sourceMode.value === 'history' ? (selectedVideo.value?.startedAt ? selectedVideo.value.startedAt * 1000 + currentTime.value * 1000 : new Date(activeDetection.value?.timestamp || 0).getTime()) : Infinity;
  positionTrail.value = telemetryRecords.value.filter((item) => new Date(item.timestamp).getTime() <= cutoff).map((item) => item.telemetry?.position).filter(Boolean).slice(-40).map((point) => ({ ...point }));
};
const toScenePosition = (point) => new THREE.Vector3(Number(point?.x || 0), Number(point?.z || 0), Number(point?.y || 0));
const anchorPosition = (anchor) => toScenePosition(anchor);
const addHoverTarget = (object, label) => { object.userData.hoverLabel = label; };
const createAnchorIcon = (anchor) => {
  const group = new THREE.Group();
  const material = new THREE.MeshStandardMaterial({ color: 0x3b82f6, roughness: .35, metalness: .35 });
  const base = new THREE.Mesh(new THREE.BoxGeometry(.24, .12, .24), material);
  const marker = new THREE.Mesh(new THREE.BoxGeometry(.1, .16, .1), material);
  marker.position.y = .14; group.add(base, marker); group.position.copy(anchorPosition(anchor));
  addHoverTarget(group, `基地站 ${anchor.id}：X ${anchor.x}、Y ${anchor.y}、Z ${anchor.z} m`); return group;
};
const createScrewIcon = (color = 0xf59e0b) => {
  const group = new THREE.Group(); const material = new THREE.MeshStandardMaterial({ color, metalness: .72, roughness: .25 });
  const body = new THREE.Mesh(new THREE.CylinderGeometry(.045, .045, .25, 16), material); body.rotation.z = Math.PI / 2;
  const head = new THREE.Mesh(new THREE.CylinderGeometry(.105, .105, .045, 16), material); head.rotation.z = Math.PI / 2; head.position.x = -.14;
  group.add(body, head); group.userData.material = material; return group;
};
const updateThreeScene = () => {
  if (!scene || !positioning.value || !deviceGroup || !screwGroup) return;
  const telemetry = positioning.value.telemetry;
  deviceGroup.position.copy(toScenePosition(telemetry.position));
  const radians = Math.PI / 180, o = telemetry.orientation;
  deviceGroup.rotation.set(o.pitch * radians, -o.yaw * radians, o.roll * radians, 'YXZ');
  screwGroup.position.copy(toScenePosition(positioning.value.absolutePosition));
  screwGroup.visible = Boolean(positioning.value.absolutePosition) && !telemetry.workspace;
  addHoverTarget(deviceGroup, `設備：X ${format(telemetry.position.x)}、Y ${format(telemetry.position.y)}、Z ${format(telemetry.position.z)} m；Roll ${format(o.roll)}°、Pitch ${format(o.pitch)}°、Yaw ${format(o.yaw)}°`);
  if (positioning.value.absolutePosition) addHoverTarget(screwGroup, `螺絲：X ${format(positioning.value.absolutePosition.x)}、Y ${format(positioning.value.absolutePosition.y)}、Z ${format(positioning.value.absolutePosition.z)} m`);
  const geometry = new THREE.BufferGeometry().setFromPoints(positionTrail.value.map(toScenePosition));
  trailLine.geometry.dispose(); trailLine.geometry = geometry;
  const workspaceScrews = telemetry.workspace?.screws || rawScrews;
  workspaceScrews.forEach((screw) => {
    const group = rawScrewGroups.get(screw.id); if (!group) return;
    const typeColor = screw.type.includes('M4') ? 0x2563eb : 0x9333ea;
    group.userData.material.color.setHex(screw.visible ? 0xf59e0b : typeColor);
    group.userData.material.emissive?.setHex(screw.visible ? 0x6b3d00 : 0x000000);
    addHoverTarget(group, `${screw.type} ${screw.id}：X ${format(screw.x)}、Y ${format(screw.y)}、Z ${format(screw.z)} m${screw.visible ? `；已在攝影機視野內，深度 ${format(screw.depth)} m` : '；未進入攝影機辨識範圍'}`);
  });
};
const initThreeScene = async () => {
  await nextTick(); if (renderer || !sceneContainer.value) { updateThreeScene(); return; }
  scene = new THREE.Scene(); scene.background = new THREE.Color(0xffffff);
  camera = new THREE.PerspectiveCamera(42, 1, .1, 100); camera.position.set(25, 19, 26);
  renderer = new THREE.WebGLRenderer({ antialias: true }); renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); sceneContainer.value.appendChild(renderer.domElement);
  controls = new OrbitControls(camera, renderer.domElement); controls.target.set(10, 1.1, 6); controls.enableDamping = true; controls.minDistance = 8; controls.maxDistance = 42;
  scene.add(new THREE.HemisphereLight(0xffffff, 0xcbd5e1, 2)); const light = new THREE.DirectionalLight(0xffffff, 2.5); light.position.set(5, 7, 4); scene.add(light);
  const floor = new THREE.Mesh(new THREE.PlaneGeometry(20, 12), new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: .95 })); floor.rotation.x = -Math.PI / 2; floor.position.set(10, -.02, 6); scene.add(floor);
  const grid = new THREE.GridHelper(20, 20, 0xcbd5e1, 0xe2e8f0); grid.scale.z = .6; grid.position.set(10, 0, 6); scene.add(grid);
  anchors.forEach((anchor) => scene.add(createAnchorIcon(anchor)));
  deviceGroup = new THREE.Group(); const deviceDot = new THREE.Mesh(new THREE.SphereGeometry(.12, 20, 16), new THREE.MeshStandardMaterial({ color: 0x10b981, emissive: 0x046c4e, emissiveIntensity: .35 })); const beam = new THREE.Mesh(new THREE.ConeGeometry(.45, 1.2, 24, 1, true), new THREE.MeshBasicMaterial({ color: 0x34d399, transparent: true, opacity: .2, side: THREE.DoubleSide })); beam.rotation.x = -Math.PI / 2; beam.position.z = .6; deviceGroup.add(deviceDot, beam); scene.add(deviceGroup);
  screwGroup = createScrewIcon(); scene.add(screwGroup); rawScrews.forEach((screw) => { const group = createScrewIcon(screw.type.includes('M4') ? 0x2563eb : 0x9333ea); group.position.copy(toScenePosition(screw)); addHoverTarget(group, `${screw.type} ${screw.id}：X ${screw.x}、Y ${screw.y}、Z ${screw.z} m`); rawScrewGroups.set(screw.id, group); scene.add(group); }); trailLine = new THREE.Line(new THREE.BufferGeometry(), new THREE.LineBasicMaterial({ color: 0xdc2626, linewidth: 1 })); scene.add(trailLine);
  raycaster = new THREE.Raycaster(); pointer = new THREE.Vector2(); renderer.domElement.addEventListener('pointermove', showSceneTooltip);
  resizeObserver = new ResizeObserver(resizeThreeScene); resizeObserver.observe(sceneContainer.value); resizeThreeScene(); updateThreeScene(); renderThreeScene();
};
const resizeThreeScene = () => { if (!renderer || !sceneContainer.value) return; const { clientWidth: width, clientHeight: height } = sceneContainer.value; if (!width || !height) return; renderer.setSize(width, height); camera.aspect = width / height; camera.updateProjectionMatrix(); };
const showSceneTooltip = (event) => { if (!renderer || !sceneTooltip.value) return; const rect = renderer.domElement.getBoundingClientRect(); pointer.set(((event.clientX - rect.left) / rect.width) * 2 - 1, -((event.clientY - rect.top) / rect.height) * 2 + 1); raycaster.setFromCamera(pointer, camera); const found = raycaster.intersectObjects(scene.children, true).map((hit) => { let object = hit.object; while (object && !object.userData.hoverLabel) object = object.parent; return object; }).find(Boolean); sceneTooltip.value.style.display = found ? 'block' : 'none'; if (found) { sceneTooltip.value.textContent = found.userData.hoverLabel; sceneTooltip.value.style.left = `${event.clientX - rect.left + 12}px`; sceneTooltip.value.style.top = `${event.clientY - rect.top + 12}px`; } };
const renderThreeScene = () => { sceneFrame = requestAnimationFrame(renderThreeScene); controls.update(); renderer.render(scene, camera); };
const disposeThreeScene = () => { cancelAnimationFrame(sceneFrame); resizeObserver?.disconnect(); renderer?.domElement?.removeEventListener('pointermove', showSceneTooltip); renderer?.dispose(); renderer = null; };

const loadHistory = async () => {
  videos.value = []; detections.value = []; telemetryRecords.value = []; selectedVideoName.value = ''; currentTime.value = 0;
  if (!selectedOperationId.value) return;
  try {
    const [videoRes, detectionRes, telemetryRes] = await Promise.all([api.get(`/videos/${selectedOperationId.value}`), api.get(`/detections/${selectedOperationId.value}`), api.get(`/operator-telemetry/${selectedOperationId.value}`)]);
    videos.value = videoRes.data;
    detections.value = detectionRes.data.sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));
    telemetryRecords.value = telemetryRes.data;
    selectedVideoName.value = modeVideos.value[0]?.filename || '';
    await refreshPositioning();
  } catch (err) { error.value = err.response?.data?.error || '無法讀取歷史影片或偵測資料。'; }
};
const refreshOperations = async () => { operations.value = (await api.get('/operations')).data; };
const refreshPositioning = async () => {
  if (!selectedOperationId.value) return;
  try {
    const params = { source: sourceMode.value };
    if (sourceMode.value === 'history' && selectedVideo.value?.startedAt) {
      params.at = selectedVideo.value.startedAt * 1000 + currentTime.value * 1000;
      telemetryRecords.value = (await api.get(`/operator-telemetry/${selectedOperationId.value}`, { params: { at: params.at } })).data;
    }
    if (activeDetection.value?._id && activeDetection.value._id !== 'simulated-screw') params.detectionId = activeDetection.value._id;
    positioning.value = (await api.get(`/positioning/latest/${selectedOperationId.value}`, { params })).data;
    rebuildDatabaseTrail();
    await initThreeScene(); updateThreeScene();
  } catch (err) { error.value = err.response?.data?.error || '無法讀取定位資料。'; }
};
const refreshLiveDetections = async () => {
  if (!selectedOperationId.value || sourceMode.value !== 'live') return;
  try {
    const [detectionRes, telemetryRes] = await Promise.all([api.get(`/detections/${selectedOperationId.value}`), api.get(`/operator-telemetry/${selectedOperationId.value}`)]);
    detections.value = detectionRes.data.sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));
    telemetryRecords.value = telemetryRes.data;
  } catch { /* Keep the last valid detection while the stream is reconnecting. */ }
};
const saveFusion = async () => {
  saving.value = true; message.value = ''; error.value = '';
  try { await api.post('/simulation/config', { fusionAlgorithm: fusionAlgorithm.value }); message.value = '融合設定已傳送至後端與 AI。'; await refreshPositioning(); }
  catch (err) { error.value = err.response?.data?.error || '融合設定傳送失敗。'; }
  finally { saving.value = false; }
};
const updatePlayback = (event) => { currentTime.value = event.target.currentTime; duration.value = event.target.duration || 0; };
const togglePlayback = async () => { if (videoPlayer.value?.paused) await videoPlayer.value.play(); else videoPlayer.value?.pause(); };
const syncHistoricalFrame = async () => { if (sourceMode.value !== 'history' || !isPlaying.value) return; const second = Math.floor(currentTime.value * 2); if (second === lastHistoryPositionSecond) return; lastHistoryPositionSecond = second; await refreshPositioning(); };
const updatePlaybackAndSync = async (event) => { updatePlayback(event); await syncHistoricalFrame(); };
const seek = async (event) => { if (videoPlayer.value) { videoPlayer.value.currentTime = Number(event.target.value); currentTime.value = Number(event.target.value); if (sourceMode.value === 'history') await refreshPositioning(); } };
const toggleLiveDisplay = async () => { livePaused.value = !livePaused.value; if (!livePaused.value) { liveFrameKey.value += 1; await refreshLiveDetections(); await refreshPositioning(); } };

watch(selectedOperationId, () => { positionTrail.value = []; lastHistoryPositionSecond = -1; if (sourceMode.value === 'history') loadHistory(); else refreshPositioning(); });
watch(viewMode, () => { selectedVideoName.value = modeVideos.value[0]?.filename || ''; currentTime.value = 0; });
watch(sourceMode, async () => {
  if (sourceMode.value === 'history') {
    await refreshOperations();
    selectedOperationId.value = historyOperations.value[0]?._id || '';
    if (!selectedOperationId.value) { videos.value = []; detections.value = []; positioning.value = null; }
  } else {
    selectedOperationId.value = activeOperation.value?._id || '';
    refreshLiveDetections(); refreshPositioning();
  }
});
onMounted(async () => {
  try {
    const [ops, config] = await Promise.all([api.get('/operations'), api.get('/simulation/config')]);
    operations.value = ops.data; fusionAlgorithm.value = config.data.fusionAlgorithm;
    selectedOperationId.value = historyOperations.value[0]?._id || '';
    positionTimer = window.setInterval(async () => { if (sourceMode.value === 'live' && !livePaused.value) { simulationTick.value += 1; await refreshLiveDetections(); await refreshPositioning(); } }, 500);
  } catch { error.value = '無法讀取系統資料。'; }
  finally { loading.value = false; }
});
onUnmounted(() => { window.clearInterval(positionTimer); disposeThreeScene(); });
</script>

<template>
  <section class="page-card">
    <div class="section-title"><p class="eyebrow">Media</p><h2>影像串流與末端定位</h2></div>
    <div class="media-controls">
      <div class="segmented-control"><button :class="{ active: sourceMode === 'history' }" type="button" @click="sourceMode = 'history'">歷史影片</button><button :class="{ active: sourceMode === 'live' }" type="button" @click="sourceMode = 'live'">目前串流</button></div>
      <p v-if="sourceMode === 'live'" class="stream-start-time">開始時間：{{ liveStartTime }}</p>
      <template v-else><label>作業<select v-model="selectedOperationId" :disabled="!historyOperations.length"><option v-if="!historyOperations.length" value="">無歷史紀錄</option><option v-else value="" disabled>選擇歷史作業</option><option v-for="op in historyOperations" :key="op._id" :value="op._id">{{ new Date(op.startTime).toLocaleString('zh-TW') }}</option></select></label><label class="video-select-control">影片<select v-model="selectedVideoName" :disabled="!modeVideos.length"><option v-if="!modeVideos.length" value="">無歷史紀錄</option><option v-for="video in modeVideos" :key="video.filename" :value="video.filename">{{ video.filename }}</option></select></label></template>
      <label class="switch-control"><input v-model="showDetections" type="checkbox" /> 顯示螺絲偵測</label>
      <div class="segmented-control"><button :class="{ active: viewMode === 'color' }" type="button" @click="viewMode = 'color'">光學影像</button><button :class="{ active: viewMode === 'depth' }" type="button" @click="viewMode = 'depth'">深度影像</button></div>
    </div>
    <p v-if="loading" class="placeholder">正在讀取資料…</p>
    <div v-else class="stream-workspace">
      <div class="stream-main">
        <div v-if="sourceMode === 'live'" class="video-viewport"><iframe :key="`${liveStreamUrl}-${liveFrameKey}`" class="live-stream-frame" :src="liveStreamUrl" :title="viewMode === 'depth' ? '目前深度串流' : '目前光學串流'" allow="autoplay; fullscreen"></iframe><div v-if="livePaused" class="live-pause-overlay">⏸</div><div v-if="showDetectionOverlay" class="detection-layer"><div class="detection-box" :class="{ 'label-below': activeDetection.bbox.y < 30 }" :style="{ left: `${(activeDetection.bbox.x / 1920) * 100}%`, top: `${(activeDetection.bbox.y / 1080) * 100}%`, width: `${(activeDetection.bbox.width / 1920) * 100}%`, height: `${(activeDetection.bbox.height / 1080) * 100}%` }"><span>{{ displayName }} · {{ activeDetection.depth }}</span></div></div><div class="video-playback-controls"><button type="button" :title="livePaused ? '播放最新串流' : '暫停前台顯示'" @click="toggleLiveDisplay">{{ livePaused ? '▶' : '⏸' }}</button></div></div>
        <div v-else-if="selectedVideo" class="video-viewport">
          <video :key="selectedVideo.filename" ref="videoPlayer" class="video-source" :class="{ 'show-depth': selectedVideo.kind === 'combined' && viewMode === 'depth' }" :src="selectedVideo.url" playsinline @loadedmetadata="updatePlayback" @timeupdate="updatePlaybackAndSync" @play="isPlaying = true" @pause="isPlaying = false" />
          <div v-if="showDetectionOverlay" class="detection-layer"><div class="detection-box" :class="{ 'label-below': activeDetection.bbox.y < 30 }" :style="{ left: `${(activeDetection.bbox.x / 1920) * 100}%`, top: `${(activeDetection.bbox.y / 1080) * 100}%`, width: `${(activeDetection.bbox.width / 1920) * 100}%`, height: `${(activeDetection.bbox.height / 1080) * 100}%` }"><span>{{ displayName }} · {{ activeDetection.depth }}</span></div></div>
          <div class="video-playback-controls"><button type="button" :title="isPlaying ? '暫停' : '播放'" @click="togglePlayback">{{ isPlaying ? '⏸' : '▶' }}</button><input type="range" min="0" :max="duration" step="0.01" :value="currentTime" @input="seek" /><span>{{ Math.floor(currentTime) }} / {{ Math.floor(duration) }} 秒</span></div>
        </div>
        <p v-else class="placeholder">此作業尚未找到歷史影片。</p>
      </div>
      <aside class="stream-sidebar">
        <section v-if="positioning?.detection" class="side-section screw-position-card"><h3>螺絲定位</h3><p>{{ displayName }}　深度 {{ activeDetection?.depth }}</p><p>模型：{{ positioning.detection.detectionAlgorithm }}<br>融合：{{ positioning.fusionAlgorithm }}</p><p>相機／設備座標：{{ format(positioning.cameraPosition.x) }}, {{ format(positioning.cameraPosition.y) }}, {{ format(positioning.cameraPosition.z) }} m</p><p>螺絲相機座標：{{ format(positioning.screwCameraPosition?.x) }}, {{ format(positioning.screwCameraPosition?.y) }}, {{ format(positioning.screwCameraPosition?.z) }} m</p><p class="absolute-position">融合絕對座標：{{ format(positioning.absolutePosition?.x) }}, {{ format(positioning.absolutePosition?.y) }}, {{ format(positioning.absolutePosition?.z) }} m</p></section>
      </aside>
    </div>
    <section v-if="positioning" class="telemetry-dashboard">
      <div class="position-scene-card"><div class="scene-heading"><div><h3>操作空間建模</h3></div><span>拖曳可旋轉、滾輪可縮放；停留於圖示可查看座標</span></div><p class="nearby-screw-alert" :class="{ inactive: !positioning.workspace?.notification }">{{ positioning.workspace?.notification ? `提示：${positioning.workspace.notification}` : '附近目前沒有螺絲。' }}</p><div ref="sceneContainer" class="three-scene"><div ref="sceneTooltip" class="three-tooltip"></div></div><div class="scene-legend"><span><i class="legend-anchor"></i>基地站</span><span><i class="legend-device"></i>設備／攝影機光錐</span><span><i class="legend-screw"></i>M4（藍）／M6（紫）；金色為可辨識</span><span><i class="legend-trail"></i>移動軌跡</span></div></div>
      <aside class="fusion-data-card"><h3>UWB + IMU 融合資料</h3><div class="current-position"><strong>ES-EKF 輸出設備位置</strong><span>X {{ format(positioning.telemetry.position.x) }}　Y {{ format(positioning.telemetry.position.y) }}　Z {{ format(positioning.telemetry.position.z) }} m</span></div><div class="sensor-columns"><div><h4>UWB：8 個基地站距離（m）</h4><div class="uwb-range-grid"><span v-for="range in (positioning.telemetry.uwbRanges || [])" :key="range.stationId">站 {{ range.stationId + 1 }}：{{ format(range.distance) }}</span></div></div><div class="imu-readout"><h4>IMU 即時量測</h4><p>加速度：{{ format(positioning.telemetry.imu?.acceleration?.x) }}, {{ format(positioning.telemetry.imu?.acceleration?.y) }}, {{ format(positioning.telemetry.imu?.acceleration?.z) }} m/s²</p><p>角速度：{{ format(positioning.telemetry.imu?.gyroscope?.x) }}, {{ format(positioning.telemetry.imu?.gyroscope?.y) }}, {{ format(positioning.telemetry.imu?.gyroscope?.z) }} °/s</p><p>姿態：Roll {{ format(positioning.telemetry.orientation.roll) }}°、Pitch {{ format(positioning.telemetry.orientation.pitch) }}°、Yaw {{ format(positioning.telemetry.orientation.yaw) }}°</p></div></div><label>UWB + IMU 融合演算法<select v-model="fusionAlgorithm"><option value="ekf">Error-State Extended Kalman Filter (ES-EKF)</option><option value="complementary">Complementary Filter</option><option value="weighted_average">Weighted Average</option></select></label><button type="button" :disabled="saving" @click="saveFusion">{{ saving ? '傳送中…' : '套用融合設定' }}</button><RouterLink class="calibration-link" to="/settings/camera-extrinsics">設定 RGB-D 相機外參 →</RouterLink></aside>
    </section>
    <p v-if="message" class="success">{{ message }}</p><p v-if="error" class="alert">{{ error }}</p>
  </section>
</template>
