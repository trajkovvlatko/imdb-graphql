import React, {useRef} from 'react';
import {useApolloClient} from '@apollo/client';
import {useFindPeopleLazyQuery, Person} from '../generated/graphql';
import PersonRow from '../components/PersonRow';
import Pagination from '../components/Pagination';

let name = '';

function FindPeople() {
  const nameRef = useRef<HTMLInputElement>(null);

  const [loadPerson, {data, loading}] = useFindPeopleLazyQuery({
    client: useApolloClient(),
  });

  const load = (skip: number) => {
    loadPerson({
      variables: {
        name,
        skip,
        take: 10,
      },
    });
  };

  const onSearch = () => {
    const term = nameRef?.current?.value!.trim();
    if (term !== '') {
      name = term;
      load(0);
    }
  };

  const list = data?.findPeople;

  return (
    <>
      <h3>Search people by name</h3>
      <input ref={nameRef} type='text' />
      <button onClick={onSearch}>Search</button>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <ul>
            {list?.map((p: Person) => (
              <PersonRow person={p} key={`person-${p.id}`} />
            ))}
          </ul>
          <Pagination list={list} cb={load} />
        </div>
      )}
    </>
  );
}

export default FindPeople;
