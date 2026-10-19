import express from "express";
import * as controller from "../controllers/deviceController.js";
import { getSynchronizedDeviceSample } from '../mqtt/mqttClient.js';
import { backendInstanceId } from '../runtimeIdentity.js';

const router = express.Router();
router.get('/runtime', (_req, res) => res.json({ backendInstanceId, platform: process.platform }));
router.get('/pose/:operationId', async (req, res) => {
  try { res.json(await getSynchronizedDeviceSample(req.params.operationId)); }
  catch (error) { res.status(409).json({ error: error.message }); }
});

// Device API routes
router.post("/operation/start", controller.operationStart);
router.post("/operation/end", controller.operationEnd);
router.get("/operation/:opID", controller.getOperation);

export default router;
