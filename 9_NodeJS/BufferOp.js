var buf = new Buffer(100, 'ascii');
var i = 0;
for(i=0;i<100;i++){
	buf[i] = i+1;
}
//slice buffer[40:60] into a sliceBuffer
var slice = buf.slice(40,60);
//Copy buf[10:20] into targetBuf
var targetBuf = Buffer(20, 'ascii');
buf.copy(targetBuf, 0, 40, 60);//targetStart, sourceStart, sourceEnd

for(i=0;i<20;i++){
	console.log(targetBuf[i]);
}