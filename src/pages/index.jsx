import Head from './_components/Head';
import Footer from './_components/Footer';
import Link from 'next/link';
import styles from '../styles/inicio.module.css'

export default function HomePage() {
  return (
    <div>
      <title >Question Bank</title>
      <Head pageTitle={"Inicial"}/>
      <main>
        <section className={styles.imageSection}>
            <div className={styles.image}>
                <img className={styles.imageImg} src="/img/inicio/hero.png" alt="Imagem 1"/>
            </div>
            <div className={styles.text}>
                <p>
                Explore um mundo de conhecimento sem limites com o MetaConquista!
                 Nossa plataforma oferece acesso a uma vasta coleção de questões
                  e respostas cuidadosamente selecionadas para aprimorar seu aprendizado.
                   Prepare-se para o sucesso acadêmico e profissional de forma eficaz,
                  estudando com as melhores ferramentas disponíveis. Junte-se a nós
                  hoje e abra as portas para um futuro repleto de conquistas!
                </p>
                <Link className={styles.btnCadastro} href="/register">Cadastre-se</Link>
            </div>
        </section>

        <section className={styles.imageSection}>
            <div className={styles.text}>
                <p>
                O MetaConquista é o seu parceiro de confiança na jornada do 
                conhecimento. Com uma interface intuitiva e um amplo conjunto
                 de recursos, nossa plataforma torna a aprendizagem mais 
                 agradável e eficaz do que nunca. Encontre as respostas que
                  você procura, aprofunde seus conhecimentos e alcance seus
                   objetivos acadêmicos e profissionais de forma rápida e 
                   eficiente. Não espere mais, comece a explorar as possibilidades
                    ilimitadas do MetaConquista hoje mesmo!
                </p>
            </div>
            <div className={styles.image}>
                <img className={styles.imageImgQuestion} src="/img/inicio/question.png" alt="Imagem 2"/>
            </div>
        </section>
    </main>
      <Footer/>
    </div>
  );
}
