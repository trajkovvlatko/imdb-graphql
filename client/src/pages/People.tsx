import React from 'react';
import {usePeopleQuery, Person} from '../generated/graphql';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
import PersonRow from '../components/PersonRow';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
});

function People() {
  const {data, error, loading} = usePeopleQuery({
    client,
    variables: {
      skip: 0,
      take: 10,
    },
  });

  if (error) {
    return <div>Error!</div>;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <ApolloProvider client={client}>
      <h3>People</h3>
      <ul>
        {data?.people?.map((p: Person) => (
          <PersonRow person={p} key={`person-${p.id}`} />
        ))}
      </ul>
    </ApolloProvider>
  );
}

export default People;
