(function() {
	'use strict';

	function ChampionsListController(championsData) {
		var vm = this;
		vm.championsData = championsData;
	}

	angular.module('FormulaOne').controller('ChampionsListController', ChampionsListController);
}());
