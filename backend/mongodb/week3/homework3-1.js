//Write a program in the language of your choice that will remove the lowest
//homework score for each student. Since there is a single document for each
//student containing an array of scores, you will need to update the scores
//array and remove the homework.

var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/school', function (err, db) {
    if (err) {
        throw err;
    }

    var cursor = db.collection('students').find({});

    cursor.each(function (err, doc) {
        if (err) {
            throw err;
        }
        if (doc !== null) {
            var lowestScore = null,
                lowestScoreIndex = null,
                homeworkCount = 0;

            for (var index = 0; index < doc.scores.length; ++index) {
                if (doc.scores[index].type === 'homework') {
                    homeworkCount++;
                    if (lowestScore === null) {
                        lowestScore = doc.scores[index];
                        lowestScoreIndex = index;
                    } else {
                        if (doc.scores[index].score < lowestScore.score) {
                            lowestScore = doc.scores[index];
                            lowestScoreIndex = index;
                        }
                    }
                }
            }

            if (homeworkCount > 1) {
                doc.scores.splice(lowestScoreIndex, 1);
                db.collection('students').save(doc, function (err, saveResult) {
                    if (err) {
                        throw err;
                    }
                    console.dir('Guardado correctamente ' + saveResult);
                    console.dir(doc);
                });
            }
        }
    });
});

//Check response is _id : 13
//db.students.aggregate({'$unwind': '$scores'}, {'$group': {'_id': '$_id', 'average': {$avg: '$scores.score'}}}, {'$sort': {'average': -1}}, {'$limit': 1});