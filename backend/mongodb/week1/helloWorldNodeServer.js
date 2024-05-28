var http = require('http');

var server = http.createServer(function (request, response) {
    response.writeHead(200, { "Content-type" : "Text/Plain"} );
    response.end('Hello world! \n');
});

server.listen(8000);
console.log('server running at localhost:8000');