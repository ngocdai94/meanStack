'use strict';

// Import necessary packages and js file for the application
const express = require('express');
const app = express();
const path = require('path');
const MongoClient = require('mongodb').MongoClient;

// Set location for static files
app.use(express.static(__dirname + '/public/it115-a5-g2-app')); 


app.use('/', (req, res) => {
    res.type('text/html');
    res.sendFile(path.join(__dirname + '/public/it115-a5-g2-app/index.html'));
});

app.listen(80);
console.log('Server running at http://localhost:80/');

module.exports = app;
