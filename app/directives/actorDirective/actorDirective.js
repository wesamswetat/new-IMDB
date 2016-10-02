/**
 * Created by Wesam on 9/13/2016.
 */

(function () {

    var actorDirective = angular.module('app');

    actorDirective.directive('actorDirective', actorFunction);

    function actorFunction(apiService, $location) {
        return{
            restrict: 'EA' ,
            scope: {
                actor: '=' // actor have to be  banding
            },
            replace: true , // to replace the html tag in ng-repeat
            templateUrl: 'app/directives/actorDirective/actor-template.html' , // the template of the directive to replace in the DOM
            link: function (scope, elem, attrs) {
                // to make listener to the events
                scope.saveActorId = function (id) {
                    // to pass the id to the service
                    apiService.setActorId(id);
                    $location.url('/actor');
                };
                
            }
        }

    }

})();
