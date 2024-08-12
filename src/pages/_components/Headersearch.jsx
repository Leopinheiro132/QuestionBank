import styles from './styles/headersearch.module.css'
import Router from 'next/router';
export default function Headersearch() {
   return (
       <div className={styles.search}>
            <title>Home</title>
            <div className={styles.searchBar}>
                <input className={styles.searchBarInput} type="text" placeholder="Pesquisar..."></input>
                <button className={styles.searchBarBtn}><img className={styles.searchBarImg} src='/img/Head/lupa.svg' alt="Pesquisar"/></button>
            </div>
            <img className={styles.imgLogoSearch} src='/img/Head/QB-logo.svg' alt="Logo do Site"/>
        </div>
   );
}