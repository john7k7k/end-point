import express from "express";
import { getCameraExtrinsics, updateCameraExtrinsics } from "../controllers/calibrationController.js";

const router = express.Router();

router.get("/camera-extrinsics", getCameraExtrinsics);
router.put("/camera-extrinsics", updateCameraExtrinsics);

export default router;
