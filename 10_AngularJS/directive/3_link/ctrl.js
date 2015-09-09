app = angular.module('myModule', []);

app.directive('hello', function(){
	return{
		restrict: 'E',
		template: '<div>Hello Angular</div>',
		replace: true,
		link: function(scope, element, attr){
			element.addClass('first');
			element.bind('mouseenter', function(){
				console.log('mouseenter');
			});
		}
	}
});