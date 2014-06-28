(function(app) {
  'use strict';

  app.factory('authInterceptorService', [
    '$rootScope', '$q', '$location', 'localStorageService', function($rootScope, $q, $location, localStorageService) {

      var request = function(config) {

        config.headers = config.headers || {};

        var authData = localStorageService.get('authorizationData');
        if (authData) {
          config.headers.Authorization = 'Bearer ' + authData.token;
        }

        return config;
      }

      var responseError = function(rejection) {
        if (rejection.status === 401) {
          $location.path('account/signin');
        }
        return $q.reject(rejection);
      }

      return {
        request: request,
        responseError: responseError
      };
    }
  ]);
})(angular.module('bootstrapper'));