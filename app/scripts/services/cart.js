'use strict';

angular.module('cartApp')
  .factory('Cart', function() {
    return {
      getItems: function(items) {
        var count = 0;
        var cartItems = {};

        cartItems.items = items.filter(function(val, index) {
          return val.quantity > 0;
        });

        items.forEach(function(val, index) {
          count += val.quantity;
        });
        cartItems.count = count;

        return cartItems;
      }
    };
  });
