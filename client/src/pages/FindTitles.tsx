import React, {useRef} from 'react';
import {useApolloClient} from '@apollo/client';
import {useFindTitlesLazyQuery, Title} from '../generated/graphql';
import TitleRow from '../components/TitleRow';
import Pagination from '../components/Pagination';

let name = '';

function FindTitles() {
  const nameRef = useRef<HTMLInputElement>(null);

  const [loadTitle, {data, loading}] = useFindTitlesLazyQuery({
    client: useApolloClient(),
  });

  const load = (skip: number) => {
    loadTitle({
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

  const list = data?.findTitles;

  return (
    <>
      <h3>Search movies by name</h3>
      <input ref={nameRef} type='text' />
      <button onClick={onSearch}>Search</button>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <ul>
            {list?.map((t: Title) => (
              <TitleRow title={t} key={`title-${t.id}`} />
            ))}
          </ul>
          <Pagination list={list} cb={load} />
        </div>
      )}
    </>
  );
}

export default FindTitles;
