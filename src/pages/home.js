import { useEffect } from 'react';
import ProtectedRoute from './_components/ProtectedRoute';
import Headersearch from './_components/Headersearch';
import styles from '../styles/home.module.css'

export default function home() {


  return (
    <ProtectedRoute>
      <Headersearch/>
      <section className={styles.buttonSection}>
        <button><img src="/img/concursos/militaryhelmet.svg" alt="Militar"/></button>
        <button><img src="concursos.png" alt="Concursos"/></button>
        <button><img src="/img/concursos/enem.svg" alt="Enem"/></button>
        <button><img src="obemep.png" alt="Obemep"/></button>
        <button><img src="/img/concursos/calculator.svg" alt="Matemática Básica"/></button>
      </section>
    </ProtectedRoute>
  );
}