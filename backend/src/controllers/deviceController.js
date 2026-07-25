import Operation from "../models/Operation.js";
import User from "../models/User.js";
import client, { beginTelemetryOperation, finalizeTelemetryOperation } from "../mqtt/mqttClient.js";

export const operationStart = async (req, res) => {
  try {
    const { userId, startTime } = req.body;

    if (!userId) {
      return res.status(400).json({ error: "Missing required field: userId" });
    }

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const operation = await Operation.create({
      userId,
      startTime: new Date(),
      description: "Started via HTTP"
    });
    beginTelemetryOperation(operation._id);

    // Publish MQTT acknowledgment
    const ackPayload = { opID: operation._id.toString() };
    client.publish(
      `vision/operation/ack/${userId}`,
      JSON.stringify(ackPayload),
      { qos: 2 },
      (err) => {
        if (err) console.error("Failed to publish ack:", err);
      }
    );

    res.status(201).json({
      message: "Operation started",
      operationId: operation._id,
      userId,
      startTime: operation.startTime
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const operationEnd = async (req, res) => {
  try {
    const { opID, endTime, description } = req.body;

    if (!opID || !endTime) {
      return res.status(400).json({ error: "Missing required fields: opID or endTime" });
    }

    const operation = await Operation.findByIdAndUpdate(
      opID,
      { endTime: new Date(endTime), description: description || "" },
      { returnDocument: "after" }
    );

    if (!operation) {
      return res.status(404).json({ error: "Operation not found" });
    }
    await finalizeTelemetryOperation(opID);

    try {
      await fetch("http://localhost:8000/api/operation-end", { method: "POST" });
    } catch (err) {
      console.error(`Failed to notify AI operation end: ${err.message}`);
    }

    res.json({
      message: "Operation ended",
      operationId: operation._id,
      endTime,
      description: operation.description
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getOperation = async (req, res) => {
  try {
    const { opID } = req.params;

    const operation = await Operation.findById(opID).populate("userId");
    if (!operation) {
      return res.status(404).json({ error: "Operation not found" });
    }

    res.json(operation);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
