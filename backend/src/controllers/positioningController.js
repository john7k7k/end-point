import Detection from "../models/Detection.js";
import OperatorTelemetry from "../models/OperatorTelemetry.js";
import { getDeviceTelemetry } from "../mqtt/mqttClient.js";
import { getSimulationConfigValue } from "./simulationController.js";
import { getLatestScrewFusionResults, getScrewFusionResult, screwFusionAlgorithms, screwFusionLabels } from "../positioning/screwFusion.js";

import { deviceAlgorithms as operatorFusionAlgorithms } from '../positioning/deviceAlgorithms.js';

const fallbackTelemetry = (detection) => ({
  position: detection.devicePosition,
  orientation: { roll: detection.deviceOrientation?.x || 0, pitch: detection.deviceOrientation?.y || 0, yaw: detection.deviceOrientation?.z || 0 },
  quaternion: { w: 1, x: 0, y: 0, z: 0 }, uwbRanges: [], imu: null, workspace: { screws: [] }, updatedAt: detection.timestamp
});

const compactDetection = (detection) => detection ? {
  _id: detection._id,
  objectClass: detection.objectClass,
  bbox: detection.bbox,
  depth: detection.depth,
  detectionAlgorithm: detection.detectionAlgorithm || "mock_yolo",
  screwId: detection.screwId,
  timestamp: detection.timestamp
} : null;

const resolveScrewAlgorithm = (candidate) => screwFusionAlgorithms.includes(candidate)
  ? candidate
  : (getSimulationConfigValue().screwFusionAlgorithm || "average");

const localizationPayload = (detection, result, selectedAlgorithm) => {
  const rawPosition = result?.rawPosition || detection?.rawAbsolutePosition || detection?.absolutePosition || null;
  const fusedPosition = result?.fusedPosition || detection?.screwFusionPosition || detection?.absolutePosition || rawPosition;
  return {
    screwFusionAlgorithm: selectedAlgorithm,
    screwFusionLabel: screwFusionLabels[selectedAlgorithm],
    rawAbsolutePosition: rawPosition,
    absolutePosition: fusedPosition,
    screwLocalization: result ? {
      algorithm: result.algorithm,
      label: screwFusionLabels[result.algorithm],
      rawPosition: result.rawPosition,
      fusedPosition: result.fusedPosition,
      uncertainty: result.uncertainty,
      innovation: result.innovation,
      observationCount: result.observationCount,
      timestamp: result.timestamp
    } : null
  };
};

const localizedScrewPayload = (rows) => rows.map((row) => ({
  screwId: row.screwId,
  position: row.fusedPosition,
  timestamp: row.timestamp,
  observationCount: row.observationCount
}));

const findDetection = async (operationId, detectionId, timeFilter = {}) => {
  if (detectionId) {
    const detection = await Detection.findOne({ _id: detectionId, operationId });
    return detection;
  }
  return Detection.findOne({ operationId, ...timeFilter }).sort({ timestamp: -1 });
};

// For live mode, source data is produced by the stream pipeline and its selected
// fused screw result is read back from the database.  The endpoint does not
// regenerate a screw position, which keeps the video, 3D view and history equal.
export const getLatestPositioning = async (req, res) => {
  try {
    const operationId = req.params.operationId;
    const requestedOperatorAlgorithm = operatorFusionAlgorithms.includes(req.query.algorithm) ? req.query.algorithm : undefined;
    const screwAlgorithm = resolveScrewAlgorithm(req.query.screwAlgorithm);

    if (req.query.source === "live") {
      const telemetry = getDeviceTelemetry();
      const detection = await findDetection(operationId, req.query.detectionId);
      const screwResult = detection ? await getScrewFusionResult(detection._id, screwAlgorithm) : null;
      const localizedScrews = await getLatestScrewFusionResults(operationId, screwAlgorithm);
      return res.json({
        telemetry,
        detection: compactDetection(detection),
        cameraPosition: telemetry.position,
        screwCameraPosition: detection?.cameraPosition || null,
        fusionAlgorithm: requestedOperatorAlgorithm || getSimulationConfigValue().fusionAlgorithm,
        workspace: telemetry.workspace,
        localizedScrews: localizedScrewPayload(localizedScrews),
        ...localizationPayload(detection, screwResult, screwAlgorithm)
      });
    }

    const at = Number(req.query.at);
    const timeFilter = Number.isFinite(at) && at > 0 ? { timestamp: { $lte: new Date(at) } } : {};
    const detection = await findDetection(operationId, req.query.detectionId, timeFilter);
    const telemetryRecord = await OperatorTelemetry.findOne({ operationId, ...timeFilter, ...(requestedOperatorAlgorithm ? { fusionAlgorithm: requestedOperatorAlgorithm } : {}) }).sort({ timestamp: -1 });
    // OperatorTelemetry is sampled continuously and is the authoritative pose for
    // the requested historical instant; detections add screw-specific data only.
    const telemetry = telemetryRecord?.telemetry || detection?.fusionTelemetry || (detection ? fallbackTelemetry(detection) : null);
    if (!telemetry?.position) return res.status(404).json({ error: "尚無已儲存的操作員遙測資料。" });
    const screwResult = detection ? await getScrewFusionResult(detection._id, screwAlgorithm) : null;
    const localizedScrews = await getLatestScrewFusionResults(operationId, screwAlgorithm, Number.isFinite(at) && at > 0 ? at : null);

    return res.json({
      telemetry,
      detection: compactDetection(detection),
      cameraPosition: telemetry.position,
      screwCameraPosition: detection?.cameraPosition || null,
      fusionAlgorithm: requestedOperatorAlgorithm || detection?.fusionAlgorithm || telemetryRecord?.fusionAlgorithm || "ekf",
      workspace: telemetry.workspace,
      localizedScrews: localizedScrewPayload(localizedScrews),
      ...localizationPayload(detection, screwResult, screwAlgorithm)
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
