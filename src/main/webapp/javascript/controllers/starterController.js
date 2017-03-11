angular.module('machinLenin')

    .controller('starterCtrl', ['$scope', '$state', 'videoFilter', function ($scope, $state, videoFilter) {
        // VIDEO FILTERS
        $scope.jazzy = false;
        $scope.vignette = false;
        $scope.sepia = false;
        $scope.whiteBlack = false;

        // VIEW MANAGEMENT
        $scope.firstView = false;
        $scope.secondView = true;
        $scope.thirdView = false;

        $scope.sendFilters = function () {
            var filters = [
                $scope.jazzy,
                $scope.vignette,
                $scope.sepia,
                $scope.whiteBlack
            ];
            videoFilter.sendFilters(filters, callback);
        }
    }]);
