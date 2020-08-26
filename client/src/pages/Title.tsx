import React, {useRef} from 'react';
import {useApolloClient} from '@apollo/client';
import {useTitleLazyQuery} from '../generated/graphql';
import TitleRow from '../components/TitleRow';

function Title() {
  const idRef = useRef<HTMLInputElement>(null);

  const [loadTitle, {data, loading}] = useTitleLazyQuery({
    client: useApolloClient(),
  });

  const onSearch = () => {
    if (idRef && idRef.current && idRef.current.value !== '') {
      loadTitle({
        variables: {
          id: parseInt(idRef.current.value),
        },
      });
    }
  };

  return (
    <>
      <h3>Movie</h3>
      <input ref={idRef} type='text' />
      <button onClick={onSearch}>Search</button>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>{data?.title && <TitleRow title={data.title} />}</div>
      )}
    </>
  );
}

export default Title;
