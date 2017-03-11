angular.module('machinLenin')

    // 'exerciseService' service manage the exercise home functions of the page with the server
    .factory('exerciseService', function ($state, $http) {

        return {
            //get the predetermined exercises and predetermined muscle groups
            getPredetermined: function (callbackSuccess,callbackError) {
                $http({
                    method: 'GET',
                    url: 'getPredetermined'
                }).success(function (data) {
                    callbackSuccess(data.muscleGroups,data.predeterminedExercises, data.cardioTypes, data.cardioExercises);
                }).error(function (data) {
                    callbackError(data);
                });
            },
            // add a exercise to the list of performed exercises
            addExercise: function (exercise,callbackSuccess,callbackError) {
                var exerciseTemp = {
                    user: auth.getUsername(),
                    id: exercise.id,
                    name: exercise.name,
                    muscleGroup: exercise.muscleGroup
                };
                $http({
                    method: 'POST',
                    url: 'addExercise',
                    data: JSON.stringify(exerciseTemp),
                    headers: {
                        'Content-Type': 'application/json; charset=UTF-8'
                    }
                }).success(function (data) {
                    callbackSuccess(data);
                }).error(function (data) {
                    callbackError(data);
                });
            }
        };
    });
