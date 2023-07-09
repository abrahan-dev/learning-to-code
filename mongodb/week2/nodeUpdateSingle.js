var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/week2', function (err, db) {
    if (err) {
        throw err;
    }
    var query = { 'fruit' : 'Pear' };

    db.collection('things').findOne(query, function(err, doc) {
        if (err) {
            throw err;
        }
        if(!doc) {
            console.log('No documents for fruit ' + query.fruit + ' found!');
            return db.close();
        }

        query['_id'] = doc['_id'];
        doc['owner'] = 'Abraham';
        
        console.dir(query);
        console.dir(doc);

        db.collection('things').update(query, doc, function(err, updateResult) {
            if (err) {
                throw err;
            }
            console.dir("Successfully updated " + updateResult + " document!");
            return db.close();
        });
    });
});