app.controller("RealStateSingleController", function ($scope,$routeParams,RealStateAPI){

	//var temp = {nome:"Teste Imagem", url:" http://placehold.it/350x150"};
	$scope.images = [];
	$scope.realstate = {};
	$scope.image = {name:"", url:""};
	$scope.status = {status:null, message: ""};

	$scope.addImage = function(image){
		$scope.images.push({nome:image.name, url:image.url});
		image.name = image.url = ""
	}

	$scope.removeImage = function(image){
		$scope.images.splice($scope.images.indexOf(image),1);
	},

	$scope.save = function(realstate){
		realstate.imagens = $scope.images;
		$scope.realstate = {};
		$scope.images = [];

		RealStateAPI.save(realstate).then(function(result) {
			console.log(result.data["result"]);
	    	if(result.data["result"] == 'success'){
	    		$scope.status = {status:'success', message:"Imóvel adicionado com sucesso"};
	    	}else{
	    		$scope.status = {status:'error', message:"Erro no cadastro. Entre em contato com o desenvolvedor"};
	    	}
	    }, function(error) {
	        $scope.status = {status:'error', message:"Erro no cadastro. Entre em contato com o desenvolvedor"};
	    });

	}
});