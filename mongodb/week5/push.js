/*
 * Quizz
 * PUsh add elements to the set (even if it already exists)
 */
db.zips.aggregate([{
    "$group" : {
        "_id" : "$state",
        "postal_codes" : {
            "$push" : "$_id"
        }
    }
}]);