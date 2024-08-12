import { useEffect } from 'react';
import Headersearch from './_components/Headersearch';
import MenuHamburguer from './_components/MenuHamburguer';
import styles from '../styles/home.module.css'
import ProtectedRoute from './_components/ProtectedRoute';
import Link from 'next/link';



export default function home() {
  return (
    <ProtectedRoute allowedRoles={['user', 'admin']}>
      <div>
        <Headersearch/>
        <MenuHamburguer />
        <section className={styles.buttonSection}>
          <Link href='/pergunta' className={styles.Link}><img className={styles.img} src="/img/concursos/militaryhelmet.svg" alt="Militar"/></Link>
          <Link href='/pergunta' className={styles.Link}><img src="concursos.png" alt="Concursos"/></Link>
          <Link href='/pergunta' className={styles.Link}><img src="/img/concursos/enem.svg" alt="Enem"/></Link>
          <Link href='/pergunta' className={styles.Link}><img src="obemep.png" alt="Obemep"/></Link>
          <Link href='/pergunta' className={styles.Link}><img src="/img/concursos/calculator.svg" alt="Matemática Básica"/></Link>
        </section>
      </div>
    </ProtectedRoute>
  );
}