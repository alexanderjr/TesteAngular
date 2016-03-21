angular.module('ImobBrazil').factory('RealStateAPI', function($http){
	
	var urlAPI = "http://demo3292918.mockable.io/anuncio";

	var __get = function(){
		return $http({
    	    method: "GET",
    	    url: urlAPI
    	});
	}

	var __save = function(realstate){
		return $http({
			method:"POST",
			data: realstate,
			url: urlAPI,
			header : {
		      "Content-Type" : 'application/json',    
		      "Authentication": "egeniusfounders2016"
		      }
		});
	}

	return {
		get : __get,
		save:__save
	}
})