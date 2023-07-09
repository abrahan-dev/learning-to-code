/*
 * 2d is reserved word
 * If I have this :
 *  {
	"_id" : "01005",
	"city" : "BARRE",
	"loc" : [
		-72.108354,
		42.409698
	],
	"pop" : 4546,
	"state" : "MA"
    }
*/
db.zips.createIndex({ "loc" : "2d", "state" : 1 });
db.zips.find({ "loc" : { "$near" : [50,50] } });

/*
 * 2dsphere for locations on earth using longitude and latitude
 * uses geojson specification
 */
db.zips.createIndex({
    "loc" : "2dsphere"
});
db.zips.find({
   "loc" : {
       "$near" : {
           "$geometry" : {
               "type" : "Point",
               "coordinates" : [-120.12, 38.52]
           },
           "$maxDistance" : 5000
       }
   }
});
