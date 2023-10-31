// npm install @apollo/server express graphql cors
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';

import express from 'express';
import http from 'http';
import cors from 'cors';
import { type MyContext, buildResolvers, buildSchema, buildContext } from './graphql';

(async () => {
  // Build Schema
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
    express.json(),
    // expressMiddleware accepts the same arguments:
    // an Apollo Server instance and optional configuration options
    expressMiddleware(server, {
      context: buildContext(),
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
