db.grades.aggregate([
    {
        "$unwind" : "$scores"
    },
    {
        "$match" : {
            "scores.type" : {
                "$nin" : ["quiz"]
            }
        }
    },
    {
        "$group" : {
            "_id" : {
                "class_id" : "$class_id", "student_id" : "$student_id"
            },
            "avg_score" : {
                "$avg" : "$scores.score"
            }
        }
    },
    {
        "$group" : {
            "_id" : {
                "class_id" : "$_id.class_id"
            },
            "avg_score" : {
                "$avg" : "$avg_score"
            }
        }
    },
    {
        "$sort" : {
            "avg_score" : -1
        }
    },
    {
        "$limit" : 1
    }
]).pretty();