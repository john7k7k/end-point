import mongoose from "mongoose";
import BoundingBoxSchema from "../schemas/BoundingBox.js";
import SensorSchema from "../schemas/Sensor.js";
import Vector3Schema from "../schemas/Vector3.js";

const DetectionSchema = new mongoose.Schema({
  operationId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Operation",
    required: true
  },

  timestamp: Date,
  imageId: String,
  objectClass: String,
  screwId: String,
  dataSource: { type: String, default: "simulation" },
  bbox: BoundingBoxSchema,
  depth: Number,
  sensors: [SensorSchema],
  devicePosition: Vector3Schema,
  deviceOrientation: Vector3Schema,
  cameraPosition: Vector3Schema,
  // Unfiltered camera-to-world measurement and the selected fused result are
  // both stored to make historical algorithm comparisons reproducible.
  rawAbsolutePosition: Vector3Schema,
  absolutePosition: Vector3Schema,
  screwFusionPosition: Vector3Schema,
  screwFusionAlgorithm: String,
  detectionAlgorithm: String,
  fusionAlgorithm: String,
  fusionTelemetry: mongoose.Schema.Types.Mixed
});

export default mongoose.model("Detection", DetectionSchema);
