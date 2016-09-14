/**
 * Created by Wesam on 9/14/2016.
 */

(function () {

    var imgView = angular.module('app');

    imgView.controller('imgviewPageController' ,imgFunction);

    function imgFunction($scope, $location) {


        $scope.imgUrl = $location.search();

        $scope.url = 'http://image.tmdb.org/t/p/w500'+$scope.imgUrl.url;
    }

})();
