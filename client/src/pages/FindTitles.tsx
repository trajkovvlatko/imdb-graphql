import React, {useRef} from 'react';
import {useApolloClient} from '@apollo/client';
import {useFindTitlesLazyQuery, Title} from '../generated/graphql';
import TitleRow from '../components/TitleRow';

function FindTitles() {
  const nameRef = useRef<HTMLInputElement>(null);

  const [loadTitle, {data, loading}] = useFindTitlesLazyQuery({
    client: useApolloClient(),
  });

  const onSearch = () => {
    if (nameRef && nameRef.current) {
      const name = nameRef.current.value.trim();
      if (name !== '') {
        loadTitle({variables: {name}});
      }
    }
  };

  return (
    <>
      <h3>Movie</h3>
      <input ref={nameRef} type='text' />
      <button onClick={onSearch}>Search</button>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <ul>
            {data?.findTitles?.map((t: Title) => (
              <TitleRow title={t} key={`title-${t.id}`} />
            ))}
          </ul>
        </div>
      )}
    </>
  );
}

export default FindTitles;
