angular.module("TwitterAngular.home", [])
.controller("homeCtrl", function($scope, tweetsfactory){
  $scope.data;
  $scope.submit = function(user){
     tweetsfactory.getUser(user)
     .then(function(dataFromServer){
       console.log("users is ---->", dataFromServer);
       $scope.data = dataFromServer.data;
     });
    //console.log("scope.prop---->", $scope.proponscope);
  };
});
