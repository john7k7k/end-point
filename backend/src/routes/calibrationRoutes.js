import express from "express";
import { getCameraExtrinsics, updateCameraExtrinsics } from "../controllers/calibrationController.js";
import { getCameraIntrinsics, updateCameraIntrinsics } from "../controllers/cameraIntrinsicsController.js";

const router = express.Router();

router.get("/camera-extrinsics", getCameraExtrinsics);
router.put("/camera-extrinsics", updateCameraExtrinsics);
router.get("/camera-intrinsics/:cameraId", getCameraIntrinsics);
router.put("/camera-intrinsics/:cameraId", updateCameraIntrinsics);

export default router;
