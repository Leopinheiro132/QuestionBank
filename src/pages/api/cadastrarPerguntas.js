import connectDB from '../../../_ultils/mongoDbconnect';
import Pergunta from '../../../models/model-Pergunta';

connectDB();

const perguntas = [
    {
      banca: 'ENEM',
      ano: '2023',
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
      banca: 'EFOMM',
      ano: '2022',
      materia: 'Química',
      texto: 'Qual é o elemento químico mais abundante na Terra?',
      alternativas: [
        { texto: 'Oxigênio', correta: true },
        { texto: 'Nitrogênio', correta: false },
        { texto: 'Carbono', correta: false },
        { texto: 'Hidrogênio', correta: false },
        { texto: 'Hélio', correta: false }
      ]
    },
    {
      banca: 'ESA',
      ano: '2021',
      materia: 'História',
      texto: 'Qual foi o evento que marcou o início da Primeira Guerra Mundial?',
      alternativas: [
        { texto: 'Assassinato do arquiduque Francisco Ferdinando', correta: true },
        { texto: 'Invasão da Polônia', correta: false },
        { texto: 'Batalha de Waterloo', correta: false },
        { texto: 'Tratado de Versalhes', correta: false },
        { texto: 'Revolução Russa', correta: false }
      ]
    },
    {
      banca: 'EEAR',
      ano: '2020',
      materia: 'Inglês',
      texto: 'What is the meaning of the word "sustainable"?',
      alternativas: [
        { texto: 'Capaz de ser mantido por um longo período', correta: true },
        { texto: 'Que causa danos ao meio ambiente', correta: false },
        { texto: 'Que é produzido de forma artificial', correta: false },
        { texto: 'Que é muito caro', correta: false },
        { texto: 'Que é muito barato', correta: false }
      ]
    },
    {
      banca: 'Cespe',
      ano: '2019',
      materia: 'Português',
      texto: 'Qual é o sinônimo da palavra "feliz"?',
      alternativas: [
        { texto: 'Alegre', correta: true },
        { texto: 'Triste', correta: false },
        { texto: 'Irritado', correta: false },
        { texto: 'Preocupado', correta: false },
        { texto: 'Desanimado', correta: false }
      ]
    },
    {
      banca: 'IBFC',
      ano: '2018',
      materia: 'Matemática',
      texto: 'Qual é o valor de x na equação 2x + 5 = 11?',
      alternativas: [
        { texto: '3', correta: true },
        { texto: '2', correta: false },
        { texto: '4', correta: false },
        { texto: '5', correta: false },
        { texto: '6', correta: false }
      ]
    },
    {
      banca: 'Vunesp',
      ano: '2017',
      materia: 'Geografia',
      texto: 'Qual é o rio mais longo do mundo?',
      alternativas: [
        { texto: 'Rio Nilo', correta: true },
        { texto: 'Rio Amazonas', correta: false },
        { texto: 'Rio Mississippi', correta: false },
        { texto: 'Rio Yangtzé', correta: false },
        { texto: 'Rio Amarelo', correta: false }
      ]
    },
    {
      banca: 'FGV',
      ano: '2016',
      materia: 'Filosofia',
      texto: 'Qual foi o filósofo que desenvolveu a teoria do contrato social?',
      alternativas: [
        { texto: 'Jean-Jacques Rousseau', correta: true },
        { texto: 'John Locke', correta: false },
        { texto: 'Thomas Hobbes', correta: false },
        { texto: 'Immanuel Kant', correta: false },
        { texto: 'Georg Wilhelm Friedrich Hegel', correta: false }
      ]
    },
    {
      banca: 'IADES',
      ano: '2015',
      materia: 'Física',
      texto: 'Qual é a força que atua sobre um objeto em movimento?',
      alternativas: [
        { texto: 'Força de atrito', correta: true },
        { texto: 'Força de gravidade', correta: false },
        { texto: 'Força eletromagnética', correta: false },
        { texto: 'Força nuclear forte', correta: false },
        { texto: 'Força nuclear fraca', correta: false }
      ]
    },
    {
      banca: 'CEBRASPE',
      ano: '2014',
      materia: 'Legislação',
      texto: 'Qual é o órgão responsável por garantir a segurança pública no Brasil?',
      alternativas: [
        { texto: 'Polícia Federal', correta: true },
        { texto: 'Polícia Civil', correta: false },
        { texto: 'Polícia Militar', correta: false },
        { texto: 'Guarda Municipal', correta: false },
        { texto: 'Bombeiros', correta: false }
      ]
    },
    {
      banca: 'ENEM',
      ano: '2023',
      materia: 'Biologia',
      texto: 'Qual é o processo pelo qual as células se dividem para formar novas células?',
      alternativas: [
        { texto: 'Mitose', correta: true },
        { texto: 'Meiose', correta: false },
        { texto: 'Fotossíntese', correta: false },
        { texto: 'Respiração celular', correta: false },
        { texto: 'Fermentação', correta: false }
      ]
    },
    {
      banca: 'EFOMM',
      ano: '2022',
      materia: 'Química',
      texto: 'Qual é o elemento químico mais leve?',
      alternativas: [
        { texto: 'Hidrogênio', correta: true },
        { texto: 'Hélio', correta: false },
        { texto: 'Lítio', correta: false },
        { texto: 'Berílio', correta: false },
        { texto: 'Boro', correta: false }
      ]
    },
    {
      banca: 'ESA',
      ano: '2021',
      materia: 'História',
      texto: 'Qual foi o evento que marcou o fim da Segunda Guerra Mundial?',
      alternativas: [
        { texto: 'Rendição do Japão', correta: true },
        { texto: 'Invasão da Normandia', correta: false },
        { texto: 'Batalha de Stalingrado', correta: false },
        { texto: 'Batalha de Berlim', correta: false },
        { texto: 'Tratado de Potsdam', correta: false }
      ]
    },
    {
      banca: 'EEAR',
      ano: '2020',
      materia: 'Inglês',
      texto: 'What is the meaning of the word "globalization"?',
      alternativas: [
        { texto: 'Processo de integração econômica e cultural global', correta: true },
        { texto: 'Processo de isolamento econômico e cultural', correta: false },
        { texto: 'Processo de expansão territorial', correta: false },
        { texto: 'Processo de redução da pobreza', correta: false },
        { texto: 'Processo de aumento da desigualdade', correta: false }
      ]
    },
    {
      banca: 'Cespe',
      ano: '2019',
      materia: 'Português',
      texto: 'Qual é o antônimo da palavra "rápido"?',
      alternativas: [
        { texto: 'Lento', correta: true },
        { texto: 'Veloz', correta: false },
        { texto: 'Ágil', correta: false },
        { texto: 'Rápido', correta: false },
        { texto: 'Instantâneo', correta: false }
      ]
    },
    {
      banca: 'IBFC',
      ano: '2018',
      materia: 'Matemática',
      texto: 'Qual é o valor de x na equação x^2 + 4x + 4 = 0?',
      alternativas: [
        { texto: '-2', correta: true },
        { texto: '2', correta: false },
        { texto: '4', correta: false },
        { texto: '6', correta: false },
        { texto: '8', correta: false }
      ]
    },
    {
      banca: 'Vunesp',
      ano: '2017',
      materia: 'Geografia',
      texto: 'Qual é o continente mais populoso do mundo?',
      alternativas: [
        { texto: 'Ásia', correta: true },
        { texto: 'África', correta: false },
        { texto: 'Europa', correta: false },
        { texto: 'América do Norte', correta: false },
        { texto: 'América do Sul', correta: false }
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