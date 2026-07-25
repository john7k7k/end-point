import CameraExtrinsics from "../models/CameraExtrinsics.js";

const DEFAULT_EXTRINSICS = {
  key: "default",
  translation: { x: 0, y: 0, z: 0 },
  rotationDegrees: { x: 0, y: 0, z: 0 },
  rotationMatrix: [[1, 0, 0], [0, 1, 0], [0, 0, 1]]
};

const asVector = (value, fieldName) => {
  const result = {};
  for (const axis of ["x", "y", "z"]) {
    const number = Number(value?.[axis]);
    if (!Number.isFinite(number)) throw new Error(`${fieldName}.${axis} must be a finite number`);
    result[axis] = number;
  }
  return result;
};

const toRotationMatrix = ({ x, y, z }) => {
  const [roll, pitch, yaw] = [x, y, z].map((degree) => degree * Math.PI / 180);
  const [cr, sr] = [Math.cos(roll), Math.sin(roll)];
  const [cp, sp] = [Math.cos(pitch), Math.sin(pitch)];
  const [cy, sy] = [Math.cos(yaw), Math.sin(yaw)];

  // R_C^B = Rz(yaw) * Ry(pitch) * Rx(roll): camera coordinates -> body coordinates.
  return [
    [cy * cp, cy * sp * sr - sy * cr, cy * sp * cr + sy * sr],
    [sy * cp, sy * sp * sr + cy * cr, sy * sp * cr - cy * sr],
    [-sp, cp * sr, cp * cr]
  ];
};

export const getCameraExtrinsics = async (_req, res) => {
  try {
    const calibration = await CameraExtrinsics.findOne({ key: "default" }).lean();
    res.json(calibration || DEFAULT_EXTRINSICS);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateCameraExtrinsics = async (req, res) => {
  try {
    const translation = asVector(req.body.translation, "translation");
    const rotationDegrees = asVector(req.body.rotationDegrees, "rotationDegrees");
    if (Object.values(rotationDegrees).some((angle) => Math.abs(angle) > 360)) {
      return res.status(400).json({ error: "Rotation angles must be between -360 and 360 degrees" });
    }

    const calibration = await CameraExtrinsics.findOneAndUpdate(
      { key: "default" },
      { $set: { translation, rotationDegrees, rotationMatrix: toRotationMatrix(rotationDegrees) } },
      { new: true, upsert: true, runValidators: true, setDefaultsOnInsert: true }
    ).lean();
    res.json(calibration);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
