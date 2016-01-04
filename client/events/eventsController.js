angular.module('eventer.events', [])

.controller('EventsController', function ($scope, Events){
	$scope.zip = '90001';
	$scope.data = {};
	$scope.populateEvents = function() {
		console.log($scope)
	  Events.getEvents($scope.zip).then(function(data){
	  	// console.log(data.data.data);
	  	console.log('events', data.events)
	  	$scope.data.events = data.events;
	  }).catch(function(error){
	  	console.error(error);
	  });
	}
  
});