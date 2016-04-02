(function () {

	'use strict';

	angular.module('app.controllers')

		.controller('MainCtrl', ['$location','page','RoutesManifest', function ($location, page, RoutesManifest) {

			this.page = page;

			this.navigation = RoutesManifest;

			this.loaded = function() {
				console.log('Started: Main Controller');
			};

			this.loaded();

		}]);

})();