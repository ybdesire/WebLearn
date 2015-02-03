var count = 0;

function funcA(){
	count++;
};

function funcB(){
	console.log('count is : ' + count);
};


module.exports = {
	fA: funcA,
	fB: funcB
};