app.controller('CalcController', ['$scope', function($scope){
	$scope.screen = "0"; //Initial screen value
	$scope.screenMem = null; //To hold previous value between calculations
	$scope.newNum = true; //Decides between replacing screen value or concatenating the value.

	$scope.inputVal = function(keyVal){
		if($scope.screen == 0 || $scope.newNum){
			$scope.screen = keyVal;
			$scope.newNum = false;
		}else{
			$scope.screen += String(keyVal);
		}
		$scope.screenMem = toNumber($scope.screenMem);
	}

	$scope.add = function(){

	}
}]);