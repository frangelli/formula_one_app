(function() {
	'use strict';

	function ErgastService($q, $http) {

		var ERGAST_API_URL = 'http://ergast.com/api/f1';

		function fetchChampions() {
			var defer = $q.defer();
			var req = {
				url: ERGAST_API_URL + '/driverStandings/1.json?limit=999&offset=55',
				method: 'GET'
			};
			$http(req).then(
				function (result) {
					var data = result.data.MRData.StandingsTable.StandingsLists;
					defer.resolve(data);
				},
				function (error) {
					defer.reject(error.data);
				}
			);

			return defer.promise;
		}

		function fetchSeasonWinners(year) {
			var defer = $q.defer();

			if (!year) {
				defer.reject('you should pass an year to fetch the data!');
				return defer.promise;
			}

			var req = {
				url: ERGAST_API_URL + '/' + year + '/results/1.json',
				method: 'GET'
			};
			$http(req).then(
				function (result) {
					var data = result.data.MRData.RaceTable.Races;
					defer.resolve(data);
				},
				function (error) {
					defer.reject(error.data);
				}
			);

			return defer.promise;
		}

		return {
			fetchChampions: fetchChampions,
			fetchSeasonWinners: fetchSeasonWinners
		};
	}

	angular.module('FormulaOne').factory('ErgastService', ErgastService);

}());
