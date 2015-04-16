app.directive('topBar', function(){
	return{
		restrict: 'E',
		scope:{
			info: '='
		},
		templateUrl: 'directives/topBar.html'
	};
});