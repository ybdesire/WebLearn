var helloModule = angular.module("ctrlsModule", []);
helloModule.controller("helloCtrl", function($scope){
	$scope.greeting = {
		text : "hello world2"
	}
});

helloModule.controller("namesCtrl", function($scope){
	$scope.names = ["fes", "as", "efd"];
});