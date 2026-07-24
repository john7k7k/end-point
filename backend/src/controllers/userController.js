import User from "../models/User.js";
import mqttClient from "../mqtt/mqttClient.js";

const safeUser = (user) => ({ id: user._id.toString(), name: user.name, email: user.email, signUpTime: user.signUpTime });

export const createUser = async (req, res) => {
  const user = await User.create(req.body);
  mqttClient.subscribe(`vision/operation/ack/${user._id}`);
  res.json(safeUser(user));
};

export const getUsers = async (req, res) => {
  res.json((await User.find()).map(safeUser));
};

export const getUser = async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) return res.status(404).json({ error: "User not found" });
  res.json(safeUser(user));
};

export const updateUser = async (req, res) => {
  res.json(await User.findByIdAndUpdate(req.params.id, req.body, { returnDocument: 'after' }));
};

export const deleteUser = async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ message: "deleted" });
};
