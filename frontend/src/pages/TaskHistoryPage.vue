<script setup>
import { onMounted, ref } from 'vue';
import api from '../api';

const operations = ref([]);
const loading = ref(true);
const error = ref('');
const formatTime = (value) => value ? new Date(value).toLocaleString('zh-TW') : '—';

onMounted(async () => {
  try { operations.value = (await api.get('/operations')).data; }
  catch { error.value = '無法讀取作業紀錄。'; }
  finally { loading.value = false; }
});
</script>

<template>
  <section class="page-card">
    <div class="section-title"><p class="eyebrow">History</p><h2>任務歷程</h2></div>
    <p v-if="loading" class="placeholder">正在讀取資料…</p>
    <table v-else-if="operations.length" class="table">
      <thead><tr><th>開始時間</th><th>結束時間</th><th>使用者</th><th>狀態</th></tr></thead>
      <tbody>
        <tr v-for="operation in operations" :key="operation._id">
          <td>{{ formatTime(operation.startTime) }}</td><td>{{ formatTime(operation.endTime) }}</td>
          <td>{{ operation.userId?.name || operation.userId?.email || '未提供' }}</td>
          <td>{{ operation.endTime ? '已完成' : '進行中' }}</td>
        </tr>
      </tbody>
    </table>
    <p v-else class="placeholder">尚無任務資料。</p>
    <p v-if="error" class="alert">{{ error }}</p>
  </section>
</template>
