app = angular.module('myModule', []);

app.directive('hello', function(){
	return{
		restrict: 'E',
		template: '<div>Hello Angular</div>',
		replace: true
	}
});