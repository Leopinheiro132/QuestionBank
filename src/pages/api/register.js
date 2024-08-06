import connectDB from '../../../_ultils/mongoDbconnect';
import crypt from 'bcrypt'
import User from "../../../models/UserModel";

connectDB();

export default async function register(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }
  try {
    const { nome, password, email } = req.body;
    const role = 'user';
    const hashedPass = await crypt.hash(password, 10)
    const user = await User.findOne({email: email});
    const newUser = new User({ nome, email, password: hashedPass, role });
    if (!user) {
      await newUser.save();
    } else {
      res.status(400).json({ err: `O email ${email} já está sendo usado` });
    }
    res.status(200).json({msg: `usuario criado com sucesso`});
  } catch (error) {
    res.status(500).json({ err: `erro : ${error}`});
  }
}
