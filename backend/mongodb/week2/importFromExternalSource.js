var MongoClient = require('mongodb').MongoClient,
    request = require('request');

MongoClient.connect('mongodb://localhost:27017/week2', function (err, db) {
    if (err) {
        throw err;
    }
    var source = 'https://www.reddit.com/r/technology/.json';
    var callback = function (error, response, body) {
        if(!error && response.statusCode === 200) {
            var obj = JSON.parse(body);
            var stories = obj.data.children.map(function (story) {
                return story.data;
            });
            db.collection('reddit').insert(stories, function (err, data) {
                if (err) {
                    throw err;
                }
                console.dir(data);
                db.close();
            });
        }
    };
    request(source, callback);
});