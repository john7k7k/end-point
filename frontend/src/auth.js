import { computed, ref } from 'vue';

const storageKey = 'vision-portal-session';
const savedSession = (() => { try { return JSON.parse(localStorage.getItem(storageKey) || 'null'); } catch { return null; } })();
export const session = ref(savedSession && savedSession.token && savedSession.user ? savedSession : null);
export const isAuthenticated = computed(() => Boolean(session.value?.token));
export const currentUser = computed(() => session.value?.user || null);

export const setSession = (nextSession) => { session.value = nextSession; localStorage.setItem(storageKey, JSON.stringify(nextSession)); };
export const logout = () => { session.value = null; localStorage.removeItem(storageKey); };
