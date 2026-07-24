import express from "express";
import { getOperationTelemetry } from "../controllers/operatorTelemetryController.js";

const router = express.Router();
router.get("/:operationId", getOperationTelemetry);
export default router;
