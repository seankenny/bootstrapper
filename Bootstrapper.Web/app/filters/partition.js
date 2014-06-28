/*
 * this is a filter used to split into x columns wide
 * <div class="row" ng-repeat="rows in users | partition:4">
 */

(function (app) {
  'use strict';

  app.filter('partition', function() {
    var cache = {};
    var filter = function(arr, size) {
      var newArr = [];
      if (!arr) {
        return newArr;
      }

      for (var i = 0; i < arr.length; i += size) {
        newArr.push(arr.slice(i, i + size));
      }

      var arrString = JSON.stringify(arr);
      var fromCache = cache[arrString + size];

      if (JSON.stringify(fromCache) === JSON.stringify(newArr)) {
        return fromCache;
      }

      cache[arrString + size] = newArr;
      return newArr;
    };
    return filter;
  });
})(angular.module('bootstrapper'));