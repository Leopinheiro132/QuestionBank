import connectDB from '../../../_ultils/mongoDbconnect';
import Pergunta from '../../../models/model-Pergunta';

connectDB();

export default async function handler(req, res) {
  try {
    // Dados agrupados por matéria
    const perguntasPorMateria = await Pergunta.aggregate([
      {
        $group: {
          _id: "$materia",
          quantidade: { $sum: 1 }
        }
      },
      {
        $project: {
          materia: "$_id",
          quantidade: 1,
          _id: 0
        }
      }
    ]);

    // Dados agrupados por ano
    const perguntasPorAno = await Pergunta.aggregate([
      {
        $group: {
          _id: "$ano",
          quantidade: { $sum: 1 }
        }
      },
      {
        $project: {
          ano: "$_id",
          quantidade: 1,
          _id: 0
        }
      }
    ]);

    // Dados agrupados por banca
    const perguntasPorBanca = await Pergunta.aggregate([
      {
        $group: {
          _id: "$banca",
          quantidade: { $sum: 1 }
        }
      },
      {
        $project: {
          banca: "$_id",
          quantidade: 1,
          _id: 0
        }
      }
    ]);

    res.status(200).json({ 
      success: true, 
      data: {
        porMateria: perguntasPorMateria,
        porAno: perguntasPorAno,
        porBanca: perguntasPorBanca
      }
    });
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ success: false, error: error.message });
  }
}
