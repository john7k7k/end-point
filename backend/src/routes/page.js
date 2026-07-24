import express from "express";
import homepage from "../dist/index.js";

const router = express.Router();

router.get("/home", (_req, res) => {
  res.send(homepage);
});