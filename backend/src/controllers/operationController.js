import Operation from "../models/Operation.js";

export const createOperation = async (req, res) => {
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
  await Operation.findByIdAndDelete(req.params.id);
  res.json({ message: "deleted" });
};

export const getActiveOperation = async (req, res) => {
  const activeOp = await Operation.findOne({ endTime: null }).sort({ startTime: -1 });
  if (!activeOp) {
    return res.status(404).json({ message: "No active operation found" });
  }
  res.json(activeOp);
};
