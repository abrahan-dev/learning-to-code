var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/week2', function (err, db) {
    if (err) {
        throw err;
    }

    var query = { 'fruit' : 'Mango' };
    var sort = [];
    var operator = { '$inc' : { 'counter' : 1 } };
    //Document before the update or after
    var options = { 'new' : true };
    //Makes update (only first document found) and inmmediatly returns
    //the document before other clients have the chance to update the document
    db.collection('things').findAndModify(query, sort, operator, options, function(err, doc) {
        if (err) {
            throw err;
        }
        if (!doc) {
            console.log("No counter found for comments.");
        } else {
            console.log(doc.value.counter);
        }
        return db.close();
    });
});