import styles from '../../styles/Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.socialIcons}>
      </div>
      <div className={styles.footerText}>
        <p>Todos os direitos reservados &copy; 2024.</p>
      </div>
    </footer>
  )
}
/**
 *         <a className={styles.socialIconsLink} href="https://www.instagram.com/https_leopinheiro/" target="_blank">
          <img className={styles.socialIconsImg} src="/img/social/instagram.png" alt="Ícone do Instagram" />
        </a>
        <a className={styles.socialIconsLink} href="#" target="_blank">
          <img className={styles.socialIconsImg} src='/img/social/youtube.png' alt="YouTube" />
        </a>
 */