var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/week2', function (err, db) {
    if(err) {
        throw err;
    }
    var query = { 'grade' : 100 };
    var projection = { 'student' : 1, '_id' : 0 };

    db.collection('grades').find(query, projection).toArray(function (err, docs) {
        if(err) {
            throw err;
        }
        docs.forEach(function (doc) {
            console.dir(doc);
            console.dir(doc.student + " tiene buenas notas!");
        });
        db.close();
    });
});