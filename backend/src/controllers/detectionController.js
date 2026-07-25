import Detection from "../models/Detection.js";
import { getDeviceTelemetry } from "../mqtt/mqttClient.js";
import { getSimulationConfigValue } from "./simulationController.js";

const attachPositioningData = (data, telemetry) => {
  const recognizedScrew = telemetry.workspace.visibleScrews.sort((a, b) => a.depth - b.depth)[0];
  // Do not create detection records unless a reference screw is inside camera FOV and depth range.
  if (!recognizedScrew) return null;
  const bbox = data.bbox || { x: 860, y: 465, width: 200, height: 150 };
  const depthMeters = recognizedScrew.depth;
  const cameraPosition = {
    x: ((bbox.x + bbox.width / 2 - 960) / 960) * depthMeters * 0.577,
    y: ((bbox.y + bbox.height / 2 - 540) / 540) * depthMeters * 0.325,
    z: depthMeters
  };
  const orientation = telemetry.orientation;
  const yaw = orientation.yaw * Math.PI / 180;
  const relative = recognizedScrew.cameraPosition;
  // Re-localise from the current camera observation and fused device pose.
  const absolutePosition = {
    x: Number((telemetry.position.x + Math.cos(yaw) * relative.z - Math.sin(yaw) * relative.x).toFixed(3)),
    y: Number((telemetry.position.y + Math.sin(yaw) * relative.z + Math.cos(yaw) * relative.x).toFixed(3)),
    z: Number((telemetry.position.z + relative.y).toFixed(3))
  };
  return {
    ...data,
    objectClass: recognizedScrew.type,
    screwId: recognizedScrew.id,
    dataSource: "simulation",
    depth: depthMeters * 100,
    sensors: [{ timestamp: new Date(), imu: true, devicePosition: telemetry.position, gyroscope: { x: orientation.roll, y: orientation.pitch, z: orientation.yaw } }],
    devicePosition: telemetry.position,
    deviceOrientation: { x: orientation.roll, y: orientation.pitch, z: orientation.yaw },
    cameraPosition: recognizedScrew.cameraPosition,
    absolutePosition,
    fusionTelemetry: { position: telemetry.position, orientation: telemetry.orientation, quaternion: telemetry.quaternion, uwbRanges: telemetry.uwbRanges, imu: telemetry.imu, workspace: telemetry.workspace, updatedAt: telemetry.updatedAt },
    fusionAlgorithm: getSimulationConfigValue().fusionAlgorithm
  };
};

export const createDetection = async (req, res) => {
  try {
    const { operationId, timestamp, objectClass } = req.body;

    if (!operationId) {
      return res.status(400).json({ error: "operationId is required" });
    }
    if (!timestamp) {
      return res.status(400).json({ error: "timestamp is required" });
    }
    if (!objectClass) {
      return res.status(400).json({ error: "objectClass is required" });
    }

    const telemetry = getDeviceTelemetry();
    const fusionAlgorithm = getSimulationConfigValue().fusionAlgorithm;
    const enriched = attachPositioningData(req.body, telemetry);
    if (!enriched) return res.status(204).end();
    const detection = await Detection.create(enriched);
    res.status(201).json(detection);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getOperationDetections = async (req, res) => {
  res.json(await Detection.find({ operationId: req.params.operationId }).sort({ timestamp: -1 }));
};

export const getDetections = async (_req, res) => {
  res.json(await Detection.find().populate("operationId").sort({ timestamp: -1 }));
};

export const updateDetection = async (req, res) => {
  res.json(await Detection.findByIdAndUpdate(req.params.id, req.body, { returnDocument: "after" }));
};

export const deleteDetection = async (req, res) => {
  await Detection.findByIdAndDelete(req.params.id);
  res.json({ message: "deleted" });
};
