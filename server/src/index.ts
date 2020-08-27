const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const { buildSchema } = require("type-graphql");
const { TestResolver } = require("./resolvers/test");

const main = async () => {
  const app = express();

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [TestResolver],
      validate: false,
    }),
  });

  apolloServer.applyMiddleware({ app });

  app.listen(4000, () => {
    console.log("Server started!");
  });
};

main().catch((err) => {
  console.error(err);
});
