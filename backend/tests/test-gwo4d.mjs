import test from 'node:test';
import assert from 'node:assert/strict';
import {solveGwo4d,gwoAnchors,gwoSettings,cleanGwoRanges,rangeCost} from '../src/positioning/gwo4d.js';
import {getFilterState,resetAllFilters,predict,updateUwb,setHeading} from '../src/positioning/esEkf.js';
import {updateSimulationConfig,getSimulationConfigValue} from '../src/controllers/simulationController.js';
const ranges = (position=[5,3,1.4],bias=.3) => gwoAnchors.map((a,stationId)=>({stationId,
  distance:Math.hypot(...a.map((v,i)=>v-position[i]))+bias}));

test('4D raw-ranging solution estimates xyz and one common bias reproducibly',()=>{
  const input=ranges(),a=solveGwo4d(input),b=solveGwo4d([...input].reverse());
  assert.equal(a.status,'ready');assert.deepEqual(a,b);
  assert.equal(a.population,100);assert.equal(a.iterations,100);
  assert(Math.hypot(...a.position.map((v,i)=>v-[5,3,1.4][i]))<.2);
  assert(Math.abs(a.biasMeters-.3)<.05);
  assert(a.positionVariance.every(v=>v>0));
  assert(Math.abs(rangeCost([...a.position,a.biasMeters],input)-a.objective)<1e-12);
  assert.deepEqual(input,ranges(),'never modifies raw ranges');
});
test('invalid/duplicate anchors cannot fabricate a valid range solution',()=>{
  assert.equal(solveGwo4d(Array(8).fill({stationId:0,distance:2})).status,'insufficient_ranges');
  assert.equal(solveGwo4d(ranges().slice(0,4)).status,'insufficient_ranges');
  assert.equal(cleanGwoRanges([{stationId:0,distance:-1},{stationId:1,distance:NaN},{stationId:8,distance:4}]).length,0);
});
test('bias bounds support both zero-inclusive and original MATLAB configuration',()=>{
  const a=solveGwo4d(ranges(),{...gwoSettings,biasMin:.1,biasMax:.6});
  assert.deepEqual(a.biasBounds,[.1,.6]);assert(a.biasMeters>=.1&&a.biasMeters<=.6);
});
test('GWO device branch updates position from UWB and attitude from IMU independently',()=>{
  resetAllFilters(1000);
  const old=getFilterState('ekf');
  assert.equal(getFilterState('gwo4d').deviceLocalization.status,'awaiting_ranges');
  updateUwb(ranges(),'gwo4d');
  const before=getFilterState('gwo4d');
  predict({x:9,y:8,z:7},{x:0,y:0,z:90},1100,'gwo4d');
  const after=getFilterState('gwo4d');
  assert.deepEqual(before.position,after.position,'no unrequested inertial translation drift');
  assert.notDeepEqual(before.quaternion,after.quaternion);
  assert.deepEqual(getFilterState('ekf'),old,'no effect on other live filter states');
  setHeading(.5,'gwo4d');assert(Math.abs(getFilterState('gwo4d').orientation.yaw-28.65)<.1);
  updateUwb(ranges().slice(0,2),'gwo4d');
  assert.equal(getFilterState('gwo4d').deviceLocalization.status,'insufficient_ranges');
  resetAllFilters(1000);assert.equal(getFilterState('gwo4d').deviceLocalization.status,'awaiting_ranges');
});
test('config API accepts gwo4d and sends it to AI without changing screw fusion',async()=>{
  const previous={...getSimulationConfigValue()},fetchBefore=globalThis.fetch;
  let sent,response;
  globalThis.fetch=async(_url,options)=>{sent=JSON.parse(options.body);return {ok:true};};
  const res={json(v){response=v;return this;},status(){return this;}};
  try {
    await updateSimulationConfig({body:{fusionAlgorithm:'gwo4d'}},res);
    assert.equal(sent.fusionAlgorithm,'gwo4d');assert.equal(sent.screwFusionAlgorithm,previous.screwFusionAlgorithm);
    assert.equal(response.aiSynced,true);
  }finally{Object.assign(getSimulationConfigValue(),previous);globalThis.fetch=fetchBefore;}
});
