(function(app) {
  'use strict';

  app.directive('loading', [
    '$http', function($http) {
      return {
        restrict: 'A',
        template: '<div class="loading-spiner row text-center"><img src="content/loading.gif" alt="Loading ...."/></div>',
        replace: true,
        link: function(scope, elm) {
          scope.isLoading = function() {
            return $http.pendingRequests.length > 0;
          };

          scope.$watch(scope.isLoading, function(v) {
            if (v) {
              elm.show();
            } else {
              elm.hide();
            }
          });
        }
      };
    }
  ]);
})(angular.module('bootstrapper'));