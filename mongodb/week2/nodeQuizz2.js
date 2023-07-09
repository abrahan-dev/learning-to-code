var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/week2', function (err, db) {
    if (err) {
        throw err;
    }
    var query = { 'grade' : { '$gt' : 69, '$lt' : 80} };
    db.collection('grades').find(query).each(function (err, doc) {
        if (err) {
            throw err;
        }
        if (doc === null) {
            return db.close();
        }
        console.dir(doc);
    });
});