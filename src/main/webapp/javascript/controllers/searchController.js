angular.module('machinLenin')

    .controller('searchCtrl', ['$scope', '$state', 'videoFilter', function ($scope, $state, videoFilter) {

        $scope.imgName = "analytics";
        $scope.result = {};
        $scope.success = true;

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

        $scope.searchJSON= function(){
            $scope.success = true;
            $scope.imgName = "analytics";
            var searchValue = $scope.frameFilter;
            var arrayJson = $scope.analytics;
            for (var i=0 ; i < arrayJson.length ; i++)
            {
                for (var k in arrayJson[i]){
                    if(k=='persons'){
                        for(var p = 0; p < arrayJson[i].persons.length; p++){
                            for(var ps in arrayJson[i].persons[p]){
                                if(ps == 'age'){
                                    if(arrayJson[i].persons[p].age.max == searchValue){
                                        $scope.result = arrayJson[i];
                                        $scope.imgName = "analytics" + (i + 1);
                                    }else if(arrayJson[i].persons[p].age.min == searchValue){
                                        $scope.result = arrayJson[i];
                                        $scope.imgName = "analytics" + (i + 1);
                                    }else if(arrayJson[i].persons[p].age.score == searchValue){
                                        $scope.result = arrayJson[i];
                                        $scope.imgName = "analytics" + ((i + 1));
                                    }
                                }
                                else if(ps == 'face'){
                                    if(arrayJson[i].persons[p].face == searchValue){
                                        $scope.result = arrayJson[i];
                                        $scope.imgName = "analytics" + (i + 1);
                                    }
                                }
                                else if(ps == 'gender'){
                                    if(arrayJson[i].persons[p].gender.gender == searchValue){
                                        $scope.result = arrayJson[i];
                                        $scope.imgName = "analytics" + (i + 1);
                                    }
                                    else if(arrayJson[i].persons[p].gender.score == searchValue){
                                        $scope.result = arrayJson[i];
                                        $scope.imgName = "analytics" + (i + 1);
                                    }
                                }
                            }
                        }
                    }
                    else if(k=='things'){
                        for(var th = 0; th < arrayJson[i].things.length; th++){
                            if(arrayJson[i].things[th].type == searchValue){
                                $scope.result = arrayJson[i];
                                $scope.imgName = "analytics" + (i + 1);
                            }
                            else if(arrayJson[i].things[th].score == searchValue){
                                $scope.result = arrayJson[i];
                                $scope.imgName = "analytics" + (i + 1);
                            }
                        }

                    }
                }
            }
            if ($scope.imgName == "analytics"){
                $scope.success = false;
            }
        }

    }]);
