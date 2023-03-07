require('dotenv').config();
const axios = require('axios');
const fs = require('fs');
// Run a curl command to get the data from the API



let url = `https://api.schooldigger.com/v2.0/rankings/schools/PA?appID=${process.env.AppID}&appKey=${process.env.schoolAPIKey}&perPage=50&page=1`

// Use axios to get the data from the API

axios.get(url)
    .then((response) => {

        console.log(response.data);

        // save info to a file
        fs.writeFile('schoolAPI.json', JSON.stringify(response.data), (err) => {
            if (err) throw err;
            console.log('The file has been saved!');
        });
    });



