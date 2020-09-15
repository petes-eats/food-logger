import React from "react";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

import Routes from "./routes";

import Header from "./components/common/header";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

const App = (): any => {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Header />
        <Routes />
      </div>
    </ApolloProvider>
  );
};

export default App;
