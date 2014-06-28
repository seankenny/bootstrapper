(function(app) {
  'use strict';

  app.controller('navBarController', [
    '$scope', '$rootScope', 'authService', function($scope, $rootScope, authService) {

      $scope.currentUser = authService.getCurrentUser();

      $scope.signout = function() {
        authService.signout().then(function() {
          $location.path('/dashboard');
        });
      };
    }
  ]);
})(angular.module('bootstrapper'));