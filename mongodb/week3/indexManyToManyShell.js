//db.students.find().pretty()
{
	"_id" : ObjectId("563636b9e11613c39dbd67a9"),
	"name" : "Abraham",
	"teachers" : [
		1,
		2
	]
}
{
	"_id" : ObjectId("563636bee11613c39dbd67aa"),
	"name" : "Julio",
	"teachers" : [
		0,
		2
	]
}
{
	"_id" : ObjectId("563636c1e11613c39dbd67ab"),
	"name" : "Gaël",
	"teachers" : [
		2
	]
}

//db.teachers.find().pretty()
{ "_id" : ObjectId("563636dee11613c39dbd67ac"), "name" : "prof 1" }
{ "_id" : ObjectId("563636e3e11613c39dbd67ad"), "name" : "prof 2" }
{ "_id" : ObjectId("563636e7e11613c39dbd67ae"), "name" : "prof 3$" }

//CREATE INDEX
db.students.ensureIndex({teachers:1})

//SEE HOW THE QUERY IS PERFORMED
db.students.find({teachers:{$all: [0,2] } }).explain()