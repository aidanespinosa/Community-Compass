const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        password: String
        email: String
        member: String
        payment: Int
    }

    type Query {
        users: [User]!
      }

<<<<<<< HEAD
    type LatLong {
        lat: Float
        lng: Float
        businesses: [Business]
      }
    type Business {
        name: String
        address: String
        city: String
        zipcode: String
        image: String
    }
      
    type Mutation {
        getLatLong(address: String!): LatLong
      }
=======
    type Auth {
        token: ID!
        user: User
      }

    type Mutation {
        addUser(username: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
        }
>>>>>>> 7576bc65d65feb76ebd3261d0d6475ae3a629474
`;

module.exports = typeDefs;