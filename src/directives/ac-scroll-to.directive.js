//Immediately Invoked Function Expression (IIFE)
(function () {
    // Directive for a scroll container. Set the "ac-scroll-to" attribute to an expression and when its value changes,
    // the div will scroll to that position
    angular
        .module("acute.select")
        .directive('acScrollTo', acScrollTo);

    function acScrollTo() {
        var directive = {
            restrict: "A",
            scope: false,
            controller: function ($scope, $element, $attrs) {
                var expression = $attrs.acScrollTo;
                $scope.$watch(expression, function () {
                    var scrollTop = $scope.$eval(expression);
                    angular.element($element)[0].scrollTop = scrollTop;
                });
            }
        };
        return directive;
    }
})();
