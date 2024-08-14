import styles from '../../../styles/Head.module.css';
import { useRouter } from 'next/router';

const CommonHeader = ({ children }) => {
  const router = useRouter();

  return (
    <header className={styles.head}>
      <a onClick={() => router.push('/')}><img className={styles.headImg} src='/img/Head/QB-logo.svg' alt="Logo" /></a>
      {children}
    </header>
  );
};

export default CommonHeader;
