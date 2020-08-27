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
  findPeople?: Maybe<Array<Person>>;
  title?: Maybe<Title>;
  titles?: Maybe<Array<Title>>;
  findTitles?: Maybe<Array<Title>>;
};


export type QueryPersonArgs = {
  id: Scalars['Int'];
};


export type QueryPeopleArgs = {
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};


export type QueryFindPeopleArgs = {
  name: Scalars['String'];
};


export type QueryTitleArgs = {
  id: Scalars['Int'];
};


export type QueryTitlesArgs = {
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};


export type QueryFindTitlesArgs = {
  name: Scalars['String'];
};

export type Person = {
  __typename?: 'Person';
  id: Scalars['Float'];
  name: Scalars['String'];
  birthYear?: Maybe<Scalars['Float']>;
  deathYear?: Maybe<Scalars['Float']>;
  primaryProfession: Scalars['String'];
  titles?: Maybe<Array<Title>>;
};

export type Title = {
  __typename?: 'Title';
  id: Scalars['Float'];
  titleType: Scalars['String'];
  name: Scalars['String'];
  originalName: Scalars['String'];
  isAdult: Scalars['Boolean'];
  startYear?: Maybe<Scalars['Float']>;
  endYear?: Maybe<Scalars['Float']>;
  runtimeMinutes?: Maybe<Scalars['Float']>;
  genres: Scalars['String'];
  people?: Maybe<Array<Person>>;
};

export type FindPeopleQueryVariables = Exact<{
  name: Scalars['String'];
}>;


export type FindPeopleQuery = (
  { __typename?: 'Query' }
  & { findPeople?: Maybe<Array<(
    { __typename?: 'Person' }
    & PersonFragmentFragment
  )>> }
);

export type FindTitlesQueryVariables = Exact<{
  name: Scalars['String'];
}>;


export type FindTitlesQuery = (
  { __typename?: 'Query' }
  & { findTitles?: Maybe<Array<(
    { __typename?: 'Title' }
    & TitleFragmentFragment
  )>> }
);

export type PeopleQueryVariables = Exact<{
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
}>;


export type PeopleQuery = (
  { __typename?: 'Query' }
  & { people?: Maybe<Array<(
    { __typename?: 'Person' }
    & PersonFragmentFragment
  )>> }
);

export type PersonQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type PersonQuery = (
  { __typename?: 'Query' }
  & { person?: Maybe<(
    { __typename?: 'Person' }
    & { titles?: Maybe<Array<(
      { __typename?: 'Title' }
      & TitleFragmentFragment
    )>> }
    & PersonFragmentFragment
  )> }
);

export type TitleQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type TitleQuery = (
  { __typename?: 'Query' }
  & { title?: Maybe<(
    { __typename?: 'Title' }
    & { people?: Maybe<Array<(
      { __typename?: 'Person' }
      & PersonFragmentFragment
    )>> }
    & TitleFragmentFragment
  )> }
);

export type TitlesQueryVariables = Exact<{
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
}>;


export type TitlesQuery = (
  { __typename?: 'Query' }
  & { titles?: Maybe<Array<(
    { __typename?: 'Title' }
    & TitleFragmentFragment
  )>> }
);

export type PersonFragmentFragment = (
  { __typename?: 'Person' }
  & Pick<Person, 'id' | 'name' | 'birthYear' | 'deathYear' | 'primaryProfession'>
);

export type TitleFragmentFragment = (
  { __typename?: 'Title' }
  & Pick<Title, 'id' | 'titleType' | 'name' | 'originalName' | 'isAdult' | 'startYear' | 'endYear' | 'runtimeMinutes' | 'genres'>
);

export const PersonFragmentFragmentDoc = gql`
    fragment PersonFragment on Person {
  id
  name
  birthYear
  deathYear
  primaryProfession
}
    `;
export const TitleFragmentFragmentDoc = gql`
    fragment TitleFragment on Title {
  id
  titleType
  name
  originalName
  isAdult
  startYear
  endYear
  runtimeMinutes
  genres
}
    `;
export const FindPeopleDocument = gql`
    query FindPeople($name: String!) {
  findPeople(name: $name) {
    ...PersonFragment
  }
}
    ${PersonFragmentFragmentDoc}`;

