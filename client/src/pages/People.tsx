import React, {useState} from 'react';
import {useApolloClient} from '@apollo/client';
import {usePeopleQuery, Person} from '../generated/graphql';
import PersonRow from '../components/PersonRow';
import Pagination from '../components/Pagination';

function People() {
  const [skip, setSkip] = useState(0);

  const {data, error, loading} = usePeopleQuery({
    client: useApolloClient(),
    variables: {
      skip,
      take: 10,
    },
  });

  if (error) {
    return <div>Error!</div>;
  }

  const list = data?.people;

  return (
    <>
      <h3>People</h3>
      {loading ? (
        <div>Loading</div>
      ) : (
        <div>
          <ul>
            {list?.map((p: Person) => (
              <PersonRow person={p} key={`person-${p.id}`} />
            ))}
          </ul>
          <Pagination list={list} cb={(n: number) => setSkip(n)} />
        </div>
      )}
    </>
  );
}

export default People;
