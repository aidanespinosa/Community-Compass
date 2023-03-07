
require('dotenv').config();
const axios = require('axios');



let url = `https://maps.googleapis.com/maps/api/geocode/json?address=${process.env.streetAddress}&key=${process.env.googleAPIKEY}`;


axios.get(url)
  .then((response) => {
    // Get the data from the API
    // console.log(response);
    const { lat, lng } = response.data.results[0].geometry.location;
    console.log(`Latitude: ${lat}, Longitude: ${lng}`);
    });