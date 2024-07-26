import styles from '../../styles/Head.module.css'
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
export default function Head({ pageTitle }) {
    const router = useRouter();

    const handleLogin = async () => {
      const token = localStorage.getItem('token');
  
      if (token) {
        const response = await fetch('/api/verify-token', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ token }),
        });
  
        if (response.status === 200) {
          router.push('/home');
        } else {
          localStorage.removeItem('token');
          router.push('/login');
          //login
          //questionario
        }
      } else {
        router.push('/login');
      }
    };
    switch (pageTitle) {
        case 'Login':
            return(
                <div>
                    <header className={styles.head}>
                        <a onClick={()=>router.push('/')}><img className={styles.headImg} src='/img/Head/QB-logo.svg'/></a>
                    </header>
                </div>
            );
            break;
        case 'Inicial':
            return(
                <header className={styles.head}>
                    <a onClick={()=>window.location.href = '/'}><img className={styles.headImg} src='/img/Head/QB-logo.svg'/></a>
                    <h1 className={styles.headerTitle}>Bem-vindo ao QuestionBank</h1> 
                    <button className={styles.btnLogin} onClick={handleLogin}>Login</button>
                </header>
            )
            break
        case 'registro':
            return(
                <div>
                    <header className={styles.head}>
                        <a onClick={()=>router.push('/')}><img className={styles.headImg} src='/img/Head/QB-logo.svg'/></a>
                    </header>
                </div>
            );
            break
        case 'Admin':
            return(
                <div>
                    <header className={styles.head}>
                        <h1 className={styles.headerTitle}>Dashboard</h1> 
                        <a onClick={()=>router.push('/')}><img className={styles.headImg} src='/img/Head/QB-logo.svg'/></a>
                    </header>
                </div>
            );
            break
    }
}
