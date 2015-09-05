bookStoreApp.config(function($routeProvider){
	$routeProvider.when('/aboutus', {
		templateUrl: 'components/aboutus/aboutus.tpl.html',
		controller: 'aboutusCtrl'
	}).when('/book', {
		templateUrl: 'components/book/book.tpl.html',
		controller: 'bookCtrl'
	}).otherwise({
		redirectTo: '/book'
	});
});