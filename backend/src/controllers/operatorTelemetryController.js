import OperatorTelemetry from "../models/OperatorTelemetry.js";

const lastWriteAt = new Map();

// Store continuously while a stream is processed, independent of screw visibility.
export const recordOperatorTelemetry = async (operationId, timestamp, telemetry, fusionAlgorithm, dataSource = "simulation") => {
  const now = Number(timestamp) || Date.now();
  const key = `${operationId}:${fusionAlgorithm}`;
  if (now - (lastWriteAt.get(key) || 0) < 200) return null;
  lastWriteAt.set(key, now);
  return OperatorTelemetry.create({ operationId, timestamp: new Date(now), dataSource, fusionAlgorithm, telemetry });
};

export const recordFusionTelemetrySet = async (operationId, timestamp, telemetryByAlgorithm, dataSource) => {
  if (!operationId) return [];
  return Promise.all(Object.entries(telemetryByAlgorithm).map(([algorithm, telemetry]) =>
    recordOperatorTelemetry(operationId, timestamp, telemetry, algorithm, dataSource)
  ));
};

export const getOperationTelemetry = async (req, res) => {
  const at = Number(req.query.at);
  const filter = { operationId: req.params.operationId };
  if (Number.isFinite(at) && at > 0) filter.timestamp = { $lte: new Date(at) };
  // Three parallel fusion streams are retained: return up to 80 samples per algorithm.
  const records = await OperatorTelemetry.find(filter).sort({ timestamp: -1 }).limit(240);
  res.json(records.reverse());
};
