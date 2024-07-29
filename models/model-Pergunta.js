import mongoose from 'mongoose';

const perguntaSchema = new mongoose.Schema({
  banca: String,
  ano: String,
  materia: String,
  pergunta: String,
  alternativas: [
    {
      texto: String,
      correta: Boolean,
    },
  ],
});

const Pergunta = mongoose.models.Pergunta || mongoose.model('Pergunta', perguntaSchema);
export default Pergunta;
