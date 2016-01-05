angular.module('eventer.services',[])
.factory('Events', function ($http){
	var getEvents = function(zip){
		return $http({
			method: 'GET',
			url: 'http://api.seatgeek.com/events?taxonomies.name=sports&postal_code=' + zip
		}).then(function(data){
			return data.data;
		});
	};
	var addFavorite = function(favorite){
		return $http({
			method: 'POST',
			url: '/api/users/favorites',
			data: favorite
		});
	}
	return {
		getEvents: getEvents,
		addFavorite: addFavorite
	};
})