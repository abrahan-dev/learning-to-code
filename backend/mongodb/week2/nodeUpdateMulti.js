var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/week2', function (err, db) {
    if (err) {
        throw err;
    }
    var query = { };
    var operator = { '$set' : { 'returned' : new Date() } };
    var options = { 'multi' : true };
    
    db.collection('things').update(query, operator, options, function(err, updateResult) {
        if (err) {
            throw err;
        }
        console.dir("Successfully updated " + updateResult + " document!");
        return db.close();
    });
});