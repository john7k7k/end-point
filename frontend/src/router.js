import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './pages/HomePage.vue';
import AccountLoginPage from './pages/AccountLoginPage.vue';
import AccountProfilePage from './pages/AccountProfilePage.vue';
import AccountPasswordPage from './pages/AccountPasswordPage.vue';
import GuidePage from './pages/GuidePage.vue';
import TechnologyPage from './pages/TechnologyPage.vue';
import ObjectQueryPage from './pages/ObjectQueryPage.vue';
import TaskHistoryPage from './pages/TaskHistoryPage.vue';
import OperationLogPage from './pages/OperationLogPage.vue';
import StreamPage from './pages/StreamPage.vue';
import VoicePage from './pages/VoicePage.vue';
import { isAuthenticated } from './auth';

const routes = [
  { path: '/', name: 'home', component: HomePage, meta: { requiresAuth: true } },
  { path: '/account/login', name: 'account-login', component: AccountLoginPage },
  { path: '/account/profile', name: 'account-profile', component: AccountProfilePage, meta: { requiresAuth: true } },
  { path: '/account/password', name: 'account-password', component: AccountPasswordPage, meta: { requiresAuth: true } },
  { path: '/guide', name: 'guide', component: GuidePage },
  { path: '/technology', name: 'technology', component: TechnologyPage },
  { path: '/history/object', name: 'history-object', component: ObjectQueryPage, meta: { requiresAuth: true } },
  { path: '/history/tasks', name: 'history-tasks', component: TaskHistoryPage, meta: { requiresAuth: true } },
  { path: '/history/operations', name: 'history-operations', component: OperationLogPage, meta: { requiresAuth: true } },
  { path: '/media/stream', name: 'media-stream', component: StreamPage, meta: { requiresAuth: true } },
  { path: '/media/voice', name: 'media-voice', component: VoicePage, meta: { requiresAuth: true } }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach((to) => {
  if (to.meta.requiresAuth && !isAuthenticated.value) return { name: 'account-login', query: { redirect: to.fullPath } };
  if (to.name === 'account-login' && isAuthenticated.value) return { path: '/' };
});

export default router;
