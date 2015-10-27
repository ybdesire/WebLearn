myApp = angular.module('manually_start_ng', []);

myApp.controller('showctl',  function($scope){
	$scope.greeting = {text:'lol'};

});

angular.bootstrap(document, ['manually_start_ng']);
