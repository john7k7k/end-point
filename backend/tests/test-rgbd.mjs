import test from 'node:test';
import assert from 'node:assert/strict';
import express from 'express';
import mongoose from 'mongoose';
import router from '../src/routes/rgbdRoutes.js';
import RgbdFrame from '../src/models/RgbdFrame.js';
import Operation from '../src/models/Operation.js';
import OperatorTelemetry from '../src/models/OperatorTelemetry.js';

test('RGB-D storage: idempotency, history, validation, ended-operation rejection',
  { skip: !process.env.RGBD_TEST_MONGO }, async () => {
    const uri = process.env.RGBD_TEST_MONGO;
    assert.match(uri, /\/vision_rgbd_sync_test$/); // Never point tests at production.
    await mongoose.connect(uri);
    const op = await Operation.create({ userId: new mongoose.Types.ObjectId(), startTime: new Date() });
    await RgbdFrame.init();
    const app = express();
    app.use(express.json());
    app.use('/api/rgbd', router);
    const server = app.listen(0, '127.0.0.1');
    await new Promise(resolve => server.once('listening', resolve));
    const base = `http://127.0.0.1:${server.address().port}/api/rgbd`;
    const row = { operationId: String(op._id), sessionId: '00000000-0000-4000-8000-000000000000',
      frameId: 0, captureTimeNs: '1000000000', receivedTimeNs: '1000000001',
      processedTimeNs: '1000000002', status: 'pose_unavailable', metadata: {}, result: null };
    const post = data => fetch(`${base}/frames`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) });
    try {
      assert.equal((await post(row)).status, 201);
      assert.equal((await post(row)).status, 201);
      assert.equal(await RgbdFrame.countDocuments({ operationId: op._id }), 1);
      assert.equal((await (await fetch(`${base}/frames/${op._id}`)).json()).length, 1);
      assert.equal((await post({ ...row, frameId: -1 })).status, 400);
      assert.equal((await post({ ...row, captureTimeNs: 1000000000 })).status, 400);
      const pose = { position: { x: .1, y: 1.2, z: 1.1 }, quaternion: { w: 1, x: 0, y: 0, z: 0 },
        fusionAlgorithm: 'gwo4d', deviceLocalization: { algorithm:'gwo4d', status:'ready', biasMeters:.23, biasBounds:[0,.6], validAnchorCount:8 },
        uwbRanges: Array.from({length:8},(_,stationId)=>({stationId,distance:stationId+1})),
        imu: {acceleration:{x:0,y:0,z:0},gyroscope:{x:0,y:0,z:0}} };
      const localized = { ...row, frameId: 1, captureTimeNs: '1100000000', status: 'localized', devicePose: pose,
        result: { observations: [{ object: 'M4 hex screw', cameraPosition: { x: 0, y: 0, z: 1.2 }, rawAbsolutePosition: { x: 1.3, y: 1.2, z: 1.1 } }] } };
      assert.equal((await post(localized)).status, 201);
      assert.equal((await post(localized)).status, 201);
      let snapshot = await (await fetch(`${base}/snapshot/${op._id}/${row.sessionId}/latest`)).json();
      assert.equal(snapshot.frame.fusion.detections[0].screwId, 'A-1');
      assert.equal(snapshot.frame.fusion.state['A-1'].observationCount, 1, 'retry cannot double-fuse');
      assert.equal(snapshot.frame.videoTimeMs, 100);
      assert.deepEqual(snapshot.trail, [pose.position]);
      assert.deepEqual(Object.keys(snapshot.deviceAlgorithms), ['gwo4d']);
      assert.equal(snapshot.frame.devicePose.deviceLocalization.biasMeters,.23);
      assert.equal(snapshot.frame.devicePose.uwbRanges.length,8);
      assert.equal((await post({ ...row, frameId: 2, captureTimeNs: '1200000000', status: 'no_detection', devicePose: pose })).status, 201);
      snapshot = await (await fetch(`${base}/snapshot/${op._id}/${row.sessionId}/latest`)).json();
      assert.equal(snapshot.trail.length, 2, 'device keeps moving without a detection');
      assert.equal(snapshot.frame.fusion.detections.length, 0);
      assert.equal(snapshot.frame.fusion.state['A-1'].observationCount, 1);
      assert.equal((await post({ ...row, frameId: 3, captureTimeNs: '1000000000' })).status, 409);
      const sessions = await (await fetch(`${base}/sessions/${op._id}`)).json();
      assert.equal(sessions[0].count, 3);
      const noMedia = await (await fetch(`${base}/sessions/${op._id}?mediaOnly=1`)).json();
      assert.deepEqual(noMedia, [], 'metadata-only probes must not select the image viewer');
      await RgbdFrame.updateOne({operationId:op._id,frameId:1}, {rawPacketPath:'AI/video/rgbd/test/000000000001.rgbd'});
      const mediaSessions = await (await fetch(`${base}/sessions/${op._id}?mediaOnly=1`)).json();
      assert.equal(mediaSessions[0].count,1);
      const timeline = await (await fetch(`${base}/frames/${op._id}?sessionId=${row.sessionId}&index=1&after=0`)).json();
      assert.deepEqual(timeline.map(f => f.videoTimeMs), [100, 200]);
      await Operation.updateOne({ _id: op._id }, { endTime: new Date() });
      await OperatorTelemetry.insertMany(['ekf','complementary','weighted_average','gwo4d'].flatMap((fusionAlgorithm,i)=>[
        {operationId:op._id,timestamp:new Date(1100),fusionAlgorithm,telemetry:{...pose,position:{x:i,y:1,z:1}}},
        {operationId:op._id,timestamp:new Date(1300),fusionAlgorithm,telemetry:{...pose,position:{x:99,y:1,z:1}}}
      ]));
      snapshot = await (await fetch(`${base}/snapshot/${op._id}/${row.sessionId}/2`)).json();
      assert.equal(Object.keys(snapshot.deviceAlgorithms).length,4);
      for (const result of Object.values(snapshot.deviceAlgorithms)) {
        assert.equal(result.trail.length,1,'no future pose in historical frame');
        assert.notEqual(result.telemetry.position.x,99);
      }
      assert.equal((await post({ ...row, frameId: 4 })).status, 409);
      assert.equal((await post(localized)).status, 201, 'committed frame retry is safe after end');
    } finally {
      await new Promise(resolve => server.close(resolve));
      await RgbdFrame.deleteMany({ operationId: op._id });
      await OperatorTelemetry.deleteMany({ operationId: op._id });
      await Operation.deleteOne({ _id: op._id });
      await mongoose.disconnect();
    }
  });
