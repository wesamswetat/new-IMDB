/**
 * Created by Wesam on 9/9/2016.
 */

(function () {

    var apiService = angular.module('app');
    apiService.factory('apiService', getDataFromApi);

    function getDataFromApi() {

        var
            myAppApi = {};

        var
            actorId = 0,
            movieId = 0;

        myAppApi.setActorId = function (Id) {
            actorId = Id;
        };

        myAppApi.getActorId = function () {
            return actorId;
        };

        myAppApi.setMovieId = function (Id) {
            movieId = Id;
        };

        myAppApi.getMovieId = function () {
            return movieId;
        };

        return myAppApi;

    }


})();
