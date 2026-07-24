<script setup>
import { reactive, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import api from '../api';
import { setSession } from '../auth';

const router = useRouter();
const route = useRoute();
const mode = ref('login');
const submitting = ref(false);
const error = ref('');
const form = reactive({ name: '', email: '', password: '', confirmPassword: '' });

const switchMode = () => { mode.value = mode.value === 'login' ? 'register' : 'login'; error.value = ''; form.password = ''; form.confirmPassword = ''; };
const submit = async () => {
  error.value = '';
  if (mode.value === 'register' && form.password !== form.confirmPassword) { error.value = '兩次輸入的密碼不一致。'; return; }
  submitting.value = true;
  try {
    const payload = mode.value === 'login' ? { email: form.email, password: form.password } : { name: form.name, email: form.email, password: form.password };
    const response = await api.post(`/auth/${mode.value === 'login' ? 'login' : 'register'}`, payload);
    setSession(response.data);
    router.replace(typeof route.query.redirect === 'string' ? route.query.redirect : '/');
  } catch (err) { error.value = err.response?.data?.error || '目前無法完成帳戶操作，請稍後再試。'; }
  finally { submitting.value = false; }
};
</script>

<template>
  <section class="page-card account-page">
    <div class="section-title"><p class="eyebrow">Account</p><h2>{{ mode === 'login' ? '登入平台' : '建立帳號' }}</h2></div>
    <article class="panel account-panel">
      <form class="form-grid" @submit.prevent="submit">
        <label v-if="mode === 'register'">使用者名稱<input v-model.trim="form.name" type="text" autocomplete="name" required /></label>
        <label>電子信箱<input v-model.trim="form.email" type="email" autocomplete="email" required /></label>
        <label>密碼<input v-model="form.password" type="password" :autocomplete="mode === 'login' ? 'current-password' : 'new-password'" minlength="8" required /></label>
        <label v-if="mode === 'register'">確認密碼<input v-model="form.confirmPassword" type="password" autocomplete="new-password" minlength="8" required /></label>
        <button type="submit" :disabled="submitting">{{ submitting ? '處理中…' : mode === 'login' ? '登入' : '建立帳號' }}</button>
      </form>
      <p v-if="error" class="alert">{{ error }}</p>
      <button type="button" class="account-switch" @click="switchMode">{{ mode === 'login' ? '尚未註冊？建立帳號' : '已有帳號？返回登入' }}</button>
    </article>
  </section>
</template>
