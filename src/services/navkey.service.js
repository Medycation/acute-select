//Immediately Invoked Function Expression (IIFE)
(function () {
    angular
        .module("acute.select")
        .factory('navKey', navKey);

    function navKey() {
        return {
            'backspace': 8,
            'tab': 9,
            'enter': 13,
            'escape': 27,
            'pageUp': 33,
            'pageDown': 34,
            'end': 35,
            'home': 36,
            'leftArrow': 37,
            'upArrow': 38,
            'rightArrow': 39,
            'downArrow': 40,
            'del': 46
        };
    };
})();
