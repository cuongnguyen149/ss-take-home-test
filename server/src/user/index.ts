import { ApolloServer } from "apollo-server";
import { applyMiddleware } from "graphql-middleware";
import { buildFederatedSchema } from "@apollo/federation";
import { resolvers } from './user.resolver'
import { typeDefs } from './user.typeDefs'
import { connectMongo } from "../common/mongodb";
const port = 4001;

const init = async () => {
  await connectMongo();
  const server = new ApolloServer({
    schema: applyMiddleware(
      buildFederatedSchema([{ typeDefs, resolvers }]),
    )
  });

  server.listen({ port }).then(({ url }) => {
    console.info(`User service ready at ${url}`);
  });
}

init();
