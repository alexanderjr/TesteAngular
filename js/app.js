var app = angular.module("ImobBrazil",['ngRoute']).config(function($routeProvider, $locationProvider){
	
	//$locationProvider.html5Mode(true);

	$routeProvider.when("/home", {
		templateUrl : "templates/_list.html",
		controller : "RealStateController"
	});

	$routeProvider.when("/cadastrar", {
		templateUrl : "templates/_register.html",
		controller : "RealStateSingleController"
	});

	$routeProvider.when("/imovel/:id", {
		templateUrl : "templates/_single.html",
		controller : "RealStateController"
	});

	$routeProvider.otherwise({redirectTo: "/home"});
})