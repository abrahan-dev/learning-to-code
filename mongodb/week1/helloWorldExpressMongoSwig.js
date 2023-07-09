var express = require('express'),
    app = express(),
    assert = require('assert'),
    cons = require('consolidate'),
    MongoServer = require('mongodb').Server,
    Db = require('mongodb').Db,
    db = new Db('demo', new MongoServer('localhost', 27017, { 'native_parser': true }));

app.engine('html', cons.swig);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.get('/', function (req, res) {
    db.collection('hello_mongo_express').findOne({}, function (err, doc) {
        res.render('hello', doc);
    });
});

app.get('*', function (req, res) {
    res.status(404).send('Page not found');
});

db.open(function (err, db) {
    assert.equal(null, err);
    app.listen(8080);
    console.log('Express server started on port 8080');
});