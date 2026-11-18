import jwt from 'jsonwebtoken';
import User from './models/User.js';

export const tokenSecret = process.env.JWT_SECRET || 'vision-portal-development-secret-change-before-production';

// All existing accounts may edit camera settings; deleted accounts cannot.
export async function requireLogin(req, res) {
  let claims;
  try {
    const token = req.get('Authorization')?.match(/^Bearer (\S+)$/i)?.[1];
    claims = jwt.verify(token, tokenSecret, { algorithms: ['HS256'] });
    if (!/^[a-f0-9]{24}$/i.test(claims?.sub || '')) throw new Error('Invalid subject');
  } catch {
    res.status(401).json({ error: '請先登入，或重新登入後再修改相機參數。' });
    return false;
  }
  if (!await User.exists({ _id: claims.sub })) {
    res.status(401).json({ error: '帳號已不存在，請重新登入。' });
    return false;
  }
  return true;
}
