import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  nome: String,
  email: { type: String, unique: true },
  password: String,
  role: { type: String, default: 'user' } // Por exemplo, 'user', 'admin', 'moderator'
});

const User = mongoose.models.User || mongoose.model('User', UserSchema);
export default User;