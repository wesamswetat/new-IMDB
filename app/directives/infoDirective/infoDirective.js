/**
 * Created by Wesam on 9/13/2016.
 */

(function () {

    var info = angular.module('app');

    info.directive('infoDirective' ,infoFunction);

    function infoFunction() {
        return{
            restrict: 'EA',
            scope: {
                info : '='// actor have to be  banding
            },
            replace: true,
            templateUrl: 'app/directives/infoDirective/info-template.html',
            link: function () {

            }
        }
    }

})();
