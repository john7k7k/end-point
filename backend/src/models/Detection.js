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
  bbox: BoundingBoxSchema,
  depth: Number,
  sensors: [SensorSchema],
  devicePosition: Vector3Schema,
  deviceOrientation: Vector3Schema,
  cameraPosition: Vector3Schema,
  absolutePosition: Vector3Schema,
  detectionAlgorithm: String,
  fusionAlgorithm: String
});

export default mongoose.model("Detection", DetectionSchema);
