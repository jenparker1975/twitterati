angular.module('app', [
    'ngRoute'
]);
angular.module('app').controller('PostsCtrl', function ($scope, PostsSvc){
   $scope.addPost = function() {
       if ($scope.postBody){
           PostsSvc.create({
               username: 'dickeyxxx',
               body: $scope.postBody
           }).success(function (post){
               $scope.posts.unshift(post);
               $scope.postBody = null;
           });
       }
   };

    PostsSvc.fetch().success(function(posts){
        $scope.posts = posts;
    });
});

angular.module('app').service('PostsSvc', function ($http){
   this.fetch = function(){
       return $http.get('/api/posts');
   };

    this.create = function (post){
      return $http.post('/api/posts', post);
    };
});

var module = angular.module('app');

module.config(function($routeProvider){
    $routeProvider
        .when('/', { controller: 'PostsCtrl', templateUrl: 'posts.html'})
        .when('/register', { controller: 'RegisterCtrl', templateUrl: 'register.html'})
        .when('/login', { controller: 'LoginCtrl', templateUrl: 'login.html'})
});
