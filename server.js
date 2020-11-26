const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const app = express();

app.use('/', (req, res) => {
    MongoClient.connect("mongodb://localhost:27017/test", function(err, db){
        db.collection('Example', function(err, collection){
            collection.insert({ pageHits: 'pageHits' });
            db.collection('Example').count(function(err, count){
                if(err) throw err;
                res.status(200).send('Page Hits: ' + Math.floor(count/2));
            });
        });
    });
});

app.listen(80);
console.log('Server running at http://localhost:80/');

module.exports = app;
