/*
 * queryPlanner -> by default
 * executionStats -> get extra info about execution
 * allPlansExecution -> include previous modes -> get executionStats for each
 * execution plan
 */


var cursor = db.data.explain("executionStats");
cursor.find({"Airport":"BTV", "Wind Speed" : { "$gt" : 3 } });

var cursor = db.data.explain("allPlansExecution");
cursor.find({"Airport":"BTV", "Wind Speed" : { "$gt" : 3 } });