'use strict';

angular.module('cartApp')
  .factory('Item', function($resource, apiKey) {
    return $resource('https://api.mongolab.com/api/1/databases/frontinbh/collections/items/:id', {
      apiKey: apiKey
    });
  });
