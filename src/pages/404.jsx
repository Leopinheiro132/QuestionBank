import React, { useEffect, useState } from 'react';
import Router from 'next/router';
import styles from '../styles/404.module.css'

export default function Custom404() {
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const timer = setInterval(() => {
      if (countdown > 0) {
        setCountdown(countdown - 1);
      } else {
        clearInterval(timer);
        Router.push('/')
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [countdown]);

  return (
    <div className={styles.notFoundContainer}>
      <img src="error-image.png" alt="Erro 404" className={styles.errorImage} />
      <div className={styles.errorText}>
        <h1 className={styles.titulo}>Oops! Página não encontrada</h1>
        <p className={styles.paragrafo}>Desculpe, a página que você está procurando não existe ou está em manutenção.</p>
        <button className={styles.btn} onClick={() => window.location.href = '/'}>Voltar à página inicial</button>
        <p>OU</p>
        <p>Redirecionando em {countdown} segundos...</p>
      </div>
    </div>
  );
}