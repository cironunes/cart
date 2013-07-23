'use strict';

angular.module('cartApp')
  .factory('Cart', function() {
    var cart = {
      items: [],
      count: 0,
      total: 0
    };
    return {
      setItems: function(items) {
        var count = 0, total = 0;
        var cartItems = {};

        cartItems.items = items.filter(function(val) {
          return val.quantity > 0;
        });

        items.forEach(function(val) {
          count += val.quantity;
          total += val.quantity * val.price;
        });
        cartItems.count = count;
        cartItems.total = total;

        cart = cartItems;

        return cartItems;
      },
      getItems: function() {
        return cart;
      }
    };
  });
