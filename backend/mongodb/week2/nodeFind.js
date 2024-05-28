var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/week2', function (err, db) {
    if(err) {
        throw err;
    }
    var query = { 'grade' : 100 };
    db.collection('grades').find(query).toArray(function (err, doc) {
        if(err) {
            throw err;
        }
        console.dir(doc);
        db.close();
    });
});