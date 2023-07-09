/*
 * Group products by manufacturer and sum the products
 */
db.products.aggregate([{
    "$group" : {
        "_id" : "$manufacturer",
        "num_products" : {
            "$sum" : 1
        }
    }
}]);

/*
 * Quizz
 */
db.products.aggregate([{
    "$group" : {
        "_id" : "$category",
        "num_products" : {
            "$sum" : 1
        }
    }
}]);