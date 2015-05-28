angular
    .module('acute.select')
    .directive('acSelectOnFocus', acSelectOnFocus);

acSelectOnFocus.$inject = ['$log'];
function acSelectOnFocus($log) {
    var directive = {
        restrict: 'A',
        scope: {
            acSelectOnFocus: '='
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

