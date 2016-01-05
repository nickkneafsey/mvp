angular.module('eventer.events', [])

.controller('EventsController', function ($scope, Events){
	$scope.zip = '90001';
	$scope.data = {};
	$scope.favorite = '';
	$scope.populateEvents = function() {
	  Events.getEvents($scope.zip).then(function(data){
	  	$scope.data.events = data.events;
	  }).catch(function(error){
	  	console.error(error);
	  });
	};
	$scope.addToFavorites = function() {
		console.log("favorite", $scope.favorite);
		Events.addFavorite($scope.favorite);
	}
  
});