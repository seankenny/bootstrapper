(function(app) {
  'use strict';

  app.controller('signinController', [
    '$scope', '$rootScope', 'authService', '$location', function($scope, $rootScope, authService, $location) {

      authService.signout();

      $scope.credentials = {
        username: '',
        password: ''
      };

      $scope.signin = function(credentials) {
        authService.signin(credentials).then(function() {
          $location.path('/dashboard');
        });
      };
    }
  ]);
})(angular.module('bootstrapper'));