import express from "express";
import * as controller from "../controllers/operationController.js";
import { mountDeviceAccuracy } from "./deviceAccuracy.js";

const router = express.Router();

router.post("/", controller.createOperation);
router.get("/active", controller.getActiveOperation);
router.get("/", controller.getOperations);
router.get("/user/:userId", controller.getUserOperations);
mountDeviceAccuracy(router);
router.get("/:id", controller.getOperation);
router.patch("/:id", controller.updateOperation);
router.delete("/:id", controller.deleteOperation);
export default router;
