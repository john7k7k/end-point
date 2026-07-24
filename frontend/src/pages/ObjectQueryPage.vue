<script setup>
import { computed, onMounted, ref } from 'vue';
import api from '../api';

const detections = ref([]);
const keyword = ref('');
const loading = ref(true);
const error = ref('');
const formatTime = (value) => value ? new Date(value).toLocaleString('zh-TW') : '—';
const filteredDetections = computed(() => detections.value.filter((item) =>
  item.objectClass?.toLowerCase().includes(keyword.value.toLowerCase())
));

onMounted(async () => {
  try { detections.value = (await api.get('/detections')).data; }
  catch { error.value = '無法讀取辨識資料。'; }
  finally { loading.value = false; }
});
</script>

<template>
  <section class="page-card">
    <div class="section-title"><p class="eyebrow">History</p><h2>物件辨識紀錄</h2></div>
    <input v-model="keyword" type="search" placeholder="依物件名稱篩選" />
    <p v-if="loading" class="placeholder">正在讀取資料…</p>
    <table v-else-if="filteredDetections.length" class="table table-spaced">
      <thead><tr><th>時間</th><th>物件</th><th>深度</th><th>作業 ID</th></tr></thead>
      <tbody><tr v-for="item in filteredDetections" :key="item._id"><td>{{ formatTime(item.timestamp) }}</td><td>{{ item.objectClass || '未分類' }}</td><td>{{ item.depth ?? '—' }}</td><td>{{ item.operationId?._id || item.operationId }}</td></tr></tbody>
    </table>
    <p v-else class="placeholder">沒有符合的辨識資料。</p>
    <p v-if="error" class="alert">{{ error }}</p>
  </section>
</template>
