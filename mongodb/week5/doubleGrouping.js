//{ "_id" : 0, "a" : 0, "b" : 0, "c" : 21 }
//{ "_id" : 1, "a" : 0, "b" : 0, "c" : 54 }
//{ "_id" : 2, "a" : 0, "b" : 1, "c" : 52 }
//{ "_id" : 3, "a" : 0, "b" : 1, "c" : 17 }
//{ "_id" : 4, "a" : 1, "b" : 0, "c" : 22 }
//{ "_id" : 5, "a" : 1, "b" : 0, "c" : 5 }
//{ "_id" : 6, "a" : 1, "b" : 1, "c" : 87 }
//{ "_id" : 7, "a" : 1, "b" : 1, "c" : 97 }

db.fun.aggregate([
    {
        $group : {
            _id : { a : "$a", b : "$b" },
            c : { $max : "$c" }
        }
    },
    {
        $group : {
            _id : "$_id.a",
            c : { $min : "$c" }
        }
    }
]);

/*
 * Quizz
 */
//{ "_id" : 2, "a" : 0, "b" : 1, "c" : 52 }
//{ "_id" : 4, "a" : 1, "b" : 0, "c" : 22 }
