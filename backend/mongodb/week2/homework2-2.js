//Write a program that finds the document with the highest recorded
//temperature for each state, and adds a "month_high" field for that document,
//setting its value to true. Use the weather dataset that you imported in
//HW 2.1.

//Execute mongoProc
//@mongoProc_3.0_linux_x86_64$ ./mongoProc.sh

var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/weather', function (err, db) {
    if(err) {
        throw err;
    }

    var weatherData = db.collection('data'),
        cursor = weatherData.find({}),
        states = [],
        statesToUpdate = [];

    cursor.sort( { 'State' : 1, 'Temperature': -1 } );

    cursor.each(function (err, doc) {
        if (err) {
            throw err;
        }
        if (doc === null) {
            statesToUpdate.forEach(function(stateToUpdate) {
                weatherData.save(stateToUpdate, function (err, saveResult)  {
                    if (err) {
                        throw err;
                    }
                    console.dir(stateToUpdate);
                    console.dir('Guardado correctamente ' + saveResult);
                });
            });
        } else if(typeof states[doc.State] === 'undefined') {
            states[doc.State] = true;
            doc['month_high'] = true;
            statesToUpdate.push(doc);
        }
    });
});