/**
 * __useFindPeopleQuery__
 *
 * To run a query within a React component, call `useFindPeopleQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindPeopleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindPeopleQuery({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function useFindPeopleQuery(baseOptions?: Apollo.QueryHookOptions<FindPeopleQuery, FindPeopleQueryVariables>) {
        return Apollo.useQuery<FindPeopleQuery, FindPeopleQueryVariables>(FindPeopleDocument, baseOptions);
      }
export function useFindPeopleLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindPeopleQuery, FindPeopleQueryVariables>) {
          return Apollo.useLazyQuery<FindPeopleQuery, FindPeopleQueryVariables>(FindPeopleDocument, baseOptions);
        }
export type FindPeopleQueryHookResult = ReturnType<typeof useFindPeopleQuery>;
export type FindPeopleLazyQueryHookResult = ReturnType<typeof useFindPeopleLazyQuery>;
export type FindPeopleQueryResult = Apollo.QueryResult<FindPeopleQuery, FindPeopleQueryVariables>;
export const FindTitlesDocument = gql`
    query FindTitles($name: String!) {
  findTitles(name: $name) {
    ...TitleFragment
  }
}
    ${TitleFragmentFragmentDoc}`;

/**
 * __useFindTitlesQuery__
 *
 * To run a query within a React component, call `useFindTitlesQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindTitlesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindTitlesQuery({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function useFindTitlesQuery(baseOptions?: Apollo.QueryHookOptions<FindTitlesQuery, FindTitlesQueryVariables>) {
        return Apollo.useQuery<FindTitlesQuery, FindTitlesQueryVariables>(FindTitlesDocument, baseOptions);
      }
export function useFindTitlesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindTitlesQuery, FindTitlesQueryVariables>) {
          return Apollo.useLazyQuery<FindTitlesQuery, FindTitlesQueryVariables>(FindTitlesDocument, baseOptions);
        }
export type FindTitlesQueryHookResult = ReturnType<typeof useFindTitlesQuery>;
export type FindTitlesLazyQueryHookResult = ReturnType<typeof useFindTitlesLazyQuery>;
export type FindTitlesQueryResult = Apollo.QueryResult<FindTitlesQuery, FindTitlesQueryVariables>;
export const PeopleDocument = gql`
    query People($skip: Int, $take: Int) {
  people(skip: $skip, take: $take) {
    ...PersonFragment
  }
}
    ${PersonFragmentFragmentDoc}`;

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
export const PersonDocument = gql`
    query Person($id: Int!) {
  person(id: $id) {
    ...PersonFragment
    titles {
      ...TitleFragment
    }
  }
}
    ${PersonFragmentFragmentDoc}
${TitleFragmentFragmentDoc}`;

/**
 * __usePersonQuery__
 *
 * To run a query within a React component, call `usePersonQuery` and pass it any options that fit your needs.
 * When your component renders, `usePersonQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePersonQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function usePersonQuery(baseOptions?: Apollo.QueryHookOptions<PersonQuery, PersonQueryVariables>) {
        return Apollo.useQuery<PersonQuery, PersonQueryVariables>(PersonDocument, baseOptions);
      }
export function usePersonLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PersonQuery, PersonQueryVariables>) {
          return Apollo.useLazyQuery<PersonQuery, PersonQueryVariables>(PersonDocument, baseOptions);
        }
export type PersonQueryHookResult = ReturnType<typeof usePersonQuery>;
export type PersonLazyQueryHookResult = ReturnType<typeof usePersonLazyQuery>;
export type PersonQueryResult = Apollo.QueryResult<PersonQuery, PersonQueryVariables>;
export const TitleDocument = gql`
    query Title($id: Int!) {
  title(id: $id) {
    ...TitleFragment
    people {
      ...PersonFragment
    }
  }
}
    ${TitleFragmentFragmentDoc}
${PersonFragmentFragmentDoc}`;

/**
 * __useTitleQuery__
 *
 * To run a query within a React component, call `useTitleQuery` and pass it any options that fit your needs.
 * When your component renders, `useTitleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTitleQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useTitleQuery(baseOptions?: Apollo.QueryHookOptions<TitleQuery, TitleQueryVariables>) {
        return Apollo.useQuery<TitleQuery, TitleQueryVariables>(TitleDocument, baseOptions);
      }
export function useTitleLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TitleQuery, TitleQueryVariables>) {
          return Apollo.useLazyQuery<TitleQuery, TitleQueryVariables>(TitleDocument, baseOptions);
        }
export type TitleQueryHookResult = ReturnType<typeof useTitleQuery>;
export type TitleLazyQueryHookResult = ReturnType<typeof useTitleLazyQuery>;
export type TitleQueryResult = Apollo.QueryResult<TitleQuery, TitleQueryVariables>;
export const TitlesDocument = gql`
    query Titles($skip: Int, $take: Int) {
  titles(skip: $skip, take: $take) {
    ...TitleFragment
  }
}
    ${TitleFragmentFragmentDoc}`;

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