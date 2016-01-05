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
	var addFavorite = function(favorite, username){
		return $http({
			method: 'POST',
			url: '/api/users/favorites',
			data: {
				favorite: favorite,
				username: username
			}
		});
	};
	var getFavorites = function(username){
		return $http({
			method: 'GET',
			url: '/api/users/favorites/' + username
		});
	};
	var addLocation = function(zip, username){
		return $http({
			method: 'POST',
			url: '/api/users/locations/',
			data: {
				zip: zip,
				username: username
			}
		});
	};
	var getLocations = function(username){
		return $http({
			method: 'GET',
			url: '/api/users/locations/' + username
		});
	};
	return {
		getEvents: getEvents,
		addFavorite: addFavorite,
		getFavorites: getFavorites,
		addLocation: addLocation,
		getLocations: getLocations
	};
})