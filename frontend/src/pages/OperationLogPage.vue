<script setup>
import { onMounted, ref } from 'vue';
import api from '../api';

const operations = ref([]);
const loading = ref(true);
const error = ref('');
const formatTime = (value) => value ? new Date(value).toLocaleString('zh-TW') : '—';

onMounted(async () => {
  try { operations.value = (await api.get('/operations')).data; }
  catch { error.value = '無法讀取操作紀錄。'; }
  finally { loading.value = false; }
});
</script>

<template>
  <section class="page-card">
    <div class="section-title"><p class="eyebrow">History</p><h2>操作紀錄</h2></div>
    <p v-if="loading" class="placeholder">正在讀取資料…</p>
    <table v-else-if="operations.length" class="table">
      <thead><tr><th>作業 ID</th><th>開始時間</th><th>結束時間</th><th>說明</th></tr></thead>
      <tbody>
        <tr v-for="operation in operations" :key="operation._id">
          <td>{{ operation._id }}</td><td>{{ formatTime(operation.startTime) }}</td><td>{{ formatTime(operation.endTime) }}</td><td>{{ operation.description || '—' }}</td>
        </tr>
      </tbody>
    </table>
    <p v-else class="placeholder">尚無操作紀錄。</p>
    <p v-if="error" class="alert">{{ error }}</p>
  </section>
</template>
