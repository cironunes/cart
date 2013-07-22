'use strict';

angular.module('cartApp')
  .controller('MainCtrl', function ($scope, items) {
    $scope.items = items;

    $scope.addToCart = function(item) {
      item.quantity += 1;
      item.$update();
    };
  });
