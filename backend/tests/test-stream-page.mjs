import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {createRequire} from 'node:module';
const requireFrontend=createRequire(new URL('../../frontend/package.json',import.meta.url));
const {parse,compileScript}=requireFrontend('@vue/compiler-sfc');
const vue=requireFrontend('vue'),three=requireFrontend('three');
const source=readFileSync(new URL('../../frontend/src/pages/StreamPage.vue',import.meta.url),'utf8');
const compiled=compileScript(parse(source).descriptor,{id:'stream-regression'}).content
  .replace(/import\.meta\.env/g, '({})') // Vite normally supplies this at build time.
  .replace(/^import .*?;\r?\n/gm,'').replace('export default','return');
const factory=new Function('computed','nextTick','onMounted','onUnmounted','reactive','ref','watch','THREE','OrbitControls','api','RgbdViewer','window',compiled);
function setup(api,THREE=three){
  const component=factory(vue.computed,vue.nextTick,()=>{},()=>{},vue.reactive,vue.ref,()=>{},THREE,()=>{},api,{},
    {location:{protocol:'http:',hostname:'localhost'}});
  return component.setup({}, {expose(){}});
}
const telemetry={position:{x:5,y:3,z:1.4},orientation:{roll:0,pitch:0,yaw:0},workspace:{screws:[]}};

test('RTSP-only live mode updates telemetry and trail without any screw detections',async()=>{
  let x=5;
  const vm=setup({get:async()=>({data:{telemetry:{...telemetry,position:{x:x++,y:3,z:1.4}},detection:null}})});
  vm.sourceMode.value='live';vm.selectedOperationId.value='operation';
  await vm.refreshPositioning();await vm.refreshPositioning();
  assert.equal(vm.positioning.value.telemetry.position.x,6);
  assert.equal(vm.algorithmTrails.value.ekf.length,2);
  assert.equal(vm.activeDetection.value,null,'no frontend-generated ghost bbox');
});
test('session discovery asks for media-backed frames only',async()=>{
  let called;
  const vm=setup({get:async(url,config)=>{called={url,config};return {data:[]};}});
  vm.selectedOperationId.value='operation';
  assert.equal(await vm.refreshPairedSessions(),false);
  assert.equal(called.config.params.mediaOnly,1);
});
test('historical trails use operation time even when there are no screw detections',()=>{
  const vm=setup({});vm.selectedOperationId.value='operation';
  vm.operations.value=[{_id:'operation',startTime:'2026-10-20T00:00:00Z'}];
  vm.telemetryRecords.value=[0,500,2000].map(ms=>({timestamp:new Date(Date.parse('2026-10-20T00:00:00Z')+ms).toISOString(),
    fusionAlgorithm:'ekf',telemetry}));
  vm.currentTime.value=1;vm.rebuildDatabaseTrail();
  assert.equal(vm.algorithmTrails.value.ekf.length,2);
});
test('late positioning response cannot overwrite a newly selected operation',async()=>{
  let resolve;
  const vm=setup({get:()=>new Promise(r=>{resolve=r;})});
  vm.sourceMode.value='live';vm.selectedOperationId.value='old';
  const pending=vm.refreshPositioning();vm.selectedOperationId.value='new';
  resolve({data:{telemetry}});await pending;
  assert.equal(vm.positioning.value,null);assert.deepEqual(vm.liveTrail.value,[]);
});
test('3D renderer attached to an old DOM host is disposed before recreation',async()=>{
  let disposed=false;
  const vm=setup({}, {...three,WebGLRenderer:class{constructor(){throw new Error('recreate-renderer');}}});
  vm.sceneContainer.value={};
  vm.renderer={domElement:{parentElement:{},removeEventListener(){},remove(){}},dispose(){disposed=true;}};
  globalThis.cancelAnimationFrame=()=>{};
  try{await assert.rejects(vm.initThreeScene(),/recreate-renderer/);assert.equal(disposed,true);}
  finally{delete globalThis.cancelAnimationFrame;}
});
