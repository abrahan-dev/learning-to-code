/*
 * This program is to play around with the side effects of shutting down a replica
 * server.
 * It registers a function to be called each 1000ms
 * The node mongoDb driver will buffer the db requests until a new primary server
 * is up.
 */
var MongoClient = require('mongodb').MongoClient;

MongoClient.connect(
        "mongodb://localhost:27017," +
        "localhost:27018," +
        "localhost:27019/course", function (err, db) {
    if (err) {
        throw err;
    }
    var documentNumber = 0;
    function insertDocument() {
        db.collection("repl").insert({ 'documentNumber' : documentNumber++ }, function(err, doc) {
            if (err) {
                throw err;
            }
            console.log(doc);
        });
        console.log("Dispatched insert");
        setTimeout(insertDocument, 1000);
    }
    insertDocument();
});
