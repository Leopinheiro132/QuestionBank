import { useState } from 'react';
import styles from './QuestaoSImg.module.css';

export default function Questao({ conteudo, indice }) {
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [isCorrect, setIsCorrect] = useState(null);

    const handleAnswerChange = (value) => {
        setSelectedAnswer(value);
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

    return (
        <div className={styles.questionContainer}>
            <div className={styles.titulos}>
                <h2>{indice + 1} . </h2>
                <h5>{conteudo.banca} - {conteudo.ano}</h5>
                <h4>- {conteudo.materia}</h4>
            </div>
            <p>{conteudo.texto}</p>
            <div className={styles.alternatives}>
                {conteudo.alternativas.map((item, index) => (
                    <h5 key={index}>
                        <input
                            type="radio"
                            name={`answer${indice}`}
                            value={item.value}
                            id={`choice${indice}${index}`}
                            onChange={() => handleAnswerChange(item.value)}
                        />
                        <label htmlFor={`choice${indice}${index}`}>{item.label}</label>
                    </h5>
                ))}
            </div>
            <button onClick={checkAnswer}>Verificar</button>
            {isCorrect !== null && (
                <div className={isCorrect ? styles.correct : styles.incorrect}>
                    {isCorrect ? 'Correto!' : 'Incorreto!'}
                </div>
            )}
        </div>
    );
}
