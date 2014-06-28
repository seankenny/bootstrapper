(function() {
  'use strict';

  var app = angular.module('bootstrapper', [
    'ui.bootstrap',
    'ngRoute',
    'ngAnimate'
  ]);

  app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
      $locationProvider.html5Mode(true);

      $routeProvider
        .when('/', {
          caseInsensitiveMatch: true,
          templateUrl: 'app/splash/splash.html'
        })
        .when('/account/signin', {
          caseInsensitiveMatch: true,
          controller: 'signinController',
          templateUrl: 'app/account/signin/signin.html'
        })
        .when('/account/signout', {
          caseInsensitiveMatch: true,
          template: "<p> </p>",
          controller: 'signoutController'
        })
        .when('/account/register', {
          controller: 'registrationController',
          templateUrl: 'app/account/register/register.html'
        })
        .when('/dashboard', {
          caseInsensitiveMatch: true,
          controller: 'dashBoardController',
          templateUrl: 'app/dashBoard/index.html',
          requireAuth: true
        })
        .when('/users', {
          caseInsensitiveMatch: true,
          controller: 'UsersController',
          templateUrl: 'app/users/index.html',
          requireAuth: true
        })
        .otherwise({ redirectTo: '/' });
    }
  ]);
  
  app.config(['$httpProvider', function($httpProvider) {
      $httpProvider.interceptors.push('authInterceptorService');
      $httpProvider.interceptors.push('errorInterceptorService');
    }
  ]);

  app.run([
    '$rootScope', '$location', 'authService', function ($rootScope, $location, authService) {
      $rootScope.$on('$routeChangeStart', function(event, nextState) {
        if (nextState.requireAuth && (!authService.getCurrentUser().isAuth)) {
          event.preventDefault();
          $location.path('/account/signin');
        }
      });
    }
  ]);

}());