import connectDB from "../../../_ultils/mongoDbconnect"
import Pergunta from "../../../models/model-Pergunta"

connectDB();

export default async(req, res) => {
  if (req.method === 'GET') {
    const pergunta = await Pergunta.find();
    res.status(200).json(pergunta);
  }
}