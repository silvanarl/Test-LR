import { 
    ApolloClient, 
    InMemoryCache,
    ApolloProvider,
    useQuery, 
    createHttpLink
} from '@apollo/client';
import GET_NOTES from './api/schema';

const link = createHttpLink({
    uri: 'http://localhost:4000/graphql',
});

const client = new ApolloClient({
  link:link,
  cache: new InMemoryCache(),
  
});

const NotesQuery = () => {
    const {loading, error, data} = useQuery(GET_NOTES);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error</p>;
            
        return data.notes.map(({id, title, text}) => (
            <div key={id}>
                {console.log(data.notes)}
                
                <p>{id}: {title}</p>
                <p>{text}</p>
            </div>
        ))
};

const Home = (props) =>  {
    return (
        <ApolloProvider client={client}>
            {/* <Layout> */}
                <NotesQuery />
                <h1>next!</h1>
                {/* <Users users={props.users} /> */}
            {/* </Layout> */}
        </ApolloProvider>
    )

}

export default Home;
