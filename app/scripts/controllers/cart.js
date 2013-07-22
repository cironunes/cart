'use strict';

angular.module('cartApp')
  .controller('CartCtrl', function ($rootScope, $scope, Cart) {
    $scope.addToCart = function(item) {
      item.quantity += 1;
      item.$update();
    };

    $scope.removeFromCart = function(item) {
      item.quantity -= 1;
      item.$update();
    };
  });
