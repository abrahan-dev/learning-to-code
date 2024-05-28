var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/week2', function (err, db) {
    if (err) {
        throw err;
    }

    var query = { 'fruit' : 'Passion Fruit' };
    //Simple operator
    var operator = { 'fruit' : 'Pina', 'returned' : new Date() };
    //..Or Set can be used also with the same result
    var operator = { '$set' : { 'fruit' : 'Pina colada', 'returned' : new Date() }};
    //If query is not satisfied, then it will be inserted
    var options = { 'upsert' : true };

    db.collection('things').update(query, operator, options, function(err, updateResult) {
        if (err) {
            throw err;
        }
        console.dir("Successfully updated " + updateResult + " document!");
        return db.close();
    });
});