<script setup>
import { computed, nextTick, onMounted, onUnmounted, reactive, ref, watch } from 'vue';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import api from '../api';
import RgbdViewer from '../components/RgbdViewer.vue';

const pairedSessions = ref([]);
let pollBusy = false;
const refreshPairedSessions = async () => {
  const op = selectedOperationId.value;
  const rows = op ? (await api.get(`/rgbd/sessions/${op}`)).data : [];
  if (op === selectedOperationId.value) pairedSessions.value = rows;
  return rows.length > 0;
};

const operations = ref([]), videos = ref([]), detections = ref([]), telemetryRecords = ref([]);
const sourceMode = ref('history'), selectedOperationId = ref(''), selectedVideoName = ref('');
const viewMode = ref('color'), fusionAlgorithm = ref('ekf'), screwFusionAlgorithm = ref('average'), showDetections = ref(true);
const currentTime = ref(0), duration = ref(0), isPlaying = ref(false), videoPlayer = ref(null);
const positioning = ref(null), loading = ref(true), saving = ref(false), error = ref(''), message = ref('');
const simulationTick = ref(0);
const livePaused = ref(false), liveFrameKey = ref(0);
const positionTrail = ref([]);
const trailVisibility = reactive({ ekf: true, complementary: true, weighted_average: true });
const trailColors = { ekf: 0x2563eb, complementary: 0x10b981, weighted_average: 0xf59e0b };
const algorithmTrails = ref({ ekf: [], complementary: [], weighted_average: [] });
const liveTrail = ref([]);
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
let renderer, scene, camera, controls, deviceGroup, deviceGroups, screwGroup, trailLines, raycaster, pointer, sceneFrame, resizeObserver;
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
  if (sourceMode.value === 'live') {
    algorithmTrails.value = Object.fromEntries(Object.keys(trailColors).map((algorithm) => [algorithm, algorithm === fusionAlgorithm.value ? liveTrail.value : []]));
    positionTrail.value = liveTrail.value;
    return;
  }
  const cutoff = sourceMode.value === 'history' ? (selectedVideo.value?.startedAt ? selectedVideo.value.startedAt * 1000 + currentTime.value * 1000 : new Date(activeDetection.value?.timestamp || 0).getTime()) : Infinity;
  const trails = Object.fromEntries(Object.keys(trailColors).map((algorithm) => [algorithm, telemetryRecords.value.filter((item) => item.fusionAlgorithm === algorithm && new Date(item.timestamp).getTime() <= cutoff).map((item) => item.telemetry?.position).filter(Boolean).slice(-80).map((point) => ({ ...point }))]));
  algorithmTrails.value = trails;
  positionTrail.value = trails[fusionAlgorithm.value] || [];
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
const createDeviceIcon = (color) => {
  const group = new THREE.Group(); const dot = new THREE.Mesh(new THREE.SphereGeometry(.12, 20, 16), new THREE.MeshStandardMaterial({ color, emissive: color, emissiveIntensity: .22 })); const beam = new THREE.Mesh(new THREE.ConeGeometry(.45, 1.2, 24, 1, true), new THREE.MeshBasicMaterial({ color, transparent: true, opacity: .2, side: THREE.DoubleSide })); beam.rotation.x = -Math.PI / 2; beam.position.z = .6; group.add(dot, beam); return group;
};
const updateThreeScene = () => {
  if (!scene || !positioning.value || !deviceGroup || !screwGroup) return;
  const telemetry = positioning.value.telemetry;
  deviceGroup.visible = false;
  deviceGroup.position.copy(toScenePosition(telemetry.position));
  const radians = Math.PI / 180, o = telemetry.orientation;
  // The scene maps world (X,Y,Z) to Three.js (X,Z,Y), while the cone faces local -Z.
  // Compensate the fixed axis offset for a camera heading aligned with walking direction.
  const sceneYaw = -(o.yaw - 90) * radians;
  deviceGroup.rotation.set(o.pitch * radians, sceneYaw, o.roll * radians, 'YXZ');
  Object.entries(deviceGroups || {}).forEach(([algorithm, group]) => { const trail = algorithmTrails.value[algorithm] || []; const visible = sourceMode.value === 'live' ? algorithm === fusionAlgorithm.value : trailVisibility[algorithm]; group.visible = visible && trail.length > 0; if (!group.visible) return; group.position.copy(toScenePosition(trail.at(-1))); group.rotation.set(o.pitch * radians, sceneYaw, o.roll * radians, 'YXZ'); addHoverTarget(group, `${algorithm} device: ${format(trail.at(-1).x)}, ${format(trail.at(-1).y)}, ${format(trail.at(-1).z)} m`); });
  screwGroup.position.copy(toScenePosition(positioning.value.absolutePosition));
  // A localized screw replaces its matching workspace reference icon, avoiding
  // a duplicate marker while preserving the original screws that were unseen.
  screwGroup.visible = false;
  addHoverTarget(deviceGroup, `設備：X ${format(telemetry.position.x)}、Y ${format(telemetry.position.y)}、Z ${format(telemetry.position.z)} m；Roll ${format(o.roll)}°、Pitch ${format(o.pitch)}°、Yaw ${format(o.yaw)}°`);
  if (positioning.value.absolutePosition) addHoverTarget(screwGroup, `螺絲：X ${format(positioning.value.absolutePosition.x)}、Y ${format(positioning.value.absolutePosition.y)}、Z ${format(positioning.value.absolutePosition.z)} m`);
  Object.entries(trailLines || {}).forEach(([algorithm, line]) => { const geometry = new THREE.BufferGeometry().setFromPoints((algorithmTrails.value[algorithm] || []).map(toScenePosition)); line.geometry.dispose(); line.geometry = geometry; line.visible = trailVisibility[algorithm]; });
  const workspaceScrews = telemetry.workspace?.screws || rawScrews;
  const localizedScrews = new Map((positioning.value.localizedScrews || []).map((item) => [item.screwId, item]));
  workspaceScrews.forEach((screw) => {
    const group = rawScrewGroups.get(screw.id); if (!group) return;
    const localized = localizedScrews.get(screw.id);
    const displayedPosition = localized?.position || screw;
    group.position.copy(toScenePosition(displayedPosition));
    const typeColor = screw.type.includes('M4') ? 0x2563eb : 0x9333ea;
    group.userData.material.color.setHex(localized || screw.visible ? 0xf59e0b : typeColor);
    group.userData.material.emissive?.setHex(localized || screw.visible ? 0x6b3d00 : 0x000000);
    addHoverTarget(group, `${screw.type} ${screw.id}：X ${format(displayedPosition.x)}、Y ${format(displayedPosition.y)}、Z ${format(displayedPosition.z)} m${localized ? `；已由 ${positioning.value.screwFusionLabel || '螺絲融合'} 更新（${localized.observationCount} 幀）` : screw.visible ? `；已在攝影機視野內，深度 ${format(screw.depth)} m` : '；未進入攝影機辨識範圍'}`);
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
  deviceGroups = Object.fromEntries(Object.entries(trailColors).map(([algorithm, color]) => { const group = createDeviceIcon(color); scene.add(group); return [algorithm, group]; }));
  deviceGroup = new THREE.Group(); const deviceDot = new THREE.Mesh(new THREE.SphereGeometry(.12, 20, 16), new THREE.MeshStandardMaterial({ color: 0x10b981, emissive: 0x046c4e, emissiveIntensity: .35 })); const beam = new THREE.Mesh(new THREE.ConeGeometry(.45, 1.2, 24, 1, true), new THREE.MeshBasicMaterial({ color: 0x34d399, transparent: true, opacity: .2, side: THREE.DoubleSide })); beam.rotation.x = -Math.PI / 2; beam.position.z = .6; deviceGroup.add(deviceDot, beam); scene.add(deviceGroup);
  screwGroup = createScrewIcon(); scene.add(screwGroup); rawScrews.forEach((screw) => { const group = createScrewIcon(screw.type.includes('M4') ? 0x2563eb : 0x9333ea); group.position.copy(toScenePosition(screw)); addHoverTarget(group, `${screw.type} ${screw.id}：X ${screw.x}、Y ${screw.y}、Z ${screw.z} m`); rawScrewGroups.set(screw.id, group); scene.add(group); }); trailLines = Object.fromEntries(Object.entries(trailColors).map(([algorithm, color]) => { const line = new THREE.Line(new THREE.BufferGeometry(), new THREE.LineBasicMaterial({ color })); scene.add(line); return [algorithm, line]; }));
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
    if (await refreshPairedSessions()) return;
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
  if (pairedSessions.value.length) return;
  if (!selectedOperationId.value) return;
  try {
    const params = { source: sourceMode.value, algorithm: fusionAlgorithm.value, screwAlgorithm: screwFusionAlgorithm.value };
    if (sourceMode.value === 'history' && selectedVideo.value?.startedAt) {
      params.at = selectedVideo.value.startedAt * 1000 + currentTime.value * 1000;
      telemetryRecords.value = (await api.get(`/operator-telemetry/${selectedOperationId.value}`, { params: { at: params.at } })).data;
    }
    if (activeDetection.value?._id && activeDetection.value._id !== 'simulated-screw') params.detectionId = activeDetection.value._id;
    positioning.value = (await api.get(`/positioning/latest/${selectedOperationId.value}`, { params })).data;
    if (sourceMode.value === 'live' && positioning.value?.telemetry?.position) {
      liveTrail.value = [...liveTrail.value, { ...positioning.value.telemetry.position }].slice(-80);
    }
    rebuildDatabaseTrail();
    await initThreeScene(); updateThreeScene();
  } catch (err) { error.value = err.response?.data?.error || '無法讀取定位資料。'; }
};
const refreshLiveDetections = async () => {
  if (sourceMode.value !== 'live') return;
  try {
    if (!selectedOperationId.value) { await refreshOperations(); selectedOperationId.value = activeOperation.value?._id || ''; }
    if (!selectedOperationId.value) return;
    const detectionRes = await api.get(`/detections/${selectedOperationId.value}`);
    detections.value = detectionRes.data.sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));
  } catch { /* Keep the last valid detection while the stream is reconnecting. */ }
};
const saveFusion = async () => {
  saving.value = true; message.value = ''; error.value = '';
  try { await api.post('/simulation/config', { fusionAlgorithm: fusionAlgorithm.value, screwFusionAlgorithm: screwFusionAlgorithm.value }); await refreshPositioning(); }
  catch (err) { error.value = err.response?.data?.error || '融合設定傳送失敗。'; }
  finally { saving.value = false; }
};
const saveScrewFusion = async () => {
  saving.value = true; message.value = ''; error.value = '';
  try { await api.post('/simulation/config', { fusionAlgorithm: fusionAlgorithm.value, screwFusionAlgorithm: screwFusionAlgorithm.value }); await refreshPositioning(); }
  catch (err) { error.value = err.response?.data?.error || '螺絲定位融合設定傳送失敗。'; }
  finally { saving.value = false; }
};
const updatePlayback = (event) => { currentTime.value = event.target.currentTime; duration.value = event.target.duration || 0; };
const togglePlayback = async () => { if (videoPlayer.value?.paused) await videoPlayer.value.play(); else videoPlayer.value?.pause(); };
const syncHistoricalFrame = async () => { if (sourceMode.value !== 'history' || !isPlaying.value) return; const second = Math.floor(currentTime.value * 2); if (second === lastHistoryPositionSecond) return; lastHistoryPositionSecond = second; await refreshPositioning(); };
const updatePlaybackAndSync = async (event) => { updatePlayback(event); await syncHistoricalFrame(); };
const seek = async (event) => { if (videoPlayer.value) { videoPlayer.value.currentTime = Number(event.target.value); currentTime.value = Number(event.target.value); if (sourceMode.value === 'history') await refreshPositioning(); } };
const toggleLiveDisplay = async () => { livePaused.value = !livePaused.value; if (!livePaused.value) { liveFrameKey.value += 1; await refreshLiveDetections(); await refreshPositioning(); } };

