app.controller("RealStateController", function ($scope,$routeParams,RealStateAPI){

	$scope.itens      = [];
	$scope.realSingle = [];

	//LIST 
	RealStateAPI.get().then(function(result) {
        $scope.itens = result.data["results"];
		
		//LOAD IF THERE IS A SINGLE
		if($routeParams.id != undefined){
			angular.forEach($scope.itens, function(value, key) {
		        if (value.hasOwnProperty('id')) {
		            result[key] = value;
		            if(result[key].id == $routeParams.id){
		            	$scope.realSingle = result[key];
		            	$scope.realSingle.thumb = $scope.realSingle.imagens[0].url;
						$scope.thumb      = null;
						// window.location = '/';
		            }
		        }
		    });
		}
		
    	console.log($scope.itens);
    }, function(error) {
        console.log(error);
    });
    
});