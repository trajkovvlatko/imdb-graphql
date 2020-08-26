import React from 'react';
import {useApolloClient} from '@apollo/client';
import {useTitleQuery} from '../generated/graphql';
import TitleDetails from '../components/TitleDetails';

interface IProps {
  id: number;
}

function Title(props: IProps) {
  const {data, loading, error} = useTitleQuery({
    client: useApolloClient(),
    variables: {
      id: props.id,
    },
  });

  if (error) {
    return <div>Error.</div>;
  }

  return (
    <>
      <h3>Movie</h3>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>{data?.title && <TitleDetails title={data.title} />}</div>
      )}
    </>
  );
}

export default Title;
