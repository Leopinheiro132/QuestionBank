import connectDB from '../../../_ultils/mongoDbconnect';
import Pergunta from '../../../models/model-Pergunta';

connectDB(); 

export default async function handler(req, res) {
  try {
    const perguntas = await Pergunta.find({});
    res.status(200).json({ success: true, data: perguntas });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
}
