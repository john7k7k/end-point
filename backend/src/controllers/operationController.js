import Operation from "../models/Operation.js";
import User from '../models/User.js';
import { deleteOperation as cascadeOperation } from '../maintenance/cascade.js';

export const createOperation = async (req, res) => {
  if (!req.body.userId || !await User.exists({ _id: req.body.userId })) return res.status(404).json({ error: 'User not found' });
  res.json(await Operation.create(req.body));
};

export const getOperation = async (req, res) => {
  res.json(await Operation.findById(req.params.id).populate("userId"));
};

export const getOperations = async (_req, res) => {
  res.json(await Operation.find().populate("userId").sort({ startTime: -1 }));
};

export const getUserOperations = async (req, res) => {
  res.json(await Operation.find({ userId: req.params.userId }).populate("userId").sort({ startTime: -1 }));
};

export const updateOperation = async (req, res) => {
  res.json(await Operation.findByIdAndUpdate(req.params.id, req.body, { returnDocument: "after" }));
};

export const deleteOperation = async (req, res) => {
  try { res.json(await cascadeOperation(req.params.id)); }
  catch (error) { res.status(error.status || 500).json({ error: error.message, operationId: req.params.id }); }
};

export const getActiveOperation = async (req, res) => {
  const activeOp = await Operation.findOne({ endTime: null }).sort({ startTime: -1 });
  if (!activeOp) {
    return res.status(404).json({ message: "No active operation found" });
  }
  res.json(activeOp);
};
