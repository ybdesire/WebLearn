auth = angular.module("auth", []);
auth.controller("getAuth", function($scope, $http){
	$scope.userInfo = {
		username: "testuser1",
		password: "123",
		authid: "xxx"
	};

	$scope.getAuthID = function(){
		console.log($scope.userInfo);
		url = 'http://localhost:8000/v1/getAuthID?username=' + $scope.userInfo.username +'&password=' + $scope.userInfo.password;
		console.log(url);
		$http.get(url).success(function(response){
			console.log(response);
			$scope.userInfo.authid = response['authid'];
		});
	}

});