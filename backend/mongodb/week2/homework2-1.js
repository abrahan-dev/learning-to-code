//FIRST
//Import csv source data with header line into the db weather and the collection data
//mongoimport --type csv --headerline weather.csv -d weather -c data

//SECOND
//figure out the "State" that recorded the lowest "Temperature" when the wind
//was coming from the west ("Wind Direction" between 180 and 360)

var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/weather', function (err, db) {
    if(err) {
        throw err;
    }

    var weatherData = db.collection('data');
    var query = { 'Wind Direction' : { '$gt' : 180, '$lt' : 360 } };
    var cursor = weatherData.find(query);

    cursor.limit(1);
    cursor.sort( { 'Temperature': 1 } );
    
    cursor.each(function (err, doc) {
        if (err) {
            throw err;
        }
        if (doc === null) {
            return db.close();
        }
        console.dir(doc);
        console.dir('Lowest temperature in ' + doc.State + ' (' + doc.Temperature + '°)');
    });
});