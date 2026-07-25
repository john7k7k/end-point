<script setup>
import { computed, onMounted, reactive, ref } from 'vue';
import api from '../api';

const loading = ref(true);
const saving = ref(false);
const message = ref('');
const error = ref('');
const savedAt = ref('');
const form = reactive({
  translation: { x: 0, y: 0, z: 0 },
  rotationDegrees: { x: 0, y: 0, z: 0 }
});

const radians = (degree) => Number(degree || 0) * Math.PI / 180;
const rotationMatrix = computed(() => {
  const roll = radians(form.rotationDegrees.x);
  const pitch = radians(form.rotationDegrees.y);
  const yaw = radians(form.rotationDegrees.z);
  const [cr, sr] = [Math.cos(roll), Math.sin(roll)];
  const [cp, sp] = [Math.cos(pitch), Math.sin(pitch)];
  const [cy, sy] = [Math.cos(yaw), Math.sin(yaw)];
  return [
    [cy * cp, cy * sp * sr - sy * cr, cy * sp * cr + sy * sr],
    [sy * cp, sy * sp * sr + cy * cr, sy * sp * cr - cy * sr],
    [-sp, cp * sr, cp * cr]
  ];
});
const matrixText = computed(() => rotationMatrix.value.map((row) => row.map((value) => value.toFixed(6)).join('   ')).join('\n'));

const applyCalibration = (calibration) => {
  for (const axis of ['x', 'y', 'z']) {
    form.translation[axis] = calibration.translation?.[axis] ?? 0;
    form.rotationDegrees[axis] = calibration.rotationDegrees?.[axis] ?? 0;
  }
  savedAt.value = calibration.updatedAt ? new Date(calibration.updatedAt).toLocaleString('zh-TW') : '';
};

const loadCalibration = async () => {
  loading.value = true;
  error.value = '';
  try { applyCalibration((await api.get('/calibration/camera-extrinsics')).data); }
  catch (requestError) { error.value = requestError.response?.data?.error || '無法讀取相機外參設定。'; }
  finally { loading.value = false; }
};

const saveCalibration = async () => {
  saving.value = true;
  error.value = '';
  message.value = '';
  try {
    const calibration = (await api.put('/calibration/camera-extrinsics', {
      translation: { ...form.translation },
      rotationDegrees: { ...form.rotationDegrees }
    })).data;
    applyCalibration(calibration);
    message.value = '相機外參已儲存，後端與 AI 可透過校正 API 讀取此設定。';
  } catch (requestError) {
    error.value = requestError.response?.data?.error || '儲存相機外參失敗。';
  } finally { saving.value = false; }
};

const reset = () => {
  applyCalibration({ translation: { x: 0, y: 0, z: 0 }, rotationDegrees: { x: 0, y: 0, z: 0 } });
  message.value = '';
  error.value = '';
};

onMounted(loadCalibration);
</script>

<template>
  <section class="page-card calibration-page">
    <div class="section-title">
      <p class="eyebrow">Calibration</p>
      <h2>相機外參校正</h2>
      <p class="calibration-lead">設定深度相機座標系 C 轉換至設備／IMU 座標系 B 的固定外參：<code>p<sup>B</sup> = R<sub>C</sub><sup>B</sup> p<sup>C</sup> + t<sub>C</sub><sup>B</sup></code>。</p>
    </div>

    <article class="panel calibration-panel">
      <p v-if="loading" class="placeholder">正在載入校正設定…</p>
      <template v-else>
        <div class="calibration-reference">
          <div><strong>設備／IMU 座標 B</strong><span>X：設備前方　Y：左方　Z：上方</span></div>
          <div><strong>RGB-D 相機座標 C</strong><span>X：影像右方　Y：影像下方　Z：鏡頭前方</span></div>
        </div>

        <div class="extrinsics-grid">
          <fieldset>
            <legend>平移 t<sub>C</sub><sup>B</sup>（公尺）</legend>
            <label v-for="axis in ['x', 'y', 'z']" :key="`translation-${axis}`">{{ axis.toUpperCase() }}
              <input v-model.number="form.translation[axis]" type="number" step="0.001" aria-label="translation axis" />
            </label>
          </fieldset>
          <fieldset>
            <legend>旋轉 R<sub>C</sub><sup>B</sup>（Euler 角，度）</legend>
            <label>Roll（繞 X 軸）<input v-model.number="form.rotationDegrees.x" type="number" step="0.1" min="-360" max="360" /></label>
            <label>Pitch（繞 Y 軸）<input v-model.number="form.rotationDegrees.y" type="number" step="0.1" min="-360" max="360" /></label>
            <label>Yaw（繞 Z 軸）<input v-model.number="form.rotationDegrees.z" type="number" step="0.1" min="-360" max="360" /></label>
          </fieldset>
        </div>

        <div class="matrix-card">
          <div><strong>計算後的旋轉矩陣 R<sub>C</sub><sup>B</sup></strong><small>採用 Z(Yaw) → Y(Pitch) → X(Roll) 的旋轉順序。</small></div>
          <pre>{{ matrixText }}</pre>
        </div>
        <p v-if="savedAt" class="calibration-saved">最後儲存：{{ savedAt }}</p>
        <p v-if="message" class="success">{{ message }}</p>
        <p v-if="error" class="alert">{{ error }}</p>
        <div class="calibration-actions"><button type="button" class="secondary-button" :disabled="saving" @click="reset">重設為零值</button><button type="button" :disabled="saving" @click="saveCalibration">{{ saving ? '儲存中…' : '儲存外參設定' }}</button></div>
      </template>
    </article>
  </section>
</template>
