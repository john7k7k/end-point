<#
HTTP + MQTT + RTSP LAN integration check (PowerShell 5.1 / 7).
From the repository root:
  .\backend\apiTest\run-all.ps1
  .\backend\apiTest\run-all.ps1 -Server 192.168.0.156 -Seconds 15
  .\backend\apiTest\run-all.ps1 -Color 'D:\video\color.mp4' -Depth 'D:\video\depth.mp4'

Requires Node.js, backend/node_modules (npm --prefix backend ci), Python, ffmpeg/ffprobe.
Reads all platform.http and platform.mqtt cases and checks a coverage matrix.
Normal records only. Creation IDs/intents are journalled to runtime before proceeding.
Requires the protected checkpoint/cleanup API contract in RUN_ALL.md. If disabled
or unavailable, the script stops BEFORE creating data.
Creates test-owned records, tests CRUD/cascades, restores settings, then verifies baseline.
Never guesses ownership from a time window/name prefix, and never deletes baseline IDs.
Publishes the two standard RTSP paths only when the server has no active operation.
Report: runtime/apiTest/<run-id>.json (contains test IDs, never passwords/tokens).
Also sends a real RGB-D binary packet to verify media/pose/frame-ID endpoints.
Do not run while another person/device is writing to this platform.
#>
[CmdletBinding()]
param(
    [string]$Server = '192.168.0.156',
    [ValidateRange(6,120)][int]$Seconds = 12,
    [string]$Python = 'python',
    [string]$Color = '',
    [string]$Depth = '',
    [string]$AdminToken = $env:API_TEST_ADMIN_TOKEN,
    [switch]$Encode
)
$ErrorActionPreference = 'Stop'
$taskRoot = (Resolve-Path (Join-Path $PSScriptRoot '../..')).Path
if (!(Get-Command node -ErrorAction SilentlyContinue)) { throw 'Node.js is required.' }
if (!(Get-Command $Python -ErrorAction SilentlyContinue)) { throw 'Python is required.' }
if (!(Test-Path -LiteralPath (Join-Path $taskRoot 'backend/node_modules/mqtt/package.json'))) {
    throw 'Run npm --prefix backend ci first.'
}
$encodeValue = if ($Encode) { 'true' } else { 'false' }
$colorValue = if ($Color) { $Color } else { '-' }
$depthValue = if ($Depth) { $Depth } else { '-' }
$previousToken = $env:API_TEST_ADMIN_TOKEN
$env:API_TEST_ADMIN_TOKEN = $AdminToken
# JS is passed on stdin, not written to a temporary helper file. All network requests bypass HTTP proxies.
$runner = @'
const fs = require('node:fs');
const path = require('node:path');
const http = require('node:http');
const https = require('node:https');
const net = require('node:net');
const {spawn,spawnSync,execFile} = require('node:child_process');
const {randomUUID,randomBytes} = require('node:crypto');
const [root,server,secondsText,python,colorArg,depthArg,encodeText] = process.argv.slice(2);
const color=colorArg==='-'?'':colorArg,depth=depthArg==='-'?'':depthArg;
if(!/^[a-zA-Z0-9][a-zA-Z0-9.-]*$/.test(server)) throw new Error('Invalid server hostname');
const seconds=Number(secondsText),encode=encodeText==='true';
const folder=path.join(root,'backend/apiTest');
const mqtt=require(path.join(root,'backend/node_modules/mqtt'));
const bcrypt=require(path.join(root,'backend/node_modules/bcryptjs'));
const WebSocket=require(path.join(root,'backend/node_modules/ws'));
const runId=new Date().toISOString().replace(/[:.]/g,'-')+'-'+randomUUID().slice(0,8);
const report={runId,server,startedAt:new Date().toISOString(),steps:[],operations:[],
  owned:{users:[],operations:[],detections:[],sessions:[]},intents:[],coverage:{http:{},mqtt:{},outputs:{}},cleanup:{status:'not_started'}};
const reportFile=path.join(root,'runtime/apiTest',runId+'.json');
const vars={host:server,base:`http://${server}:3000`,api:`http://${server}:3000/api`,ai:`http://${server}:8000`,
  email:`api-lan-${runId}@example.com`,password:randomBytes(20).toString('hex'),requestId:randomUUID(),
  sessionId:randomUUID(),clockId:'api-lan-test-unix-ns',frameId:0};
