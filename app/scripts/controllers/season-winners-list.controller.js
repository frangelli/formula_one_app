(function() {
	'use strict';

	function SeasonWinnersListController(winnersData, $stateParams) {
		var vm = this;
		vm.winnersData = winnersData;
		vm.seasonChampionId = $stateParams.driverId;
		console.log(vm.seasonChampionId);
	}

	angular.module('FormulaOne').controller('SeasonWinnersListController', SeasonWinnersListController);
}());
