import Detection from "../models/Detection.js";
import OperatorTelemetry from "../models/OperatorTelemetry.js";

const fallbackTelemetry = (detection) => ({
  position: detection.devicePosition,
  orientation: { roll: detection.deviceOrientation?.x || 0, pitch: detection.deviceOrientation?.y || 0, yaw: detection.deviceOrientation?.z || 0 },
  quaternion: { w: 1, x: 0, y: 0, z: 0 }, uwbRanges: [], imu: null, workspace: { screws: [] }, updatedAt: detection.timestamp
});

// Read stored snapshots only.  `at` lets history playback select the same time as its video frame.
export const getLatestPositioning = async (req, res) => {
  const at = Number(req.query.at);
  const timeFilter = Number.isFinite(at) && at > 0 ? { timestamp: { $lte: new Date(at) } } : {};
  const detection = req.query.detectionId
    ? await Detection.findById(req.query.detectionId)
    : await Detection.findOne({ operationId: req.params.operationId, ...timeFilter }).sort({ timestamp: -1 });
  const telemetryRecord = await OperatorTelemetry.findOne({ operationId: req.params.operationId, ...timeFilter }).sort({ timestamp: -1 });
  // OperatorTelemetry is sampled continuously and is the authoritative pose for
  // the requested live/history instant; detections add only screw-specific data.
  const telemetry = telemetryRecord?.telemetry || detection?.fusionTelemetry || (detection ? fallbackTelemetry(detection) : null);
  if (!telemetry?.position) return res.status(404).json({ error: "尚無已儲存的操作員遙測資料。" });

  res.json({
    telemetry,
    detection: detection ? { objectClass: detection.objectClass, bbox: detection.bbox, depth: detection.depth, detectionAlgorithm: detection.detectionAlgorithm || "mock_yolo", screwId: detection.screwId } : null,
    cameraPosition: telemetry.position,
    screwCameraPosition: detection?.cameraPosition || null,
    absolutePosition: detection?.absolutePosition || null,
    fusionAlgorithm: detection?.fusionAlgorithm || telemetryRecord?.fusionAlgorithm || "ekf",
    workspace: telemetry.workspace
  });
};
