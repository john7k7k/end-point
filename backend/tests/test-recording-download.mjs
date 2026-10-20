import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import http from 'node:http';
import https from 'node:https';
import { Transform } from 'node:stream';
import { pipeline } from 'node:stream/promises';

// Execute the actual helper embedded in the PowerShell runner, not a duplicate.
const runner = fs.readFileSync(new URL('../apiTest/run-all.ps1', import.meta.url), 'utf8');
const helpers = runner.slice(runner.indexOf('async function downloadRecording('), runner.indexOf('const sourceArgs='));
function createHelpers(execFile, temporaryOs=os) {
  return new Function('fs','path','os','http','https','Transform','pipeline','execFile','checkpoint','check',
    helpers + '\nreturn {downloadRecording,probeRecording};')(fs,path,temporaryOs,http,https,Transform,pipeline,execFile,'isolated-checkpoint',
      (condition,message) => { if (!condition) throw new Error(message); });
}

test('recording helper streams >16 MiB, authenticates and cleans success/failure files', async () => {
  const chunk = Buffer.alloc(64*1024, 0x61), total = 18*1024*1024;
  const server = http.createServer(async (req,res) => {
    assert.equal(req.headers['x-api-test-checkpoint'],'isolated-checkpoint');
    if (req.url === '/http-error') { res.writeHead(503); res.end('unavailable'); return; }
    if (req.url === '/oversized') { res.writeHead(200,{'Content-Length':3*1024**3}); res.end(); return; }
    if (req.url === '/truncated') {
      res.writeHead(200,{'Content-Length':total}); res.write(chunk);
      setTimeout(()=>res.destroy(),10); return;
    }
    res.writeHead(200,{'Content-Length':total});
    for(let sent=0;sent<total;sent+=chunk.length) if(!res.write(chunk)) {
      await new Promise(resolve=>res.once('drain',resolve));
    }
    res.end();
  });
  server.listen(0,'127.0.0.1'); await new Promise(resolve=>server.once('listening',resolve));
  const base=`http://127.0.0.1:${server.address().port}`;
  const seen=[];
  const testRoot=fs.mkdtempSync(path.join(os.tmpdir(),'vision-download-test-'));
  let failure=false;
  const {probeRecording}=createHelpers((_command,args,_options,callback)=>{
    const filename=args.at(-1); seen.push(filename);
    assert.equal(fs.statSync(filename).size,total);
    assert.equal(fs.readFileSync(filename).subarray(-64).toString(),'a'.repeat(64));
    assert.equal(args.includes('pipe:0'),false);
    if(failure) callback(new Error('injected probe failure'),'','invalid video');
    else callback(null,JSON.stringify({format:{duration:'30'},streams:[{width:640,height:360,codec_name:'h264'}]}),'');
  },{tmpdir:()=>testRoot});
  try {
    const result=await probeRecording(base+'/video');
    assert.equal(result.sizeBytes,total); assert.equal(result.durationSeconds,30);
    assert.equal(fs.existsSync(path.dirname(seen[0])),false,'successful probe removes temp folder');
    failure=true;
    await assert.rejects(probeRecording(base+'/video'),/invalid video/);
    assert.equal(fs.existsSync(path.dirname(seen[1])),false,'failed probe removes temp folder');
    await assert.rejects(probeRecording(base+'/http-error'),/HTTP 503/);
    await assert.rejects(probeRecording(base+'/oversized'),/2 GiB/);
    await assert.rejects(probeRecording(base+'/truncated'));
    assert.equal(seen.length,2,'failed transfers never reach ffprobe');
    assert.deepEqual(fs.readdirSync(testRoot),[],'all failed transfers also remove their partial files/folders');
    assert.match(runner,/length>16\*1024\*1024/,'JSON API limit is unchanged');
  } finally {
    server.closeAllConnections(); await new Promise(resolve=>server.close(resolve));
    fs.rmSync(testRoot,{recursive:true,force:true});
  }
});
