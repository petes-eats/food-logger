const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const { buildSchema } = require("type-graphql");
const { TestResolver } = require("./resolvers/test");
import "reflect-metadata";

// previous start script
// "ts-node src/index.ts",

import { createConnection } from "typeorm";

const main = async () => {
  await createConnection({
    type: "postgres",
    url: "postgres://focus@localhost/foodlogger",
    // host: "localhost",
    // port: 5432,
    // username: "focus",
    // database: "foodlogger",
    entities: ["./src/entities/*{.ts, .js}"],
    synchronize: true,
  });

  // await typeOrmConnection.connect().then(() => {
  //   console.log("Connected to DB!");
  // });

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