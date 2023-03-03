const express = require("express");
const { ApolloServer } = require('apollo-server-express');

const MoviesAPI = require('./datasources/movieAPI')


const { typeDefs, resolvers } = require('./schemas');

const db = require("./config/connection");

const app = new express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => {
    return {
      moviesAPI: new MoviesAPI(),
    };
  },
});

const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();
  server.applyMiddleware({ app });
  
  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    })
  })
  };

  startApolloServer(typeDefs, resolvers,);
