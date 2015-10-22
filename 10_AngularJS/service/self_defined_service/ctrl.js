myApp = angular.module('self_define_service', []);

//define a service by factory
myApp.factory('$get_string_service', function(){
	return{ events: function(str){
		return 'my service is a string: ' + str;
		}
	}
});

//call the service at controller
myApp.controller('showctl',  function($scope, $get_string_service){
	var str = $get_string_service.events("lol");
	$scope.greeting = {
		text: str
	};
});


