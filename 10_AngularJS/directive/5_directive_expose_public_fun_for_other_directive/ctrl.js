app = angular.module('myModule', []);

app.directive('superman', function(){
	return{
		restrict: 'E',
		scope: {},
		controller: function($scope){
			$scope.abilities = [];
			this.strengthGet = function(){
				$scope.abilities.push('strengthGet');
			}
			this.speedGet = function(){
				$scope.abilities.push('speedGet');
			}
			this.lightGet = function(){
				$scope.abilities.push('lightGet');
			}
		},
		link:function(scope, element, attrs){
			element.bind('mouseenter', function(){
				console.log(scope.abilities);
			});
		}
	}
});


app.directive('strength', function(){
	return{
		restrict: 'A',
		require: '^superman',
		link: function(scope, element, attrs, supermanCtrl){
			supermanCtrl.strengthGet();
		}
	}
});

app.directive('speed', function(){
	return{
		restrict: 'A',
		require: '^superman',
		link: function(scope, element, attrs, supermanCtrl){
			supermanCtrl.speedGet();
		}
	}
});

app.directive('light', function(){
	return{
		restrict: 'A',
		require: '^superman',
		link: function(scope, element, attrs, supermanCtrl){
			supermanCtrl.lightGet();
		}
	}
});

