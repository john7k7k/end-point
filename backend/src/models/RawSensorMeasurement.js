import mongoose from "mongoose";

const RawSensorMeasurementSchema = new mongoose.Schema({
  operationId: { type: mongoose.Schema.Types.ObjectId, ref: "Operation", required: true, index: true },
  timestamp: { type: Date, required: true, index: true },
  source: { type: String, required: true, enum: ["uwb", "imu", "simulation"] },
  dataSource: { type: String, required: true, default: "mqtt" },
  payload: { type: mongoose.Schema.Types.Mixed, required: true }
}, { versionKey: false });

RawSensorMeasurementSchema.index({ operationId: 1, timestamp: 1, source: 1 });
export default mongoose.model("RawSensorMeasurement", RawSensorMeasurementSchema);
