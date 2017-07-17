(function() {
	'use strict'; 

	angular.module('myApp.controllers', [])
		.controller('helloWorldCtrl', helloWorldCtrl);

		helloWorldCtrl.$inject=['$scope'];
		function helloWorldCtrl($scope) { 
			$scope.name = {first: 'Jane', last: 'Doe'};    
		}	 
})();

