app = angular.module('myModule', []);

app.controller('loginCtrl', function($scope){
	$scope.user={
		userName:'default',
		password:'123'
	};
	$scope.save = function(isValie){
		
		alert(isValie);
	}
});