/**
 * Created by Wesam on 9/12/2016.
 */

(function () {

    var actorPage = angular.module('app');

    actorPage.controller('actorPageController', actorController);

    const // JavaScript ES6 const
        api = '?api_key=331b2ad9d3e0120dfd8c9bc6c14da645',
        url = 'http://api.themoviedb.org/3/';

    function actorController($scope, $http, $q, $location, apiService) {

       if (apiService.getActorId() != 0){
           var
               personInfo = $http({method: 'GET', url:  url + 'person/'+ apiService.getActorId() + api  }),
               personMovies = $http({method: 'GET', url:  url + 'person/'+ apiService.getActorId()+'/movie_credits' + api  }),
               personTv = $http({method: 'GET', url:  url + 'person/'+ apiService.getActorId()+'/tv_credits' + api  }),
               personImgs = $http({method: 'GET', url:  url + 'person/'+ apiService.getActorId()+ '/images' + api  });

           $q.all([personInfo, personMovies, personTv, personImgs])
               .then(function successCallback(arrayOfResponse) {
                   $scope.info = arrayOfResponse[0].data;
                   $scope.movies = arrayOfResponse[1].data.cast;
                   $scope.tv = arrayOfResponse[2].data.cast;
                   $scope.imgs = arrayOfResponse[3].data.profiles;
               })
       }
        
       $scope.imgClick = function (url) {

           $location.url('/imgview?url='+url +'&name='+$scope.info.name);
       }

    }

})();
