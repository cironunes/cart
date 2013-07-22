'use strict';

angular.module('cartApp')
  .factory('Cart', function() {
    return {
      getItems: function(items) {
        return items.filter(function(val, index) {
          return val.quantity > 0;
        });
      }
    };
  });
