/*
 * Quizz
 * AddToSet only add non-existant elements to the set
 */
db.zips.aggregate([{
    "$group" : {
        "_id" : "$city",
        "postal_codes" : {
            "$addToSet" : "$_id"
        }
    }
}]);