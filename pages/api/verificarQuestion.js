import Pergunta from '../../../models/model-Pergunta';
import { connectDB, disconnectDB } from '../../../_ultils/mongoDbconnect';

connectDB();

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { perguntaId, resposta } = req.body;

    try {
      const pergunta = await Pergunta.findById(perguntaId);
      if (!pergunta) {
        return res.status(404).json({ error: 'Pergunta não encontrada' });
      }

      const alternativaCorreta = pergunta.alternativas.find(alt => alt.correta);
      const isCorrect = alternativaCorreta && alternativaCorreta.texto === resposta;

      res.status(200).json({ correct: isCorrect });
    } catch (error) {
      res.status(500).json({ error: 'Erro ao verificar a resposta' });
    }
  } else {
    res.status(405).json({ error: 'Método não permitido' });
  }
}