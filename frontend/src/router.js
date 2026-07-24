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

const routes = [
  { path: '/', name: 'home', component: HomePage },
  { path: '/account/login', name: 'account-login', component: AccountLoginPage },
  { path: '/account/profile', name: 'account-profile', component: AccountProfilePage },
  { path: '/account/password', name: 'account-password', component: AccountPasswordPage },
  { path: '/guide', name: 'guide', component: GuidePage },
  { path: '/technology', name: 'technology', component: TechnologyPage },
  { path: '/history/object', name: 'history-object', component: ObjectQueryPage },
  { path: '/history/tasks', name: 'history-tasks', component: TaskHistoryPage },
  { path: '/history/operations', name: 'history-operations', component: OperationLogPage },
  { path: '/media/stream', name: 'media-stream', component: StreamPage },
  { path: '/media/voice', name: 'media-voice', component: VoicePage }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
