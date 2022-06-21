import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4o5z3xk0pdr01z7bz6lgkua/master',
  cache: new InMemoryCache()
});