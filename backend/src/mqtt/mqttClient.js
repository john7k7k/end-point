import mqtt from "mqtt";
import Operation from "../models/Operation.js";
import Detection from "../models/Detection.js";
import User from "../models/User.js";
import { getSimulationConfigValue } from "../controllers/simulationController.js";
import { getEsEkfState, predict, stepVirtual, updateUwb } from "../positioning/esEkf.js";
import { getWorkspaceState } from "../positioning/screwWorkspace.js";

const client = mqtt.connect("mqtt://localhost:1883");
const AI_ENDPOINT = "http://localhost:8000/api/operation-update";
let hasUwbRanges = false;
let hasImuData = false;
let lastNotificationKey = '';
let lastNotificationAt = 0;

export const getDeviceTelemetry = () => {
  if (!hasUwbRanges || !hasImuData) stepVirtual();
  const filter = getEsEkfState();
  const telemetry = {
    position: filter.position,
    orientation: filter.orientation,
    quaternion: filter.quaternion,
    anchorCount: filter.anchorCount,
    uwbRanges: filter.uwbRanges,
    imu: filter.imu,
    updatedAt: new Date().toISOString()
  };
  const workspace = getWorkspaceState(telemetry);
  const notificationKey = workspace.notification;
  if (notificationKey && (notificationKey !== lastNotificationKey || Date.now() - lastNotificationAt > 5000)) {
    client.publish("vision/notification", JSON.stringify({ level: "info", text: notificationKey, timestamp: telemetry.updatedAt }), { qos: 1 });
    lastNotificationKey = notificationKey;
    lastNotificationAt = Date.now();
  }
  if (!notificationKey) lastNotificationKey = '';
  return { ...telemetry, workspace };
};

client.on("connect", () => {
  console.log("MQTT connected");
  client.subscribe("vision/operation/start", { qos: 2 });
  client.subscribe("vision/operation/end", { qos: 2 });
  client.subscribe("vision/detection", { qos: 2 });
  client.subscribe("vision/uwb/ranges", { qos: 1 });
  client.subscribe("vision/imu/data", { qos: 1 });
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
    } else if (topic === "vision/uwb/ranges" && Array.isArray(data.ranges)) {
      updateUwb(data.ranges);
      hasUwbRanges = true;
    } else if (topic === "vision/imu/data" && data.acceleration && data.gyroscope) {
      predict(data.acceleration, data.gyroscope);
      hasImuData = true;
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
    data.depth = depthMeters * 100;
    data.sensors = [{
      timestamp: new Date(), imu: true, devicePosition: telemetry.position,
      gyroscope: { x: orientation.roll, y: orientation.pitch, z: orientation.yaw }
    }];
    data.devicePosition = telemetry.position;
    data.deviceOrientation = { x: orientation.roll, y: orientation.pitch, z: orientation.yaw };
    data.cameraPosition = recognizedScrew.cameraPosition;
    data.absolutePosition = { x: recognizedScrew.x, y: recognizedScrew.y, z: recognizedScrew.z };
    data.fusionAlgorithm = getSimulationConfigValue().fusionAlgorithm;
    await Detection.create(data);


  } catch (err) {
    console.error("Error in handleDetection:", err);
  }
}

export default client;
