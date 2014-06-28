(function(app){
'use strict';

  app.factory('errorInterceptorService', [
  '$rootScope', '$q', function ($rootScope, $q) {

    var request = function(config) {
      return config || $q.when(config);
    }

    var responseError = function (rejection) {
      // 401 handled in the auth interceptor
      if (rejection.status !== 401) {
        $rootScope.$broadcast('error', rejection);
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