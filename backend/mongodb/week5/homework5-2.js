db.zips.aggregate([
    {
        "$group" : {
            "_id" : {
                "state" : "$state", "city" : "$city"
            },
            "sum_pop" : {
                "$sum" : "$pop"
            }
        }
    },
    {
        "$match" : {
            "sum_pop" : {
                "$gt" : 25000
            }
        }
    },
    {
        "$match" : {
            "_id.state" : {
                "$in" : ["CA", "NY"]
            }
        }
    },
    {
        "$group" : {
            "_id" : null,
            "avg_pop" : {
                "$avg" : "$sum_pop"
            }
        }
    }
]);