/**
 * Created by Wesam on 9/7/2016.
 */

(function () {

    var app = angular.module('app', ['ngRoute']);

    app.config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'mainPageController'
            })
            .when('/actor', {
                templateUrl: 'views/actor.html',
                controller: 'actorPageController'
            })
            .when('/movie', {
                templateUrl: 'views/movie.html',
                controller: 'moviePageController'
            })
            .when('/imgview', {
                templateUrl: 'views/imgview.html',
                controller: 'imgviewPageController'
            })
            .otherwise({
                redirectTo: '/'
            });

    })


})();

