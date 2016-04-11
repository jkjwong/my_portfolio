(function() {
	'use strict';

	angular
		.module('app')
		.factory('dataService', dataService);

		dataService.$inject = ['$http', '$q', 'api'];
		function dataService($http, $q, api) {
			console.log('dataService loaded');

			var dataService = {
				data: null,

				getData: function() {
					var deferred = $q.defer();

					$http.get(api.work).
					success(function(data) {
						dataService.data = data;
						deferred.resolve(data);
					}).
					error(function(err) {
						deferred.reject(err);
					});

					return deferred.promise;
				},
				returnWork: function() {
					return this.data;
				},
				getProject: function(index) {
					var elementPos = this.data.map(function(x) {return x.slug; }).indexOf(index);
					console.log(elementPos);
					return this.data[elementPos];
				}
			};

			return dataService;
		}
})();
