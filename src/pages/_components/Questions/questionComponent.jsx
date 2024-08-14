import { useState, useEffect } from 'react';
import styles from './QuestaoComponent.module.css';

export default function Questao({ conteudo, indice }) {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [shuffledAlternatives, setShuffledAlternatives] = useState([]);

  const shuffleArray = (array) => {
    const shuffled = array.slice();
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  useEffect(() => {
    if (conteudo && conteudo.alternativas) {
      setShuffledAlternatives(shuffleArray(conteudo.alternativas));
    }
  }, [conteudo]);

  const handleAnswerChange = (value) => {
    if (selectedAnswer === null) {
      setSelectedAnswer(value);
    }
  };

  const checkAnswer = async () => {
    const response = await fetch('/api/verificarQuestion', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        perguntaId: conteudo._id,
        resposta: selectedAnswer
      })
    });
    const result = await response.json();
    setIsCorrect(result.correct);
  };

  if (!conteudo) {
    return <div>Carregando...</div>;
  }

  return (
    <div className={styles.questionContainer}>
      <div className={styles.titulos}>
        <h2>{indice + 1} .</h2>
        <h5>{conteudo.banca} - {conteudo.ano}</h5>
        <h4>- {conteudo.materia}</h4>
      </div>
      <p className={styles.texto}>{conteudo.texto}</p>
      <div className={styles.alternatives}>
        {shuffledAlternatives.map((item, index) => (
          <h5 key={index} className={styles.alternative}>
            <input
              type="radio"
              name={`answer${indice}`}
              value={item.texto}
              id={`choice${indice}${index}`}
              checked={selectedAnswer === item.texto}
              onChange={() => handleAnswerChange(item.texto)}
              disabled={selectedAnswer !== null && selectedAnswer !== item.texto}
            />
            <label htmlFor={`choice${indice}${index}`}>{item.texto}</label>
          </h5>
        ))}
      </div>
      <button className={styles.button} onClick={checkAnswer}>Verificar</button>
      {isCorrect !== null && (
        <div className={isCorrect ? styles.correct : styles.incorrect}>
          {isCorrect ? 'Correto!' : 'Incorreto!'}
        </div>
      )}
    </div>
  );
}
