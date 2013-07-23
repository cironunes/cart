'use strict';

angular.module('cartApp')
  .factory('Item', function($resource, apiKey) {
    var ItemFactory = $resource('https://api.mongolab.com/api/1/databases/frontinbh/collections/items/:id', {
      apiKey: apiKey
    }, {
      update: {
        method: 'PUT'
      }
    });

    ItemFactory.prototype.$update = function() {
      return ItemFactory.update({id: this._id.$oid}, angular.extend({}, this, {_id: undefined}));
    };

    ItemFactory.prototype.quantity = 0;

    return ItemFactory;
  });
