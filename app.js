var http = require('http');
var fs = require('fs');

var myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8');


// //lisening events
myReadStream.on('data', function(chunk) {
    console.log('.........................new chunk received.....................................................................');
    console.log(chunk);
    console.log(chunk.length);
    console.log('\n \n \n');

    
});

// var server = http.createServer((req, res) =>{
//     console.log('Request was mande' + req.url);
    
//     res.writeHead(200, { 'Content-Type': 'text/plain' });
//     res.end('Hey Ninjas');
// });


// // var server = http.createServer(onRequest).listen(8080);
// var port = 8083;
// server.listen(port, '127.0.0.1');
// console.log('Server started to port ' + port + '....');
