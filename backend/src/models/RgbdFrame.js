import mongoose from 'mongoose';

const schema = new mongoose.Schema({
  operationId: { type: mongoose.Schema.Types.ObjectId, ref: 'Operation', required: true },
  sessionId: { type: String, required: true },
  frameId: { type: Number, required: true, min: 0 },
  captureTimeNs: { type: String, required: true },
  receivedTimeNs: { type: String, required: true },
  processedTimeNs: { type: String, required: true },
  status: { type: String, required: true },
  missingFrames: Number,
  metadata: mongoose.Schema.Types.Mixed,
  result: mongoose.Schema.Types.Mixed,
  devicePose: mongoose.Schema.Types.Mixed,
  fusion: mongoose.Schema.Types.Mixed,
  selectedAlgorithm: String,
  rawPacketPath: String,
  // Capture-relative frame archive timeline, NOT independently recorded RTSP PTS.
  videoTimeMs: { type: Number, default: null },
}, { timestamps: true });
schema.index({ operationId: 1, sessionId: 1, frameId: 1 }, { unique: true });
export default mongoose.model('RgbdFrame', schema);
