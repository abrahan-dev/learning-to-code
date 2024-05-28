db.students.explain().find({ student_id : 5 });
//RESPONSE
{
"queryPlanner" : {
    "plannerVersion" : 1,
    "namespace" : "school.students",
    "indexFilterSet" : false,
    "parsedQuery" : {
        "student_id" : {
            "$eq" : 5
        }
    },
    //Interesting part here
    "winningPlan" : {
    "stage" : "COLLSCAN", //It's doing a collection scan (all the documents)
            "filter" : {
                "student_id" : {
                    "$eq" : 5
                }
            },
            "direction" : "forward"
    },
    "rejectedPlans" : [ ]
},
"serverInfo" : {
"host" : "msms",
        "port" : 27017,
        "version" : "3.0.5",
        "gitVersion" : "8bc4ae20708dbb493cb09338d9e7be6698e4a3a3"
},
"ok" : 1
}

//Create Index
> db.students.createIndex({student_id:1});
//Return
{
    "createdCollectionAutomatically" : false,
    "numIndexesBefore" : 1,
    "numIndexesAfter" : 2,
    "ok" : 1
}

//And now the explain :
{
	"queryPlanner" : {
		"plannerVersion" : 1,
		"namespace" : "school.students",
		"indexFilterSet" : false,
		"parsedQuery" : {
			"student_id" : {
				"$eq" : 5
			}
		},
		"winningPlan" : {
			"stage" : "FETCH",
			"inputStage" : {
				"stage" : "IXSCAN",
				"keyPattern" : {
					"student_id" : 1
				},
				"indexName" : "student_id_1", //We use the index
				"isMultiKey" : false,
				"direction" : "forward",
				"indexBounds" : {
					"student_id" : [
						"[5.0, 5.0]"
					]
				}
			}
		},
		"rejectedPlans" : [ ]
	},
	"serverInfo" : {
		"host" : "msms",
		"port" : 27017,
		"version" : "3.0.5",
		"gitVersion" : "8bc4ae20708dbb493cb09338d9e7be6698e4a3a3"
	},
	"ok" : 1
}

//Using the parameter true, explain will execute de query and will return stats
db.students.explain(true).find({ student_id : 5 })

//Create Index
> db.students.createIndex({student_id:1, class_id:-1});
//1 is ascending and -1 is descending -> it affects the sorting on queries

//QUizz
db.students.createIndex( { class : 1, student_name : 1 } )