'use strict';

angular.module('cartApp')
  .controller('MainCtrl', function ($rootScope, $scope, items, Cart) {
    $scope.items = items;

    function doCalculations() {
      Cart.setItems(items);
      $rootScope.$emit('updateCart');
    }

    $scope.$watch('items', doCalculations, true);
  });
