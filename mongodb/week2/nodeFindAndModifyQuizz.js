db.collection('homeworks').findAndModify(
    {}, //Empty objet to match all the docs
    [[ 'grade' , 1 ]], //Order incrisingly to get the lowest grade first
    { '$set' : { 'dropped' : true } }, //Update dropped to true
    { 'new' : true }, //Get the doc after being modified
    callback
);