//Immediately Invoked Function Expression (IIFE)
(function () {
    // Call a function when the element is scrolled
    // E.g. ac-on-scroll="listScrolled()"
    // N.B. take care not to use the result to directly update an acScrollTo expression
    // as this will result in an infinite recursion!

    angular
        .module("acute.select")
        .directive('acOnScroll', acOnScroll);

    function acOnScroll() {
        var directive = {
            restrict: "A",
            link: function (scope, element, attrs) {
                var callbackName = attrs.acOnScroll;
                if (callbackName.indexOf("()") === callbackName.length - 2) {
                    callbackName = callbackName.substr(0, callbackName.length - 2);
                }
                var callback = scope[callbackName];
                if (typeof callback === "function") {
                    element.bind("scroll", function () {
                        callback(element[0].scrollTop);
                    });
                }
            }
        };
        return directive;
    }
})();
