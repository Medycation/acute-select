// safeApply service, courtesy Alex Vanston and Andrew Reutter
angular
    .module('acute.select')
    .factory('safeApply', safeApply);

safeApply.$inject = ['$rootScope', '$log'];
function safeApply($rootScope, $log) {
    return function ($scope, fn) {
        var phase = $scope.$root.$$phase;
        if (phase === '$apply' || phase === '$digest') {
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
    };
}

