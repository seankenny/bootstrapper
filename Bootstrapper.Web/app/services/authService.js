(function(app) {
  'use strict';

  app.factory('authService', [
    '$http', '$q', 'localStorageService', function($http, $q, localStorageService) {

      var _authentication = {
        isAuth: false,
        username: ''
      };

      var getCurrentUser = function() {
        var authData = localStorageService.get('authorizationData');
        if (authData) {
          _authentication.isAuth = true;
          _authentication.username = authData.username;
        }

        return _authentication;

      }

      var register = function(registration) {

        signout();

        return $http.post('api/account/register', registration).then(function(response) {
          return response;
        });

      };

      var signin = function(loginData) {

        var data = "grant_type=password&username=" + loginData.username + "&password=" + loginData.password;

        var deferred = $q.defer();

        $http.post('token', data, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).success(function(response) {

          localStorageService.set('authorizationData', { token: response.access_token, username: loginData.username });

          _authentication.isAuth = true;
          _authentication.username = loginData.username;

          deferred.resolve(response);

        }).error(function(err, status) {
          signout();
          deferred.reject(err);
        });

        return deferred.promise;

      };

      var signout = function() {

        localStorageService.remove('authorizationData');

        _authentication.isAuth = false;
        _authentication.username = "";

      };

      return {
        signin: signin,
        signout: signout,
        getCurrentUser: getCurrentUser,
        register: register
      };
    }
  ]);
})(angular.module('bootstrapper'));