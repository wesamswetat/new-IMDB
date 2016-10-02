/**
 * Created by Wesam on 9/13/2016.
 */
(function () {

    var movieDirective = angular.module('app');

    movieDirective.directive('movieDirective', movieFunction);

    function movieFunction(apiService, $location) {
        return{
            restrict: 'EA',
            scope: {
                movie: '=', // movie have to be  banding
                t: '=' // Tv have to be  banding
            },
            replace: true, // to replace the html tag in ng-repeat
            templateUrl: 'app/directives/movieDirective/movie-template.html', // the template of the directive to replace in the DOM
            link: function (scope, elem, attrs) {
                // to make listener to the events
                scope.isHover = false;
                scope.saveMovieId = function (movie) {
                    // to pass the id to the service
                    if (movie.hasOwnProperty('title')){
                        apiService.setMovieId(movie.id) ;
                        $location.url('/movie');
                    }
                };
            }


        }
    }

})();
