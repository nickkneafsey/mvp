angular.module('eventer',['eventer.services', 'eventer.events', 'ngRoute'])
.config(function($routeProvider){
	//do routing

	$routeProvider
	.when('/events', {
		templateUrl: 'events/events.html',
		controller: 'EventsController'
	})
	.otherwise({
		redirectTo: '/events'
	});
}).constant('_', window._)
  .run(function ($rootScope) {
     $rootScope._ = window._;
  });