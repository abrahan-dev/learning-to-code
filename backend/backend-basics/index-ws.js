const express = require('express');
const { get } = require('http');
const server = require('http').createServer();
const app = express();
const PORT = 3000;

app.get('/', function(req, res) {
  res.sendFile('index.html', {root: __dirname});
});

server.on('request', app);

process.on('SIGINT', function() {
  wss.clients.forEach(function each(client) {
    client.close();
  });

  server.close(function() {
    shutdownDb();
  });
});

server.listen(PORT, function () { console.log('Listening on ' + PORT); });

/** Websocket **/
const WebSocketServer = require('ws').Server;

const wss = new WebSocketServer({ server: server });

wss.on('connection', function connection(ws) {
  const numClients = wss.clients.size;

  console.log('clients connected: ', numClients);

  wss.broadcast(`Current visitors: ${numClients}`);

  if (ws.readyState === ws.OPEN) {
    ws.send('welcome!');
  }

  const insertVisitor = `INSERT INTO visitors VALUES (
    ${numClients},
    datetime('now')
  )`;
  console.log(insertVisitor);
  db.run(insertVisitor);

  ws.on('close', function close() {
    wss.broadcast(`Current visitors: ${wss.clients.size}`);
    console.log('A client has disconnected');
  });

  ws.on('error', function error() {
    //
  });
});

/**
 * Broadcast data to all connected clients
 * @param  {Object} data
 * @void
 */
wss.broadcast = function broadcast(data) {
  console.log('Broadcasting: ', data);
  wss.clients.forEach(function each(client) {
    client.send(data);
  });
};
/** End Websocket **/

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(':memory:');

db.serialize(function() {
  db.run(`CREATE TABLE visitors (
    count INTEGER,
    time TEXT
  )`);
});

function getCounts() {
  db.get('SELECT * FROM visitors', function(err, row) {
    console.log(row);
  });
}

function shutdownDb() {
  getCounts();
  console.log('Shutting down database');
  db.close();
}
