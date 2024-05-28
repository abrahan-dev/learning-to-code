/*
 * This query examine 0 docs (totalDocsExamined) to get the result using an index
 * so it is much more faster
 */

//In order to perform a covered query with this indexes :
{ name : 1, dob : 1 }
{ _id : 1 }
{ hair : 1, name : 1 }

//This query would be likely covered :
db.example.find({name: {$in: ["Bart", "Homer"]}}, {_id: 0, dob: 1, name: 1});
/*
 * It is going to use the first index which cover the dob and the name.
 * We are suppresing the _id so the index covered the projection
 */