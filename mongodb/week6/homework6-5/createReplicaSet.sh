#!/usr/bin/env bash

echo "killing mongod and mongos"
killall mongod
echo "makin data folders"
mkdir -p /data/rs1 /data/rs2 /data/rs3
echo "starting mongod instances"
echo "  rs1"
mongod --replSet m101 --logpath "rs1.log" --dbpath /data/rs1 --port 27017 --smallfiles --oplogSize 64 --fork 
echo "  rs2"
mongod --replSet m101 --logpath "rs2.log" --dbpath /data/rs2 --port 27018 --smallfiles --oplogSize 64 --fork
echo "  rs3"
mongod --replSet m101 --logpath "rs3.log" --dbpath /data/rs3 --port 27019 --smallfiles --oplogSize 64 --fork

#Output : 
#$ sudo sh createReplicaSet.sh 
#killing mongod and mongos
#mongod: no process found
#makin data folders
#starting mongod instances
#  rs1
#about to fork child process, waiting until server is ready for connections.
#forked process: 4644
#child process started successfully, parent exiting
#  rs2
#about to fork child process, waiting until server is ready for connections.
#forked process: 4654
#child process started successfully, parent exiting
#  rs3
#about to fork child process, waiting until server is ready for connections.
#forked process: 4671
#child process started successfully, parent exiting