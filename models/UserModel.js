import mongoose from 'mongoose';
const UserSchema = new mongoose.Schema({
  nome: String,
  email: { type: String, unique: true },
  password: String,
  isAdm: {type: Boolean, default: false}
});

const User = mongoose.models.User || mongoose.model('User', UserSchema);
export default User;
