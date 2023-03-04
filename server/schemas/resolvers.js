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
        getLatLong: async (parent, args, { dataSources }) => {
            const { address } = args;
            const API_KEY = process.env.GOOGLE_MAPS_API_KEY;
            const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${API_KEY}`;
      
            const response = await dataSources.googleMapsAPI.get(url);
            const location = response.results[0].geometry.location;
            return {
              lat: location.lat,
              lng: location.lng
            };
          }
    },
    
};

module.exports = resolvers;