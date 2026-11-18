<script setup>
import { onMounted, reactive, ref } from 'vue';
import api from '../api';
import { session } from '../auth';

const path = '/calibration/camera-intrinsics/default';
const keys = ['width', 'height', 'fx', 'fy', 'cx', 'cy'];
const labels = {
  width: '寬度（px）', height: '高度（px）', fx: '水平焦距 fx（px）',
  fy: '垂直焦距 fy（px）', cx: '主點 cx（px）', cy: '主點 cy（px）'
};
const profile = ref(null);
const form = reactive(Object.fromEntries(keys.map(key => [key, ''])));
const enabled = ref(false);
const loading = ref(true);
const saving = ref(false);
const error = ref('');
const message = ref('');

function apply(data) {
  if (typeof data?.enabled !== 'boolean') throw new Error('Invalid calibration response');
  profile.value = data;
  enabled.value = data.enabled;
  for (const key of keys) form[key] = data[key] ?? '';
}

async function load() {
  loading.value = true;
  error.value = '';
  try { apply((await api.get(path)).data); }
  catch { error.value = '無法讀取內參，請確認後端已部署相機內參 API。'; }
  finally { loading.value = false; }
}

async function save() {
  if (!profile.value || loading.value || saving.value) return;
  error.value = '';
  message.value = '';
  const body = enabled.value ? { enabled: true, ...form } : { enabled: false };
  if (body.enabled && (!keys.every(key => Number.isFinite(body[key])) ||
    !Number.isInteger(body.width) || !Number.isInteger(body.height) ||
    body.width <= 0 || body.height <= 0 || body.width * body.height > 4096 * 2160 ||
    body.fx <= 0 || body.fy <= 0 || body.cx < 0 || body.cy < 0 ||
    body.cx >= body.width || body.cy >= body.height)) {
    error.value = '請輸入有效的解析度、正焦距，以及位於影像範圍內的主點。';
    return;
  }
  saving.value = true;
  try {
    apply((await api.put(path, body, {
      headers: { Authorization: `Bearer ${session.value?.token || ''}` }
    })).data);
    message.value = enabled.value ? '內參已儲存，AI 將在後續偵測影格套用。' : '已儲存，AI 將使用邊緣端封包內參。';
  } catch (err) {
    error.value = err.response?.status === 401 ? '登入已失效，請重新登入後再儲存。'
      : '無法儲存內參，請確認連線後重試。';
  } finally {
    saving.value = false;
  }
}

onMounted(load);
</script>

<template>
  <article class="panel calibration-panel">
    <div>
      <h3>相機內參</h3>
      <p class="calibration-lead">適用於預設 RGB-D 相機（default）。請填入深度對齊彩色後的校正值；解析度不符時，AI 會跳過該影格的定位。</p>
    </div>
    <p v-if="loading" class="placeholder">正在載入內參設定…</p>
    <template v-else-if="!profile">
      <p class="alert" role="alert">{{ error }}</p>
      <div class="calibration-actions"><button type="button" class="secondary-button" @click="load">重新讀取</button></div>
    </template>
    <form v-else class="intrinsics-form" @submit.prevent="save">
      <p class="calibration-saved">
        已儲存來源：{{ profile.enabled ? '平台設定內參' : '邊緣端封包內參' }}
        <template v-if="profile.revision">（版本 {{ profile.revision }}）</template>
      </p>
      <label class="intrinsics-source">內參來源
        <select v-model="enabled" :disabled="saving" @change="message = ''">
          <option :value="false">使用邊緣端封包內參</option>
          <option :value="true">使用平台設定內參</option>
        </select>
      </label>
      <p class="calibration-saved">{{ enabled ? '在下方調整內參；儲存後，AI 將優先使用平台設定。' : 'AI 使用影像封包隨附的內參，不需在平台填寫數值。' }} 切換來源後需按儲存才會生效。</p>
      <div v-if="enabled" class="extrinsics-grid">
        <fieldset :disabled="saving">
          <legend>影像解析度</legend>
          <label v-for="key in keys.slice(0, 2)" :key="key">{{ labels[key] }}
            <input v-model.number="form[key]" type="number" min="1" step="1" required />
          </label>
        </fieldset>
        <fieldset :disabled="saving">
          <legend>焦距與主點</legend>
          <label v-for="key in keys.slice(2)" :key="key">{{ labels[key] }}
            <input v-model.number="form[key]" type="number" min="0" step="any" required />
          </label>
        </fieldset>
      </div>
      <p v-if="message" class="success" role="status">{{ message }}</p>
      <p v-if="error" class="alert" role="alert">{{ error }}</p>
      <div class="calibration-actions"><button type="submit" :disabled="saving">{{ saving ? '儲存中…' : '儲存內參設定' }}</button></div>
    </form>
  </article>
</template>

<style scoped>
.intrinsics-form { display: grid; gap: 14px; }
.intrinsics-source { display: grid; gap: 8px; width: min(100%, 420px); }
.intrinsics-source select { width: 100%; }
.intrinsics-source option { color: #111827; background: #fff; }
.calibration-saved { overflow-wrap: anywhere; }
</style>
