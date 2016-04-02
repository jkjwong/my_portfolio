(function () {

	'use strict';

	angular
		.module('app')
		.config(config);

		config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

		function config($stateProvider, $urlRouterProvider, $locationProvider) {
			$urlRouterProvider.otherwise('/');

			$stateProvider
				.state('home', {
					url: '/',
					templateUrl: '/app/partials/pages/home.html'
				})
				.state('work', {
					url: '/work',
					controller: 'workCtrl',
					templateUrl: '/app/partials/pages/work.html'
				})
				.state('about', {
					url: '/about',
					templateUrl: '/app/partials/pages/about.html'
				});


			$locationProvider.html5Mode(true);
		}
})();