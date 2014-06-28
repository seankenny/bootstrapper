(function(app) {
  'use strict';

  app.directive('yesNoModal', [
    '$modal', function($modal) {
      return {
        restrict: 'A',
        link: function(scope, element, attrs) {
          var msg = attrs.confirmMessage || 'Are you sure?';

          var clickAction = attrs.yes;

          element.bind('click', function() {
            var modalInstance = $modal.open({
              template: '<div class="modal-header"><h3 class="modal-title">Confirmation required</h3></div><div class="modal-body">' + msg + '</div><div class="modal-footer"><button class="btn btn-primary" ng-click="ok()">Yes</button><button class="btn btn-warning" ng-click="cancel()">No</button></div>',
              controller: function($scope) {
                $scope.ok = function() {
                  scope.$eval(clickAction);
                  modalInstance.close();
                };
                $scope.cancel = function() {
                  modalInstance.dismiss('cancel');
                };
              },
              size: 'sm'
            });
          });
        }
      }
    }
  ]);
})(angular.module('bootstrapper'));