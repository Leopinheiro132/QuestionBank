import { connectDB } from '../../../../_ultils/mongoDbconnect';
import Pergunta from '../../../../models/model-Pergunta';

export default async (req, res) => {
  try {
    await connectDB();

    if (req.method === 'GET') {
      const bancasPermitidas = ['Escola Naval', 'Aeronáutica', 'Exército', 'Marinha', 'ESA', 'EEAr', 'AFA', 'EFOMM'];

      try {
        const perguntas = await Pergunta.find({ banca: { $in: bancasPermitidas } }, { __v: 0 }).limit(10);
        res.status(200).json(perguntas);
      } catch (error) {
        console.error('Error fetching perguntas:', error);
        res.status(500).json({ error: 'Erro ao buscar perguntas' });
      }
    } else {
      res.status(405).json({ error: 'Método não permitido' });
    }
  } catch (error) {
    console.error('Error in database connection:', error);
    res.status(500).json({ error: 'Erro ao conectar ao banco de dados' });
  }
};
