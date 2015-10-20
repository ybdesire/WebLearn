describe("Test ng-controller text", function() {
	var scope;//我们会在测试中使用这个scope
    beforeEach(angular.mock.module('helloModule'));//模拟我们的Application模块并注入我们自己的依赖
	//模拟Controller，并且包含 $rootScope 和 $controller
    beforeEach(angular.mock.inject(function($rootScope, $controller){
        scope = $rootScope.$new();//创建一个空的 scope
		//声明 Controller并且注入已创建的空的 scope
        $controller('helloAngular', {$scope: scope});
    }));
    
	// 测试从这里开始
	it('access the scope text', function(){
		expect(scope.greeting.text).toBe("hello wrold");

	});
 
});
