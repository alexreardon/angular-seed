'use strict';

eventsApp.controller('EventController',
    function EventController($scope) {
        $scope.shouldHide = false;
        $scope.sortOrder = '-voteCount',
        $scope.event = {
            name: 'Angular Boot Camp',
            date: '10/12/2014',
            location: {
                street: '123 fun lane',
                state: 'NSW'
            },
            sessions: [
                {
                    name: 'Eat my shorts',
                    voteCount: 0
                },
                {
                    name: 'Ate my shoes',
                    voteCount: 0
                },
                {
                    name: 'Hungry for my face',
                    voteCount: 0
                }
            ]
        };

        $scope.flip = function(){
            console.log('trying to flip!');
            $scope.shouldHide = !$scope.shouldHide;
        };

        $scope.voteUp = function (session) {
            console.log('up vote');
            session.voteCount++;
        };
        $scope.voteDown = function (session) {
            if (session.voteCount > 0) {
                session.voteCount--;
            }
        };

    });