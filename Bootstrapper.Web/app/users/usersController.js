(function(app) {
  'use strict';

  app.controller('UsersController', [
    '$scope', 'dataService', function($scope, dataService) {
      dataService.users()
        .success(function(data) {
          $scope.users = data;
        });
    }
  ]);

})(angular.module('bootstrapper'));