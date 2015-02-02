(function schedule(){
	setTimeout(function(){
		console.log('hello wrold!');
		schedule();
	}, 2000);
})();