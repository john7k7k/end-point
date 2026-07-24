import mongoose from "mongoose";

const OperatorTelemetrySchema = new mongoose.Schema({
  operationId: { type: mongoose.Schema.Types.ObjectId, ref: "Operation", required: true, index: true },
  timestamp: { type: Date, required: true, index: true },
  dataSource: { type: String, default: "simulation" },
  fusionAlgorithm: String,
  telemetry: { type: mongoose.Schema.Types.Mixed, required: true }
}, { versionKey: false });

OperatorTelemetrySchema.index({ operationId: 1, timestamp: -1 });
export default mongoose.model("OperatorTelemetry", OperatorTelemetrySchema);
