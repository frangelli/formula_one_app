(function() {
    'use strict';
    /**
     * @name FormulaOne
     * @desc Main application module
     */
    angular
      .module('FormulaOne', [
        'ngAnimate',
        'ngCookies',
        'ngSanitize',
        'ui.router',
        'ngTouch',
        'angular-loading-bar'
    ]);

    angular.module('FormulaOne').run(['$rootScope', function ($rootScope) {
        $rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams, error) {
            console.log(error);
        });
    }]);

}());
