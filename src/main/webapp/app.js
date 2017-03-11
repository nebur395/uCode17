angular.module('machinLenin', ['ui.router', 'ngDroplet'])

    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider

            //starter screen
            .state('starter', {
                url: "/starter",
                templateUrl: "templates/starter.html",
                controller: "starterCtrl"
            });

        $urlRouterProvider.otherwise('starter');
    });
