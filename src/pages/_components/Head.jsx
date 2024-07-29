import styles from '../../styles/Head.module.css';
import Head from 'next/head';
import useAuth from '@/Hooks/useAuth';
import CommonHeader from './Header/CommonHeader';

const Header = ({ pageTitle }) => {
  const { handleLogin , handleLogout } = useAuth();

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      {pageTitle === 'Login' && <CommonHeader />}
      {pageTitle === 'Inicial' && (
        <CommonHeader>
          <h1 className={styles.headerTitle}>Bem-vindo ao QuestionBank</h1>
          <button className={styles.btnLogin} onClick={handleLogin}>Login</button>
        </CommonHeader>
      )}
      {pageTitle === 'registro' && <CommonHeader />}
      {pageTitle === 'Admin' && (
        <CommonHeader>
          <h1 className={styles.headerTitle}>Dashboard</h1>
        </CommonHeader>
      )}
    </>
  );
};

export default Header;
