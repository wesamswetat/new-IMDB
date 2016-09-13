/**
 * Created by Wesam on 9/13/2016.
 */
(function () {

    var movieDirective = angular.module('app');

    movieDirective.directive('movieDirective', movieFunction);

    function movieFunction(apiService) {
        return{
            restrict: 'A', // only attribute because we wont to pass movie object
            scope: {
                movie: '=' // movie have to be tow way banding
            },
            replace: true, // to replace the html tag in ng-repeat
            templateUrl: 'app/directives/movieDirective/movie-template.html', // the template of the directive to replace in the DOM
            link: function (scope, elem, attrs) {
                // to make listener to the events
                scope.saveMovieId = function (id) {
                    // to pass the id to the service
                    apiService.setMovieId(id) ;
                };
            }


        }
    }

})();
