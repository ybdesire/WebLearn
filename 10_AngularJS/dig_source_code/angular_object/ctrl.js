myApp = angular.module('self_define_service', []);

myApp.controller('showctl',  function($scope){

	//display angular object
	console.log(angular);

	//details of angular object
	for(var i in angular){
		if(angular.isFunction(angular[i]))
			console.log('Function->'+i);
		else
			console.log('Property->'+i);
	}
});


