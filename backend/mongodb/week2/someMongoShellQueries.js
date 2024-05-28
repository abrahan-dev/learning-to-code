//Find and prettify
db.things.find().pretty();
db.hw1_1.findOne();
//get users with username "dwight" and show email attribute without _id
db.users.findOne({"username": "dwight"}, {"email": true, "_id": false});
//get users with name starting by q and the attribute email exists
db.users.find({"name": {$regex: "q"}, "email": {$exists: true}});
//get scores where score is lower than 50 and greatest than 90
db.scores.find({"score": {$or: [{$lt: 50}, {$gt: 90}]}});
//accessing array in depth
db.catalog.find({"price": {$gte: 10000}, "reviews.rating": {$gte: 5}});

//Count
db.grades.count();

//Insert
db.things.insert({a: 1, b: {}, c: [{a: 1, b: 2}, 2, 3]});
db.hello_mongo_express.insert({name: 'Abraham', age: 35});
//Insert doc from variable
doc = {name: "abraham", age: 35, profession: "programador"};
db.persons.insert(doc);

//mongo shell is js
for (i = 0; i < 4; i++) {
    print('ichi ichi aeee' + i);
}

//get help about mongo shell
help
help keys

//Get cursor into variable
var cur = db.meetups.find();
null;

//Is there another one ?
cur.hasNext();

//Programmatically printing results
while (cur.hasNext()) {
    printjson(cur.next());
}

//Sort by attribute name
cur.sort({name: 1});
//Sort by attribute name desc and limit results to 5
var cur = db.meetups.find().sort({name: -1}).limit(5);
null;

//set attribute countre to RU where _id equal to myrnarachkham
db.users.update({"_id": "myrnarackham"}, {$set: {"country": "RU"}});
//unset remove attribute interests from the document with _id jimmy
db.users.update({"_id": "jimmy"}, {"$unset": {"interests": 1}});
//add elements to the interests array whether exists or not
db.curso.update({_id: "Mike"}, {$push: {interests: "skydiving"}});
//Remove one element from the left of the interests attribute
db.curso.update({_id: "Mike"}, {$pop: {interests: -1}});
//Add element to the interests array if not exists
db.curso.update({_id: "Mike"}, {$addToSet: {interests: "skydiving"}});
//push elements
db.curso.update({_id: "Mike"}, {$pushAll: {interests: ["skydiving", "skiing"]}});
//update element, if he does not exist it will be create
db.people.update({"name": "Mike"}, {$set: {"age": 63}}, {upsert: true});
//multi update (by default update only the first ocurrence
db.people.update( { }, { $set : { "title" : "Dr" } }, { multi : true } );

//Remove
db.people.remove( { } );
db.people.remove( { "age" : { $gte : 50 } } );

//Drop collection
db.people.drop();

//Import json object colletion
mongoimport -d week2 -c grades grades.json
