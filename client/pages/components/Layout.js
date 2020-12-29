import Head from "next/head";
import styles from '../../styles/Home.module.css';
import Link from 'next/link';
// import logoLR from '../../public/LR-icon.svg';

const Layout = (props) => (
  <div>
    <Head>
      <title>LR Test</title>
      <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=DM+Serif+Text&display=swap"
        rel="stylesheet"
      />
    </Head>
    <header className={styles.header}>
      <Link href="/">
        <a>
          <h1 className={styles.title}>La República</h1>
        </a>
      </Link>
    </header>
    <main className={styles.main}>{props.children}</main>
    <footer className={styles.footer}>
      <a
        href="https://larepublica.pe/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by La República
        {/* <img src="%PUBLIC_URL%/LR-icon.svg" alt="La República Logo" className={styles.logo} /> */}
      </a>
    </footer>
  </div>
);

export default Layout;

