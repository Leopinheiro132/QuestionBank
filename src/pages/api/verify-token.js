import jwt from 'jsonwebtoken';
import connectDB from '../../../_ultils/mongoDbconnect';
import User from '../../../models/UserModel';

connectDB();
export default async function verifyToken(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }
  const { token } = req.body;
  try {
    jwt.verify(token, process.env.JWT_SECRET);
    res.status(200).end();
  } catch (error) {
    res.status(401).end();
  }
}