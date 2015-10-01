//creates virtual server on local host
var http = require('http');


var server = http.createServer(function(request, response){
    console.log('Got a request');
    response.end();
});

server.listen(3000);
console.log('server is running on port 3000')