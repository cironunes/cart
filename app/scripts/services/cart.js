'use strict';

angular.module('cartApp')
  .factory('Cart', function() {
    return {
      getItems: function(items) {
        return items.filter(function(val, index) {
          return val.quantity > 0;
        });
      },
      getCount: function(items) {
        var result = 0;
        items.forEach(function(val, index) {
          result += val.quantity;
        });
        return result;
      }
    };
  });
