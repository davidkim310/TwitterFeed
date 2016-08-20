angular.module('TwitterAngular', [
  "ui.router",
  //module
  "TwitterAngular.home",
  "TwitterAngular.page2"
  ])
  //injections
.config(function($stateProvider, $urlRouterProvider) {

  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/home");
  //
  // Now set up the states
  $stateProvider
    .state('home', {
      url: "/home",
      templateUrl: "home/home.html",
      controller: "homeCtrl"
    })
    .state('2ndpage', {
      url: "/page2",
      templateUrl: "page2/page2.html",
      controller: "page2Ctrl"
    });
})
//$http so we can use ajax call
.factory("tweetsfactory", function($http){
  var getUser = function(user){
    return $http.get('api/users?user=' + user)
    //what we get back from server
    .then(function(tweets){
      return tweets;
    })
  }
  //all the keys attached to the object
  return {
    getUser:getUser
  }
})
