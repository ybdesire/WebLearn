var http = require('http');
var server = http.createServer();
server.on('request', function(req, res){
	res.end('hello wrold!');
});
server.listen(8080);