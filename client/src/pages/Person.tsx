import React, {useRef} from 'react';
import {useApolloClient} from '@apollo/client';
import {usePersonLazyQuery} from '../generated/graphql';
import PersonRow from '../components/PersonRow';

function Person() {
  const idRef = useRef<HTMLInputElement>(null);

  const [loadPerson, {data, loading}] = usePersonLazyQuery({
    client: useApolloClient(),
  });

  const onSearch = () => {
    if (idRef && idRef.current && idRef.current.value !== '') {
      loadPerson({
        variables: {
          id: parseInt(idRef.current.value),
        },
      });
    }
  };

  return (
    <>
      <h3>Person</h3>
      <input ref={idRef} type='text' />
      <button onClick={onSearch}>Search</button>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>{data?.person && <PersonRow person={data.person} />}</div>
      )}
    </>
  );
}

export default Person;
