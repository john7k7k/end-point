import express from "express";
import * as controller from "../controllers/videoController.js";

const router = express.Router();

router.get("/:operationId", controller.getOperationVideos);
router.get("/:operationId/:filename", controller.streamOperationVideo);

export default router;
