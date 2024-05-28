db.fruits.insert( {thing : 'apple' } );
db.fruits.insert( {thing : 'strawberry' } );
db.fruits.createIndex( { thing : 1 }, {unique : true} );

db.students.createIndex( { student_id : 1, class_id : 1 }, { unique : true } );