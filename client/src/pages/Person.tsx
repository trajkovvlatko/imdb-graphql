import React from 'react';
import {useApolloClient} from '@apollo/client';
import {usePersonQuery} from '../generated/graphql';
import PersonDetails from '../components/PersonDetails';

interface IProps {
  id: number;
}

function Person(props: IProps) {
  const {data, loading, error} = usePersonQuery({
    client: useApolloClient(),
    variables: {
      id: props.id,
    },
  });

  if (error) {
    return <div>Error.</div>;
  }

  return (
    <>
      <h3>Person</h3>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>{data?.person && <PersonDetails person={data.person} />}</div>
      )}
    </>
  );
}

export default Person;
