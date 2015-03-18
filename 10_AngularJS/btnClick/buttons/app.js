var btnsM = angular.module("btnsModule", []);

btnsM.controller("btnsCtrl", function($scope){
	$scope.count = 0;
	$scope.isHide = false;
	
	$scope.addCount = function(){
		$scope.count = $scope.count + 1;
	}
	
	$scope.minCount = function(){
		$scope.count = $scope.count - 1;
	}
	
	$scope.hideCount = function(){
		$scope.isHide = !$scope.isHide;
	}

});