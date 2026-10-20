import mqtt from "mqtt";
import { Worker } from 'node:worker_threads';
import { backendInstanceId } from '../runtimeIdentity.js';
import Operation from "../models/Operation.js";
import Detection from "../models/Detection.js";
import User from "../models/User.js";
import RawSensorMeasurement from "../models/RawSensorMeasurement.js";
import OperatorTelemetry from "../models/OperatorTelemetry.js";
import { getSimulationConfigValue } from "../controllers/simulationController.js";
import { recordFusionTelemetrySet } from "../controllers/operatorTelemetryController.js";
import { getFilterState, predict, resetAllFilters, setHeading, stepVirtual, updateUwb } from "../positioning/esEkf.js";
import { getWorkspaceState } from "../positioning/screwWorkspace.js";
import { persistDetectionWithScrewFusion, rebuildScrewFusionForOperation } from "../positioning/screwFusion.js";

const client = mqtt.connect(process.env.MQTT_URL || "mqtt://localhost:1883");
const AI_ENDPOINT = "http://localhost:8000/api/operation-update";
let hasUwbRanges = false;
let hasImuData = false;
let lastNotificationKey = '';
let lastNotificationAt = 0;
let activeOperationId = null;
const pendingRawWrites = new Set();
export const setActiveTelemetryOperation = (operationId) => { activeOperationId = operationId ? String(operationId) : null; };
export const beginTelemetryOperation = (operationId) => { resetAllFilters(); setActiveTelemetryOperation(operationId); };

const buildTelemetry = (fusionAlgorithm) => {
  const filter = getFilterState(fusionAlgorithm);
  const telemetry = {
    position: filter.position,
    orientation: filter.orientation,
    quaternion: filter.quaternion,
    anchorCount: filter.anchorCount,
    uwbRanges: filter.uwbRanges,
    imu: filter.imu,
    ...(filter.deviceLocalization ? { deviceLocalization: filter.deviceLocalization } : {}),
    updatedAt: new Date().toISOString()
  };
  return { ...telemetry, workspace: getWorkspaceState(telemetry) };
};

const persistRawFrame = async (source, payload, dataSource = "mqtt", timestamp = Date.now()) => {
  if (!activeOperationId) return;
  const write = RawSensorMeasurement.create({ operationId: activeOperationId, timestamp: new Date(timestamp), source, dataSource, payload });
  pendingRawWrites.add(write);
  try { await write; } finally { pendingRawWrites.delete(write); }
};

const activeAlgorithm = () => getSimulationConfigValue().fusionAlgorithm;
const updateActiveUwb = (ranges) => updateUwb(ranges, activeAlgorithm());
const updateActiveImu = (acceleration, gyroscope, timestamp) => predict(acceleration, gyroscope, timestamp, activeAlgorithm());

export const rebuildTelemetryForOperation = async (operationId) => {
  await Promise.allSettled([...pendingRawWrites]);
  const samples = await RawSensorMeasurement.find({ operationId }).sort({ timestamp: 1 }).lean();
  if (!samples.length) return { samples: 0, telemetry: 0 };
  // A worker owns separate filter state: replay cannot reset a new live operation.
  const rows = await new Promise((resolve, reject) => {
    const worker = new Worker(new URL('../positioning/telemetryReplayWorker.js', import.meta.url),
      { workerData: samples.map(({ timestamp, source, dataSource, payload }) => ({ timestamp, source, dataSource, payload })) });
    worker.once('message', resolve); worker.once('error', reject);
    worker.once('exit', code => { if (code) reject(new Error(`telemetry replay exited ${code}`)); });
  });
  await OperatorTelemetry.deleteMany({ operationId });
  if (rows.length) await OperatorTelemetry.insertMany(rows.map(row => ({ ...row, operationId })));
  const telemetry = await OperatorTelemetry.countDocuments({ operationId });
  console.log(`Rebuilt ${telemetry} telemetry records from ${samples.length} raw samples for operation ${operationId}`);
  return { samples: samples.length, telemetry };
};
export const finalizeTelemetryOperation = async (operationId) => {
  if (activeOperationId === String(operationId)) setActiveTelemetryOperation(null);
  const result = await rebuildTelemetryForOperation(operationId);
  if (activeOperationId === String(operationId)) setActiveTelemetryOperation(null);
  return result;
};

