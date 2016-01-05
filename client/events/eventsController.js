angular.module('eventer.events', [])

.controller('EventsController', function ($scope, Events){
	$scope.zip = '90001';
	$scope.data = {};
	$scope.populateEvents = function() {
	  Events.getEvents($scope.zip).then(function(data){
	  	$scope.data.events = data.events;
	  }).catch(function(error){
	  	console.error(error);
	  });
	}
  
});