let client,child,currentOperation=null,sampling=false,samplingTask=null,mqttSampleCount=0,checkpoint=null,rgbdSocket=null;
let notificationCount=0,interrupted=false;
for(const signal of ['SIGINT','SIGTERM'])process.on(signal,()=>{
  interrupted=true;sampling=false;report.interrupted=true;process.exitCode=1;journal();
  if(rgbdSocket)rgbdSocket.terminate();
  void stopPublisher();
  console.error('Interrupted: attempting owned-data cleanup before exit.');
});
function journal(){
  fs.mkdirSync(path.dirname(reportFile),{recursive:true});
  const temporary=reportFile+'.tmp';fs.writeFileSync(temporary,JSON.stringify(report,null,2));
  // Windows scanners/WSL readers can briefly hold the destination open.
  for(let attempt=0;;attempt++){
    try{fs.renameSync(temporary,reportFile);break;}
    catch(error){if(!['EPERM','EBUSY','EACCES'].includes(error.code)||attempt>=79)throw error;
      Atomics.wait(new Int32Array(new SharedArrayBuffer(4)),0,0,25);}
  }
}
function own(kind,id){
  check(typeof id==='string'&&/^[a-f0-9]{24}$/i.test(id),'Invalid created resource ID');
  if(!report.owned[kind].includes(id))report.owned[kind].push(id);journal();return id;
}
const sleep=ms=>new Promise(r=>setTimeout(r,ms));
async function withTimeout(promise,ms,message) {
  let timer;try{return await Promise.race([promise,new Promise((_,reject)=>{timer=setTimeout(()=>reject(new Error(message)),ms);})]);}
  finally{clearTimeout(timer);}
}
const check=(condition,message)=>{if(!condition)throw new Error(message);};
function record(name,detail={}) {report.steps.push({name,status:'pass',...detail});journal();console.log('[PASS] '+name);}
function render(text) {
  return text.replace(/\{\{\$datetime iso8601\}\}/g,new Date().toISOString()).replace(/\{\{([^}]+)\}\}/g,(_,key)=>{
    if(!(key in vars))throw new Error('Missing request variable: '+key);
    return String(vars[key]);
  });
}
const httpCases=new Map();
for(const section of fs.readFileSync(path.join(folder,'platform.http'),'utf8').split(/^### /m).slice(1)) {
  const number=Number(section.match(/^(\d+)/)?.[1]);
  const req=section.match(/^(GET|POST|PUT|PATCH|DELETE)\s+(\S+)/m);
  if(!req)continue;
  const suffix=section.slice(req.index+req[0].length);
  const split=suffix.search(/\r?\n\r?\n/);
  httpCases.set(number,{method:req[1],url:req[2],body:split>=0?suffix.slice(split).trim():''});
}
const mqttCases=new Map();
for(const block of fs.readFileSync(path.join(folder,'platform.mqtt'),'utf8').split(/^# ## /m).slice(1)) {
  const number=Number(block.match(/^(\d+)/)?.[1]);
  const topic=block.match(/^topic:\s*(\S+)/m)?.[1];
  const qos=Number(block.match(/^qos:\s*(\d)/m)?.[1]||0);
  if(topic)mqttCases.set(number,{topic,qos,body:block.slice(block.search(/\r?\n\r?\n/)).trim()});
}
for(const number of httpCases.keys())report.coverage.http[number]={status:'not_executed'};
for(const number of mqttCases.keys())report.coverage.mqtt[number]={status:'not_executed'};
report.coverage.outputs={operationAck:{status:'not_executed'},notification:{status:'not_executed'}};
async function mqttConnection(){
  if(client?.connected)return;
  client=mqtt.connect(`mqtt://${server}:1883`,{clientId:'api_lan_'+randomUUID().slice(0,12),reconnectPeriod:0,connectTimeout:5000});
  client.on('error',error=>{report.mqttError=error.message;});
  await withTimeout(new Promise((resolve,reject)=>{client.once('connect',resolve);client.once('error',reject);}),7000,'MQTT connect timed out');
  client.on('message',(topic)=>{if(topic==='vision/notification'){notificationCount++;report.coverage.outputs.notification={status:'pass',count:notificationCount};journal();}});
  await new Promise((resolve,reject)=>client.subscribe('vision/notification',{qos:1},e=>e?reject(e):resolve()));
}
function request(method,url,body,timeout=15000,headers={}) {
  return new Promise((resolve,reject)=>{
    const data=body?Buffer.from(typeof body==='string'?body:JSON.stringify(body)):null;
    const parsed=new URL(url),transport=parsed.protocol==='https:'?https:http;
    const leaseHeaders=checkpoint?{Authorization:'Bearer '+process.env.API_TEST_ADMIN_TOKEN,'X-API-Test-Checkpoint':checkpoint}:{};
    const req=transport.request(parsed,{method,agent:false,headers:{...(data?{'Content-Type':'application/json','Content-Length':data.length}:{}),...leaseHeaders,...headers}},res=>{
      const chunks=[];let length=0;
      res.on('data',b=>{length+=b.length;if(length>16*1024*1024)req.destroy(new Error('Response too large'));else chunks.push(b);});
      res.on('error',reject);
      res.on('end',()=>{
        const raw=Buffer.concat(chunks);let value;
        try{value=JSON.parse(raw.toString('utf8'));}catch{value=raw;}
        resolve({status:res.statusCode,body:value,bytes:raw.length});
      });
    });
    req.setTimeout(timeout,()=>req.destroy(new Error(`${method} ${parsed.pathname} timed out`)));
    req.on('error',reject);if(data)req.write(data);req.end();
  });
}
async function example(number,allowed=[200,201,204],mutate=null) {
  check(!interrupted,'Test interrupted');
  const c=httpCases.get(number);check(c,`HTTP example ${number} not found`);
  let body=c.body?render(c.body):undefined;
  if(mutate)body=mutate(JSON.parse(body));
  const url=render(c.url);
  if(!['GET','HEAD'].includes(c.method)){
    report.intents.push({httpCase:number,method:c.method,path:new URL(url).pathname,at:new Date().toISOString(),
      userId:vars.userId||null,operationId:vars.operationId||null,
      lookupEmail:number===1?vars.email:number===6?`legacy-${vars.email}`:undefined});journal();
  }
  const headers=number===31?{Range:'bytes=0-1023'}:{};
  const r=await request(c.method,url,body,c.method==='DELETE'?120000:15000,headers);
  check(allowed.includes(r.status),`HTTP example ${number}: ${r.status} ${JSON.stringify(r.body).slice(0,180)}`);
  if(number===1)own('users',r.body.user.id);
  if(number===6)own('users',r.body.id);
  if(number===8)own('operations',r.body.operationId);
  if(number===17)own('operations',r.body._id);
  if(number===22&&r.status===201)own('detections',r.body._id);
  check(!interrupted,'Test interrupted after request; created IDs were journalled');
  report.coverage.http[number]={status:'pass',httpStatus:r.status};
  record(`HTTP ${number}: ${c.method} ${new URL(url).pathname}`,{httpStatus:r.status});return r.body;
}
async function manager(suffix,method='GET',body){
  // Baseline hashing on /mnt/... can take minutes for many RGB-D frames.
  const r=await request(method,vars.api+'/testing/'+suffix,body,600000,
    {Authorization:'Bearer '+(process.env.API_TEST_ADMIN_TOKEN||'')});
  report.coverage.management??={};
  const key=method+' '+suffix.replace(/checkpoints\/[^/]+\//,'checkpoints/:id/');
  report.coverage.management[key]={status:r.status>=200&&r.status<300?'pass':'failed',httpStatus:r.status};journal();
  check(r.status>=200&&r.status<300,`Safety API ${suffix}: HTTP ${r.status}. No unsafe cleanup fallback is allowed.`);
  return r.body;
}
async function get(route,allowed=[200]) {
  const r=await request('GET',vars.api+route);
  check(allowed.includes(r.status),`GET ${route}: ${r.status}`);return r;
}
async function idle() {
  const r=await get('/operations/active',[200,404]);
  check(r.status===404,`Server has active operation ${r.body?._id}. Stop it yourself before this test.`);
}
async function closeOperation(reason) {
  if(!currentOperation)return;
  const id=currentOperation;
  const r=await request('POST',vars.api+'/device/operation/end',{opID:id,endTime:new Date().toISOString(),description:reason},45000);
  check(r.status===200,`Failed to end test operation ${id}: HTTP ${r.status}`);
  report.coverage.http[43]={status:'pass',httpStatus:r.status};
  currentOperation=null;record('Closed test operation',{operationId:id});
}
function publish(number) {
  check(!interrupted,'Test interrupted');
  const c=mqttCases.get(number);check(c,`MQTT example ${number} not found`);
  vars.timestampMs=Date.now();vars.endTime=new Date().toISOString();
  const payload=JSON.parse(render(c.body));
  if(checkpoint){payload._checkpoint=checkpoint;payload._adminToken=process.env.API_TEST_ADMIN_TOKEN;}
  if(number===2){
    // Known, normal UWB measurements close to a map screw. This exercises notifications too.
    payload.ranges=[[0,0,0],[20,0,0],[0,12,0],[20,12,0],[0,0,2.5],[20,0,2.5],[0,12,2.5],[20,12,2.5]]
      .map((a,stationId)=>({stationId,distance:Math.hypot(.2-a[0],1.2-a[1],1.4-a[2])+.15}));
  }
  if(number===5)payload.timestamp=new Date().toISOString();
  const body=JSON.stringify(payload);
  return withTimeout(new Promise((resolve,reject)=>client.publish(render(c.topic),body,{qos:c.qos,retain:false},err=>{
    if(err)return reject(err);
    try{report.coverage.mqtt[number]={status:'broker_received'};journal();resolve();}catch(error){reject(error);}
  })),7000,'MQTT broker acknowledgment timed out');
}
async function rgbdCheck(){
  vars.sessionId=randomUUID();vars.clockId='lab-edge-unix-ns';vars.frameId=0;
  report.owned.sessions.push({operationId:vars.operationId,sessionId:vars.sessionId});journal();
  rgbdSocket=new WebSocket(`ws://${server}:8000/ws/rgbd`,{maxPayload:16*1024*1024,headers:checkpoint?{Authorization:'Bearer '+process.env.API_TEST_ADMIN_TOKEN,'X-API-Test-Checkpoint':checkpoint}:{}});
  await withTimeout(new Promise((resolve,reject)=>{rgbdSocket.once('open',resolve);rgbdSocket.once('error',reject);}),8000,'RGB-D socket open timed out');
  function exchange(payload){return withTimeout(new Promise((resolve,reject)=>{
    const onMessage=bytes=>{rgbdSocket.off('error',onError);try{resolve(JSON.parse(bytes));}catch(error){reject(error);}};
    const onError=error=>{rgbdSocket.off('message',onMessage);reject(error);};
    rgbdSocket.once('message',onMessage);rgbdSocket.once('error',onError);rgbdSocket.send(payload);
  }),12000,'RGB-D response timed out');}
  const hello=await exchange(JSON.stringify({type:'hello',operationId:vars.operationId,sessionId:vars.sessionId,clockId:vars.clockId}));
  check(hello.type==='ready','RGB-D hello rejected');
  vars.captureTimeNs=String(BigInt(Date.now())*1000000n);await example(41);
  vars.timestampNs=String(BigInt(vars.captureTimeNs)+1000000n);await publish(4);await sleep(500);
  const generator=[
    'import sys,json,cv2,numpy as np',
    'sys.path.insert(0,sys.argv[1])',
    'from rgbd_sync import encode_packet',
    'c=cv2.VideoCapture(sys.argv[2]); ok,color=c.read(); c.release()',
    'd=cv2.VideoCapture(sys.argv[3]); good,depth=d.read(); d.release()',
    'assert ok and good, "RGB-D source frame unavailable"',
    'depth=cv2.resize(cv2.cvtColor(depth,cv2.COLOR_BGR2GRAY),(color.shape[1],color.shape[0]))',
    'depth=(depth.astype(np.float64)*6000/255).astype(np.uint16)',
    'h=json.loads(sys.argv[4]); h["intrinsics"]={"fx":color.shape[1],"fy":color.shape[1],"cx":color.shape[1]/2,"cy":color.shape[0]/2}',
    'sys.stdout.buffer.write(encode_packet(h,color,depth))'
  ].join(';');
  const header={operationId:vars.operationId,sessionId:vars.sessionId,clockId:vars.clockId,frameId:0,
    colorCaptureTimeNs:vars.timestampNs,depthCaptureTimeNs:vars.timestampNs,calibrationId:'default',
    depthScaleMeters:.001,depthAlignedToColor:true,dataSource:'simulation'};
  const encoded=spawnSync(python,['-c',generator,path.join(root,'AI'),color||path.join(root,'AI/test/test_color.mp4'),
    depth||path.join(root,'AI/test/test_depth.mp4'),JSON.stringify(header)],{windowsHide:true,timeout:20000,maxBuffer:16*1024*1024,
    env:{...process.env,PYTHONUTF8:'1',PYTHONDONTWRITEBYTECODE:'1'}});
  check(encoded.status===0,'RGB-D encode failed: '+encoded.stderr?.toString('utf8'));
  const ack=await exchange(encoded.stdout);check(ack.persisted===true,'RGB-D frame not persisted');
  await example(32);await example(33);await example(34);
  const snapshot=await example(35);await example(36);await example(37);await example(38);
  check(snapshot.frame.devicePose?.sensorTimeNs===vars.timestampNs,'MQTT pose was not used by the matching RGB-D frame');
  check((await exchange(JSON.stringify({type:'end'}))).type==='ended','RGB-D end rejected');
  rgbdSocket.close();rgbdSocket=null;record('RGB-D hello, HTTP/MQTT pose, binary frame, image readback and end verified');
}
async function tcp(port) {
  await new Promise((resolve,reject)=>{
    const socket=net.createConnection({host:server,port});
    socket.setTimeout(3000,()=>socket.destroy(new Error('TCP timeout '+port)));
    socket.once('connect',()=>{socket.destroy();resolve();});socket.once('error',reject);
  });record('TCP '+port);
}
function probeStream(url) {
  return new Promise((resolve,reject)=>execFile('ffprobe',['-v','error','-rtsp_transport','tcp',
    '-rw_timeout','5000000','-analyzeduration','1000000','-probesize','1000000',
    '-show_entries','stream=codec_name,width,height','-of','json',url],{timeout:9000,windowsHide:true},(error,stdout,stderr)=>{
      if(error)return reject(new Error(`Cannot read ${url}: ${String(stderr||error.message).slice(0,180)}`));
      const stream=JSON.parse(stdout).streams?.[0];
      if(!stream?.width)return reject(new Error('No decoded stream at '+url));
      resolve(stream);
    }));
}
async function probeRecording(url) {
  // Fetch with the same checkpoint headers as the other HTTP cases. Feed the
  // bytes on stdin so the admin token never appears in ffprobe's command line.
  const response=await request('GET',url,undefined,30000);
  check(response.status===200&&Buffer.isBuffer(response.body),'Recorded MP4 download failed: HTTP '+response.status);
  return new Promise((resolve,reject)=>{
    const process=execFile('ffprobe',['-v','error',
    '-show_entries','stream=codec_name,width,height,duration:format=duration,size','-of','json','pipe:0'],
    {timeout:9000,windowsHide:true},(error,stdout,stderr)=>{
      if(error)return reject(new Error('Recorded MP4 unreadable: '+String(stderr||error.message).slice(0,180)));
      const result=JSON.parse(stdout),duration=Number(result.format?.duration);
      if(!result.streams?.[0]?.width||!(duration>0))return reject(new Error('Recorded MP4 has no playable video/duration'));
      resolve({durationSeconds:duration,sizeBytes:response.bytes,...result.streams[0]});
    });
    process.stdin.on('error',()=>{});process.stdin.end(response.body);
  });
}
const sourceArgs=['-u',path.join(folder,'rtsp_publish.py'),'--host',server,'--seconds',String(seconds)];
if(color)sourceArgs.push('--color',color);if(depth)sourceArgs.push('--depth',depth);if(encode)sourceArgs.push('--encode');
async function stopPublisher() {
  if(!child?.pid||child.exitCode!==null)return;
  // Wrapper is terminated only on abnormal failure. Its ffmpeg processes are
  // normally closed by rtsp_publish.py after --seconds. Avoid orphaning on Windows.
  if(process.platform==='win32')spawnSync('taskkill',['/PID',String(child.pid),'/T','/F'],{windowsHide:true,stdio:'ignore'});
  else child.kill('SIGINT');
  await sleep(500);
}
async function main() {
  console.log('Target: '+server+'; duration: '+seconds+' seconds');
  check(process.env.API_TEST_ADMIN_TOKEN,'Set API_TEST_ADMIN_TOKEN. Protected restore/cleanup APIs are mandatory; no data was created.');
  const capabilities=await manager('capabilities');
  for(const name of ['runtimeOnlyLedger','baselineGuard','exclusiveLease','exactSettingsRestore','quiesceWriters','ownedCascadeCleanup','verifyBaseline']){
    check(capabilities.version===1&&capabilities[name]===true,'Missing required server safety capability: '+name);
  }
  for(const port of [3000,1883,8554,8000])await tcp(port);
  const runtime=await example(7);vars.backendInstanceId=runtime.backendInstanceId;
  check(runtime.backendInstanceId,'Backend lacks runtime identity');
  await example(18);const aiStatus=await example(40);
  check(!aiStatus.connected&&!aiStatus.operationId,'AI already owns an operation/session');
  await idle();
  const dry=spawnSync(python,[...sourceArgs,'--dry-run'],{cwd:root,encoding:'utf8',windowsHide:true,
    timeout:45000,env:{...process.env,PYTHONUTF8:'1',PYTHONDONTWRITEBYTECODE:'1'}});
  check(dry.status===0,'RTSP source check failed: '+(dry.stderr||dry.error?.message||dry.stdout));
  record('RTSP local source/codec preflight');
  const saved=await manager('checkpoints','POST',{clientRunId:runId,backendInstanceId:vars.backendInstanceId});
  check(typeof saved.id==='string'&&/^[a-zA-Z0-9_-]+$/.test(saved.id)&&saved.exclusive===true,'Server did not acquire a safe checkpoint lease');
  checkpoint=saved.id;report.checkpoint=checkpoint;report.baseline=saved.baseline;journal();
  const registered=await example(1);vars.userId=registered.user.id;
  const login=await example(2);check(login.user.id===vars.userId,'Login user mismatch');
  report.userId=vars.userId;report.email=vars.email;
  await example(3);await example(4);await example(5);
  check((await example(4)).name.includes('\u66f4\u65b0'),'User PATCH not reflected by GET');
  vars.bcryptHash=bcrypt.hashSync(vars.password,12);
  const secondary=await example(6,[200,201],body=>({...body,email:`legacy-${vars.email}`}));
  report.secondaryUserId=secondary.id;
  const metadata=await example(17,[200,201],body=>({...body,userId:secondary.id}));
  report.cascadeOperationId=metadata._id;

  console.log('\n=== 1. HTTP operation lifecycle ===');
  const started=await example(8);vars.operationId=currentOperation=started.operationId;
  report.operations.push({kind:'http',operationId:currentOperation});
  await example(9);await example(10);await example(11);await example(12);await example(13);await example(14);await example(15);await example(16);
  await example(18);await example(19);await example(42);await example(48);
  const originalCalibration=await example(20);
  const changed=await example(21,[200],body=>({...body,translation:{...body.translation,x:Number(originalCalibration.translation.x)+.001}}));
  check(Math.abs((await example(20)).translation.x-changed.translation.x)<1e-9,'Calibration PUT not reflected by GET');
  let detection;
  for(let attempt=0;attempt<40&&!(detection&&detection._id);attempt++){
    const result=await example(22);if(result?._id)detection=result;else await sleep(800);
  }
  check(detection?._id,'Detection POST never produced a positive fixture (204 is not sufficient for CRUD coverage)');
  vars.detectionId=detection._id;
  await example(23);await example(24);await example(25);
  check((await example(24)).some(d=>d._id===vars.detectionId),'Detection missing after PATCH');
  await example(26);await example(30);
  vars.captureTimeNs=String(BigInt(Date.now())*1000000n);
  vars.receivedTimeNs=vars.processedTimeNs=vars.captureTimeNs;
  await example(39,[200,201],body=>{
    // Use the independent metadata-only test session from the example, never a live sender session.
    vars.sessionId=body.sessionId;return body;
  });
  await example(32);await example(33);await example(34);await example(35);await example(36);
  await closeOperation('LAN HTTP API test complete');
  const done=await get('/device/operation/'+vars.operationId);
  check(done.body.endTime,'HTTP operation has no endTime');record('HTTP operation endTime persisted');
  vars.atMs=Date.now();await example(27);await example(28);await example(29);
  // Test detection DELETE while its operation and derived fusion results still exist.
  check((await example(24)).some(d=>d._id===vars.detectionId),'Detection absent before DELETE');
  const detectionBefore=await manager(`checkpoints/${checkpoint}/inspect`,'POST',{owned:report.owned,root:{kind:'detection',id:vars.detectionId}});
  check(detectionBefore.remaining>0,'Detection pre-delete inspection found no resource');
  await example(45);
  check(!(await example(24)).some(d=>d._id===vars.detectionId),'Detection remains after DELETE');
  const detectionAudit=await manager(`checkpoints/${checkpoint}/inspect`,'POST',{owned:report.owned,root:{kind:'detection',id:vars.detectionId}});
  report.deleteChecks=[{kind:'detection',id:vars.detectionId,before:detectionBefore,after:detectionAudit}];journal();
  check(detectionAudit.remaining===0,'Detection DELETE left derived fusion records');
  vars.deleteOperationId=vars.operationId;
  await example(15);
  const operationBefore=await manager(`checkpoints/${checkpoint}/inspect`,'POST',{owned:report.owned,root:{kind:'operation',id:vars.operationId}});
  await example(46);
  const deletedOperation=await example(15,[200,404]);check(!deletedOperation||!deletedOperation._id,'Operation remains after DELETE');
  const operationAudit=await manager(`checkpoints/${checkpoint}/inspect`,'POST',{owned:report.owned,root:{kind:'operation',id:vars.operationId}});
  report.deleteChecks.push({kind:'operation',id:vars.operationId,before:operationBefore,after:operationAudit});journal();
  check(operationAudit.remaining===0,'Operation DELETE left child records/files');

  console.log('\n=== 2. MQTT start / ACK / UWB / IMU ===');
  await idle();
  await mqttConnection();
  let mqttFailure=null;
  client.on('error',error=>{mqttFailure=error;});
  const ackTopic='vision/operation/ack/'+vars.userId;
  let resolveAck;
  const ackPromise=new Promise(resolve=>{resolveAck=resolve;});
  client.on('message',(topic,bytes)=>{
    if(topic!==ackTopic)return;
    try{const ack=JSON.parse(bytes);if(ack.requestId===vars.requestId&&ack.backendInstanceId===vars.backendInstanceId)resolveAck(ack);}catch{}
  });
  await new Promise((resolve,reject)=>client.subscribe([ackTopic,'vision/notification'],{qos:2},err=>err?reject(err):resolve()));
  await publish(1);
  const ack=await withTimeout(ackPromise,20000,'MQTT start ACK timed out (AI may not be ready)');
  vars.operationId=currentOperation=own('operations',ack.opID);
  check(/^[a-f0-9]{24}$/i.test(currentOperation),'Invalid ACK opID');
  report.operations.push({kind:'mqtt-rtsp',operationId:currentOperation});record('MQTT correlated start ACK',{operationId:currentOperation});
  report.coverage.outputs.operationAck={status:'pass'};
  await publish(2);await publish(3);
  await sleep(400);
  const pose=await example(11);
  check(pose.uwbRanges?.length===8&&pose.imu?.acceleration,'Backend did not ingest UWB + IMU');
  record('MQTT UWB/IMU reached backend pose');
  sampling=true;
  samplingTask=(async()=>{while(sampling){await publish(2);await publish(3);mqttSampleCount++;await sleep(200);}})();
  samplingTask.catch(error=>{mqttFailure=error;sampling=false;});

  console.log('\n=== 3. RTSP color + depth publishing / server readback ===');
  child=spawn(python,sourceArgs,{cwd:root,stdio:['ignore','pipe','pipe'],windowsHide:true,
    env:{...process.env,PYTHONUTF8:'1',PYTHONDONTWRITEBYTECODE:'1'}});
  let readyResolve,readyOutput='';
  const ready=new Promise(resolve=>{readyResolve=resolve;});
  child.stdout.setEncoding('utf8');child.stderr.setEncoding('utf8');
  child.stdout.on('data',chunk=>{
    process.stdout.write(chunk);readyOutput=(readyOutput+chunk).slice(-2000);
    if(readyOutput.includes('\u5169\u8def\u5df2\u555f\u52d5'))readyResolve(true);
  });
  child.stderr.on('data',chunk=>process.stderr.write(chunk));
  const outcome=new Promise(resolve=>{child.once('error',error=>resolve({error}));child.once('exit',(code,signal)=>resolve({code,signal}));});
  const initialized=await withTimeout(Promise.race([ready,outcome]),25000,'RTSP publisher initialization timed out');
  check(initialized===true,'RTSP publisher stopped before remote readback: '+JSON.stringify(initialized));
  const streams=await Promise.all(['cam-color','cam-depth'].map(async name=>{
    let lastError;
    for(let attempt=0;attempt<3;attempt++){
      try{return {name,...await probeStream(`rtsp://${server}:8554/${name}`)};}
      catch(error){lastError=error;if(child.exitCode!==null)break;await sleep(500);}
    }
    throw lastError;
  }));
  report.streams=streams;record('Both remote RTSP paths readable',{streams});
  await publish(5);record('MQTT legacy detection delivered to broker (FOV may reject detection)');
  const result=await withTimeout(outcome,(seconds+20)*1000,'RTSP publisher did not exit within expected duration');
  check(!result.error&&result.code===0,'RTSP publisher failed: '+(result.error?.message||result.code||result.signal));
  record('RTSP publisher exited normally');
  sampling=false;await samplingTask;samplingTask=null;
  check(!mqttFailure,'MQTT error: '+mqttFailure?.message);
  record('MQTT periodic raw samples sent',{pairs:mqttSampleCount});
  await rgbdCheck();
  await publish(6);
  let ended=false;
  for(let n=0;n<15;n++){
    const op=await get('/device/operation/'+currentOperation);
    if(op.body.endTime){ended=true;break;}await sleep(500);
  }
  check(ended,'MQTT end did not persist endTime');
  const finishedId=currentOperation;currentOperation=null;record('MQTT endTime persisted',{operationId:finishedId});
  await example(44);
  let rows=[];
  for(let n=0;n<20;n++){
    rows=(await get('/operator-telemetry/'+finishedId)).body;
    if(Array.isArray(rows)&&rows.length)break;await sleep(500);
  }
  check(Array.isArray(rows)&&rows.length>0,'No historical telemetry after stream ended');
  report.telemetry={count:rows.length,algorithms:[...new Set(rows.map(row=>row.fusionAlgorithm))]};
  record('Post-operation device paths persisted',report.telemetry);
  const videos=(await get('/videos/'+finishedId)).body;
  report.videos=videos.map(v=>({filename:v.filename,kind:v.kind}));
  record('Queried recorded MP4 list',{count:videos.length});
  check(['color','depth'].every(kind=>videos.some(v=>v.kind===kind)),'Missing color/depth recordings');
  report.recordings=await Promise.all(['color','depth'].map(async kind=>{
    const video=videos.find(v=>v.kind===kind);let error;
    for(let attempt=0;attempt<5;attempt++){
      try{return {kind,...await probeRecording(vars.api+'/videos/'+finishedId+'/'+encodeURIComponent(video.filename))};}
      catch(problem){error=problem;await sleep(500);}
    }
    throw error;
  }));
  record('Both recorded MP4 files readable',{recordings:report.recordings});
  for(const video of report.recordings)if(video.durationSeconds<seconds*.8){
    report.warnings??=[];
    const message=`${video.kind} recording is ${video.durationSeconds}s for a ${seconds}s publisher test. Recording coverage is incomplete.`;
    report.warnings.push(message);console.warn('[WARN] '+message);
  }
  vars.filename=videos.find(v=>v.kind==='color').filename;await example(31,[200,206]);
  check(notificationCount>0,'No MQTT notification was observed for the nearby screw fixture');
  // User cascade gets its own pre-existing child operation, not an already empty user.
  const primary=vars.userId;vars.userId=vars.deleteUserId=secondary.id;
  await example(4);check((await example(14)).some(op=>op._id===metadata._id),'Missing child operation before user DELETE');
  const userBefore=await manager(`checkpoints/${checkpoint}/inspect`,'POST',{owned:report.owned,root:{kind:'user',id:secondary.id}});
  await example(47);await example(4,[404]);check((await example(14)).length===0,'User DELETE left operations');
  const userAudit=await manager(`checkpoints/${checkpoint}/inspect`,'POST',{owned:report.owned,root:{kind:'user',id:secondary.id}});
  report.deleteChecks.push({kind:'user',id:secondary.id,before:userBefore,after:userAudit});journal();
  check(userAudit.remaining===0,'User DELETE left descendant records/files');vars.userId=primary;
  report.status='tests_passed_cleanup_pending';
}
(async()=>{
  try{await main();}
  catch(error){report.status='fail';report.error=error.message;console.error('[FAIL] '+error.message);process.exitCode=1;}
  finally{
    sampling=false;if(samplingTask)await samplingTask.catch(()=>{});
    await stopPublisher();
    if(rgbdSocket){rgbdSocket.terminate();rgbdSocket=null;}
    if(client){
      try{await withTimeout(new Promise(resolve=>client.end(true,{},resolve)),3000,'MQTT client shutdown timed out');}
      catch(error){report.transportCleanupError=error.message;}
    }
    if(checkpoint){
      report.cleanup={status:'running',errors:[]};journal();
      const payload={owned:report.owned,intents:report.intents};
      // No generic DELETE loop: every ID must be checked against the server's pre-test baseline.
      for(const action of ['quiesce','cleanup','restore']){
        try{report.cleanup[action]=await manager(`checkpoints/${checkpoint}/${action}`,'POST',payload);}
        catch(error){report.cleanup.errors.push({action,error:error.message});}
        journal();
      }
      try{
        const verified=await manager(`checkpoints/${checkpoint}/verify`,'POST',payload);
        report.cleanup.verification=verified;
        check(verified.originalDataUnchanged===true&&verified.settingsRestored===true&&verified.writersIdle===true
          &&verified.testDataRemaining===0&&verified.testFilesRemaining===0,'Restoration verification failed; inspect remaining IDs/files and original differences');
      }catch(error){report.cleanup.errors.push({action:'verify',error:error.message});}
      report.cleanup.status=report.cleanup.errors.length?'failed':'restored';
    }else report.cleanup={status:'not_needed',reason:'Safety preflight stopped before a checkpoint or business writes'};
    const missingHttp=Object.entries(report.coverage.http).filter(([,v])=>v.status!=='pass').map(([id])=>Number(id));
    const missingMqtt=Object.entries(report.coverage.mqtt).filter(([,v])=>v.status!=='broker_received').map(([id])=>Number(id));
    report.uncovered={http:missingHttp,mqtt:missingMqtt,outputs:Object.entries(report.coverage.outputs).filter(([,v])=>v.status!=='pass').map(([id])=>id)};
    if(report.status==='tests_passed_cleanup_pending'&&report.cleanup.status==='restored'&&!missingHttp.length&&!missingMqtt.length&&!report.uncovered.outputs.length&&!report.warnings?.length&&!report.transportCleanupError){
      report.status='pass';
    }else{
      report.status=checkpoint?'fail':'blocked';process.exitCode=1;
      console.error('[NOT PASS] API coverage, cleanup and baseline verification must all pass.');
    }
    report.finishedAt=new Date().toISOString();
    journal();
    console.log('\nResult: '+report.status.toUpperCase()+'\nReport: '+reportFile);
  }
})();
'@
try {
    $runner | & node - $taskRoot $Server $Seconds $Python $colorValue $depthValue $encodeValue
    $runnerExit = $LASTEXITCODE
} finally { $env:API_TEST_ADMIN_TOKEN = $previousToken }
if ($runnerExit -ne 0) { throw 'LAN integration test blocked/failed. See the report path above.' }
