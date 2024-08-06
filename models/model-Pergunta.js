import mongoose from 'mongoose';

const alternativaSchema = new mongoose.Schema({
    texto: String,
    correta: Boolean
}, { _id: false });

const perguntaSchema = new mongoose.Schema({
    banca: String,
    ano: String,
    materia: String,
    texto: String,
    alternativas: [alternativaSchema],
});

const Pergunta = mongoose.models.Pergunta || mongoose.model('Pergunta', perguntaSchema);
export default Pergunta;
