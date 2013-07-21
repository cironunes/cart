'use strict';

angular.module('cartApp')
  .controller('MainCtrl', function ($scope, items) {
    $scope.items = items;
  });
