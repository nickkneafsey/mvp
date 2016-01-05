
angular.module('eventer.events', [])

.controller('EventsController', function ($scope, Events){
	$scope.zip = '';
	$scope.data = {};
	$scope.favorite = '';
	$scope.favorites = [];
	$scope.zips = [];
	$scope.username = 'nick';

	$scope.populateEvents = function() {
	  Events.getEvents($scope.zip).then(function(data){
	  	$scope.data.events = data.events;
	  }).catch(function(error){
	  	console.error(error);
	  });
	};

	$scope.addToFavorites = function() {
		Events.addFavorite($scope.favorite);
	};

	$scope.getFavs = function() {
		Events.getFavorites($scope.username).then(function(data){
			console.log(data);
			$scope.favorites = data.data;
		}).catch(function(error){
	  	console.error(error);
	  });
	};

	$scope.addZip = function() {
		Events.addLocation($scope.zip);
	};

	$scope.getZips = function() {
    Events.getLocations($scope.username).then(function(data){
    	$scope.zips = data.data.sort();
    }).catch(function(error){
	  	console.error(error);
	  });
	};
  
});

