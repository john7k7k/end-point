import mongoose from "mongoose";

const VectorSchema = new mongoose.Schema({
  x: { type: Number, required: true, default: 0 },
  y: { type: Number, required: true, default: 0 },
  z: { type: Number, required: true, default: 0 }
}, { _id: false });

const CameraExtrinsicsSchema = new mongoose.Schema({
  key: { type: String, required: true, unique: true, default: "default" },
  translation: { type: VectorSchema, required: true, default: () => ({}) },
  rotationDegrees: { type: VectorSchema, required: true, default: () => ({}) },
  rotationMatrix: {
    type: [[Number]],
    required: true,
    default: () => [[1, 0, 0], [0, 1, 0], [0, 0, 1]]
  }
}, { timestamps: true, versionKey: false });

export default mongoose.model("CameraExtrinsics", CameraExtrinsicsSchema);
