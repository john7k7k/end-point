import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync, readdirSync} from 'node:fs';
const read = file => readFileSync(new URL(file, import.meta.url), 'utf8');

test('HTTP example covers every backend and AI business REST route', () => {
  const example=read('../apiTest/platform.http');
  const requests=[...example.matchAll(/^(GET|POST|PUT|PATCH|DELETE)\s+(\S+)/gm)]
    .map(([,method,url])=>[method,url.replace('{{api}}','/api').replace('{{ai}}','').split('?')[0]]);
  const modules={auth:'/api/auth',user:'/api/users',operation:'/api/operations',detection:'/api/detections',
    device:'/api/device',video:'/api/videos',simulation:'/api/simulation',positioning:'/api/positioning',
    operatorTelemetry:'/api/operator-telemetry',calibration:'/api/calibration',rgbd:'/api/rgbd'};
  const canonical=url=>url.replace(/\{\{[^}]+\}\}|:[^/]+/g,':param').replace(/\/$/,'');
  for(const [name,prefix] of Object.entries(modules)) {
    const source=read(`../src/routes/${name}Routes.js`);
    for(const [,method,route] of source.matchAll(/router\.(get|post|put|patch|delete)\(['"]([^'"]+)['"]/g)) {
      const expected=canonical(prefix+route);
      const matches=url=>{
        const parts=canonical(url).split('/'),wanted=expected.split('/');
        return parts.length===wanted.length&&wanted.every((p,i)=>p===':param'||p===parts[i]);
      };
      assert(requests.some(([m,url])=>m===method.toUpperCase()&&matches(url)),`Missing ${method} ${prefix}${route}`);
    }
  }
  for(const source of [read('../../AI/main.py'),read('../../AI/rgbd_api.py')]) {
    for(const [,method,route]of source.matchAll(/@(?:app|router)\.(get|post|put|patch|delete)\(['"]([^'"]+)['"]/g)) {
      if(route.startsWith('/api/testing/')) continue; // Dedicated protected-maintenance tests.
      assert(requests.some(([m,url])=>m===method.toUpperCase()&&url===route),`Missing AI ${method} ${route}`);
    }
  }
  assert.match(example,/@host = 192\.168\.0\.156/);
  // REST Client interpolates values before sending. Check the JSON bodies after dummy interpolation.
  for(const section of example.split(/^###.*$/m)) {
    const body=section.match(/\r?\n\r?\n(\{[\s\S]*\})\s*$/)?.[1];
    if(body)assert.doesNotThrow(()=>JSON.parse(body.replace(/\{\{[^}]+\}\}/g,'placeholder')));
  }
});

test('MQTT example has valid JSON payloads and all supported topics, with no fake ACK publisher',()=>{
  const text=read('../apiTest/platform.mqtt');
  const vars=Object.fromEntries([...text.matchAll(/^(\w+)=(.*)$/gm)].map(([,key,value])=>[key,value.trim()]));
  assert.equal(vars.host,'192.168.0.156');
  const topics=[];
  for(const block of text.split(/^# (?:%%|\$\$|##).*$/m).slice(1)) {
    const topic=block.match(/^topic:\s*(\S+)/m)?.[1];
    if(!topic)continue;
    topics.push(topic);
    const payload=block.slice(block.indexOf('\n\n')+2).trim().replace(/\{\{(\w+)\}\}/g,(_,key)=>{
      assert(key in vars,`Undefined MQTT variable ${key}`);return vars[key];
    });
    assert.doesNotThrow(()=>JSON.parse(payload),topic);
    assert.match(block,/retain: false/);
  }
  const source=read('../src/mqtt/mqttClient.js');
  const subscribed=[...source.matchAll(/client\.subscribe\("(vision\/[^"`]+)"/g)].map(m=>m[1]);
  assert.deepEqual([...topics].sort(),subscribed.sort());
  assert(!topics.some(t=>t.includes('/ack/')||t==='vision/notification'));
  assert.match(text,/vision\/operation\/ack\/\{\{userId\}\}/);
  assert.match(text,/vision\/notification/);
  const files=readdirSync(new URL('../apiTest/',import.meta.url),{withFileTypes:true}).filter(f=>f.isFile()).map(f=>f.name);
  assert.deepEqual(files.sort(),['RUN_ALL.md','platform.http','platform.mqtt','rtsp_publish.py','run-all.ps1']);
});
