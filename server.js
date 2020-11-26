'use strict';

// Import necessary packages and js file for the application
const express = require('express');
const app = express();
const path = require('path');
const MongoClient = require('mongodb').MongoClient;

// Set location for static files. Node.js will look for
// either index.html or home.html to load the webpage.
app.use(express.static(__dirname + '/public/it115-a5-g2-app')); 

/**
 * This is how to handle specific request from the url. For this project
 * we won't need to use unless we want to do fancy thing like MongoDB Collection etc.
 */
// app.use('/', (req, res) => {
//     res.type('text/html');
//     res.sendFile(path.join(__dirname + '/public/it115-a5-g2-app/index.html'));
// });

// Define 404 handler
app.use( (req,res) => {
    res.type('text/plain'); 
    res.status(404);
    res.send('404 - Not found');
});

app.listen(80);
console.log('Server running at http://localhost:80/');

module.exports = app;
