import React, {useState} from 'react';
import {useApolloClient} from '@apollo/client';
import {useTitlesQuery, Title} from '../generated/graphql';
import TitleRow from '../components/TitleRow';

function Titles() {
  const [skip, setSkip] = useState(0);

  const {data, error, loading} = useTitlesQuery({
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
      <h3>Titles</h3>
      {loading ? (
        <div>Loading</div>
      ) : (
        <div>
          <ul>
            {data?.titles?.map((t: Title) => (
              <TitleRow title={t} key={`title-${t.id}`} />
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

export default Titles;
