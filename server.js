'use strict'

// Import necessary packages and js file for the application
const MongoClient = require('mongodb').MongoClient;
const express = require('express');
const app = express();

// Set location for static files
app.use(express.static(__dirname + '/public/it115-a5-g2-app')); 


app.use('/', (req, res) => {
    // MongoClient.connect("mongodb://localhost:27017/test", function(err, db){
    //     db.collection('Example', function(err, collection){
    //         collection.insert({ pageHits: 'pageHits' });
    //         db.collection('Example').count(function(err, count){
    //             if(err) throw err;
    //             res.status(200).send('Page Hits: ' + Math.floor(count/2));
    //         });
    //     });
    // });

    res.type('text/html');
    res.render('index');
});

app.listen(80);
console.log('Server running at http://localhost:80/');

module.exports = app;
