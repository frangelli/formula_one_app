(function() {
	'use strict';
	/**
	 * App routes configuration using ui-router
	 */
	angular.module('FormulaOne').config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

		var states = {
			'index': {
	            url: '',
	            controller: ['$location', function($location) {
	                    $location.path('/champions');
	                }
	        	]
        	},
			'champions': {
				url: '/champions',
				controller: 'ChampionsListController',
				controllerAs: 'championsViewModel',
				templateUrl: 'views/champions-list.html',
				resolve: {
					championsData: ['ErgastService', function(ErgastService) {
						return ErgastService.fetchChampions();
					}]
				}
			},
			'season': {
				url: '/season/:year',
				params: {
					year: null,
					driverId: null
				},
				controller: 'SeasonWinnersListController',
				controllerAs: 'winnersViewModel',
				templateUrl: 'views/season-winners-list.html',
				resolve: {
					winnersData: ['ErgastService', '$stateParams', function(ErgastService, $stateParams) {
						return ErgastService.fetchSeasonWinners($stateParams.year);
					}]
				}
			},
			'404': {
				url: '/404',
				templateUrl: 'views/404.html'
			}
		};

		angular.forEach(states, function(stateConfig, stateName) {
        	$stateProvider.state(stateName, stateConfig);
    	});

		//404 catch
		$urlRouterProvider.otherwise('/404');

	}]);
}());
