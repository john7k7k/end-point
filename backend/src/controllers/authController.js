import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

const tokenSecret = process.env.JWT_SECRET || "vision-portal-development-secret-change-before-production";
const safeUser = (user) => ({ id: user._id.toString(), name: user.name, email: user.email, signUpTime: user.signUpTime });
const createToken = (user) => jwt.sign({ sub: user._id.toString(), name: user.name, email: user.email }, tokenSecret, { expiresIn: "8h" });

export const register = async (req, res) => {
  try {
    const name = String(req.body.name || "").trim();
    const email = String(req.body.email || "").trim().toLowerCase();
    const password = String(req.body.password || "");
    if (!name || !email || !password) return res.status(400).json({ error: "姓名、電子信箱與密碼皆為必填。" });
    if (password.length < 8) return res.status(400).json({ error: "密碼至少需要 8 個字元。" });
    if (await User.exists({ email })) return res.status(409).json({ error: "此電子信箱已註冊。" });
    const user = await User.create({ name, email, passwordHash: await bcrypt.hash(password, 12) });
    res.status(201).json({ user: safeUser(user), token: createToken(user) });
  } catch (err) { res.status(500).json({ error: err.message }); }
};

export const login = async (req, res) => {
  try {
    const email = String(req.body.email || "").trim().toLowerCase();
    const password = String(req.body.password || "");
    const user = await User.findOne({ email });
    if (!user || !(await bcrypt.compare(password, user.passwordHash))) return res.status(401).json({ error: "電子信箱或密碼不正確。" });
    res.json({ user: safeUser(user), token: createToken(user) });
  } catch (err) { res.status(500).json({ error: err.message }); }
};
