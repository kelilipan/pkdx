import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  connectToDevTools: process.env.NODE_ENV === "development",
  uri: "https://graphql-pokeapi.graphcdn.app",
  cache: new InMemoryCache(),
});

export default client;
