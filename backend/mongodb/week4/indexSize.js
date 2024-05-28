/*
 * Check the size of the index. It must fit in memory (working set).
 */
db.collection.stats();
db.collection.totalIndexSize();
