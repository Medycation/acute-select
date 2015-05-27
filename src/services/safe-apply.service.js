//Immediately Invoked Function Expression (IIFE)
(function () {
    // safeApply service, courtesy Alex Vanston and Andrew Reutter
    angular
        .module("acute.select")
        .factory('safeApply', safeApply);

    safeApply.$inject = ['$rootScope'];
    function safeApply($rootScope) {
        return function ($scope, fn) {
            var phase = $scope.$root.$$phase;
            if (phase == '$apply' || phase == '$digest') {
                if (fn) {
                    $scope.$eval(fn);
                }
            } else {
                if (fn) {
                    $scope.$apply(fn);
                } else {
                    $scope.$apply();
                }
            }
        }
    }
})();
