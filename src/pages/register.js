import Footer from './_components/Footer';
import styles from '../styles/register.module.css';
import Head from './_components/Head';
import { useState } from 'react';
import Router from 'next/router';

export default function RegisterPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [versenha, setVerSenha] = useState(false);
  const [email, setEmail] = useState('');
  const [error , setError] = useState('');
  const [senhareserva, setSenhareserva] = useState('');

  const handleRegister = async () => {
    const response = await fetch('/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nome: username, password, email }),
    });

    if (response.ok) {
      Router.push('/')
    } else {
      setError('Erro ao registrar'); 
    }
    setInterval(() => {
      setError('');
    }, 3000);
  };

  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  function validateEmail(email) {
    return emailRegex.test(email);
  } 
  const comparaSenha = () => {
    return senhareserva === password;
  }

  return (
  <>
    <Head pageTitle={"registro"}></Head>
    <div className={styles.sec}>
        <h1 className={styles.titulo}>Registro</h1>
        <p className={styles.paragraf}>Preencha os campos abaixo para se cadastrar no QuestionBank</p>
        <div className={styles.error}>{error}</div>
        <div className={styles.form}>
          <div className={styles.inputGroup}>
            <label>Primeiro Nome: </label>
            <input type="text" placeholder="Nome" value={username} onChange={(e) => {
                setUsername(e.target.value.replace(/[^a-zA-Z0-9]/g,""))
            }} required/>
          </div>
          <div className={styles.inputGroup}>
            <label>Email: </label>
            <input type='text' placeholder='Email' onChange={(e)=>{
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
          <div className={styles.inputGroup}>
            <label>Senha: </label>
            <input type={versenha ? "text" : "password"} placeholder="Senha" value={password} onChange={(e) =>{
                setPassword(e.target.value.replace(/[.*'="+<>/|\\?]/g,""))
              }} required/>
          </div>
          <div className={styles.inputGroup}>
            <label for="confirma-senha">Confirme a Senha *</label>
            <input type={versenha ? "text" : "password"} placeholder="Confirma Senha" value={senhareserva} onChange={(e) =>{
              setSenhareserva(e.target.value.replace(/[.*'="+<>/|\\?]/g,""))
              }} required/>
          </div>

          <button className={styles.verSenha } onClick={()=> setVerSenha(!versenha)}>Ver Senha</button>
          <button className={styles.btnRegistrar} onClick={()=>{
            console.log("senha "+password+"  email "+email+"  username "+username +"  comparaSenha" +comparaSenha)
            if(username.length >=5 && password.length >=8 && email.length>=10 && comparaSenha()){
            handleRegister()
            }else if(username.length < 5){
              setError('Erro ao Registrar, Nome Curto'); 
              setInterval(() => {
                setError('');
              }, 3000);
            }else if(password.length < 8){
              setError('Erro ao Registrar, Senha Curta'); 
              setInterval(() => {
                setError('');
              }, 3000);
            }else if(comparaSenha==false){
              setError('Erro ao registrar, senhas não coincidem'); 
              setInterval(() => {
                setError('');
              }, 3000);
            }
          }}>Registrar</button>

        </div>
      </div>
      <Footer/>
  </>
  );
}
