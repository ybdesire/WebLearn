app = angular.module('myModule', []);

app.directive('hello1', function(){
	return{
		restrict: 'E',
		template: '<div ><input ng-model="data" type="text"></input>{{data}}</div>',
		replace: true
	}
});

app.directive('hello2', function(){
	return{
		restrict: 'E',
		scope: {},
		template: '<div ><input ng-model="data" type="text"></input>{{data}}</div>',
		replace: true
	}
});