<script setup>
import { onMounted, reactive, ref } from 'vue';
import { useRouter } from 'vue-router';
import api from '../api';
import { currentUser, logout, updateCurrentUser } from '../auth';

const router = useRouter();
const editingField = ref(''), loading = ref(true), saving = ref(false), error = ref('');
const account = ref(null);
const form = reactive({ name: '', email: '' });
const loadAccount = async () => {
  try { account.value = (await api.get(`/users/${currentUser.value.id}`)).data; form.name = account.value.name; form.email = account.value.email; }
  catch (err) { error.value = err.response?.data?.error || '無法讀取帳戶資料。'; }
  finally { loading.value = false; }
};
const startEdit = (field) => { editingField.value = field; error.value = ''; form[field] = account.value[field]; };
const cancelEdit = () => { if (editingField.value) form[editingField.value] = account.value[editingField.value]; editingField.value = ''; error.value = ''; };
const saveField = async (field) => {
  saving.value = true; error.value = '';
  try { const updated = (await api.patch(`/users/${currentUser.value.id}`, { [field]: form[field] })).data; account.value = updated; updateCurrentUser(updated); editingField.value = ''; }
  catch (err) { error.value = err.response?.data?.error || '無法更新帳戶資料。'; }
  finally { saving.value = false; }
};
const signOut = () => { logout(); router.push('/guide'); };
onMounted(loadAccount);
</script>

<template>
  <section class="page-card profile-page">
    <div class="section-title profile-title"><p class="eyebrow">Account</p><h2>帳戶資料</h2></div>
    <article class="panel profile-panel"><p v-if="loading" class="placeholder">正在讀取帳戶資料…</p><template v-else-if="account"><div class="profile-avatar-large">{{ account.name.charAt(0).toUpperCase() }}</div><div class="profile-fields"><div class="profile-field-row"><span class="profile-label">使用者名稱</span><div class="profile-value"><template v-if="editingField === 'name'"><input v-model.trim="form.name" type="text" autofocus @keyup.enter="saveField('name')" /><button type="button" class="field-save" :disabled="saving" @click="saveField('name')">✓</button><button type="button" class="field-cancel" :disabled="saving" @click="cancelEdit">取消</button></template><template v-else><span>{{ account.name }}</span><button type="button" class="field-edit" title="修改使用者名稱" @click="startEdit('name')">✎</button></template></div></div><div class="profile-field-row"><span class="profile-label">電子信箱</span><div class="profile-value"><template v-if="editingField === 'email'"><input v-model.trim="form.email" type="email" autofocus @keyup.enter="saveField('email')" /><button type="button" class="field-save" :disabled="saving" @click="saveField('email')">✓</button><button type="button" class="field-cancel" :disabled="saving" @click="cancelEdit">取消</button></template><template v-else><span>{{ account.email }}</span><button type="button" class="field-edit" title="修改電子信箱" @click="startEdit('email')">✎</button></template></div></div><div class="profile-field-row"><span class="profile-label">註冊時間</span><div class="profile-value"><span>{{ new Date(account.signUpTime).toLocaleString('zh-TW') }}</span></div></div></div><p v-if="error" class="alert">{{ error }}</p><button type="button" class="logout-danger" @click="signOut">登出帳戶</button></template><p v-else class="alert">{{ error }}</p></article>
  </section>
</template>
