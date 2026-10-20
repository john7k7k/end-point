import User from "../models/User.js";
import mqttClient from "../mqtt/mqttClient.js";
import { deleteUser as cascadeUser } from '../maintenance/cascade.js';

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
  try {
    const updates = {};
    if (typeof req.body.name === "string" && req.body.name.trim()) updates.name = req.body.name.trim();
    if (typeof req.body.email === "string" && req.body.email.trim()) updates.email = req.body.email.trim().toLowerCase();
    const user = await User.findByIdAndUpdate(req.params.id, updates, { returnDocument: 'after', runValidators: true });
    if (!user) return res.status(404).json({ error: "User not found" });
    res.json(safeUser(user));
  } catch (err) { res.status(400).json({ error: err.code === 11000 ? "此電子信箱已被使用。" : err.message }); }
};

export const deleteUser = async (req, res) => {
  try { res.json(await cascadeUser(req.params.id)); }
  catch (error) { res.status(error.status || 500).json({ error: error.message, userId: req.params.id }); }
};
