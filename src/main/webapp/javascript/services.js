angular.module('machinLenin')

    // 'videoFilter' service manage the exercise video filter functions of the page with the server
    .factory('videoFilter', function ($state, $http) {

        return {
            // add a exercise to the list of performed exercises
            sendFilters: function (callback) {
                $http({
                    method: 'POST',
                    url: 'videoFilters',
                    data: JSON.stringify(filters),
                    headers: {
                        'Content-Type': 'application/json; charset=UTF-8'
                    }
                }).success(function (data) {
                    callback(data);
                }).error(function (data) {
                });
            }
        };
    });
