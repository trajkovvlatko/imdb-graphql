import React, {useRef} from 'react';
import {useApolloClient} from '@apollo/client';
import {useFindPeopleLazyQuery, Person} from '../generated/graphql';
import PersonRow from '../components/PersonRow';

function FindPeople() {
  const nameRef = useRef<HTMLInputElement>(null);

  const [loadPerson, {data, loading}] = useFindPeopleLazyQuery({
    client: useApolloClient(),
  });

  const onSearch = () => {
    if (nameRef && nameRef.current && nameRef.current.value !== '') {
      const name = nameRef.current.value.trim();
      if (name !== '') {
        loadPerson({variables: {name}});
      }
    }
  };

  return (
    <>
      <h3>Person</h3>
      <input ref={nameRef} type='text' />
      <button onClick={onSearch}>Search</button>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <ul>
            {data?.findPeople?.map((p: Person) => (
              <PersonRow person={p} key={`person-${p.id}`} />
            ))}
          </ul>
        </div>
      )}
    </>
  );
}

export default FindPeople;
