(function () {

	'use strict';

	angular
		.module('app')
		.config(config);

		config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

		function config($stateProvider, $urlRouterProvider, $locationProvider) {
			$urlRouterProvider.otherwise('/');

			$stateProvider
				.state('root', {
					abstract: true,
					templateUrl: '/app/partials/pages/root.html',
					resolve: {
						getData: ['dataService', function(dataService) {
							return dataService.getData();
						}]
					}
				})
				.state('home', {
					url: '/',
					parent: 'root',
					templateUrl: '/app/partials/pages/home.html'
				})
				.state('work', {
					url: '/work',
					parent: 'root',
					controller: 'workCtrl',
					controllerAs: 'work',
					resolve: {
						workData: ['getData', 'dataService', function(getData, dataService) {
							return dataService.returnWork();
						}]
					},
					templateUrl: '/app/partials/pages/work.html'
				})
				.state('work.detail', {
					url: '/:id',
					parent: 'work',
					controller: 'projectCtrl',
					controllerAs: 'project',
					resolve: {
						projectData: ['getData', 'dataService', '$stateParams', function(getData, dataService, $stateParams) {
							return dataService.getProject($stateParams.id);
						}]
					},
					templateUrl: '/app/partials/pages/project.html'
				});

			$locationProvider.html5Mode(true);
		}

	angular.module('app').run(['$state', '$stateParams',
		function($state, $stateParams) {
			//this solves page refresh and getting back to state
		}]);
})();