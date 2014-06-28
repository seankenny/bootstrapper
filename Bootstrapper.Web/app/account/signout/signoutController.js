(function(app) {
  'use strict';

  app.controller('signoutController', [
    '$scope', '$rootScope', 'authService', '$location', function($scope, $rootScope, authService, $location) {

      authService.signout();
      $location.path('/');
    }
  ]);
})(angular.module('bootstrapper'));