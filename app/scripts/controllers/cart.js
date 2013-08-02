'use strict';

angular.module('cartApp')
  .controller('CartCtrl', function ($rootScope, $scope, Cart) {
    $scope.cart = {
      items: [],
      count: 0,
      total: 0
    };
    $rootScope.$on('updateCart', function() {
      $scope.cart = Cart.getItems();
    });

    $scope.addToCart = function(item) {
      item.quantity += 1;
      item.$update();
    };

    $scope.removeFromCart = function(item) {
      item.quantity -= 1;
      item.$update();
    };

    $scope.checkout = function(items) {
      items.forEach(function(val) {
        val.quantity = 0;
        val.$update();
      });
    };
  });
