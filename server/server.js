const stripe = require('stripe')('sk_test_51Mgh8NGGno84ND8L78IKd03OnvFmjQyoMCj4p3v0MPWOyKMy99wM9CU4HMzZYhGCrISbTVxSGuc7Zb9hnArIl9cc00ct3Tb9VX');
const priceId = '{{PRICE_ID}}';

const express = require("express");
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
const { authMiddleware } = require('./utils/auth');

const { typeDefs, resolvers } = require('./schemas');

const db = require("./config/connection");

const app = new express();
const PORT = process.env.PORT || 3001;

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});



app.use(express.json());
app.use(express.urlencoded({ extended: false }));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../community-compass/build')));
}

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../community-compass/build/index.html'));
});


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

  const session = await stripe.checkout.sessions.create({
    mode: 'subscription',
    line_items: [
      {
        price: priceId,
        // For metered billing, do not pass quantity
        quantity: 1,
      },
    ],
    // {CHECKOUT_SESSION_ID} is a string literal; do not change it!
    // the actual Session ID is returned in the query parameter when your customer
    // is redirected to the success page.
    success_url: 'https://example.com/success.html?session_id={CHECKOUT_SESSION_ID}',
    cancel_url: 'https://example.com/canceled.html',
  });

  startApolloServer(typeDefs, resolvers);
