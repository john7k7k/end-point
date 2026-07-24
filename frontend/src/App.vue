<script setup>
import { RouterView, RouterLink, useRoute } from 'vue-router';
import { computed } from 'vue';

const route = useRoute();

const navGroups = [
  {
    title: '首頁',
    items: [{ label: '首頁', to: '/', icon: '◉' }]
  },
  {
    title: '帳戶設定',
    items: [
      { label: '登入註冊', to: '/account/login', icon: '◌' },
      { label: '基本資料', to: '/account/profile', icon: '◌' },
      { label: '密碼修改', to: '/account/password', icon: '◌' }
    ]
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
    items: [
      { label: '物件資料', to: '/history/object', icon: '◌' },
      { label: '施工任務', to: '/history/tasks', icon: '◌' },
      { label: '操作紀錄', to: '/history/operations', icon: '◌' }
    ]
  },
  {
    title: '媒體資料',
    items: [
      { label: '影像串流', to: '/media/stream', icon: '◌' },
      { label: '語音提示', to: '/media/voice', icon: '◌' }
    ]
  }
];

const currentTitle = computed(() => {
  const matched = navGroups.flatMap((group) => group.items).find((item) => item.to === route.path);
  return matched?.label || '首頁';
});
</script>

<template>
  <div class="app-shell">
    <aside class="sidebar">
      <div class="brand">
        <div class="brand-mark">V</div>
        <div>
          <p class="brand-eyebrow">終端定位平台</p>
          <h2>Vision Portal</h2>
        </div>
      </div>

      <nav class="nav-section" v-for="group in navGroups" :key="group.title">
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
