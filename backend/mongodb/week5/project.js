//Reshape documents in the pipeline
db.products.aggregate([{
    $project : {
        _id : 0, //Not including the _id att
        'maker' : { $toLower : "$manufacturer" },
        'details' : {
            'category' : "$category",
            'price' : { "$multiply" : [ "$price", 10 ] }
        },
        'item' : '$name'
    }
}]);

/*
 * Quizz
 */

db.zips.aggregate([
    {
        "$project" : {
            "_id" : 0,
            "city" : { "$toLower" : "$city"},
            "pop" : 1,
            "state" : 1,
            "zip" : "$_id"
        }
    }
]);