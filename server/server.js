const express = require('express');
const dotenv = require('dotenv').config();
const connectDB = require('./config/db');
const port = process.env.PORT || 5000;


// Connect to database  
connectDB();

// Initialize express
const app = express();

// Middleware
app.use(express.json());
app.user(express.urlencoded({ extended: false }));

app.listen(port, () => console.log(`Server started on port ${port}`)); 