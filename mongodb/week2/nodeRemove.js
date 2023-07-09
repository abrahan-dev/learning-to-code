var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/week2', function (err, db) {
    if (err) {
        throw err;
    }
    var query = {'assignment': 'hw3'};
    db.collection('grades').remove(query, function (err, removed) {
        if (err) {
            throw err;
        }
        console.dir("Successfully updated " + removed + " documents!");
        return db.close();
    });
});

//Several ways of removing all documents in the collection 'foo' :
//db.collection('foo').remove(callback);
//db.collection('foo').remove({}, callback);
//-> $nin = not in operator
//db.collection('foo').remove({ 'x' : { '$nin' : [] } }, callback);