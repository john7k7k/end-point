import OperatorTelemetry from "../models/OperatorTelemetry.js";

const lastWriteAt = new Map();

// Store continuously while a stream is processed, independent of screw visibility.
export const recordOperatorTelemetry = async (operationId, timestamp, telemetry, fusionAlgorithm) => {
  const now = Number(timestamp) || Date.now();
  if (now - (lastWriteAt.get(operationId) || 0) < 200) return null;
  lastWriteAt.set(operationId, now);
  return OperatorTelemetry.create({ operationId, timestamp: new Date(now), dataSource: "simulation", fusionAlgorithm, telemetry });
};

export const getOperationTelemetry = async (req, res) => {
  const at = Number(req.query.at);
  const filter = { operationId: req.params.operationId };
  if (Number.isFinite(at) && at > 0) filter.timestamp = { $lte: new Date(at) };
  const records = await OperatorTelemetry.find(filter).sort({ timestamp: -1 }).limit(80);
  res.json(records.reverse());
};
