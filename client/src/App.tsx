import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import Menu from './components/Menu';
import Router from './Router';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <ApolloProvider client={client}>
        <Router />
      </ApolloProvider>
    </BrowserRouter>
  );
}

export default App;
