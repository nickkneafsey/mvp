angular.module('eventer.services',[])
.factory('Events', function ($http){
	var getEvents = function(zip){
		return $http({
			method: 'GET',
			url: 'http://api.seatgeek.com/events?taxonomies.name=sports&postal_code=' + zip
		}).then(function(data){
			console.log('data', data);
			return data.data;
		});
	};
	return {
		getEvents: getEvents
	};
})