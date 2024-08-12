import {connectDB, disconnectDB } from "../../../_ultils/mongoDbconnect";
import Pergunta from "../../../models/model-Pergunta";

export default async (req, res) => {
  await connectDB();

  if (req.method === 'GET') {
    try {
      const perguntas = await Pergunta.find({}, { __v: 0 }).limit(10);
      res.status(200).json(perguntas);
    } catch (error) {
      console.error('Error fetching perguntas:', error);
      res.status(500).json({ error: 'Erro ao buscar perguntas' });
    }
  } else {
    res.status(405).json({ error: 'Método não permitido' });
  }
  await disconnectDB();
};