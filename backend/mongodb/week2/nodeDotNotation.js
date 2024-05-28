var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/week2', function (err, db) {
    if (err) {
        throw err;
    }
    var query = { 'media.oembed.type' : 'video' };
    var projection = { '_id' : false, 'media.oembed.url' : true };
    db.collection('reddit').find(query, projection).each(function (err, doc) {
        if (err) {
            throw err;
        }
        if (doc === null) {
            return db.close();
        }
        console.dir(doc);
    });
});