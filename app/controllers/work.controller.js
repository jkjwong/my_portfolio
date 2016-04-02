(function() {
	'use strict';

	angular
		.module('app')
		.controller('workCtrl', workCtrl);

		workCtrl.$inject = ['$scope'];

		function workCtrl($scope) {
			console.log('work controller loaded');
		}
})();