import connectDB from '../../../_ultils/mongoDbconnect';
import Pergunta from '../../../models/model-Pergunta';

connectDB();

const perguntas = [
  {
    banca: 'ESA',
    ano: '2020',
    materia: 'História',
    texto: 'Qual foi o principal objetivo da Revolução Francesa?',
    alternativas: [
      { texto: 'Estabelecer uma monarquia constitucional', correta: true },
      { texto: 'Criar uma república democrática', correta: false },
      { texto: 'Restaurar a monarquia absoluta', correta: false },
      { texto: 'Promover a igualdade social', correta: false },
      { texto: 'Defender os direitos da nobreza', correta: false }
    ]
  },
  {
    banca: 'EEAr',
    ano: '2019',
    materia: 'Física',
    texto: 'Qual é o princípio fundamental da teoria da relatividade restrita?',
    alternativas: [
      { texto: 'A velocidade da luz é constante em todos os referenciais', correta: true },
      { texto: 'A velocidade da luz é variável em diferentes referenciais', correta: false },
      { texto: 'O tempo é absoluto e não depende do referencial', correta: false },
      { texto: 'O espaço é absoluto e não depende do referencial', correta: false },
      { texto: 'A gravidade é uma força que depende da massa', correta: false }
    ]
  },
  {
    banca: 'AFA',
    ano: '2020',
    materia: 'Matemática',
    texto: 'Qual é o valor de x na equação 3x^2 + 5x - 2 = 0?',
    alternativas: [
      { texto: '1/3', correta: true },
      { texto: '-2/3', correta: false },
      { texto: '1/2', correta: false },
      { texto: '-1/2', correta: false },
      { texto: '2/3', correta: false }
    ]
  },
  {
    banca: 'EFOMM',
    ano: '2019',
    materia: 'Geografia',
    texto: 'Qual é o rio mais longo da América do Sul?',
    alternativas: [
      { texto: 'Rio Amazonas', correta: true },
      { texto: 'Rio Paraná', correta: false },
      { texto: 'Rio São Francisco', correta: false },
      { texto: 'Rio Magdalena', correta: false },
      { texto: 'Rio Orinoco', correta: false }
    ]
  },
  {
    banca: 'ENEM',
    ano: '2020',
    materia: 'Biologia',
    texto: 'Qual é o processo pelo qual as plantas produzem seu próprio alimento?',
    alternativas: [
      { texto: 'Fotossíntese', correta: true },
      { texto: 'Respiração celular', correta: false },
      { texto: 'Fermentação', correta: false },
      { texto: 'Digestão', correta: false },
      { texto: 'Absorção', correta: false }
    ]
  },
  {
    banca: 'ESA',
    ano: '2019',
    materia: 'História',
    texto: 'Qual foi o evento que marcou o início da Segunda Guerra Mundial?',
    alternativas: [
      { texto: 'Invasão da Polônia pela Alemanha', correta: true },
      { texto: 'Invasão da França pela Alemanha', correta: false },
      { texto: 'Ataque a Pearl Harbor', correta: false },
      { texto: 'Batalha de Stalingrado', correta: false },
      { texto: 'Desembarque na Normandia', correta: false }
    ]
  },
  {
    banca: 'EEAr',
    ano: '2020',
    materia: 'Física',
    texto: 'Qual é o princípio fundamental da teoria da relatividade geral?',
    alternativas: [
      { texto: 'A gravidade é uma curvatura do espaço-tempo', correta: true },
      { texto: 'A gravidade é uma força que depende da massa', correta: false },
      { texto: 'O tempo é absoluto e não depende do referencial', correta: false },
      { texto: 'O espaço é absoluto e não depende do referencial', correta: false },
      { texto: 'A velocidade da luz é constante em todos os referenciais', correta: false }
    ]
  },
  {
    banca: 'AFA',
    ano: '2019',
    materia: 'Matemática',
    texto: 'Qual é o valor de x na equação 2x^2 + 3x - 1 = 0?',
    alternativas: [
      { texto: '1/2', correta: true },
      { texto: '-1/2', correta: false },
      { texto: '1/3', correta: false },
      { texto: '-1/3', correta: false },
      { texto: '2/3', correta: false }
    ]
  },
  {
    banca: 'EFOMM',
    ano: '2020',
    materia: 'Geografia',
    texto: 'Qual é o país mais populoso da América do Sul?',
    alternativas: [
      { texto: 'Brasil', correta: true },
      { texto: 'Argentina', correta: false },
      { texto: 'Colômbia', correta: false },
      { texto: 'Peru', correta: false },
      { texto: 'Venezuela', correta: false }
    ]
  },
  {
    banca: 'ENEM',
    ano: '2019',
    materia: 'Biologia',
    texto: 'Qual é o processo pelo qual as células se dividem para formar novas células?',
    alternativas: [
      { texto: 'Mitose', correta: true },
      { texto: 'Meiose', correta: false },
      { texto: 'Fotossíntese', correta: false },
      { texto: 'Respiração celular', correta: false },
      { texto: 'Fermentação', correta: false }
    ]
  }
];

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      // Inserir perguntas no banco de dados
      await Pergunta.insertMany(perguntas);
      res.status(201).json({ success: true, message: 'Perguntas cadastradas com sucesso!' });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  } else {
      res.status(405).json({ success: false, message: 'Método não permitido' });
  }
}