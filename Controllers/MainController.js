app.controller('MainController', ['$scope', '$timeout', function($scope, $timeout){
	$scope.clock = Date.now(); //Initial time
	$scope.tick = 60000; //ms delay between ticks

	var currTime = function(){
		$scope.clock = Date.now(); //Current time
		$timeout(currTime, $scope.tick); //Resets timer
	}

	//Starts timer
	$timeout(currTime, $scope.tick);
}]);