export const getSynchronizedDeviceSample = async (operationId) => {
  if (String(operationId) !== activeOperationId) throw new Error('operation is not active');
  const telemetry = getDeviceTelemetry();
  if (activeAlgorithm() === 'gwo4d' && telemetry.deviceLocalization?.status !== 'ready') {
    throw new Error('4D-GWO requires at least five valid, geometrically independent UWB anchors');
  }
  await Promise.all([...pendingRawWrites]);
  return { ...telemetry, fusionAlgorithm: activeAlgorithm(),
    timestampNs: String(BigInt(new Date(telemetry.updatedAt).getTime()) * 1000000n) };
};

export const getDeviceTelemetry = () => {
  const fusionAlgorithm = getSimulationConfigValue().fusionAlgorithm;
  if (!hasUwbRanges || !hasImuData) {
    const measurement = stepVirtual(fusionAlgorithm);
    persistRawFrame("simulation", measurement, "simulation").catch((error) => console.error("Failed to persist virtual sensor sample:", error.message));
  }
  const telemetry = buildTelemetry(fusionAlgorithm);
  const workspace = telemetry.workspace;
  const notificationKey = workspace.notification;
  if (notificationKey && (notificationKey !== lastNotificationKey || Date.now() - lastNotificationAt > 5000)) {
    client.publish("vision/notification", JSON.stringify({ level: "info", text: notificationKey, timestamp: telemetry.updatedAt }), { qos: 1 });
    lastNotificationKey = notificationKey;
    lastNotificationAt = Date.now();
  }
  if (!notificationKey) lastNotificationKey = '';
  return telemetry;
};

client.on("connect", () => {
  console.log("MQTT connected");
  client.subscribe("vision/operation/start", { qos: 2 });
  client.subscribe("vision/operation/end", { qos: 2 });
  client.subscribe("vision/detection", { qos: 2 });
  client.subscribe("vision/uwb/ranges", { qos: 1 });
  client.subscribe("vision/imu/data", { qos: 1 });
  client.subscribe("vision/device/pose", { qos: 1 });
  console.log("MQTT subscribed to vision/operation/start, vision/operation/end, and vision/detection");
});

client.on("message", async (topic, message) => {
  console.log(`MQTT message received on ${topic}:`, message.toString());
  try {
    const data = JSON.parse(message.toString());
    console.log(`📨 Received MQTT message on ${topic}:`, data);
    if (topic === "vision/device/pose") {
      if (String(data.operationId) !== activeOperationId) throw new Error('pose operation mismatch');
      const response = await fetch('http://127.0.0.1:8000/api/rgbd/pose', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data), signal: AbortSignal.timeout(2000)
      });
      if (!response.ok) console.error('RGB-D pose rejected:', await response.text());
    } else if (topic === "vision/operation/start") {
      await handleOperationStart(data);
    } else if (topic === "vision/operation/end") {
      await handleOperationEnd(data);
    } else if (topic === "vision/detection") {
      await handleDetection(data);
    } else if (topic === "vision/uwb/ranges" && Array.isArray(data.ranges)) {
      const timestamp = Number(data.timestamp) || Date.now();
      updateActiveUwb(data.ranges);
      hasUwbRanges = true;
      await persistRawFrame("uwb", { ranges: data.ranges }, "mqtt", timestamp);
    } else if (topic === "vision/imu/data" && data.acceleration && data.gyroscope) {
      const timestamp = Number(data.timestamp) || Date.now();
      updateActiveImu(data.acceleration, data.gyroscope, timestamp);
      hasImuData = true;
      await persistRawFrame("imu", { acceleration: data.acceleration, gyroscope: data.gyroscope }, "mqtt", timestamp);
    }
  } catch (err) {
    console.error("MQTT parse error:", err);
  }
});

async function handleOperationStart(data) {
  if (data.backendInstanceId && data.backendInstanceId !== backendInstanceId) return;
  try {
    const { userId, startTime } = data;

    if (!userId) {
      console.error("Missing required field: userId");
      return;
    }

    const user = await User.findById(userId);
    if (!user) {
      console.error(`User not found: ${userId}`);
      return;
    }

    const operation = await Operation.create({
      userId,
      startTime: new Date(),
      description: "Started via MQTT"
    });
    beginTelemetryOperation(operation._id);

    console.log(`Operation created: ${operation._id}`);

    // Acknowledge only after AI accepts this operation; otherwise the sender
    // can race the operation-update request and fail its RGB-D handshake.
    const ready = await fetch(AI_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ opID: operation._id.toString() }),
      signal: AbortSignal.timeout(15000)
    });
    if (!ready.ok) throw new Error(`AI operation preparation failed: ${ready.status}`);

    // Send acknowledgment with opID via MQTT
    const ackPayload = { opID: operation._id.toString(), backendInstanceId, requestId: data.requestId };
    client.publish(
      `vision/operation/ack/${userId}`,
      JSON.stringify(ackPayload),
      { qos: 2 },
      (err) => {
        if (err) console.error("Failed to publish ack:", err);
        else console.log(`ACK sent to vision/operation/ack/${userId}`);
      }
    );

    console.log(`✓ AI ready for operation: ${operation._id}`);

  } catch (err) {
    console.error("Error in handleOperationStart:", err);
  }
}

