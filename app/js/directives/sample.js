'use strict';
eventsApp.directive('sample', function ($compile) {
    return {
        restrict: 'E', //A = attribute (default), 'E' = element, 'C' = class, 'M' = comment
//        link: function (scope, element, attrs, controller) {
//            var markup = '<input type="text" ng-model="sampleData" /> {{ sampleData }} <br/>';
//            angular.element(element).html($compile(markup)(scope));
//        }
        template: '<input type="text" ng-model="sampleData" /> {{ sampleData }} <br/>'
    };
});