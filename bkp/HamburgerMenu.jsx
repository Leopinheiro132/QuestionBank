import { useState } from 'react';
import styles from '../../styles/HamburgerMenu.module.css';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <div className={styles.container}>
      <button
        className={`${styles.hamburgerButton} ${isOpen ? styles.open : styles.close}`}
        onClick={toggleMenu}
      >
        {isOpen ? '✖' : '☰'}
      </button>
      <div className={`${styles.menu} ${isOpen ? styles.menuOpen : ''}`}>
        <div className={styles.menuContent}>
          <div className={styles.dropdown}>
            <button className={styles.dropdownButton}>Dropdown</button>
            <div className={styles.dropdownContent}>
              <a href="#">Option 1</a>
              <a href="#">Option 2</a>
              <a href="#">Option 3</a>
            </div>
          </div>
          <button className={styles.logoutButton}>Logout</button>
        </div>
      </div>
    </div>
  );
};

export default HamburgerMenu;