async function handleOperationEnd(data) {
  try {
    const { opID, endTime, description } = data;

    if (!opID || !endTime) {
      console.error("Missing required fields: opID or endTime");
      return;
    }

    const operation = await Operation.findByIdAndUpdate(
      opID,
      { endTime: new Date(endTime), description: description || "" },
      { returnDocument: "after" }
    );

    if (!operation) {
      console.error(`Operation not found: ${opID}`);
      return;
    }

    console.log(`Operation ended: ${opID}`);
    await finalizeTelemetryOperation(opID);
    const screwFusion = await rebuildScrewFusionForOperation(opID);
    console.log(`Rebuilt ${screwFusion.results} screw fusion results for operation ${opID}`);
    try {
      await fetch("http://localhost:8000/api/operation-end", { method: "POST" });
    } catch (err) {
      console.error(`Failed to notify AI operation end: ${err.message}`);
    }
  } catch (err) {
    console.error("Error in handleOperationEnd:", err);
  }
}

async function handleDetection(data) {
  try {
    console.log("Detection data received:", data);
    const { operationId, timestamp, objectClass } = data;

    if (!operationId) {
      return console.log(json({ error: "operationId is required" }));
    }
    if (!timestamp) {
      return console.log(json({ error: "timestamp is required" }));
    }
    if (!objectClass) {
      return console.log(json({ error: "objectClass is required" }));
    }

    const telemetry = getDeviceTelemetry();
    const recognizedScrew = telemetry.workspace.visibleScrews.sort((a, b) => a.depth - b.depth)[0];
    // The detector only updates records for a known screw inside camera FOV and depth limits.
    if (!recognizedScrew) return;
    const bbox = data.bbox || { x: 860, y: 465, width: 200, height: 150 };
    const depthMeters = recognizedScrew.depth;
    const cameraPosition = {
      x: (((bbox.x + bbox.width / 2 - 960) / 960) * depthMeters * 0.577),
      y: (((bbox.y + bbox.height / 2 - 540) / 540) * depthMeters * 0.325),
      z: depthMeters
    };
    const orientation = telemetry.orientation;
    const yaw = orientation.yaw * Math.PI / 180;
    const absolutePosition = {
      x: telemetry.position.x + Math.cos(yaw) * cameraPosition.x - Math.sin(yaw) * cameraPosition.y,
      y: telemetry.position.y + Math.sin(yaw) * cameraPosition.x + Math.cos(yaw) * cameraPosition.y,
      z: telemetry.position.z + cameraPosition.z
    };
    data.objectClass = recognizedScrew.type;
    data.screwId = recognizedScrew.id;
    data.dataSource = "simulation";
    data.depth = depthMeters * 100;
    data.sensors = [{
      timestamp: new Date(), imu: true, devicePosition: telemetry.position,
      gyroscope: { x: orientation.roll, y: orientation.pitch, z: orientation.yaw }
    }];
    data.devicePosition = telemetry.position;
    data.deviceOrientation = { x: orientation.roll, y: orientation.pitch, z: orientation.yaw };
    data.cameraPosition = recognizedScrew.cameraPosition;
    data.absolutePosition = {
      x: Number((telemetry.position.x + Math.cos(yaw) * recognizedScrew.cameraPosition.z - Math.sin(yaw) * recognizedScrew.cameraPosition.x).toFixed(3)),
      y: Number((telemetry.position.y + Math.sin(yaw) * recognizedScrew.cameraPosition.z + Math.cos(yaw) * recognizedScrew.cameraPosition.x).toFixed(3)),
      z: Number((telemetry.position.z + recognizedScrew.cameraPosition.y).toFixed(3))
    };
    data.rawAbsolutePosition = { ...data.absolutePosition };
    data.fusionTelemetry = { position: telemetry.position, orientation: telemetry.orientation, quaternion: telemetry.quaternion, uwbRanges: telemetry.uwbRanges, imu: telemetry.imu, workspace: telemetry.workspace, updatedAt: telemetry.updatedAt };
    data.fusionAlgorithm = getSimulationConfigValue().fusionAlgorithm;
    await persistDetectionWithScrewFusion(data);


  } catch (err) {
    console.error("Error in handleDetection:", err);
  }
}

export default client;
