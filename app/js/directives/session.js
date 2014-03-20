eventsApp.directive('mySession', function ($compile) {
    return {
        restrict: 'E',
        replace: true, // won't leave the directive html parent
        templateUrl: '/templates/directives/session.html',
        // scope : {
            // isolated scope
        //}
        scope: {
            session: '=session'
            // or because they are named the same
            // session: '='
            // '&' -> function to execute in parent scope
            // '@'-> expecting a string

        }
    };
});
