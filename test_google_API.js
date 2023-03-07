

require('dotenv').config();
const axios = require('axios');



let url = `https://maps.googleapis.com/maps/api/js?key=${process.env.googleAPIKEY}`;


axios.get(url)
  .then((response) => {
    // Get the data from the API
    // console.log(response);
    var geocoder = new google.maps.Geocoder();
    var address = await prompt("Enter a street address");
    geocoder.geocode({ 'address': address }, function (results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        var latitude = results[0].geometry.location.lat();
        var longitude = results[0].geometry.location.lng();
        alert("Latitude: " + latitude + "Longitude: " + longitude);
      } else {
        alert("Geocode was not successful for the following reason: " + status);
      }
    });

  });





