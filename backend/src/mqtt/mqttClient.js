import mqtt from "mqtt";
import Operation from "../models/Operation.js";
import Detection from "../models/Detection.js";
import User from "../models/User.js";
import { getSimulationConfigValue } from "../controllers/simulationController.js";

const client = mqtt.connect("mqtt://localhost:1883");
const AI_ENDPOINT = "http://localhost:8000/api/operation-update";
let latestUwbPosition = null;
let latestImuOrientation = null;

const validVector = (value) => value && [value.x, value.y, value.z].every(Number.isFinite);
const virtualPosition = () => {
  const time = Date.now() / 1000;
  return { x: 1.2 + Math.sin(time * 0.7) * 0.18, y: 0.8 + Math.cos(time * 0.5) * 0.12, z: 1.45 + Math.sin(time * 0.35) * 0.06 };
};
const virtualOrientation = () => {
  const time = Date.now() / 1000;
  return { roll: Math.sin(time * 0.8) * 8, pitch: Math.cos(time * 0.6) * 10, yaw: (time * 12) % 360 };
};

export const getDeviceTelemetry = () => ({
  position: latestUwbPosition?.position || virtualPosition(),
  orientation: latestImuOrientation?.orientation || virtualOrientation(),
  positionSource: latestUwbPosition ? "mqtt" : "simulated",
  orientationSource: latestImuOrientation ? "mqtt" : "simulated",
  updatedAt: new Date().toISOString()
});

client.on("connect", () => {
  console.log("MQTT connected");
  client.subscribe("vision/operation/start", { qos: 2 });
  client.subscribe("vision/operation/end", { qos: 2 });
  client.subscribe("vision/detection", { qos: 2 });
  client.subscribe("vision/uwb/position", { qos: 1 });
  client.subscribe("vision/imu/orientation", { qos: 1 });
  client.subscribe("vision/device/pose", { qos: 1 });
  console.log("MQTT subscribed to vision/operation/start, vision/operation/end, and vision/detection");
});

client.on("message", async (topic, message) => {
  console.log(`MQTT message received on ${topic}:`, message.toString());
  try {
    const data = JSON.parse(message.toString());
    console.log(`📨 Received MQTT message on ${topic}:`, data);
    if (topic === "vision/operation/start") {
      await handleOperationStart(data);
    } else if (topic === "vision/operation/end") {
      await handleOperationEnd(data);
    } else if (topic === "vision/detection") {
      await handleDetection(data);
    } else if (topic === "vision/uwb/position" && validVector(data.position || data)) {
      latestUwbPosition = { position: data.position || data, timestamp: Date.now() };
    } else if (topic === "vision/imu/orientation" && [data.orientation?.roll ?? data.roll ?? data.x, data.orientation?.pitch ?? data.pitch ?? data.y, data.orientation?.yaw ?? data.yaw ?? data.z].every(Number.isFinite)) {
      const value = data.orientation || data;
      latestImuOrientation = { orientation: { roll: value.roll ?? value.x, pitch: value.pitch ?? value.y, yaw: value.yaw ?? value.z }, timestamp: Date.now() };
    } else if (topic === "vision/device/pose") {
      if (validVector(data.position)) latestUwbPosition = { position: data.position, timestamp: Date.now() };
      if (data.orientation && [data.orientation.roll, data.orientation.pitch, data.orientation.yaw].every(Number.isFinite)) latestImuOrientation = { orientation: data.orientation, timestamp: Date.now() };
    }
  } catch (err) {
    console.error("MQTT parse error:", err);
  }
});

async function handleOperationStart(data) {
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

    console.log(`Operation created: ${operation._id}`);

    // Send acknowledgment with opID via MQTT
    const ackPayload = { opID: operation._id.toString() };
    client.publish(
      `vision/operation/ack/${userId}`,
      JSON.stringify(ackPayload),
      { qos: 2 },
      (err) => {
        if (err) console.error("Failed to publish ack:", err);
        else console.log(`ACK sent to vision/operation/ack/${userId}`);
      }
    );

    // Send operationID to AI endpoint
    try {
      const response = await fetch(AI_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ opID: operation._id.toString() })
      });
      if (response.ok) {
        console.log(`✓ Operation ID sent to AI endpoint: ${operation._id}`);
      } else {
        console.error(`AI endpoint returned status ${response.status}`);
      }
    } catch (err) {
      console.error(`Failed to notify AI endpoint: ${err.message}`);
    }

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
    const bbox = data.bbox || { x: 860, y: 465, width: 200, height: 150 };
    const depthMeters = Number(data.depth || 120) / 100;
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
    data.sensors = [{
      timestamp: new Date(), imu: true, devicePosition: telemetry.position,
      gyroscope: { x: orientation.roll, y: orientation.pitch, z: orientation.yaw }
    }];
    data.devicePosition = telemetry.position;
    data.deviceOrientation = { x: orientation.roll, y: orientation.pitch, z: orientation.yaw };
    data.cameraPosition = cameraPosition;
    data.absolutePosition = absolutePosition;
    data.fusionAlgorithm = getSimulationConfigValue().fusionAlgorithm;
    await Detection.create(data);


  } catch (err) {
    console.error("Error in handleDetection:", err);
  }
}

export default client;
