var app = angular.module('myApp', []);
app.controller("MainController", ['$scope', function($scope) {
	$scope.title = 'Testing the application';
	$scope.run = 'Run Successful';
}]);