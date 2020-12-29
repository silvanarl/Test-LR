import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import {
    ApolloClient,
    InMemoryCache,
    gql
  } from '@apollo/client';
  import {GET_NOTE} from '../api/query';


const Note = () => {
// console.log("🚀 ~ file: [id].js ~ line 10 ~ Note ~ note", note)
    
    const router = useRouter();
    const {id} = router.query;
    return (
        <Layout>
            <p>Hello</p>
        </Layout>
    );
};

export default Note;

// export async function getStaticProps() {
//     const client = new ApolloClient({
//       uri: "http://localhost:4000",
//       cache: new InMemoryCache(),
//     });
  
//     const {data} = await client.query(GET_NOTE)
//     return {
//       props: {
//         note: data.note
//       }
//     }
//   }


