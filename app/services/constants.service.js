(function() {
	'use strict';

	angular
		.module('app')
		.constant('api', {
			work: 'http://' + window.location.host + '/data/work.json'
		});

})();