<script setup>
import { computed, onMounted, onUnmounted, ref, watch } from 'vue';
import api from '../api';

const operations = ref([]), videos = ref([]), detections = ref([]);
const sourceMode = ref('history'), selectedOperationId = ref(''), selectedVideoName = ref('');
const viewMode = ref('color'), fusionAlgorithm = ref('ekf'), showDetections = ref(true);
const currentTime = ref(0), duration = ref(0), isPlaying = ref(false), videoPlayer = ref(null);
const positioning = ref(null), loading = ref(true), saving = ref(false), error = ref(''), message = ref('');
let positionTimer;

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
  _id: 'simulated-screw', objectClass: '螺絲', depth: 120,
  bbox: { x: 860, y: 465, width: 200, height: 150 }
}));
const activeDetection = computed(() => {
  if (sourceMode.value === 'live') return detections.value.at(-1) || simulatedScrew.value;
  if (!selectedVideoDetections.value.length) return simulatedScrew.value;
  const startedAt = new Date(selectedVideoDetections.value[0].timestamp).getTime() || (selectedVideo.value?.startedAt ? selectedVideo.value.startedAt * 1000 : null);
  if (!startedAt) return selectedVideoDetections.value[0] || simulatedScrew.value;
  const target = startedAt + currentTime.value * 1000;
  return selectedVideoDetections.value.reduce((closest, item) =>
    Math.abs(new Date(item.timestamp).getTime() - target) < Math.abs(new Date(closest.timestamp).getTime() - target) ? item : closest
  );
});
const displayName = computed(() => ['example_object', 'screw_simulated'].includes(activeDetection.value.objectClass) ? '螺絲' : activeDetection.value.objectClass);
const liveStreamUrl = computed(() => `http://localhost:8889/${viewMode.value === 'depth' ? 'cam-depth' : 'cam-color'}`);
const cubeStyle = computed(() => {
  const o = positioning.value?.telemetry.orientation || { roll: 0, pitch: 0, yaw: 0 };
  return { transform: `rotateX(${o.roll}deg) rotateY(${o.pitch}deg) rotateZ(${o.yaw}deg)` };
});
const format = (value) => Number(value ?? 0).toFixed(3);

const loadHistory = async () => {
  videos.value = []; detections.value = []; selectedVideoName.value = ''; currentTime.value = 0;
  if (!selectedOperationId.value) return;
  try {
    const [videoRes, detectionRes] = await Promise.all([api.get(`/videos/${selectedOperationId.value}`), api.get(`/detections/${selectedOperationId.value}`)]);
    videos.value = videoRes.data;
    detections.value = detectionRes.data.sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));
    selectedVideoName.value = modeVideos.value[0]?.filename || '';
    await refreshPositioning();
  } catch (err) { error.value = err.response?.data?.error || '無法讀取歷史影片或偵測資料。'; }
};
const refreshPositioning = async () => {
  if (!selectedOperationId.value) return;
  try {
    const params = activeDetection.value._id !== 'simulated-screw' ? { detectionId: activeDetection.value._id } : {};
    positioning.value = (await api.get(`/positioning/latest/${selectedOperationId.value}`, { params })).data;
  } catch (err) { error.value = err.response?.data?.error || '無法讀取定位資料。'; }
};
const refreshLiveDetections = async () => {
  if (!selectedOperationId.value || sourceMode.value !== 'live') return;
  try {
    detections.value = (await api.get(`/detections/${selectedOperationId.value}`)).data.sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));
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
const seek = (event) => { if (videoPlayer.value) videoPlayer.value.currentTime = Number(event.target.value); };

watch(selectedOperationId, () => { if (sourceMode.value === 'history') loadHistory(); else refreshPositioning(); });
watch(viewMode, () => { selectedVideoName.value = modeVideos.value[0]?.filename || ''; currentTime.value = 0; });
watch(sourceMode, () => {
  selectedOperationId.value = sourceMode.value === 'live' ? activeOperation.value?._id || '' : historyOperations.value[0]?._id || '';
  if (sourceMode.value === 'live') { refreshLiveDetections(); refreshPositioning(); }
});
onMounted(async () => {
  try {
    const [ops, config] = await Promise.all([api.get('/operations'), api.get('/simulation/config')]);
    operations.value = ops.data; fusionAlgorithm.value = config.data.fusionAlgorithm;
    selectedOperationId.value = historyOperations.value[0]?._id || '';
    positionTimer = window.setInterval(async () => { await refreshLiveDetections(); await refreshPositioning(); }, 1000);
  } catch { error.value = '無法讀取系統資料。'; }
  finally { loading.value = false; }
});
onUnmounted(() => window.clearInterval(positionTimer));
</script>

