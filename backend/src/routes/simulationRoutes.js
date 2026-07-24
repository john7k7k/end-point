import express from "express";
import * as controller from "../controllers/simulationController.js";

const router = express.Router();
router.get("/config", controller.getSimulationConfig);
router.post("/config", controller.updateSimulationConfig);

export default router;
