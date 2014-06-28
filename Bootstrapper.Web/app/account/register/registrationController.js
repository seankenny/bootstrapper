(function(app) {
  'use strict';

  app.controller('registrationController', [
    '$scope', 'authService', '$location', '$timeout', function($scope, authService, $location, $timeout) {

      $scope.registration = {
        emailAddress: '',
        password: '',
        confirmPassword: ''
      };

      $scope.register = function(registration) {
        authService.register(registration).then(function() {
          $scope.$emit('success', 'You have been registered successfully.  Redirecting to sign in page....');
          startTimer();

        });
      };

      var startTimer = function() {
        var timer = $timeout(function() {
          $timeout.cancel(timer);
          $location.path('/account/signin');
        }, 1500);
      };

    }
  ]);
})(angular.module('bootstrapper'));