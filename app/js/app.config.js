(function (exports) {
    var ns = 'app';
    exports[ns] = angular.module(ns, []);
}((typeof exports === 'undefined') ? window : exports));

exports.app = angular.module('app', []);

(function (exports) {

    (function (exports) {

        exports.directive('temp', ['event', function (event) {
            return {
                restrict: 'A',
                transclude: false,
                scope: { id: '@' },
                controller: ['$scope', '$element', '$attrs', function ($scope, $element, $attrs) {

                    $scope.test = true;
                }]

            }
        }]);

    }((typeof exports === 'undefined') ? window : exports));

}(app));

(function (exports) {

    exports.factory('event', ['$rootScope', function ($rootScope) {
        return {
            dispatch: function (type, value) {
                return $rootScope.$broadcast(type, value);
            }
        }
    }]);

}((!exports ? window : exports)

