// How do I set up a crime API within JavaScript?
// Ans: You can use the following code to set up a crime API within JavaScript:



// Language: javascript


const API_KEY = 'AIzaSyA95K610UIdTZ8ghG6BXm4mupocM1c-7hAE';
const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=500&types=restaurant&key=${API_KEY}`;

myAPI.get(url).then(data => {
  console.log(data);
});

// Path: test_google_API.js


