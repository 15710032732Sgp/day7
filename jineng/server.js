var http = require('http');

http.createServer(function (request, response) {
    if(request.url=='/text'){
        response.writeHead(200, {'Content-Type': 'text/plain'});
        response.end('Heddd');
    }
}).listen(8081);

console.log('Server running at http://127.0.0.1:8081/');