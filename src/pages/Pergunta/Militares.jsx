import { useEffect, useState } from 'react';
import Questao from '../_components/Questions/questionComponent';
import styles from '../../styles/Perguntas.module.css';
import ProtectedRoute from '../_components/ProtectedRoute';
import Headersearch from '../_components/Headersearch';
import MenuHamburguer from '../_components/MenuHamburguer';

export default function Perguntas() {
  const [perguntas, setPerguntas] = useState([]);

  useEffect(() => {
    const fetchPerguntas = async () => {
      try {
        const response = await fetch('/api/getquestion/getMilitar');
        if (!response.ok) {
          throw new Error('Erro ao buscar as perguntas');
        }
        const data = await response.json();
        const shuffled = data.sort(() => 0.5 - Math.random());
        const selected = shuffled.slice(0, 10);
        setPerguntas(selected);
      } catch (error) {
        console.error('Erro ao buscar as perguntas:', error);
      }
    };

    fetchPerguntas();
  }, []);

  return (
    <ProtectedRoute allowedRoles={['user', 'admin']}>
      <MenuHamburguer />
      <Headersearch />
      <div className={styles.pageContainer}>
        <h1 className={styles.title}>Questoes:</h1>
        {perguntas.map((conteudo, indice) => (
          <Questao key={conteudo._id} conteudo={conteudo} indice={indice} />
        ))}
      </div>
    </ProtectedRoute>
  );
}
