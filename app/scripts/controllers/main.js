'use strict';

angular.module('cartApp')
  .controller('MainCtrl', function ($rootScope, $scope, items) {
    $scope.items = items;

    function doCalculations() {
      $rootScope.$emit('updateCart', $scope.items);
    };

    $scope.$watch('items', doCalculations, true);
  });
