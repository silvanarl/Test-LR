import Head from "next/head";
import styles from "../styles/Home.module.css";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from '@apollo/client';
import Notes from './components/Notes';


const client = new ApolloClient({
  uri: "http://localhost:4000",
  cache: new InMemoryCache(),
});


export default function Home() {
  return (
    <ApolloProvider client={client}>
      <div className={styles.container}>
        <Head>
          <title>LR Test</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <header>
          <h1 className={styles.title}>
            <a href="#">La República</a>
          </h1>
        </header>
        <main className={styles.main}>
          <Notes />
        </main>

        <footer className={styles.footer}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{" "}
            <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
          </a>
        </footer>
      </div>
    </ApolloProvider>
  );
}
