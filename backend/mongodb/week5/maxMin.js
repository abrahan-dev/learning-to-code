db.zips.aggregate([{
    "$group" : {
        "_id" : "$state",
        "pop" : {
            "$max" : "$pop"
        }
    }
}]);

db.zips.aggregate([{
    "$group" : {
        "_id" : "$state",
        "max_population" : {
            "$min" : "$pop"
        }
    }
}]);