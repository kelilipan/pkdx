import { ApolloClient, InMemoryCache } from "@apollo/client";

const cache = new InMemoryCache();

const client = new ApolloClient({
  connectToDevTools: process.env.NODE_ENV === "development",
  uri: "https://graphql-pokeapi.graphcdn.app",
  cache,
});

export default client;
