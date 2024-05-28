var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/week2', function (err, db) {
    if (err) {
        throw err;
    }

    var query = { 'fruit' : 'Pina colada' };

    db.collection('things').findOne(query, function(err, thing) {
        if (err) {
            throw err;
        }

        thing['returned'] = new Date();
        //if the document has _id will internally UPSERT, if not INSERT
        db.collection('things').save(thing, function (err, saveResult)  {
            if (err) {
                throw err;
            }
            console.dir('Guardado correctamente ' + saveResult);
            return db.close();
        });
    });
});