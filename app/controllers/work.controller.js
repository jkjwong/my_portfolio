(function() {
	'use strict';

	angular
		.module('app')
		.controller('workCtrl', workCtrl);

		workCtrl.$inject = ['dataService', 'api', 'workData'];

		function workCtrl(dataService, api, workData) {
			console.log('work controller loaded');

			var vm = this;

			vm.portfolio = workData;
		}
})();