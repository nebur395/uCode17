angular.module('machinLenin')

    .controller('descriptionCtrl', ['$scope', '$state', 'videoFilter', function ($scope, $state, videoFilter) {

        $scope.analytics = [
            {
                persons: [
                    {age: {min: 25, max: 34, score: 0.398511},
                        face: "Contento",
                        gender: {gender: "Hombre", score: 0.993307}},
                    {age: {min: 35, max: 44, score: 0.403753},
                        face: "Contento",
                        gender: {gender: "Hombre", score: 0.924142}},
                    {age: {min: 25, max: 34, score: 0.384741},
                        face: "Contenta y con gorro",
                        gender: {gender: "Mujer", score: 0.970688}},
                    {age: {min: 45, max: 54, score: 0.349088},
                        face: "Contenta y con gorro",
                        gender: {gender: "Mujer", score: 0.970688}}
                ],
                things: [
                    {type: "Habitación", score: 0.72},
                    {type: "Gente", score: 0.59},
                    {type: "Construcción", score: 0.57}
                ]
            },
            {
                persons: [
                    {age: {min: 55, max: 64, score: 0.431511},
                        face: "Con gorro",
                        gender: {gender: "Hombre", score: 0}},
                    {age: {min: 18, max: 24, score: 0.565731},
                        face: "Con gorro",
                        gender: {gender: "Hombre", score: 0.993307}},
                    {age: {min: 18, max: 24, score: 0.700845},
                        face: "Con gorro",
                        gender: {gender: "Hombre", score: 0.993307}},
                    {age: {min: 18, max: 24, score: 0.441717},
                        face: "Triste",
                        gender: {gender: "Mujer", score: 0}}
                ],
                things: [
                    {type: "Persona", score: 0.7},
                    {type: "Reportero", score: 0.67},
                    {type: "Mago", score: 0.57}
                ]
            },
            {
                persons: [
                    {age: {min: 35, max: 44, score: 0.403753},
                        face: "Contento y con gorro",
                        gender: {gender: "Hombre", score: 0.952574}},
                    {age: {min: 18, max: 24, score: 0.349191},
                        face: "Contento y con gorro",
                        gender: {gender: "Hombre", score: 0.993307}},
                    {age: {min: 18, max: 24, score: 0.507983},
                        face: "Contento",
                        gender: {gender: "Hombre", score: 0.970688}},
                    {age: {min: 18, max: 24, score: 0.502411},
                        face: "Contento y con gorro",
                        gender: {gender: "Hombre", score: 0.0179862}}
                ],
                things: [
                    {type: "Habitación", score: 0.6},
                    {type: "Gente", score: 0.6},
                    {type: "Armario", score: 0.57}
                ]
            }
        ];

        $scope.analytics1 = {
            persons: [
                {age: {min: 25, max: 34, score: 0.398511},
                    face: "Contento",
                    gender: {gender: "Hombre", score: 0.993307}},
                {age: {min: 35, max: 44, score: 0.403753},
                    face: "Contento",
                    gender: {gender: "Hombre", score: 0.924142}},
                {age: {min: 25, max: 34, score: 0.384741},
                    face: "Contenta y con gorro",
                    gender: {gender: "Mujer", score: 0.970688}},
                {age: {min: 45, max: 54, score: 0.349088},
                    face: "Contenta y con gorro",
                    gender: {gender: "Mujer", score: 0.970688}}
            ],
            things: [
                {type: "Habitación", score: 0.72},
                {type: "Gente", score: 0.59},
                {type: "Construcción", score: 0.57}
            ]
        };
        $scope.analytics2 = {
            persons: [
                {age: {min: 55, max: 64, score: 0.431511},
                    face: "Con gorro",
                    gender: {gender: "Hombre", score: 0}},
                {age: {min: 18, max: 24, score: 0.565731},
                    face: "Con gorro",
                    gender: {gender: "Hombre", score: 0.993307}},
                {age: {min: 18, max: 24, score: 0.700845},
                    face: "Con gorro",
                    gender: {gender: "Hombre", score: 0.993307}},
                {age: {min: 18, max: 24, score: 0.441717},
                    face: "Triste",
                    gender: {gender: "Mujer", score: 0}}
            ],
            things: [
                {type: "Persona", score: 0.7},
                {type: "Reportero", score: 0.67},
                {type: "Mago", score: 0.57}
            ]
        };
        $scope.analytics3 = {
            persons: [
                {age: {min: 35, max: 44, score: 0.403753},
                    face: "Contento y con gorro",
                    gender: {gender: "Hombre", score: 0.952574}},
                {age: {min: 18, max: 24, score: 0.349191},
                    face: "Contento y con gorro",
                    gender: {gender: "Hombre", score: 0.993307}},
                {age: {min: 18, max: 24, score: 0.507983},
                    face: "Contento",
                    gender: {gender: "Hombre", score: 0.970688}},
                {age: {min: 18, max: 24, score: 0.502411},
                    face: "Contento y con gorro",
                    gender: {gender: "Hombre", score: 0.0179862}}
            ],
            things: [
                {type: "Habitación", score: 0.6},
                {type: "Gente", score: 0.6},
                {type: "Armario", score: 0.57}
            ]
        };

    }]);
