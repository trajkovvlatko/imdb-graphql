import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  __typename?: 'Query';
  person?: Maybe<Person>;
  people?: Maybe<Array<Person>>;
  title?: Maybe<Title>;
  titles?: Maybe<Array<Title>>;
};


export type QueryPersonArgs = {
  id: Scalars['Int'];
};


export type QueryPeopleArgs = {
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};


export type QueryTitleArgs = {
  id: Scalars['Int'];
};


export type QueryTitlesArgs = {
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};

export type Person = {
  __typename?: 'Person';
  name: Scalars['String'];
  birthYear: Scalars['Float'];
  deathYear: Scalars['Float'];
  primaryProfession: Scalars['String'];
  titles?: Maybe<Array<Title>>;
};

export type Title = {
  __typename?: 'Title';
  titleType: Scalars['String'];
  name: Scalars['String'];
  originalName: Scalars['String'];
  isAdult: Scalars['Boolean'];
  startYear: Scalars['Float'];
  endYear: Scalars['Float'];
  runtimeMinutes: Scalars['Float'];
  genres: Scalars['String'];
  people?: Maybe<Array<Person>>;
};

export type PeopleQueryVariables = Exact<{
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
}>;


export type PeopleQuery = (
  { __typename?: 'Query' }
  & { people?: Maybe<Array<(
    { __typename?: 'Person' }
    & Pick<Person, 'name' | 'birthYear' | 'deathYear' | 'primaryProfession'>
    & { titles?: Maybe<Array<(
      { __typename?: 'Title' }
      & Pick<Title, 'titleType' | 'name' | 'originalName' | 'isAdult' | 'startYear' | 'endYear' | 'runtimeMinutes' | 'genres'>
    )>> }
  )>> }
);

export type TitlesQueryVariables = Exact<{
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
}>;


export type TitlesQuery = (
  { __typename?: 'Query' }
  & { titles?: Maybe<Array<(
    { __typename?: 'Title' }
    & Pick<Title, 'titleType' | 'name' | 'originalName' | 'isAdult' | 'startYear' | 'endYear' | 'runtimeMinutes' | 'genres'>
    & { people?: Maybe<Array<(
      { __typename?: 'Person' }
      & Pick<Person, 'name' | 'birthYear' | 'deathYear' | 'primaryProfession'>
    )>> }
  )>> }
);


export const PeopleDocument = gql`
    query People($skip: Int, $take: Int) {
  people(skip: $skip, take: $take) {
    name
    birthYear
    deathYear
    primaryProfession
    titles {
      titleType
      name
      originalName
      isAdult
      startYear
      endYear
      runtimeMinutes
      genres
    }
  }
}
    `;

/**
 * __usePeopleQuery__
 *
 * To run a query within a React component, call `usePeopleQuery` and pass it any options that fit your needs.
 * When your component renders, `usePeopleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePeopleQuery({
 *   variables: {
 *      skip: // value for 'skip'
 *      take: // value for 'take'
 *   },
 * });
 */
export function usePeopleQuery(baseOptions?: Apollo.QueryHookOptions<PeopleQuery, PeopleQueryVariables>) {
        return Apollo.useQuery<PeopleQuery, PeopleQueryVariables>(PeopleDocument, baseOptions);
      }
export function usePeopleLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PeopleQuery, PeopleQueryVariables>) {
          return Apollo.useLazyQuery<PeopleQuery, PeopleQueryVariables>(PeopleDocument, baseOptions);
        }
export type PeopleQueryHookResult = ReturnType<typeof usePeopleQuery>;
export type PeopleLazyQueryHookResult = ReturnType<typeof usePeopleLazyQuery>;
export type PeopleQueryResult = Apollo.QueryResult<PeopleQuery, PeopleQueryVariables>;
export const TitlesDocument = gql`
    query Titles($skip: Int, $take: Int) {
  titles(skip: $skip, take: $take) {
    titleType
    name
    originalName
    isAdult
    startYear
    endYear
    runtimeMinutes
    genres
    people {
      name
      birthYear
      deathYear
      primaryProfession
    }
  }
}
    `;

/**
 * __useTitlesQuery__
 *
 * To run a query within a React component, call `useTitlesQuery` and pass it any options that fit your needs.
 * When your component renders, `useTitlesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTitlesQuery({
 *   variables: {
 *      skip: // value for 'skip'
 *      take: // value for 'take'
 *   },
 * });
 */
export function useTitlesQuery(baseOptions?: Apollo.QueryHookOptions<TitlesQuery, TitlesQueryVariables>) {
        return Apollo.useQuery<TitlesQuery, TitlesQueryVariables>(TitlesDocument, baseOptions);
      }
export function useTitlesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TitlesQuery, TitlesQueryVariables>) {
          return Apollo.useLazyQuery<TitlesQuery, TitlesQueryVariables>(TitlesDocument, baseOptions);
        }
export type TitlesQueryHookResult = ReturnType<typeof useTitlesQuery>;
export type TitlesLazyQueryHookResult = ReturnType<typeof useTitlesLazyQuery>;
export type TitlesQueryResult = Apollo.QueryResult<TitlesQuery, TitlesQueryVariables>;