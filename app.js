var http = require('http');

var server = http.createServer((req, res) =>{
    console.log('Request was mande' + req.url);
    
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hey Ninjas');
});


// var server = http.createServer(onRequest).listen(8080);
var port = 8083;
server.listen(port, '127.0.0.1');
console.log('Server started to port ' + port + '....');
