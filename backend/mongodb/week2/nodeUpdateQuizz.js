var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/week2', function (err, db) {
    if (err) {
        throw err;
    }
    var query = { 'fruit' : 'Mango' };
    //It returns an error : Cannot mix operators and simple assigment
    var operator = { 'fruit' : 'banana', '$set' : { 'returned' : new Date() } };

    db.collection('things').update(query, operator, function(err, updateResult) {
        if (err) {
            throw err;
        }
        console.dir("Successfully updated " + updateResult + " document!");
        return db.close();
    });
});