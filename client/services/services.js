angular.module('eventer.services',[])
.factory('Events', function ($http){
	var getEvents = function(zip){
		return $http({
			method: 'GET',
			url: 'http://api.seatgeek.com/events?postal_code=' + zip
		});
	};
	return {
		getEvents: getEvents
	}
})