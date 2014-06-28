(function(app) {
  'use strict';

  app.factory('applicationDataService', [
    '$http', function($http) {

      var applicationData = function(page) {
        return getData('api/applications/' + page);
      };

      var applicationDetailData = function(apiKey) {
        return getData('api/applications/details/' + apiKey);
      };

      var newApplication = function(application) {
        return $http.post('api/applications', application).success(function(data) {
          return data;
        });
      };

      var editApplication = function(application) {
        return $http.put('api/applications', application).success(function(data) {
          return data;
        });
      };

      var deleteApplication = function(application) {
        return $http.delete('api/applications/' + application.apiKey).success(function(data) {
          return data;
        });
      };

      var addUserToApplication = function(userId, apiKey) {
        return $http.post('api/users', { userId: userId, apiKey: apiKey }).success(function(data) {
          return data;
        });
      };

      var removeUserFromApplication = function(userId, apiKey) {
        return $http.delete('api/users/' + userId + '/' + apiKey).success(function(data) {
          return data;
        });
      };

      function getData(uri) {
        return $http.get(uri).success(function(data) {
          return data;
        });
      };

      return {
        applicationData: applicationData,
        applicationDetailData: applicationDetailData,
        newApplication: newApplication,
        editApplication: editApplication,
        deleteApplication: deleteApplication,
        addUserToApplication: addUserToApplication,
        removeUserFromApplication: removeUserFromApplication,
      };
    }
  ]);
})(angular.module('bootstrapper'));