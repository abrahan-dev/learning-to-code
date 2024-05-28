var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/week2', function (err, db) {
    if (err) {
        throw err;
    }

    var grades = db.collection('grades');
    var cursor = grades.find({});

    // First way
    //  Specific order : 1 Sort 2 Skip 3 Limit, internally they will be put
    //  in the correct order
    cursor.skip(1);
    cursor.limit(4);
    cursor.sort('grade', 1);

    // Second way : sort by grade and by student
    //cursor.sort([['grade', 1], ['student', -1]]);

    // Third way : using third param of find()
    //var options = { 'skip' : 1,
    //                'limit' : 4,
    //                'sort' : [['grade', 1], ['student', -1]] };
    //var cursor = grades.find({}, {}, options);
    //            1 Selector 2 Projection 3 Options

    cursor.each(function (err, doc) {
        if (err) {
            throw err;
        }
        if (doc === null) {
            return db.close();
        }
        console.dir(doc);
    });
});