(function(app) {
  'use strict';

  app.factory('dataService', [
    '$http', function($http) {

      var getAllUsers = function() {
        return getData('api/users/');
      };

      function getData(uri) {
        return $http.get(uri).success(function(data) {
          return data;
        });
      };

      return {
        users: getAllUsers
      };
    }
  ]);

})(angular.module('bootstrapper'));