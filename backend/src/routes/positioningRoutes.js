import express from "express";
import { getLatestPositioning } from "../controllers/positioningController.js";

const router = express.Router();
router.get("/latest/:operationId", getLatestPositioning);
export default router;
