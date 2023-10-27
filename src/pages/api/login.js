import { NextApiRequest, NextApiResponse } from 'next';
import jwt from 'jsonwebtoken';
import crypt from 'bcrypt';
import connectDB from '../../../_ultils/mongoDbconnect';
import User from '../../../models/UserModel';
import axios from 'axios';

connectDB();

export default async function login(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }
  const {email, password} = req.body;
  const user = await User.findOne({ email: email })
  if (!user) {
    return res.status(401).json({ err: 'Usuario inexistente' });
  }
  const passworddecrip = await crypt.compare(password, user.password);
  if (!passworddecrip) {
    return res.status(401).json({ error: 'Credenciais inválidas' });
  }
  const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '4h' });
  console.log("logado com sucesso")
  if(user.isAdm){
    res.status(289)
  }else{
    res.status(200).json({ token });
  }
}