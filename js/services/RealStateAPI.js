angular.module('ImobBrazil').factory('RealStateAPI', function($http){
	
	var __get = function(){
		return $http({
    	    method: "GET",
    	    url: "http://demo3292918.mockable.io/anuncio"
    	});
	};
	return {
		get : __get
	}
})