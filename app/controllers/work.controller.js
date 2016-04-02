(function() {
	'use strict';

	angular
		.module('app')
		.controller('workCtrl', workCtrl);

		workCtrl.$inject = ['dataService', 'api'];

		function workCtrl(dataService, api) {
			console.log('work controller loaded');

			var vm = this;

			dataService.getData(api.work).success(function (response) {
				vm.portfolio = response;
			});
		}
})();