/**
 * Created by Wesam on 9/11/2016.
 */

(function () {

    var mainController = angular.module('app');

    mainController.controller('mainPageController', mainFunction);

    function mainFunction($scope, $http, $q, apiService) {

        const // JavaScript ES6 const
            api = '?api_key=331b2ad9d3e0120dfd8c9bc6c14da645',
            url = 'http://api.themoviedb.org/3/';

        $scope.actorSearch = function (query) {

            if (query != '') {
                var
                    movie = $http({method: 'GET', url: url + 'search/movie' + api + '&query=' + query}),
                    person = $http({method: 'GET', url: url + 'search/person' + api + '&query=' + query});

                $q.all([movie, person])
                    .then(function successCallback(arrayOfResults) {
                        $scope.movies = arrayOfResults[0].data.results;
                        $scope.actors = arrayOfResults[1].data.results;
                    }).then(function errorCallback(err) {
                })
            }
        };


    }

})();
