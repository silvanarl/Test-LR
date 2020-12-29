import Head from "next/head";
import styles from "../styles/Home.module.css";
import {
  ApolloClient,
  InMemoryCache,
} from '@apollo/client';
import Layout from './components/Layout';
import Notes from './components/Notes';
import { GET_NOTES } from '../pages/api/query';



export default function Home({notes}) {
  return (
        <div className={styles.container}>
          <Head>
            <title>LR Test</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <Layout>
            <Notes notes={notes}/>
          </Layout>
        </div>
  );
}



export async function getStaticProps() {
  const client = new ApolloClient({
    uri: "http://localhost:4000",
    cache: new InMemoryCache(),
  });

  const {data} = await client.query(GET_NOTES)
  return {
    props: {
      notes: data.notes
    }
  }
}
