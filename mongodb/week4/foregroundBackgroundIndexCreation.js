/*
 * Foreground is default option. Blocks readers and writers. Fast
 * Background is slow. It does not block readers and writers.
 */
db.fruits.createIndex( { color : 1 }, { background : true } );
/*
 * Background index creation blocks the shell.
 */