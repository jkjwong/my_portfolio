(function() {
	'use strict';

	angular
		.module('app')
		.controller('workCtrl', workCtrl);

		workCtrl.$inject = ['workData'];

		function workCtrl(workData) {
			console.log('work controller loaded');

			var vm = this;

			vm.portfolio = workData;
		}
})();