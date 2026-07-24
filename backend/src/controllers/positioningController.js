import Detection from "../models/Detection.js";
import { getDeviceTelemetry } from "../mqtt/mqttClient.js";
import { getSimulationConfigValue } from "./simulationController.js";

const virtualDetection = {
  objectClass: "screw (simulated)",
  bbox: { x: 860, y: 460, width: 200, height: 150 },
  depth: 120
};

const cameraCoordinate = (detection) => {
  const depth = Number(detection.depth || 120) / 100;
  const centerX = (detection.bbox?.x || 860) + (detection.bbox?.width || 200) / 2;
  const centerY = (detection.bbox?.y || 460) + (detection.bbox?.height || 150) / 2;
  return {
    x: Number((((centerX - 960) / 960) * depth * 0.577).toFixed(3)),
    y: Number((((centerY - 540) / 540) * depth * 0.325).toFixed(3)),
    z: Number(depth.toFixed(3))
  };
};

const rotateByOrientation = (point, orientation) => {
  const roll = orientation.roll * Math.PI / 180;
  const pitch = orientation.pitch * Math.PI / 180;
  const yaw = orientation.yaw * Math.PI / 180;
  const cy = Math.cos(yaw), sy = Math.sin(yaw), cp = Math.cos(pitch), sp = Math.sin(pitch), cr = Math.cos(roll), sr = Math.sin(roll);
  return {
    x: cy * cp * point.x + (cy * sp * sr - sy * cr) * point.y + (cy * sp * cr + sy * sr) * point.z,
    y: sy * cp * point.x + (sy * sp * sr + cy * cr) * point.y + (sy * sp * cr - cy * sr) * point.z,
    z: -sp * point.x + cp * sr * point.y + cp * cr * point.z
  };
};

export const getLatestPositioning = async (req, res) => {
  const detection = req.query.detectionId
    ? await Detection.findById(req.query.detectionId) || virtualDetection
    : await Detection.findOne({ operationId: req.params.operationId }).sort({ timestamp: -1 }) || virtualDetection;
  const latestTelemetry = getDeviceTelemetry();
  const savedOrientation = detection.deviceOrientation;
  const telemetry = detection._id && detection.devicePosition && savedOrientation ? {
    position: detection.devicePosition,
    orientation: { roll: savedOrientation.x, pitch: savedOrientation.y, yaw: savedOrientation.z },
    updatedAt: detection.timestamp
  } : latestTelemetry;
  const cameraPosition = cameraCoordinate(detection);
  const rotatedPoint = rotateByOrientation(cameraPosition, telemetry.orientation);
  const calculatedAbsolutePosition = {
    x: Number((telemetry.position.x + rotatedPoint.x).toFixed(3)),
    y: Number((telemetry.position.y + rotatedPoint.y).toFixed(3)),
    z: Number((telemetry.position.z + rotatedPoint.z).toFixed(3))
  };
  res.json({
    telemetry,
    detection: { objectClass: detection.objectClass, bbox: detection.bbox, depth: detection.depth, detectionAlgorithm: detection.detectionAlgorithm || "mock_yolo" },
    cameraPosition: detection.cameraPosition || cameraPosition,
    absolutePosition: detection.absolutePosition || calculatedAbsolutePosition,
    fusionAlgorithm: detection.fusionAlgorithm || getSimulationConfigValue().fusionAlgorithm
  });
};
