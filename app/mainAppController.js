/**
 * Created by Wesam on 9/7/2016.
 */

var mainController = angular.module('mainAppController', []);

mainController.controller('mainController', function ($scope, $http) {

    var // Url'S For GET Data
        tokenApi = '331b2ad9d3e0120dfd8c9bc6c14da645',
        keywordUrl = 'http://api.themoviedb.org/3/search/keyword',
        movieUrl = 'http://api.themoviedb.org/3/search/movie',
        personUrl = 'http://api.themoviedb.org/3/search/person',
        tempUrl = '', tempUrl1 = '';

    $scope.actorSearch = ''; //Actor Search input
    $scope.movieSearch = ''; //MoVIE Search input
    $scope.actorSearch1 = ''; //Actor Search Array from server
    $scope.movieSearch1 = ''; //MoVIE Search Array from server
    $scope.isActorInfoShow = false;
    $scope.isMovieInfoShow = false;


    $scope.selectFromPerson = function (pName, pId) {
        //Actor name and Id to get all his data
        $scope.actorSearch = pName;
        $scope.personId = pId;
        $scope.actorSearch1 = '';
    };

    $scope.selectFromMovie = function (mTitle, mId) {
        //Movie name and Id to get all his data
        $scope.movieSearch = mTitle;
        $scope.movieId = mId;
        $scope.movieSearch1 = '';
    };


    $scope.watchSearch = function (qury) {
        //function to watch every click on inputs
        if (qury === 'person') {
            tempUrl = personUrl + '?api_key=' + tokenApi + '&query=' + $scope.actorSearch;
        } else {
            tempUrl = movieUrl + '?api_key=' + tokenApi + '&query=' + $scope.movieSearch;
        }

        if ($scope.actorSearch.length > 0 || $scope.movieSearch.length > 0) {
            //search in the API every new query
            $http({
                method: 'GET',
                url: tempUrl
            }).then(function successCallback(response) {
                if (qury === 'person') {
                    $scope.actorSearch1 = response.data.results;
                } else {
                    $scope.movieSearch1 = response.data.results;
                }

            })
        }
    };

    $scope.hideKeyworData = function () {
        //when on blur hide the lists by zero them
        $scope.actorSearch1 = '';
        $scope.movieSearch1 = '';
    };


    $scope.keywordUrl = function () {
        $scope.inputError = '';
        //get the final information and check the inputs by onclick the button
        if ($scope.actorSearch === '' && $scope.movieSearch === '') {
            $scope.inputError = 'search by Actor or by movie name';
        } else if ($scope.actorSearch !== '' && $scope.movieSearch !== '') {
            $scope.inputError = 'use one search not tow';
        } else if ($scope.actorSearch !== '' && $scope.movieSearch === '') {
            if ($scope.personId === undefined) {
                $scope.inputError = 'you must make your choice only from the lists';
            } else {
                //prepare the API links for Actor Information
                tempUrl = 'http://api.themoviedb.org/3/person/' + $scope.personId + '/movie_credits?api_key=' + tokenApi;
                tempUrl1 = 'http://api.themoviedb.org/3/person/' + $scope.personId + '?api_key=' + tokenApi;
                $scope.isMovieInfoShow = false; // hide the movie section
            }
        } else {
            if ($scope.movieId === undefined){
                $scope.inputError = 'you must make your choice only from the lists';
            }else {
                $scope.inputError = '';
                //prepare the Api link for the Movies
                tempUrl = 'http://api.themoviedb.org/3/movie/' + $scope.movieId + '?api_key=' + tokenApi;
                $scope.isActorInfoShow = false;// hide the actor section
                tempUrl1 = ''; // this only for search by actor
            }
        }

        // rest the inputs
        $scope.actorSearch = '';
        $scope.movieSearch = '';

        //get the data and show section
        if (tempUrl !== '') {
            console.log(tempUrl);
            $http({
                method: 'GET',
                url: tempUrl
            }).then(function successCallback(response) {
                if (tempUrl1 !== '') {
                    $scope.bigDataOfMovies = response.data.cast;
                } else {
                    $scope.movieDes = response.data;
                    $scope.isMovieInfoShow = true;
                }

            }, function errorCallback(response) {

            });

            if (tempUrl1 !== '') {
                // get actor info by ID from the Api
                $http({
                    method: 'GET',
                    url: tempUrl1
                }).then(function successCallback(response) {
                    $scope.actorInfo = response.data;
                    $scope.isActorInfoShow = true;
                }, function errorCallback(response) {

                });
            }
        }

    }
});
