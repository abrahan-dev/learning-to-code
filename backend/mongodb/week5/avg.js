/*
 * Quizz
 */
db.zips.aggregate([{
    "$group" : {
        "_id" : {
            "state" : "$state"
        },
        "avg_pop" : {
            "$avg" : "$pop"
        }
    }
}]);