import { useState } from 'react';
import Link from 'next/link';
import styles from '../../styles/MenuHamburguer.module.css'

const MenuHamburguer = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const handleToggleMenu = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <div className={styles.container}>
        <button className={styles.hamburguerButton} onClick={handleToggleMenu}>
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
        <div
          className={`${styles.menuContent} ${isOpen ? styles.open : ''}`}
          onClick={(e) => e.stopPropagation()}
        >
            <div className={styles.dropdown}>
            <button className={styles.dropdownButton}>Categorias</button>
            <ul className={styles.dropdownContent}>
              <li>
                <Link href="/categorias/categoria-1">Categoria 1</Link>
              </li>
              <li>
                <Link href="/categorias/categoria-2">Categoria 2</Link>
              </li>
              <li>
                <Link href="/categorias/categoria-3">Categoria 3</Link>
              </li>
            </ul>
          </div>
          <ul>
            <li>
              <Link href="/perfil">Perfil</Link>
            </li>
            <li>
              <Link href="/configuracoes">Configurações</Link>
            </li>
            <li>
              <button onClick={() => console.log('Logout')}>Logout</button>
            </li>
          </ul>
        </div>
        {isOpen && <div className={styles.overlay} onClick={handleToggleMenu}></div>}
      </div>
    );
  };
  
  export default MenuHamburguer;