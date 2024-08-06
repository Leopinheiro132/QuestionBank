import { useEffect } from 'react';
import Headersearch from './_components/Headersearch';
import MenuHamburguer from './_components/MenuHamburguer';
import styles from '../styles/home.module.css'
import ProtectedRoute from './_components/ProtectedRoute';



export default function home({ user }) {
  return (
    <ProtectedRoute allowedRoles={['user', 'admin']}>
      <div>
        <Headersearch/>
        <MenuHamburguer />
        <section className={styles.buttonSection}>
          <button><img src="/img/concursos/militaryhelmet.svg" alt="Militar"/></button>
          <button><img src="concursos.png" alt="Concursos"/></button>
          <button><img src="/img/concursos/enem.svg" alt="Enem"/></button>
          <button><img src="obemep.png" alt="Obemep"/></button>
          <button><img src="/img/concursos/calculator.svg" alt="Matemática Básica"/></button>
        </section>
      </div>
    </ProtectedRoute>
  );
}