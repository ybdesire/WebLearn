var http = require('http');
var util = require('util');

var server = http.createServer();
server.on('request', function(req, res){//request content, response content
	res.writeHead(200, {'Content-Type': 'text/plain', 'Accept-Language': 'zh-xxx'});//Add HTTP Header
	res.write('Hello World!');
	res.end();
	//res.end(req.url);
	//res.end(req.method);
});
server.listen(8080, function(){
	console.log('listen');
});