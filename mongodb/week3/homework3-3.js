this.getPostByPermalink(permalink, function(err, post) {
    post.comments.push(comment);
    posts.save(post, function (err, saveResult)  {
        if (err) {
            throw err;
        }
        callback(err, post);
    });
});