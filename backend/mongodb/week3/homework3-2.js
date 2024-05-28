//grep -rn "hw3.2 TODO" *

posts.insert(post, function (err, insertResult) {
    if (err) {
        throw err;
    }
    callback(err, post.permalink);
});