(function(app) {
  'use strict';

  app.controller('leftNavBarController', [
    '$scope', '$location', function($scope, $location) {

      $scope.isActive = function(viewLocation) {
        return $location.path().indexOf(viewLocation) == 0;
      };

    }
  ]);
})(angular.module('bootstrapper'));