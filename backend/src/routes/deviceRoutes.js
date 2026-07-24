import express from "express";
import * as controller from "../controllers/deviceController.js";

const router = express.Router();

// Device API routes
router.post("/operation/start", controller.operationStart);
router.post("/operation/end", controller.operationEnd);
router.get("/operation/:opID", controller.getOperation);

export default router;
