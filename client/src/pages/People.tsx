import React, {useState} from 'react';
import {useApolloClient} from '@apollo/client';
import {usePeopleQuery, Person} from '../generated/graphql';
import PersonRow from '../components/PersonRow';

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

  return (
    <>
      <h3>People</h3>
      {loading ? (
        <div>Loading</div>
      ) : (
        <div>
          <ul>
            {data?.people?.map((p: Person) => (
              <PersonRow person={p} key={`person-${p.id}`} />
            ))}
          </ul>
          {skip !== 0 && (
            <button onClick={() => setSkip(skip - 10)}>Previous</button>
          )}
          <button onClick={() => setSkip(skip + 10)}>Next</button>
        </div>
      )}
    </>
  );
}

export default People;
