(function() {
	'use strict';

	angular
		.module('app')
		.controller('projectCtrl', projectCtrl);

		projectCtrl.$inject = ['projectData'];

		function projectCtrl(projectData) {
			var vm = this;
			vm.details = projectData;
		}
})();