import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        iwantmyclickback.com © 2023 - made with <img src="/netlify-monogram.svg" alt="Netlify Logo" className={styles.logo} />
      </footer>
    </>
  )
}
