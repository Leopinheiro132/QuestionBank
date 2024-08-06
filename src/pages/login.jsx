import React, { useState } from 'react';
import Router from 'next/router';
import Head from './_components/Head';
import styles from '../styles/login.module.css';
import Footer from './_components/Footer';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [versenha, setVerSenha] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      const { token, redirect } = await response.json(); 
      localStorage.setItem('token', token);
      Router.push(redirect); // Use o valor de 'redirect' retornado pelo backend
    } else {
      setError('Credenciais inválidas');
      setTimeout(() => {
        setError('');
      }, 3000);
    }
  };

  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const validateEmail = (email) => {
    return emailRegex.test(email);
  };

  const handleEmailBlur = () => {
    if (!validateEmail(email)) {
      setEmailError('Email no formato inválido');
      setTimeout(() => {
        setEmailError('');
      }, 3000);
    } else {
      setEmailError('');
    }
  };

  return (
    <div className={styles.container}>
      <title>Login QuestionBank</title>
      <Head pageTitle='Login'/>
      <main className={styles.main}>
        <section className={styles.loginSection}>
          <h1>Login</h1>
          <form className={styles.forms} onSubmit={handleLogin}>
            <div className={styles.inputContainer}>
              <label className={styles.labels}>Email: </label>
              <input 
                className={styles.email} 
                autoComplete='true' 
                type="text" 
                placeholder="Email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onBlur={handleEmailBlur}
                onFocus={() => setEmailError('')}
                required 
              />
              {emailError && <p className={styles.error}>{emailError}</p>}
            </div>
            <div className={styles.inputContainer}>
              <label className={styles.labels}>Senha: </label>
              <input 
                className={styles.pass} 
                type={versenha ? "text" : "password"} 
                placeholder="Password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value.replace(/[.*'="+<>/|\\?]/g, ""))}
                required 
                autoComplete='true' 
              />
              <button type="button" className={styles.passwordToggle} onClick={() => setVerSenha(!versenha)}>Mostrar Senha</button>
            </div>
            <button className={styles.loginButton} type="submit">Login</button>
          </form>
          {error && <p className={styles.error} style={{ color: 'red' }}>{error}</p>}
        </section>
      </main>
      <Footer/>
    </div>
  );
}