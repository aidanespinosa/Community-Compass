const express = require('express');
const dotenv = require('dotenv').config();
const connectDB = require('./config/db');
const port = process.env.PORT || 5000;
const axios = require('axios');
const cors = require('cors');

// Initialize express
const app = express();

// calls the google API search query and returns it to the front end
app.get('/search', async (req, res) => {
    try {
      const query = req.query.q;
      const apiKey = process.env.API_KEY;
      const response = await axios.get(`https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${process.env.CX}&q=${query}`);
      const results = response.data.items.map(item => ({
        url: item.link,
        title: item.title,
        img: item.pagemap && item.pagemap.cse_image && item.pagemap.cse_image[0].src,
      }));
      res.json(results);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

// Connect to database  
connectDB();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(port, () => console.log(`Server started on port ${port}`)); 