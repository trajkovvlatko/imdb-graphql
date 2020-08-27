## IMDB Graphql API and Client

### API

`Node.js, Typescript, Apollo, GraphQL, TypeORM, Express.js`

#### Setup

Install dependencies:

```
cd ./api
yarn
```

Create a new postgres database.

Rename `env` to `.env` and fill in the database config values.

Run migrations and start the server:

```
yarn watch
```

#### Import data

Download IMDB datasets from https://datasets.imdbws.com/
- name.basics.tsv.gz
- title.basics.tsv.gz

Put the extracted tsv files into api/data. Note: It will take a long time, it's a big database.

```
cd ./api
yarn run import
```

#### Run

[http://localhost:4000/graphql](http://localhost:4000/graphql)




### Client

`React.js, Typescript, GraphQL, Apollo, URQL`

#### Setup

```
cd ./client
yarn
```

#### Start the client

```
cd ./client
yarn start
```
#### Run

[http://localhost:3000](http://localhost:3000)
