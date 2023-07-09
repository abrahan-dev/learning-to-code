//unjoin data
db.posts.aggregate([
    /* unwind by tags */
    {"$unwind": "$tags"},
    /* now group by tags, counting each tag */
    {"$group":
        {"_id": "$tags",
            "count": {$sum: 1}
        }
    },
    /* sort by popularity */
    {"$sort": {"count": -1}},
    /* show me the top 10 */
    {"$limit": 10},
    /* change the name of _id to be tag */
    {"$project":
        {_id: 0,
            'tag': '$_id',
            'count': 1
        }
    }
]);

//use $push operator to reverse the unwind

//double unwind
db.inventory.aggregate([
    {$unwind: "$sizes"},
    {$unwind: "$colors"},
    {$group:
        {
            '_id': {'size': '$sizes', 'color': '$colors'},
            'count': {'$sum': 1}
        }
    }
]);

//reverse double unwind
db.inventory.aggregate([
    {$unwind: "$sizes"},
    {$unwind: "$colors"},
    /* create the color array */
    {$group:
        {
            '_id': {name: "$name", size: "$sizes"},
            'colors': {$push: "$colors"}
        }
    },
    /* create the size array */
    {$group:
        {
            '_id': {'name': "$_id.name",
                'colors': "$colors"},
            'sizes': {$push: "$_id.size"}
        }
    },
    /* reshape for beauty */
    {$project:
        {
            _id: 0,
            "name": "$_id.name",
            "sizes": 1,
            "colors": "$_id.colors"
        }
    }
]);

//reverse double unwind using addToSet if the array components were uniques
db.inventory.aggregate([
    {$unwind: "$sizes"},
    {$unwind: "$colors"},
    {$group:
        {
           '_id': "$name",
            'sizes': {$addToSet: "$sizes"},
            'colors': {$addToSet: "$colors"}
        }
    }
]);