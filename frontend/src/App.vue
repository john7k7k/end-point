<script setup>
import { RouterView, RouterLink, useRoute, useRouter } from 'vue-router';
import { computed } from 'vue';
import { currentUser, isAuthenticated, logout } from './auth';

const route = useRoute();
const router = useRouter();

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
const openLogin = () => router.push('/account/login');
const signOut = () => { logout(); router.push('/guide'); };
</script>

<template>
  <div class="app-shell">
    <aside class="sidebar">
      <div class="brand">
        <div class="brand-mark">V</div>
        <div>
          <p class="brand-eyebrow">終端定位平台</p>
          <div class="brand-title-row"><h2>Vision Portal</h2><div v-if="isAuthenticated" class="brand-user-actions"><span>{{ currentUser?.name }}</span><button type="button" class="brand-logout" @click="signOut">登出</button></div><button v-else type="button" class="brand-login" @click="openLogin">登入</button></div>
        </div>
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
        <div>
          <p class="eyebrow">{{ currentTitle }}</p>
          <h1>終端定位系統管理介面</h1>
        </div>
        <div class="topbar-badge">已連線</div>
      </header>
      <RouterView />
    </main>
  </div>
</template>
