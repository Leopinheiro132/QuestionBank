import Footer from './_components/Footer';
import Head from './_components/Head';
import { useState } from 'react';
import axios from 'axios';
import Router from 'next/router';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import styles from '../styles/register.module.css';

export default function RegisterPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [versenha, setVerSenha] = useState(false);
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [senhareserva, setSenhareserva] = useState('');

  const handleRegister = async (event) => {
    event.preventDefault();
    if (!validateEmail(email)) {
      setError('Email no formato inválido');
      setTimeout(() => {
        setError('');
      }, 3000);
      return;
    }
    if (!comparaSenha()) {
      setError('Erro ao registrar, senhas não coincidem');
      setTimeout(() => {
        setError('');
      }, 3000);
      return;
    }
    try {
      const response = await axios.post('/api/register', { nome: username, password, email });

      if (response.status === 200) {
        Router.push('/');
      } else {
        setError('Erro ao registrar');
      }
    } catch (error) {
      setError(error.response?.data?.error || 'Erro ao registrar');
    }
    setTimeout(() => {
      setError('');
    }, 3000);
  };

  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const validateEmail = (email) => emailRegex.test(email);
  const comparaSenha = () => senhareserva === password;

  return (
    <>
      <Head pageTitle="registro" />
      <div className={styles.sec}>
        <h1 className={styles.titulo}>Registro</h1>
        <p className={styles.paragraf}>Preencha os campos abaixo para se cadastrar no QuestionBank</p>
        <div className={styles.error}>{error}</div>
        <form className={styles.form} onSubmit={handleRegister}>
          <div className={styles.inputGroup}>
            <label>Seu Nome:</label>
            <input
              type="text"
              placeholder="Nome"
              value={username}
              onChange={(e) => setUsername(e.target.value.replace(/[^a-zA-Z0-9]/g, ""))}
              required
            />
          </div>
          <div className={styles.inputGroup}>
            <label>Email:</label>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className={styles.inputGroup}>
            <label>Senha:</label>
            <input
              type={versenha ? "text" : "password"}
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value.replace(/[.*'="+<>/|\\?]/g, ""))}
              required
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="confirma-senha">Confirme a Senha:</label>
            <input
              type={versenha ? "text" : "password"}
              placeholder="Confirma Senha"
              value={senhareserva}
              onChange={(e) => setSenhareserva(e.target.value.replace(/[.*'="+<>/|\\?]/g, ""))}
              required
            />
          </div>
          <div className={styles.verSenha} onClick={() => setVerSenha(!versenha)}>
          <div className={styles.iconContainer}>
              {versenha ? <AiFillEyeInvisible size={24} /> : <AiFillEye size={24} />}
              <span className={styles.iconText}>
                {versenha ? 'Ocultar Senha' : 'Mostrar Senha'}
              </span>
            </div>
          </div>
          <button type="submit" className={styles.btnRegistrar}>
            Registrar
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
}
  