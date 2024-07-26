import React, { useState } from 'react';
import Router from 'next/router';
import Cookies from 'js-cookie';
import axios from 'axios';
import styles from '../styles/login.module.css';
import Head from './_components/Head';
import Footer from './_components/Footer';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [versenha, setVerSenha] = useState(false);

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('/api/login', { email, password });
      const { token, redirect } = response.data;

      Cookies.set('token', token, { expires: 1 });
      Router.push(redirect);
    } catch (error) {
      setError(error.response?.data?.error || 'Credenciais inválidas');
      setTimeout(() => {
        setError('');
      }, 3000);
    }
  };

  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const validateEmail = (email) => emailRegex.test(email);

  return (
    <div className={styles.container}>
      <Head pageTitle='Login'/>
      <main className={styles.main}>
        <section className={styles.loginSection}>
          <h1>Login</h1>
          <form className={styles.forms} onSubmit={handleLogin}>
            <div className={styles.inputContainer}>
              <label className={styles.labels}>Email: </label>
              <input
                className={styles.email}
                autoComplete="true"
                type="text"
                placeholder="Email"
                onChange={(e) => {
                  if (validateEmail(e.target.value)) {
                    setEmail(e.target.value);
                  } else {
                    setError('Email no formato inválido');
                    setTimeout(() => {
                      setError('');
                    }, 3000);
                  }
                }}
                required
              />
            </div>
            <div className={styles.inputContainer}>
              <label className={styles.labels}>Senha: </label>
              <input
                className={styles.pass}
                type={versenha ? 'text' : 'password'}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value.replace(/[.*'="+<>/|\\?]/g, ''))}
                required
                autoComplete="true"
              />
              <button
                type="button"
                className={styles.passwordToggle}
                onClick={() => setVerSenha(!versenha)}
              >
                {versenha ? 'Ocultar Senha' : 'Mostrar Senha'}
              </button>
            </div>
            <button className={styles.loginButton} type="submit">
              Login
            </button>
          </form>
          {error && <p className={styles.errorMessage} style={{ color: 'red' }}>{error}</p>}
        </section>
      </main>
      <Footer/>
    </div>
  );
}