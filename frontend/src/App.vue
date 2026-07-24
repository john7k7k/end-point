<script setup>
import { RouterView, RouterLink, useRoute, useRouter } from 'vue-router';
import { computed, ref } from 'vue';
import { currentUser, isAuthenticated, logout } from './auth';

const route = useRoute();
const router = useRouter();
const isLightTheme = ref(localStorage.getItem('vision-portal-theme') === 'light');

const navGroups = [
  {
    title: '平台總覽',
    requiresAuth: true,
    items: [{ label: '首頁', to: '/', icon: '◉' }]
  },
  {
    title: '系統介紹',
    items: [
      { label: '操作指引', to: '/guide', icon: '◌' },
      { label: '定位技術', to: '/technology', icon: '◌' }
    ]
  },
  {
    title: '歷史資料',
    requiresAuth: true,
    items: [
      { label: '物件資料', to: '/history/object', icon: '◌' },
      { label: '施工任務', to: '/history/tasks', icon: '◌' },
      { label: '操作紀錄', to: '/history/operations', icon: '◌' }
    ]
  },
  {
    title: '媒體資料',
    requiresAuth: true,
    items: [
      { label: '影像串流', to: '/media/stream', icon: '◌' },
      { label: '語音提示', to: '/media/voice', icon: '◌' }
    ]
  }
];

const visibleNavGroups = computed(() => navGroups.filter((group) => !group.requiresAuth || isAuthenticated.value));

const currentTitle = computed(() => {
  const matched = navGroups.flatMap((group) => group.items).find((item) => item.to === route.path);
  return matched?.label || '首頁';
});
const openAccount = (mode = 'login') => router.push({ path: '/account/login', query: { mode } });
const signOut = () => { logout(); router.push('/guide'); };
const toggleTheme = () => { isLightTheme.value = !isLightTheme.value; localStorage.setItem('vision-portal-theme', isLightTheme.value ? 'light' : 'dark'); };
</script>

<template>
  <div class="app-shell" :class="{ 'theme-light': isLightTheme }">
    <aside class="sidebar">
      <div class="brand">
        <div class="brand-mark">V</div>
        <div class="brand-content">
          <p class="brand-eyebrow">終端定位平台</p>
          <div class="brand-title-row"><h2>Vision Portal</h2></div>
        </div>
        <div v-if="isAuthenticated" class="brand-account-actions"><RouterLink class="user-avatar" to="/account/profile">{{ currentUser?.name?.charAt(0).toUpperCase() }}</RouterLink><div class="account-hover-card"><strong>{{ currentUser?.name }}</strong><span>{{ currentUser?.email }}</span><small>點擊頭貼查看帳戶資料</small></div></div><div v-else class="brand-account-actions"><button type="button" class="brand-login" @click="openAccount('login')">登入</button></div>
      </div>

      <nav class="nav-section" v-for="group in visibleNavGroups" :key="group.title">
        <p class="nav-group-title">{{ group.title }}</p>
        <RouterLink v-for="item in group.items" :key="item.to" class="nav-link" :to="item.to" exact-active-class="active">
          <span class="icon">{{ item.icon }}</span>
          <span>{{ item.label }}</span>
        </RouterLink>
      </nav>
    </aside>

    <main class="main-panel">
      <header class="topbar">
        <h1>{{ currentTitle }}</h1>
        <div class="topbar-actions"><button type="button" class="theme-toggle" @click="toggleTheme">{{ isLightTheme ? '◐ 夜間' : '☀ 白天' }}</button><div class="topbar-badge">已連線</div></div>
      </header>
      <RouterView />
    </main>
  </div>
</template>
