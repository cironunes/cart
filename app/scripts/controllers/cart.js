'use strict';

angular.module('cartApp')
  .controller('CartCtrl', function ($rootScope, $scope, Cart) {
    $scope.cart = {};
    $rootScope.$on('updateCart', function($el, items) {
      $scope.cart = Cart.getItems(items);
    });

    $scope.addToCart = function(item) {
      item.quantity += 1;
      item.$update();
    };

    $scope.removeFromCart = function(item) {
      item.quantity -= 1;
      item.$update();
    };
  });
