//Immediately Invoked Function Expression (IIFE)
(function () {
    angular
        .module("acute.select")
        .directive('acSelectOnFocus', acSelectOnFocus)

    function acSelectOnFocus() {
        var directive = {
            restrict: 'A',
            scope: {
                acSelectOnFocus: "="
            },
            link: function (scope, element, attrs) {
                element.bind('focus', function () {
                    if (scope.acSelectOnFocus !== false && scope.acSelectOnFocus !== 'false') {
                        element[0].select();
                    }
                });
            }
        };
        return directive;
    }
})();
