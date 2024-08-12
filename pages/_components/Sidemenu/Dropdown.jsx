import { useState } from 'react';
import styles from './sidemenu.module.css';

export default function Dropdown({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.dropdown}>
      <button className={styles.dropdownButton} onClick={() => setIsOpen(!isOpen)}>
        {title}
      </button>
      {isOpen && (
        <div className={styles.dropdownContent}>
          {children}
        </div>
      )}
    </div>
  );
}
