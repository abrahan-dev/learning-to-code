//Filtering documents
db.zips.aggregate([
    {
        "$match" : {
            "state" : "CA"
        }
    },
    {
        "$group" : {
            "_id" : "$city",
            "population" : {
                "$sum" : "$pop"
            },
            "zip_codes" : {
                "$addToSet" : "$_id"
            }
        }
    },
    {
        "$project" : {
            "_id" : 0,
            "city" : "$_id",
            "population" : 1,
            "zip_codes" : 1
        }
    }
]);

/*
 * Quizz
 */
db.zips.aggregate([
    {
        "$match" : {
            "pop" : { "$gt" : 100000 }
        }
    }
]);