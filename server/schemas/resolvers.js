const { User } = require('../models');

const resolvers = {
    Query: {
        users: async () => {
            return User.find();
        },
        // apiSearch: async () => {
        //     // fetch rewuest

        //     // return data
        // }
    },
    
};

module.exports = resolvers;