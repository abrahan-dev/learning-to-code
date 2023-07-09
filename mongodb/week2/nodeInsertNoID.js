var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/week2', function (err, db) {
    if (err) {
        throw err;
    }

    var doc = { 'fruit' : 'banana', 'origin' : 'Colombia' };
    //We can use our own '_id' or the automatic _id will be created
    var doc = { '_id' : 'banana', 'origin' : 'Colombia' };
    //We can insert multiple docs at a time:
    var doc = [ { 'fruit' : 'banana', 'origin' : 'Colombia' },
                { 'fruit' : 'tomato', 'origin' : 'Spain'} ];
    //Quizz
    var doc = [ { '_id' : 'Banana', 'origin' : 'Colombia' },
                { '_id' : 'banana', 'origin' : 'Spain'} ];
    
    db.collection('things').insert(doc, function (err, insertResult) {
        if (err) {
            throw err;
        }
        console.dir('Successfully inserted: ' + JSON.stringify(insertResult));
        return db.close();
    });
});