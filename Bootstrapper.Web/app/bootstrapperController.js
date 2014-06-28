(function(app) {
  'use strict';

  app.controller('BootstrapperController', [
    '$scope', 'authService', '$timeout', function($scope, authService, $timeout) {
      $scope.currentUser = authService.getCurrentUser();

      $scope.$on('error', function(a, response) {
        $scope.alerts = $scope.alerts || [];
        _.forEach(response.data, function(message) {
          var alert = { msg: message, type: 'danger' };
          $scope.alerts.push(alert);
          $timeout(function() {
            $scope.closeAlert($scope.alerts.indexOf(alert));
          }, 3000);
        });
      });

      $scope.$on('success', function(a, message) {
        $scope.alerts = $scope.alerts || [];

        var alert = { msg: message, type: 'success' };
        $scope.alerts.push(alert);
        $timeout(function() {
          $scope.closeAlert($scope.alerts.indexOf(alert));
        }, 3000);
      });

      $scope.closeAlert = function(index) {
        $scope.alerts.splice(index, 1);
      };

      $scope.isActive = function(viewLocation) {
        return viewLocation === $location.path();
      };

    }
  ]);
}(angular.module('bootstrapper')));