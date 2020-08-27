import React, {useState} from 'react';
import {useApolloClient} from '@apollo/client';
import {useTitlesQuery, Title} from '../generated/graphql';
import TitleRow from '../components/TitleRow';
import Pagination from '../components/Pagination';

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

  const list = data?.titles;

  return (
    <>
      <h3>Movies</h3>
      {loading ? (
        <div>Loading</div>
      ) : (
        <div>
          <ul>
            {list?.map((t: Title) => (
              <TitleRow title={t} key={`title-${t.id}`} />
            ))}
          </ul>
          <Pagination list={list} cb={(n: number) => setSkip(n)} />
        </div>
      )}
    </>
  );
}

export default Titles;
