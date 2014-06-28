(function(app) {
  'use strict';

  app.service('localStorageService', [
    function() {
      var prefix = 'bootstrapper:';

      var get = function(key) {

        var item = localStorage.getItem(prefix + key);
        // angular.toJson will convert null to 'null', so a proper conversion is needed
        // FIXME not a perfect solution, since a valid 'null' string can't be stored
        if (!item || item === 'null') return null;

        if (item.charAt(0) === "{" || item.charAt(0) === "[") {
          return angular.fromJson(item);
        }
        return item;
      };

      var remove = function(key) {
        localStorage.removeItem(prefix + key);
      };

      var clear = function() {

        var prefixLength = prefix.length;

        for (var key in localStorage) {
          // Only remove items that are for this app
          if (key.substr(0, prefixLength) === prefix) {
            remove(key.substr(prefixLength));
          }
        }
        return true;
      };

      var add = function(key, value) {
        if (typeof value == "undefined") {
          value = null;
        }

        if (angular.isObject(value) || angular.isArray(value)) {
          value = angular.toJson(value);
        }
        localStorage.setItem(prefix + key, value);

      };

      return {
        get: get,
        set: add,
        remove: remove,
        clear: clear
      };
    }
  ]);
})(angular.module('bootstrapper'));