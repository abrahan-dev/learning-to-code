/*
 * We use spare indexes when the index key is missing from one of the documents
 */
db.fruits.createIndex( { color : 1 }, { unique : true } );
/*
 * If color is missing we get a duplycate key error
 */
db.fruits.createIndex( { color : 1 }, { unique : true, sparse : true } );
/*
 * It can not be used to sort documents
 */