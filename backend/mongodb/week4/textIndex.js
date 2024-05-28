/*
 * Create an index of type "text" on the key "words".
 * We can find words within a string using the "$text"
 */
db.data.createIndex( { "words" : "text" } );
db.data.find( { "$text" : { "$search" : "dog"} } );
