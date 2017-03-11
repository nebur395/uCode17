angular.module('machinLenin')

    // include the 'navbar.html' into the <navbar> tag
    .directive('description', function () {
        return {
            restrict: 'E',
            templateUrl: 'templates/components/description.html',
            controller: 'descriptionCtrl',
            scope: {}
        }
    })

    //include the 'wardrobe.html' into the <wardrobe> tag
    .directive('filters', function () {
        return {
            restrict: 'E',
            templateUrl: 'templates/components/filters.html',
            controller: 'filtersCtrl',
            scope: {}
        }
    })

    //include the 'cloth.html' into the <cloth> tag
    .directive('learning', function () {
        return {
            restrict: 'E',
            templateUrl: 'templates/components/learning.html',
            controller: 'learningCtrl',
            scope: {}
        }
    });
