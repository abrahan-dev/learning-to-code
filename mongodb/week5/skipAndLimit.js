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
    },
    {
        "$sort" : {
            "population" : -1
        }
    },
    {
        "$skip" : 5
    },
    {
        "$limit" : 10
    }
]);