watch(selectedOperationId, async () => { pairedSessions.value = []; positionTrail.value = []; lastHistoryPositionSecond = -1; if (sourceMode.value === 'history') loadHistory(); else if (!await refreshPairedSessions()) refreshPositioning(); });
watch(viewMode, () => { selectedVideoName.value = modeVideos.value[0]?.filename || ''; currentTime.value = 0; });
watch(fusionAlgorithm, () => { if (sourceMode.value === 'live') { liveTrail.value = []; Object.keys(trailVisibility).forEach((algorithm) => { trailVisibility[algorithm] = algorithm === fusionAlgorithm.value; }); } });
watch(sourceMode, async () => {
  if (sourceMode.value === 'history') {
    await refreshOperations();
    selectedOperationId.value = historyOperations.value[0]?._id || '';
    if (!selectedOperationId.value) { videos.value = []; detections.value = []; positioning.value = null; }
  } else {
    liveTrail.value = [];
    Object.keys(trailVisibility).forEach((algorithm) => { trailVisibility[algorithm] = algorithm === fusionAlgorithm.value; });
    selectedOperationId.value = activeOperation.value?._id || '';
    await refreshLiveDetections(); await refreshPositioning();
  }
});
onMounted(async () => {
  try {
    const [ops, config] = await Promise.all([api.get('/operations'), api.get('/simulation/config')]);
    operations.value = ops.data; fusionAlgorithm.value = config.data.fusionAlgorithm; screwFusionAlgorithm.value = config.data.screwFusionAlgorithm || 'average';
    selectedOperationId.value = historyOperations.value[0]?._id || '';
    positionTimer = window.setInterval(async () => {
      if (pollBusy || sourceMode.value !== 'live') return;
      pollBusy = true;
      try {
        await refreshOperations();
        const op = activeOperation.value?._id || '';
        if (op !== selectedOperationId.value) selectedOperationId.value = op;
        if (await refreshPairedSessions()) return;
        if (!livePaused.value) { simulationTick.value += 1; await refreshLiveDetections(); await refreshPositioning(); }
      } catch { /* Retry discovery on next tick. */ }
      finally { pollBusy = false; }
    }, 500);
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
      <template v-else><label>作業<select v-model="selectedOperationId" :disabled="!historyOperations.length"><option v-if="!historyOperations.length" value="">無歷史紀錄</option><option v-else value="" disabled>選擇歷史作業</option><option v-for="op in historyOperations" :key="op._id" :value="op._id">{{ new Date(op.startTime).toLocaleString('zh-TW') }}</option></select></label><label v-if="!pairedSessions.length" class="video-select-control">影片<select v-model="selectedVideoName" :disabled="!modeVideos.length"><option v-if="!modeVideos.length" value="">無歷史紀錄</option><option v-for="video in modeVideos" :key="video.filename" :value="video.filename">{{ video.filename }}</option></select></label></template>
      <label class="switch-control"><input v-model="showDetections" type="checkbox" /> 顯示螺絲偵測</label>
      <div class="segmented-control"><button :class="{ active: viewMode === 'color' }" type="button" @click="viewMode = 'color'">光學影像</button><button :class="{ active: viewMode === 'depth' }" type="button" @click="viewMode = 'depth'">深度影像</button></div>
    </div>
    <RgbdViewer v-if="pairedSessions.length" :key="`${sourceMode}-${selectedOperationId}`" :operation-id="selectedOperationId" :mode="sourceMode" :view="viewMode" :sessions="pairedSessions" :show-detections="showDetections" />
    <template v-else>
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
        <section v-if="positioning" class="side-section screw-position-card"><h3>螺絲定位</h3><label class="screw-fusion-control">螺絲定位融合演算法<select v-model="screwFusionAlgorithm" :disabled="saving" @change="saveScrewFusion"><option value="average">平均法（多幀座標平均）</option><option value="ekf">EKF（靜態位置濾波）</option><option value="es_ekf">ESKF（誤差狀態濾波）</option><option value="rmv_fgo">RMV-FGO（強健多視角因子圖）</option></select></label><template v-if="positioning.detection"><p>{{ displayName }}　深度 {{ activeDetection?.depth }}</p><p>模型：{{ positioning.detection.detectionAlgorithm }}<br>設備 UWB + IMU：{{ positioning.fusionAlgorithm }}</p><p>相機／設備座標：{{ format(positioning.cameraPosition.x) }}, {{ format(positioning.cameraPosition.y) }}, {{ format(positioning.cameraPosition.z) }} m</p><p>螺絲相機座標：{{ format(positioning.screwCameraPosition?.x) }}, {{ format(positioning.screwCameraPosition?.y) }}, {{ format(positioning.screwCameraPosition?.z) }} m</p><p>原始絕對座標：{{ format(positioning.rawAbsolutePosition?.x) }}, {{ format(positioning.rawAbsolutePosition?.y) }}, {{ format(positioning.rawAbsolutePosition?.z) }} m</p><p class="absolute-position">{{ positioning.screwFusionLabel || '螺絲融合' }}結果：{{ format(positioning.absolutePosition?.x) }}, {{ format(positioning.absolutePosition?.y) }}, {{ format(positioning.absolutePosition?.z) }} m</p><small v-if="positioning.screwLocalization">觀測 {{ positioning.screwLocalization.observationCount }} 幀｜創新量 {{ format(positioning.screwLocalization.innovation) }} m｜1σ {{ format(positioning.screwLocalization.uncertainty?.x) }}, {{ format(positioning.screwLocalization.uncertainty?.y) }}, {{ format(positioning.screwLocalization.uncertainty?.z) }} m</small><small v-else></small></template><p v-else class="no-screw-localization">尚未偵測到螺絲；選擇的演算法會在下一筆螺絲觀測到達後套用。</p></section>
      </aside>
    </div>
    <section v-if="positioning" class="telemetry-dashboard">
      <div class="position-scene-card"><div class="scene-heading"><div><h3>操作空間建模</h3></div><span>拖曳可旋轉、滾輪可縮放；停留於圖示可查看座標</span></div><p class="nearby-screw-alert" :class="{ inactive: !positioning.workspace?.notification }">{{ positioning.workspace?.notification ? `提示：${positioning.workspace.notification}` : '附近目前沒有螺絲。' }}</p><div ref="sceneContainer" class="three-scene"><div ref="sceneTooltip" class="three-tooltip"></div></div><div class="scene-legend"><span><i class="legend-anchor"></i>基地站</span><span><i class="legend-device"></i>設備／攝影機光錐</span><span><i class="legend-screw"></i>M4（藍）／M6（紫）；金色為可辨識</span></div></div>
      <aside class="fusion-data-card"><h3>UWB + IMU 融合資料</h3><div class="current-position"><strong>融合輸出設備位置</strong><span>X {{ format(positioning.telemetry.position.x) }}　Y {{ format(positioning.telemetry.position.y) }}　Z {{ format(positioning.telemetry.position.z) }} m</span></div><div class="sensor-columns"><div><h4>UWB：8 個基地站距離（m）</h4><div class="uwb-range-grid"><span v-for="range in (positioning.telemetry.uwbRanges || [])" :key="range.stationId">站 {{ range.stationId + 1 }}：{{ format(range.distance) }}</span></div></div><div class="imu-readout"><h4>IMU 即時量測</h4><p>加速度：{{ format(positioning.telemetry.imu?.acceleration?.x) }}, {{ format(positioning.telemetry.imu?.acceleration?.y) }}, {{ format(positioning.telemetry.imu?.acceleration?.z) }} m/s²</p><p>角速度：{{ format(positioning.telemetry.imu?.gyroscope?.x) }}, {{ format(positioning.telemetry.imu?.gyroscope?.y) }}, {{ format(positioning.telemetry.imu?.gyroscope?.z) }} °/s</p><p>姿態：Roll {{ format(positioning.telemetry.orientation.roll) }}°、Pitch {{ format(positioning.telemetry.orientation.pitch) }}°、Yaw {{ format(positioning.telemetry.orientation.yaw) }}°</p></div></div><label v-if="sourceMode === 'live'">UWB + IMU 融合演算法<select v-model="fusionAlgorithm" @change="saveFusion"><option value="ekf">Error-State Extended Kalman Filter (ES-EKF)</option><option value="complementary">Complementary Filter</option><option value="weighted_average">Weighted Average</option></select></label><div v-else class="path-algorithm-menu"><strong>演算法路徑</strong><label class="trail-toggle trail-ekf"><input v-model="trailVisibility.ekf" type="checkbox" @change="updateThreeScene" /><span>ES-EKF</span></label><label class="trail-toggle trail-complementary"><input v-model="trailVisibility.complementary" type="checkbox" @change="updateThreeScene" /><span>互補濾波</span></label><label class="trail-toggle trail-weighted"><input v-model="trailVisibility.weighted_average" type="checkbox" @change="updateThreeScene" /><span>加權平均</span></label></div><RouterLink class="calibration-link" to="/settings/camera-extrinsics">設定 RGB-D 相機外參 →</RouterLink></aside>
    </section>
    </template>
    <p v-if="message" class="success">{{ message }}</p><p v-if="error" class="alert">{{ error }}</p>
  </section>
</template>
