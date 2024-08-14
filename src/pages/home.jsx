import { useEffect } from 'react';
import Headersearch from './_components/Headersearch';
import MenuHamburguer from './_components/MenuHamburguer';
import styles from '../styles/home.module.css';
import ProtectedRoute from './_components/ProtectedRoute';
import Link from 'next/link';

export default function Home() {

  return (
    <ProtectedRoute allowedRoles={['user', 'admin']}>
      <div>
        <MenuHamburguer />
        <Headersearch />
        <section className={styles.buttonSection}>

          <div className={styles.tooltipContainer}>
            <Link href='/Pergunta/Militares'>
              <button><img src="/img/concursos/militaryhelmet.svg" alt="Militar" /></button>
              <span className={styles.tooltip}>Militar</span>
            </Link>
          </div>
          <div className={styles.tooltipContainer}>
            <Link href='/pergunta'>
              <button><img src="/img/concursos/concurso.png" alt="Concursos" /></button>
              <span className={styles.tooltip}>Concursos</span>
            </Link>
          </div>
          <div className={styles.tooltipContainer}>
            <Link href='/Pergunta/Enem'>
              <button><img src="/img/concursos/enem.svg" alt="Enem" /></button>
              <span className={styles.tooltip}>Enem</span>
            </Link>
          </div>
          <div className={styles.tooltipContainer}>
            <Link href='/pergunta'>
              <button><img src="/img/concursos/obmep.png" alt="Obemep" /></button>
              <span className={styles.tooltip}>Obmep</span>
            </Link>
          </div>
          <div className={styles.tooltipContainer}>
            <Link href='/pergunta'>
              <button><img src="/img/concursos/calculator.svg" alt="Matemática Básica" /></button>
              <span className={styles.tooltip}>Matemática Básica</span>
            </Link>
          </div>
        </section>
      </div>
    </ProtectedRoute>
  );
}
