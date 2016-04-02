(function() {
	'use strict';

	angular
		.module('app')
		.factory('dataService', dataService);

		dataService.$inject = ['$http'];
		function dataService($http) {
			console.log('dataService loaded');

			var factory = {
				getData: getData
			};

			function getData(url) {
				return $http.get(url);
			}

			return factory;
		}
})();
