'use strict';

angular.module('cartApp')
  .factory('multiItemLoader', function($q, Item) {
    return function() {
      var deferred = $q.defer();
      Item.query(function(items) {
        return deferred.resolve(items);
      });
      return deferred.promise;
    };
  });
