import express from "express";
import * as controller from "../controllers/operationController.js";

const router = express.Router();

router.post("/", controller.createOperation);
router.get("/active", controller.getActiveOperation);
router.get("/", controller.getOperations);
router.get("/user/:userId", controller.getUserOperations);
router.get("/:id", controller.getOperation);
router.patch("/:id", controller.updateOperation);
router.delete("/:id", controller.deleteOperation);
export default router;
