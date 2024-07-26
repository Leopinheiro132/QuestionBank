import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import connectDB from '../../../_ultils/mongoDbconnect';
import User from '../../../models/UserModel';

connectDB();

export default async function login(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }
  
  const { email, password } = req.body;
  const user = await User.findOne({ email: email });

  if (!user) {
    return res.status(401).json({ error: 'Usuario inexistente' });
  }

  const passwordDecrip = await bcrypt.compare(password, user.password);
  if (!passwordDecrip) {
    return res.status(401).json({ error: 'Credenciais inválidas' });
  }

  // Adicionando isAdm ao token
  const token = jwt.sign({ email: user.email, isAdm: user.isAdm }, process.env.JWT_SECRET, { expiresIn: '4h' });

  if (user.isAdm) {
    res.status(200).json({ token, redirect: '/dashboard' });
  } else {
    res.status(200).json({ token, redirect: '/home' });
  }
}