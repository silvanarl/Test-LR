import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import {
    ApolloClient,
    InMemoryCache,
    gql
  } from '@apollo/client';
  import { GET_NOTES } from '../api/query';


const Note = ({notes}) => {
    
    const router = useRouter();
    const {id} = router.query;
    const returnedNote = notes.filter(note => {
        return note.id === id;
    })[0]
    return (
        <Layout>
            <article className="main-note">
                <img className="main-note-image" src={returnedNote.cover_titular} alt=""/>
                <h2 className="main-note-title">{returnedNote.title}</h2>
                <p className="main-note-content">{returnedNote.text}</p>
            </article>
        </Layout>
    );
};


export async function getStaticPaths() {
    return {
        paths: [
          { params: { id: '1' } },
          { params: { id: '2' } },
          { params: { id: '3' } },
          { params: { id: '4' } },
          { params: { id: '5' } }
        ],
        fallback: false
      }
}

export async function getStaticProps() {
    const client = new ApolloClient({
        uri: "http://localhost:4000",
        cache: new InMemoryCache(),
      });
    
      const {data} = await client.query(GET_NOTES)
    return { props: { notes: data.notes} }
}

export default Note;
