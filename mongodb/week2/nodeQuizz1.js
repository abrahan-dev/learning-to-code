var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/week2', function (err, db) {
    if (err) {
        throw err;
    }
    var query = {'grade': 100};
    function callback(err, doc) {
        if (err) {
            throw err;
        }
        console.dir(doc);
        db.close();
    }
    /* TODO */
//    var cursor = db.collection('grades').find(query);
//    cursor.each(callback);
    db.collection('grades').findOne(query, callback);
});