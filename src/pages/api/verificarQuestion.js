import Pergunta from '../../../models/Pergunta';
import dbConnect from '../../../utils/dbConnect';

export default async function handler(req, res) {
    await dbConnect();

    const { perguntaId, resposta } = req.body;

    try {
        const pergunta = await Pergunta.findById(perguntaId);
        if (!pergunta) {
            return res.status(404).json({ error: 'Pergunta não encontrada' });
        }

        const alternativaCorreta = pergunta.alternativas.find(alt => alt.correta);
        const isCorrect = alternativaCorreta.texto === resposta;

        res.status(200).json({ correct: isCorrect });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao verificar a resposta' });
    }
}
