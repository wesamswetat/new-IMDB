/**
 * Created by Wesam on 10/2/2016.
 */

(function () {
    'use strict';

    var route = angular.module('app');

    route.config(function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider
            .otherwise('/home');

        $stateProvider
        /////////////
        /// HOME ///
        ////////////
            .state('home', {
                url: '/home',
                templateUrl: 'app/views/main.html',
                controller: 'mainPageController'
            })
            .state('actor', {
                url: '/actor',
                templateUrl: 'app/views/actor.html',
                controller: 'actorPageController'
            })
            .state('movie', {
                url: '/movie',
                templateUrl: 'app/views/movie.html',
                controller: 'moviePageController'
            })
            .state('imgview', {
                url: '/imgview',
                templateUrl: 'app/views/imgview.html',
                controller: 'imgviewPageController'
            })

        ;
    });

})();
