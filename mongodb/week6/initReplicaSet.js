config = { _id: "m101", members:[
          { _id : 0, host : "localhost:27017"},
          { _id : 1, host : "localhost:27018"},
          { _id : 2, host : "localhost:27019"} ]
};

rs.initiate(config);
rs.status();
/*
 * rs.slaveOk() allows us to read from the non-primary hosts
 * db.oplog.rs.find().pretty() shows the host log to be replicated in the others hosts
 */