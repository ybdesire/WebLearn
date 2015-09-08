app = angular.module('myModule', []);
app.controller('myCtrl', function($scope){
	$scope.add = function(){
		console.log('function add()');
	}
});
app.directive('hello', function(){
	return{
		restrict: 'E',
		template: '<div>Hello Angular</div>',
		replace: true,
		link: function(scope, element, attr){
			element.bind('mouseenter', function(){
				scope.add();
			});
		}
	}
});