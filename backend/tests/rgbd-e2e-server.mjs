// Isolated test harness: never connects to vision_system or starts MQTT/RTSP.
import express from 'express';
import mongoose from 'mongoose';
import { createServer } from '../../frontend/node_modules/vite/dist/node/index.js';
import { fileURLToPath } from 'node:url';
import router from '../src/routes/rgbdRoutes.js';
import Operation from '../src/models/Operation.js';
import RgbdFrame from '../src/models/RgbdFrame.js';
await mongoose.connect('mongodb://127.0.0.1:27017/vision_rgbd_sync_test');
const op = await Operation.create({ userId: new mongoose.Types.ObjectId(), startTime: new Date() });
await RgbdFrame.init();
const app = express(); app.use(express.json()); app.use('/api/rgbd', router);
app.get('/api/calibration/camera-extrinsics', (_req, res) => res.json({ key: 'default', rotationMatrix: [[0,0,1],[-1,0,0],[0,-1,0]], translation: { x:0,y:0,z:0 } }));
app.post('/api/simulation/config', (req, res) => res.json(req.body));
app.post('/api/test/end', async (_req, res) => { await Operation.updateOne({ _id: op._id }, { endTime: new Date() }); res.json({ ended: true }); });
const vite = await createServer({ root: fileURLToPath(new URL('../../frontend', import.meta.url)), configFile: false,
  plugins: [(await import('../../frontend/node_modules/@vitejs/plugin-vue/dist/index.mjs')).default()],
  server: { middlewareMode: true }, appType: 'custom' });
app.get('/', (_req, res) => res.type('html').send(`<!doctype html><html lang="zh-Hant"><meta charset="utf-8"><title>RGB-D 同幀整合測試</title>
<style>body{margin:24px;font:16px Arial;color:#172033;background:#f5f8fc}button{padding:8px;margin:6px}select{padding:8px}h3{margin-top:16px}</style>
<div id="app"></div><script type="module">
import {createApp,ref,h} from '/node_modules/.vite/deps/vue.js';
import Viewer from '/src/components/RgbdViewer.vue';
createApp({setup(){const mode=ref('history'),view=ref('color');return ()=>h('main',[
h('h2','同幀整合測試（隔離資料庫）'),
h('button',{onClick:()=>mode.value=mode.value==='history'?'live':'history'},'切換歷史／即時'),
h('button',{onClick:()=>view.value=view.value==='color'?'depth':'color'},'切換光學／深度'),
h(Viewer,{operationId:'${op._id}',mode:mode.value,view:view.value,sessions:[{_id:'00000000-0000-4000-8000-000000000000'}],showDetections:true})
]);}}).mount('#app');
</script></html>`));
app.use(vite.middlewares);
const server = app.listen(0, '127.0.0.1', () => console.log(JSON.stringify({ port: server.address().port, operationId: String(op._id) })));
async function close() {
  await vite.close(); server.closeAllConnections(); await new Promise(resolve => server.close(resolve));
  await RgbdFrame.deleteMany({ operationId: op._id }); await Operation.deleteOne({ _id: op._id });
  await mongoose.disconnect(); process.exit(0);
}
process.stdin.once('data', close); process.once('SIGTERM', close);
