import  notes from './data.json';
import { ApolloServer, gql } from 'apollo-server';

 // TypeDefs
 const typeDefs = gql`
 type Note {
   title: String
   id: ID
   cover_titular: String
   text: String

 }
 # The "Query" type is the root of all GraphQL queries.
 type Query {
   notes: [Note]
 }
`;


const resolvers = {
  Query: {
    notes: () => notes.notes
  }
};

const server = new ApolloServer({ 
  typeDefs,
  resolvers
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});








