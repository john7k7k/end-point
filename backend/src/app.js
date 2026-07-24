import express from "express";
import cors from "cors";
import path from "path";
import { existsSync } from "fs";
import { fileURLToPath } from "url";
import { connectDB } from "./db.js";
import "./mqtt/mqttClient.js";
import userRoutes from "./routes/userRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import operationRoutes from "./routes/operationRoutes.js";
import detectionRoutes from "./routes/detectionRoutes.js";
import deviceRoutes from "./routes/deviceRoutes.js";
import videoRoutes from "./routes/videoRoutes.js";
import simulationRoutes from "./routes/simulationRoutes.js";
import positioningRoutes from "./routes/positioningRoutes.js";
import operatorTelemetryRoutes from "./routes/operatorTelemetryRoutes.js";

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const frontendDistPath = path.resolve(__dirname, "../../frontend/dist");
console.log("Frontend dist path:", frontendDistPath);
console.log("Frontend dist exists:", existsSync(frontendDistPath));

app.use(cors());
app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/operations", operationRoutes);
app.use("/api/detections", detectionRoutes);
app.use("/api/device", deviceRoutes);
app.use("/api/videos", videoRoutes);
app.use("/api/simulation", simulationRoutes);
app.use("/api/positioning", positioningRoutes);
app.use("/api/operator-telemetry", operatorTelemetryRoutes);

if (existsSync(frontendDistPath)) {
  app.use(express.static(frontendDistPath));
  app.get("/", (_req, res) => {
    res.sendFile(path.join(frontendDistPath, "index.html"));
  });
  app.get(["/account", "/account/:page", "/guide", "/technology", "/history/:page", "/media/:page"], (_req, res) => {
    res.sendFile(path.join(frontendDistPath, "index.html"));
  });
}

await connectDB();

app.listen(3000, () => console.log("Server running on port 3000"));
