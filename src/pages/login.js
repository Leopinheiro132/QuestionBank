import React, { useState } from 'react';
import Router from 'next/router';
import Head from './_components/Head';
import styles from '../styles/login.module.css'
import Footer from './_components/Footer';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [versenha, setVerSenha] = useState(false);

  const handleLogin = async () => {
  const response = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      const { token } = await response.json(); 
      localStorage.setItem('token', token);
      Router.push('/home')
    }else {
      setError('Credenciais inválidas');
      setInterval(() => {
        setError('');
      }, 3000);
      }
  };
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  function validateEmail(email) {
    return emailRegex.test(email);
  } 

  return (
    <div className={styles.container}>
      <title >Login QuestionBank</title>
      <Head pageTitle='Login'/>
      <main className={styles.main}>
      <section className={styles.loginSection}>
        <h1>Login</h1>
        <div className={styles.forms}>
          <div className={styles.inputContainer}>
            <label className={styles.labels}>Email: </label>

            <input className={styles.email} autoComplete='true' type="text" placeholder="Email" onChange={(e) => {
                if(validateEmail(e.target.value) == true){
                  setEmail(e.target.value)
                }else{
                  setInterval(() => {
                    setError('Email no formato invalido');
                  }, 3000);
                  setInterval(() => {
                    setError('');
                  }, 3000);
                }
              }} required/>
          </div>
          <div className={styles.inputContainer}>
            <label className={styles.labels}>Senha: </label>
            <input className={styles.pass}type={versenha ? "text" : "password"} placeholder="Password" value={password} onChange={(e) => {
                setPassword(e.target.value.replace(/[.*'="+<>/|\\?]/g,""))
              }} required autoComplete='true' />
            <button className={styles.passwordToggle} onClick={()=> setVerSenha(!versenha)}>Mostrar Senha</button>
          </div>
          <button className={styles.loginButton} onClick={handleLogin}>Login</button>
        </div>
        <p className="" style={{ color: 'red' }}>{error}</p>
      </section>
      </main>
      <Footer/>
    </div>
  );
}