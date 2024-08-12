import Pergunta from '../../../models/model-Pergunta';
import { connectDB, disconnectDB } from '../../../_ultils/mongoDbconnect';

export default async function handler(req, res) {
    await connectDB();

    if (req.method === 'POST') {
        const { banca, ano, materia, texto, alternativas } = req.body;
        try {
            const novaPergunta = new Pergunta({
                banca,
                ano,
                materia,
                texto,
                alternativas
            });
            await novaPergunta.save();
            res.status(201).json(novaPergunta);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao cadastrar a pergunta' });
        }
    } else {
        res.status(405).json({ error: 'Método não permitido' });
    }
    disconnectDB()
}
