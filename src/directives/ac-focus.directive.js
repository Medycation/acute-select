//Immediately Invoked Function Expression (IIFE)
(function () {
    // Directive to set focus to an element when a specified expression is true
    angular
        .module("acute.select")
        // Directive to set focus to an element when a specified expression is true
        .directive('acFocus', acFocus);

    acFocus.$inject = ['$timeout', '$parse', 'safeApply'];
    function acFocus($timeout, $parse, safeApply) {
        var directive = {
            restrict: "A",
            link: function (scope, element, attributes) {
                var setFocus = $parse(attributes.acFocus);
                scope.$watch(setFocus, function (value) {
                    if (value === true) {
                        $timeout(function () {
                            element[0].focus();
                        });
                    }
                });
                // Set the "setFocus" attribute value to 'false' on blur event
                // using the "assign" method on the function that $parse returns
                element.bind('blur', function () {
                    safeApply(scope, function () {
                        setFocus.assign(scope, false)
                    });
                });
            }
        };
        return directive;
    }
})();
