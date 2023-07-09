/*
 * Not possible a double key index if the both of them are arrays.
 *
 * If we create an index and after that we set an array,
 * mongodb does not know it was an array
 */
db.foo.createIndex( { a : 1, b : 1 } );
db.foo.insert( { a : [ "apples", "oranges"], b : "grapes" } );

/*
 * Creating multikey index using dot notation
 */
db.students.createIndex( { 'scores.score' : 1 } );
db.students.find( { 'scores.score' : { '$gt' : 99 } } ).pretty();
/*
 * Search by a key of the array
 */
db.students.explain().find( { 'scores' : { '$elemMatch' : { 'type' : 'exam', 'score' : { '$gt' : 99.8 } } } } );
db.people.createIndex( { 'work_history.company' : -1 } );
