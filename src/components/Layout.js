import Link from 'next/link';
import styles from '@/styles/Navigation.module.css';

export default function Layout({ children }) {
  return (
    <>
      <nav className={styles.nav}>
        <Link href="/" className={styles.logoContainer}>
          <img src="../images/Logo.svg" alt="Logo" className={styles.logo} />
        </Link>

        <a className={styles.titel}>
          <h1>Fiets Stations</h1>
        </a>

      </nav>
      <main>{children}</main>
      
    </>
  );
}