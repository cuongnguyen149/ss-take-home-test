import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import { ApolloGateway } from '@apollo/gateway';

const app = express();
const port = 3000;

const init = async () => {
  const gateway = new ApolloGateway({
    serviceList: [{ name: "user", url: "http://localhost:4001" }]
  })
  const server = new ApolloServer({
    gateway,
    subscriptions: false
  })
  server.applyMiddleware({ app })
  app.listen({ port }, (): void => {
    console.info(`Server ready at http://localhost:${port}${server.graphqlPath}`)
  });
}

init();