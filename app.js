var app = angular.module('CellPhone', ['ngRoute']);

app.config(function ($routeProvider){
	$routeProvider
		.when('/', {
			controller:'HomeController',
			templateUrl:'views/Home.html'
		})
		.when('/calculator', {
			controller:'CalcController',
			templateUrl:'views/Calculator.html'
		})
		.otherwise({
			redirectTo: '/'
		});
});