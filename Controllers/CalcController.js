app.controller('CalcController', ['$scope', function($scope){
	$scope.screen = "0"; //Initial screen value
	$scope.screenMem = null; //To hold previous value between calculations
	$scope.newNum = true; //Decides between replacing screen value or concatenating the value.
	$scope.currOp = null; //Required for ex if: 9x3 but then you hit + instead of =, it'd do 9+3 because it needs this to maintain the operation status.
	$scope.decAvail = true; //Check if a decimal has been added or not. To avoid # like 12.4.12

	$scope.inputVal = function(keyVal){
		if($scope.screen == 0 || $scope.newNum){
			$scope.screen = keyVal;
			$scope.newNum = false;
		}else{
			$scope.screen += String(keyVal);
		}
	}

	$scope.add = function(){
		if($scope.currOp != "add" && $scope.currOp != null){
			switch($scope.currOp){
				case "subtract":
					$scope.screenMem -= $scope.screen;
					$scope.screen = $scope.screenMem;
					$scope.newNum = true;
					$scope.decAvail = true;
					break;
				case "multiply":
					$scope.screenMem *= $scope.screen;
					$scope.screen = $scope.screenMem;
					$scope.newNum = true;
					$scope.decAvail = true;
					break;
				case "divide":
					$scope.screenMem /= $scope.screen;
					$scope.screen = $scope.screenMem;
					$scope.newNum = true;
					$scope.decAvail = true;
					break;
				default:
					break;
			}
		}else if($scope.screenMem && $scope.newNum == false){
			console.log("Screen " + $scope.screen);
			$scope.screenMem += $scope.screen;
			console.log("Screen mem " + $scope.screenMem);
			$scope.screen = $scope.screenMem;
			$scope.newNum = true;
			$scope.decAvail = true;
		}else{
			console.log($scope.screenMem);
			$scope.screenMem = Number($scope.screen);
			$scope.newNum = true;
			$scope.decAvail = true;
		}
		$scope.currOp = "add";
	}

	$scope.subtract = function(){
		if($scope.currOp != "subtract" && $scope.currOp != null){
			switch($scope.currOp){
				case "add":
					$scope.screenMem += $scope.screen;
					$scope.screen = $scope.screenMem;
					$scope.newNum = true;
					$scope.decAvail = true;
					break;
				case "multiply":
					$scope.screenMem *= $scope.screen;
					$scope.screen = $scope.screenMem;
					$scope.newNum = true;
					$scope.decAvail = true;
					break;
				case "divide":
					$scope.screenMem /= $scope.screen;
					$scope.screen = $scope.screenMem;
					$scope.newNum = true;
					$scope.decAvail = true;
					break;
				default:
					break;
			}
		}else if($scope.screenMem && $scope.newNum == false){
			console.log("Screen " + $scope.screen);
			$scope.screenMem -= $scope.screen;
			console.log("Screen mem " + $scope.screenMem);
			$scope.screen = $scope.screenMem;
			$scope.newNum = true;
			$scope.decAvail = true;
		}else{
			console.log($scope.screenMem);
			$scope.screenMem = Number($scope.screen);
			$scope.newNum = true;
			$scope.decAvail = true;
		}
		$scope.currOp = "subtract";
	}

	$scope.multiply = function(){
		if($scope.currOp != "multiply" && $scope.currOp != null){
			switch($scope.currOp){
				case "add":
					$scope.screenMem += $scope.screen;
					$scope.screen = $scope.screenMem;
					$scope.newNum = true;
					$scope.decAvail = true;
					break;
				case "subtract":
					$scope.screenMem -= $scope.screen;
					$scope.screen = $scope.screenMem;
					$scope.newNum = true;
					$scope.decAvail = true;
					break;
				case "divide":
					$scope.screenMem /= $scope.screen;
					$scope.screen = $scope.screenMem;
					$scope.newNum = true;
					$scope.decAvail = true;
					break;
				default:
					break;
			}
		}else if($scope.screenMem && $scope.newNum == false){
			console.log("Screen " + $scope.screen);
			$scope.screenMem *= $scope.screen;
			console.log("Screen mem " + $scope.screenMem);
			$scope.screen = $scope.screenMem;
			$scope.newNum = true;
			$scope.decAvail = true;
		}else{
			console.log($scope.screenMem);
			$scope.screenMem = Number($scope.screen);
			$scope.newNum = true;
			$scope.decAvail = true;
		}
		$scope.currOp = "multiply";
	}

	$scope.divide = function(){
		if($scope.currOp != "divide" && $scope.currOp != null){
			switch($scope.currOp){
				case "add":
					$scope.screenMem += $scope.screen;
					$scope.screen = $scope.screenMem;
					$scope.newNum = true;
					$scope.decAvail = true;
					break;
				case "subtract":
					$scope.screenMem -= $scope.screen;
					$scope.screen = $scope.screenMem;
					$scope.newNum = true;
					$scope.decAvail = true;
					break;
				case "multiply":
					$scope.screenMem *= $scope.screen;
					$scope.screen = $scope.screenMem;
					$scope.newNum = true;
					$scope.decAvail = true;
					break;
				default:
					break;
			}
		}else if($scope.screenMem && $scope.newNum == false){
			console.log("Screen " + $scope.screen);
			$scope.screenMem /= $scope.screen;
			console.log("Screen mem " + $scope.screenMem);
			$scope.screen = $scope.screenMem;
			$scope.newNum = true;
			$scope.decAvail = true;
		}else{
			console.log($scope.screenMem);
			$scope.screenMem = Number($scope.screen);
			$scope.newNum = true;
			$scope.decAvail = true; 
		}
		$scope.currOp = "divide";
	}

	$scope.decimal = function(){
		if($scope.decAvail == true && $scope.newNum == false){
			$scope.screen += String(".");
		}
		$scope.decAvail = false;
	}

	$scope.percentage = function(){
		if($scope.newNum == false){
			$scope.screenMem = ($scope.screen / 100);
			$scope.screen = $scope.screenMem;
			$scope.newNum = true;
			$scope.decAvail = true;
		}
	}

	$scope.equals = function(){
		if($scope.screenMem && $scope.currOp && $scope.newNum == false){
			switch($scope.currOp){
				case "add":
					$scope.screenMem += $scope.screen;
					$scope.screen = $scope.screenMem;
					$scope.newNum = true;
					$scope.decAvail = true;
					break;
				case "subtract":
					$scope.screenMem -= $scope.screen;
					$scope.screen = $scope.screenMem;
					$scope.newNum = true;
					$scope.decAvail = true;
					break;
				case "multiply":
					$scope.screenMem *= $scope.screen;
					$scope.screen = $scope.screenMem;
					$scope.newNum = true;
					$scope.decAvail = true;
					break;
				case "divide":
					$scope.screenMem /= $scope.screen;
					$scope.screen = $scope.screenMem;
					$scope.newNum = true;
					$scope.decAvail = true;
					break;
				default:
					break;
			}
		}
	}

	$scope.clear = function(){
		$scope.screen = "0";
		$scope.screenMem = null;
		$scope.currOp = null;
	}
}]);