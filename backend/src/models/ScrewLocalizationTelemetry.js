import mongoose from "mongoose";
import Vector3Schema from "../schemas/Vector3.js";

// One persisted multi-view localization result for a screw observation.  The
// original camera-to-world result is retained alongside each fusion result so
// historical playback can change algorithms without re-generating data.
const ScrewLocalizationTelemetrySchema = new mongoose.Schema({
  operationId: { type: mongoose.Schema.Types.ObjectId, ref: "Operation", required: true, index: true },
  detectionId: { type: mongoose.Schema.Types.ObjectId, ref: "Detection", required: true, index: true },
  screwId: { type: String, required: true, index: true },
  timestamp: { type: Date, required: true, index: true },
  algorithm: { type: String, enum: ["average", "ekf", "es_ekf", "rmv_fgo"], required: true },
  rawPosition: { type: Vector3Schema, required: true },
  fusedPosition: { type: Vector3Schema, required: true },
  // Per-axis 1σ uncertainty in metres.  Keeping a diagonal uncertainty is
  // sufficient for this static screw-state implementation and keeps payloads compact.
  uncertainty: Vector3Schema,
  innovation: { type: Number, default: 0 },
  observationCount: { type: Number, default: 1 },
  dataSource: { type: String, default: "simulation" }
}, { timestamps: true });

ScrewLocalizationTelemetrySchema.index({ operationId: 1, screwId: 1, algorithm: 1, timestamp: -1 });
ScrewLocalizationTelemetrySchema.index({ detectionId: 1, algorithm: 1 });
ScrewLocalizationTelemetrySchema.index({ operationId: 1, algorithm: 1, timestamp: -1 });

export default mongoose.model("ScrewLocalizationTelemetry", ScrewLocalizationTelemetrySchema);
