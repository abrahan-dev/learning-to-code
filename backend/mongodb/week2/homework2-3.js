//ADD USER
users.insert(user, function (err, insertResult) {
    if (err) {
        throw err;
    }
    callback(err, user);
});

//LOGIN
users.findOne({ '_id' : username}, function (err, doc) {
    if(err) {
        throw err;
    }
    validateUserDoc(err, doc);
});