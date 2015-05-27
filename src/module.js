//Immediately Invoked Function Expression (IIFE)
(function () {
    // Directive that creates a searchable dropdown list.

    // Associated attributes:-
    // ac-model - use instead of ng-model
    // ac-options - use instead of ng-options.

    // Example:- <select class="ac-select" ac-model="colour" ac-options="c.name for c in colours"></select>

    // Note:- ac-options works like ng-options, but does not support option groups
    angular
        .module("acute.select", [])
})();
