// Directive for a scroll container. Set the 'ac-scroll-to' attribute to an expression and when its value changes,
// the div will scroll to that position
angular
    .module('acute.select')
    .directive('acScrollTo', acScrollTo);

acScrollTo.$inject = ['$log'];
function acScrollTo($log) {
    var directive = {
        restrict: 'A',
        scope: false,
        controller: acScrollToController
    };
    return directive;
}

acScrollToController.$inject = ['$scope', '$element', '$attrs'];
function acScrollToController($scope, $element, $attrs) {
    var expression = $attrs.acScrollTo;
    $scope.$watch(expression, function () {
        var scrollTop = $scope.$eval(expression);
        angular.element($element)[0].scrollTop = scrollTop;
    });
}
