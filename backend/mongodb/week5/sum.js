db.data.aggregate([{
    "$group" : {
        "_id" : {
            "state" : "$State"
        },
        "sum_temperatures" : {
            "$sum" : "$Temperature"
        }
    }
}]);

/*
 * Quizz
 */
db.zips.aggregate([{
    "$group" : {
        "_id": "$state",
        "population" : {
            "$sum" : "$pop"
        }
    }
}]);