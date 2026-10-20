import test from 'node:test';
import assert from 'node:assert/strict';
import mongoose from 'mongoose';
import Raw from '../src/models/RawSensorMeasurement.js';
import Telemetry from '../src/models/OperatorTelemetry.js';

test('live saves raw inputs only; end rebuilds all device algorithms', {skip: !process.env.RGBD_TEST_MONGO}, async()=>{
  assert.match(process.env.RGBD_TEST_MONGO,/\/vision_rgbd_sync_test$/);
  // No subscription to the running platform's broker during this isolated test.
  process.env.MQTT_URL='mqtt://127.0.0.1:1';
  const pipeline=await import('../src/mqtt/mqttClient.js');
  const {getSimulationConfigValue}=await import('../src/controllers/simulationController.js');
  const op=new mongoose.Types.ObjectId();
  await mongoose.connect(process.env.RGBD_TEST_MONGO);
  try {
    pipeline.beginTelemetryOperation(op);
    for(const algorithm of ['ekf','complementary','weighted_average','gwo4d']) {
      getSimulationConfigValue().fusionAlgorithm=algorithm;
      const sample=await pipeline.getSynchronizedDeviceSample(String(op));
      assert.equal(sample.fusionAlgorithm,algorithm);
      assert.equal(sample.uwbRanges.length,8);
      assert(sample.imu.acceleration);
      await new Promise(resolve=>setTimeout(resolve,210));
    }
    assert.equal(await Raw.countDocuments({operationId:op}),4);
    assert.equal(await Telemetry.countDocuments({operationId:op}),0);
    const result=await pipeline.finalizeTelemetryOperation(op);
    assert.equal(result.samples,4);
    assert.equal(result.telemetry,16);
    await assert.rejects(()=>pipeline.getSynchronizedDeviceSample(String(op)),/not active/);
    await pipeline.rebuildTelemetryForOperation(op);
    assert.equal(await Telemetry.countDocuments({operationId:op}),16,'replay is repeatable without duplicates');
  } finally {
    pipeline.default.end(true);
    await Raw.deleteMany({operationId:op});await Telemetry.deleteMany({operationId:op});
    await mongoose.disconnect();
  }
});
