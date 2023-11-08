import 'reflect-metadata';
import http from 'http';

import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import cors from 'cors';
import express, { json } from 'express';

import { buildDatabaseConnection } from './config/database';
import { buildServerConfig } from './config/server-config';
import { type MyContext, buildResolvers, buildSchema, buildContext } from './graphql';

(async () => {
  //Build config
  const serverConfig = buildServerConfig();

  const entityManager = await buildDatabaseConnection(serverConfig);

  // Build Schema\
  const schema = buildSchema();

  // Build Resolvers
  const resolvers = buildResolvers();

  // Same ApolloServer initialization
  const server = new ApolloServer<MyContext>({
    typeDefs: schema,
    resolvers: resolvers,
    introspection: true,
  });
  // Ensure we wait for our server to start
  await server.start();

  // Required logic for integrating with Express
  const app = express();

  // Set up our Express middleware to handle CORS, body parsing,
  // and our expressMiddleware function.
  app.use(
    '/graphql',
    cors<cors.CorsRequest>(),
    json(),
    // expressMiddleware accepts the same arguments:
    // an Apollo Server instance and optional configuration options
    expressMiddleware(server, {
      context: buildContext(entityManager),
    }),
  );

  // Our httpServer handles incoming requests to our Express app.
  // Below, we tell Apollo Server to "drain" this httpServer,
  // enabling our servers to shut down gracefully.
  const httpServer = http.createServer(app);

  // Modified server startup
  httpServer.listen({ port: 4000 }, () => {
    console.log('🚀 Server ready at http://localhost:4000/');
  });
})();
