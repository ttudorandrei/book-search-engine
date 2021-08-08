const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const path = require("path");

const { typeDefs, resolvers } = require("./schema/index");
const db = require("./config/connection");
const context = require("./context");

const PORT = process.env.PORT || 3001;
const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context,
});

// we start the gql server and apply express server as middleware
const serverStart = async () => {
  await server.start();

  server.applyMiddleware({ app });
  return app;
};

serverStart();

// express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}

// we connect to the database and run the express server
db.once("open", () => {
  try {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(
        `Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`
      );
    });
  } catch (error) {
    console.error(error.message);
    console.error("Failed to run server");
  }
});
