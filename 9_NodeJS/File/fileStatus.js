var fs = require('fs');

//get file size
var fSize = fs.statSync('a.txt')['size']+' bytes';
console.log(fSize);

//print bytes 10 to 14
fs.open('a.txt', 'r', function(err, fd){
	var buf = Buffer(1024, 'ascii');
	var wBuf = Buffer("fewfsafdasdgfewawe", 'utf8');
	if(err){
		throw err;
	}
	else{
		fs.read(fd, buf, 0, 1024, 0, 
		function(err, readBytes){
			console.log(buf.slice(10, 14));
		});
	}
});

//overrite it with UTF8 encoded string "fewfsafdasdgfewawe"
fs.open('a.txt', 'w', function(err, fd){
	var wBuf = Buffer("fewfsafdasdgfewawe", 'utf8');
	if(err){
		throw err;
	}
	else{
		fs.write(fd, wBuf, 0, wBuf.length, 0, function(err, written){
			console.log(written);
		});
	}
});
