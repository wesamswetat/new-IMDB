/**
 * Created by Wesam on 9/12/2016.
 */

(function () {

    var moviePage = angular.module('app');

    moviePage.controller('moviePageController', movieController);

    const // JavaScript ES6 const
        api = '?api_key=331b2ad9d3e0120dfd8c9bc6c14da645',
        url = 'http://api.themoviedb.org/3/';

    function movieController($scope, $http, $q, apiService) {

        if (apiService.getMovieId() != 0){

            var
                movieInfo = $http({method: 'GET' , url: url + 'movie/'+ apiService.getMovieId() + api}),
                movieImgs = $http({method: 'GET' , url: url + 'movie/'+ apiService.getMovieId()+ '/images' + api});

            $q.all([movieInfo, movieImgs])
                .then(function successCallback(arrayOfResponse) {
                    $scope.info = arrayOfResponse[0].data;
                    $scope.imgs = arrayOfResponse[1].data.posters;
                })
        }
    }


})();
