import mongoose from 'mongoose';

export default mongoose.model('CameraIntrinsics', new mongoose.Schema({
  cameraId: { type: String, required: true, unique: true },
  enabled: { type: Boolean, required: true },
  revision: String,
  width: Number, height: Number,
  fx: Number, fy: Number, cx: Number, cy: Number
}, { timestamps: true, versionKey: false }));
