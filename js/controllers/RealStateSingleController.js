app.controller("RealStateSingleController", function ($scope,$routeParams,RealStateAPI){

	$scope.images = [{}]

	$scope.addImage = function(){
		$scope.images.push({});
	}

	$scope.removeImage = function(image){
		$scope.images.splice($scope.images.indexOf(image),1);
	},

	$scope.save = function(realstate){
		realstate.imagens = $scope.images;
		console.log(realstate);
	}
});