<template>
  <section class="page-card">
    <div class="section-title"><p class="eyebrow">Media</p><h2>影像串流與末端定位</h2></div>
    <div class="media-controls">
      <div class="segmented-control"><button :class="{ active: sourceMode === 'history' }" type="button" @click="sourceMode = 'history'">歷史影片</button><button :class="{ active: sourceMode === 'live' }" type="button" @click="sourceMode = 'live'">目前串流</button></div>
      <p v-if="sourceMode === 'live'" class="stream-start-time">開始時間：{{ liveStartTime }}</p>
      <template v-else><label>作業<select v-model="selectedOperationId"><option v-if="historyOperations.length" value="" disabled>選擇歷史作業</option><option v-for="op in historyOperations" :key="op._id" :value="op._id">{{ new Date(op.startTime).toLocaleString('zh-TW') }}</option></select></label><label>影片<select v-model="selectedVideoName" :disabled="!modeVideos.length"><option v-for="video in modeVideos" :key="video.filename" :value="video.filename">{{ video.filename }}</option></select></label></template>
      <label class="switch-control"><input v-model="showDetections" type="checkbox" /> 顯示螺絲偵測</label>
      <div class="segmented-control"><button :class="{ active: viewMode === 'color' }" type="button" @click="viewMode = 'color'">光學影像</button><button :class="{ active: viewMode === 'depth' }" type="button" @click="viewMode = 'depth'">深度影像</button></div>
    </div>
    <p v-if="loading" class="placeholder">正在讀取資料…</p>
    <div v-else class="stream-workspace">
      <div class="stream-main">
        <div v-if="sourceMode === 'live'" class="video-viewport"><iframe :key="liveStreamUrl" class="live-stream-frame" :src="liveStreamUrl" :title="viewMode === 'depth' ? '目前深度串流' : '目前光學串流'" allow="autoplay; fullscreen"></iframe><div v-if="showDetections" class="detection-layer"><div class="detection-box" :class="{ 'label-below': activeDetection.bbox.y < 30 }" :style="{ left: `${(activeDetection.bbox.x / 1920) * 100}%`, top: `${(activeDetection.bbox.y / 1080) * 100}%`, width: `${(activeDetection.bbox.width / 1920) * 100}%`, height: `${(activeDetection.bbox.height / 1080) * 100}%` }"><span>{{ displayName }} · {{ activeDetection.depth }}</span></div></div></div>
        <div v-else-if="selectedVideo" class="video-viewport">
          <video :key="selectedVideo.filename" ref="videoPlayer" class="video-source" :class="{ 'show-depth': selectedVideo.kind === 'combined' && viewMode === 'depth' }" :src="selectedVideo.url" playsinline @loadedmetadata="updatePlayback" @timeupdate="updatePlayback" @play="isPlaying = true" @pause="isPlaying = false" />
          <div v-if="showDetections" class="detection-layer"><div class="detection-box" :class="{ 'label-below': activeDetection.bbox.y < 30 }" :style="{ left: `${(activeDetection.bbox.x / 1920) * 100}%`, top: `${(activeDetection.bbox.y / 1080) * 100}%`, width: `${(activeDetection.bbox.width / 1920) * 100}%`, height: `${(activeDetection.bbox.height / 1080) * 100}%` }"><span>{{ displayName }} · {{ activeDetection.depth }}</span></div></div>
          <div class="video-playback-controls"><button type="button" @click="togglePlayback">{{ isPlaying ? '暫停' : '播放' }}</button><input type="range" min="0" :max="duration" step="0.01" :value="currentTime" @input="seek" /><span>{{ Math.floor(currentTime) }} / {{ Math.floor(duration) }} 秒</span></div>
        </div>
        <p v-else class="placeholder">此作業尚未找到歷史影片。</p>
      </div>
      <aside class="stream-sidebar">
        <section class="side-section"><h3>融合設定</h3><label>融合演算法<select v-model="fusionAlgorithm"><option value="ekf">Extended Kalman Filter (EKF)</option><option value="complementary">Complementary Filter</option><option value="weighted_average">Weighted Average</option></select></label><button type="button" :disabled="saving" @click="saveFusion">{{ saving ? '傳送中…' : '套用融合設定' }}</button></section>
        <template v-if="positioning"><section class="side-section"><h3>設備位置</h3><p>X {{ format(positioning.telemetry.position.x) }}　Y {{ format(positioning.telemetry.position.y) }}　Z {{ format(positioning.telemetry.position.z) }} m</p></section><section class="side-section"><h3>設備姿態</h3><div class="orientation-scene"><div class="orientation-cube" :style="cubeStyle">設備</div></div><p>Roll {{ format(positioning.telemetry.orientation.roll) }}°<br>Pitch {{ format(positioning.telemetry.orientation.pitch) }}°<br>Yaw {{ format(positioning.telemetry.orientation.yaw) }}°</p></section><section class="side-section"><h3>螺絲定位</h3><p>{{ displayName }}　深度 {{ activeDetection.depth }}</p><p>模型：{{ positioning.detection.detectionAlgorithm }}<br>融合：{{ positioning.fusionAlgorithm }}</p><p>相機：{{ format(positioning.cameraPosition.x) }}, {{ format(positioning.cameraPosition.y) }}, {{ format(positioning.cameraPosition.z) }} m</p><p class="absolute-position">絕對：{{ format(positioning.absolutePosition.x) }}, {{ format(positioning.absolutePosition.y) }}, {{ format(positioning.absolutePosition.z) }} m</p></section></template>
      </aside>
    </div>
    <p v-if="message" class="success">{{ message }}</p><p v-if="error" class="alert">{{ error }}</p>
  </section>
</template>
