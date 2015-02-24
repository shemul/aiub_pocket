// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js

angular.module('aiubapp', ['ionic'])

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
  .state('tabs', {
    url: "/tab",
    abstract: true,
    templateUrl: "tabs.html"
  })
  .state('tabs.home', {
    url: "/home",
    views: {
      'home-tab': {
        templateUrl: "home.html",
        controller: 'HomeTabCtrl'
      }
    }
  })
  .state('tabs.howto', {
    url: "/howto",
    views: {
      'howto-tab': {
        templateUrl: "howto.html"
      }
    }
  })
  .state('tabs.about', {
    url: "/about",
    views: {
      'about-tab': {
        templateUrl: "about.html"
      }
    }
  });


  $urlRouterProvider.otherwise("/tab/home");

})

.controller('HomeTabCtrl', function($scope, $timeout) {

  $scope.refreshTasks = function() {

    loadNotice();

    $timeout(function() {
      $scope.$broadcast('scroll.refreshComplete');
      $scope.$broadcast('scroll.refreshComplete');
    }, 1250);
  };


});