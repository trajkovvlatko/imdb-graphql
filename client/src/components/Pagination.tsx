import React from 'react';
import {Person, Title} from '../generated/graphql';

interface IProps {
  list:
    | (
        | ({__typename?: 'Person' | undefined} & {
            __typename?: 'Person' | undefined;
          } & Pick<
              Person,
              'id' | 'name' | 'birthYear' | 'deathYear' | 'primaryProfession'
            >)[]
        | null
        | undefined
      )
    | ({__typename?: 'Title' | undefined} & {
        __typename?: 'Title' | undefined;
      } & Pick<
          Title,
          | 'id'
          | 'titleType'
          | 'name'
          | 'originalName'
          | 'isAdult'
          | 'startYear'
          | 'endYear'
          | 'runtimeMinutes'
          | 'genres'
        >)[]
    | null
    | undefined;
  cb: (n: number) => void;
}

let skip = 0;

function Pagination(props: IProps) {
  const {list, cb} = props;

  const onPrev = () => {
    skip = skip - 10;
    cb(skip);
  };

  const onNext = () => {
    skip = skip + 10;
    cb(skip);
  };

  const hasPrevButton = skip > 0;
  const hasNextButton = list && list.length > 0 && list.length >= 10;

  return (
    <div>
      {hasPrevButton && <button onClick={onPrev}>Previous</button>}
      {hasNextButton && <button onClick={onNext}>Next</button>}
    </div>
  );
}

export default Pagination;
