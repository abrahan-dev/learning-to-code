db.zips.aggregate([
    {
        "$match" : {
            "city" : {
                "$regex" : /^[0-9]/
            }
        }
    },
    {
        "$group" : {
            "_id" : null,
            "sum_pop" : {
                "$sum" : "$pop"
            }
        }
    }
]).pretty();