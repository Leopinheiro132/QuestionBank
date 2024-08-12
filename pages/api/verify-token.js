import jwt from 'jsonwebtoken';
import { connectDB, disconnectDB } from '../../../_ultils/mongoDbconnect';

export default async function verifyToken(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }
  await connectDB();
  const { token } = req.body;
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    res.status(200).json({ role: decoded.role });
  } catch (error) {
    res.status(401).json({ error: 'Token inválido' });
  }
  await disconnectDB()
}