import 'reflect-metadata';
import {ApolloServer} from 'apollo-server-express';
import {buildSchema} from 'type-graphql';
import cors from 'cors';
import express from 'express';
import PersonResolver from './resolver/Person';
import dotenv from 'dotenv';
import {createConnection} from 'typeorm';

dotenv.config();

export default async function (): Promise<void> {
  await createConnection();

  const app = express();
  app.use(
    cors({
      origin: process.env.CLIENT,
      credentials: true,
    }),
  );

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [PersonResolver],
      validate: false,
    }),
    context: ({req, res}) => ({req, res}),
  });

  apolloServer.applyMiddleware({app, cors: false});

  app.listen(process.env.PORT, () => {
    console.log(`Started server on http://localhost:${process.env.PORT}`);
  });
}
