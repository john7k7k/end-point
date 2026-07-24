<script setup>
import { computed, onMounted, ref } from 'vue';
import api from '../api';

const users = ref([]);
const operations = ref([]);
const detections = ref([]);
const loading = ref(true);
const error = ref('');

const formatTime = (value) => value ? new Date(value).toLocaleString('zh-TW') : '—';
const activeOperation = computed(() => operations.value.find((item) => !item.endTime));
const summaryCards = computed(() => [
  { title: '使用者數', value: users.value.length, detail: '資料庫已建立的使用者' },
  { title: '作業紀錄', value: operations.value.length, detail: '所有作業資料' },
  { title: '辨識結果', value: detections.value.length, detail: '所有物件辨識資料' }
]);

const loadData = async () => {
  loading.value = true;
  error.value = '';
  try {
    const [usersRes, operationsRes, detectionsRes] = await Promise.all([
      api.get('/users'), api.get('/operations'), api.get('/detections')
    ]);
    users.value = usersRes.data;
    operations.value = operationsRes.data;
    detections.value = detectionsRes.data;
  } catch (err) {
    error.value = err.response?.data?.error || '無法讀取資料庫資料，請確認後端服務與 MongoDB 是否已啟動。';
  } finally {
    loading.value = false;
  }
};

onMounted(loadData);
</script>

<template>
  <section class="page-card">
    <div class="section-title">
      <p class="eyebrow">Dashboard</p>
      <h2>系統總覽</h2>
    </div>

    <p v-if="loading" class="placeholder">正在讀取資料庫資料…</p>
    <template v-else>
      <div class="summary-grid">
        <article v-for="card in summaryCards" :key="card.title" class="summary-card">
          <p class="summary-label">{{ card.title }}</p>
          <h3>{{ card.value }}</h3>
          <p class="summary-note">{{ card.detail }}</p>
        </article>
      </div>

      <div class="content-grid">
        <article class="panel">
          <h3>目前作業</h3>
          <template v-if="activeOperation">
            <p><strong>作業 ID：</strong>{{ activeOperation._id }}</p>
            <p><strong>使用者：</strong>{{ activeOperation.userId?.name || activeOperation.userId?.email || '未提供' }}</p>
            <p><strong>開始時間：</strong>{{ formatTime(activeOperation.startTime) }}</p>
            <p><strong>說明：</strong>{{ activeOperation.description || '—' }}</p>
          </template>
          <p v-else class="placeholder">目前沒有進行中的作業。</p>
        </article>

        <article class="panel">
          <h3>最新辨識結果</h3>
          <table v-if="detections.length" class="table">
            <thead><tr><th>時間</th><th>物件</th><th>深度</th></tr></thead>
            <tbody>
              <tr v-for="item in detections.slice(0, 6)" :key="item._id">
                <td>{{ formatTime(item.timestamp) }}</td>
                <td>{{ item.objectClass || '未分類' }}</td>
                <td>{{ item.depth ?? '—' }}</td>
              </tr>
            </tbody>
          </table>
          <p v-else class="placeholder">尚無辨識資料。</p>
        </article>
      </div>
      <p v-if="error" class="alert">{{ error }}</p>
    </template>
  </section>
</template>
