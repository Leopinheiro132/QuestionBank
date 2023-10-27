
import connectDB from '../../../_ultils/mongoDbconnect';
import User from '../../../models/UserModel';

connectDB();

export default async function checkAdmin(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).end();
  }
  const adm = await User.findOne({email: email})
}
