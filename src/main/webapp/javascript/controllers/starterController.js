angular.module('machinLenin')

    .controller('starterCtrl', ['$scope', '$state', function ($scope, $state) {
        // video filters
        $scope.jazzy = false;
        $scope.vignette = false;
        $scope.sepia = "";
        $scope.whiteBlack = "";
    }]);
