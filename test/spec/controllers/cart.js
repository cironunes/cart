'use strict';

describe('Controller: CartCtrl', function () {

  // load the controller's module
  beforeEach(module('cartApp', 'itemsMock'));

  var CartCtrl,
    scope,
    itemFactory;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, Item) {
    scope = $rootScope.$new();
    CartCtrl = $controller('CartCtrl', {
      $scope: scope
    });
    itemFactory = Item;
  }));

  describe('add/remove/checkout', function() {
    var item;
    beforeEach(function() {
      item = new itemFactory({_id: {"$oid": ''}});
      spyOn(itemFactory, 'update');
    });

    it('should add items to the cart', function() {
      expect(item.quantity).toBe(0);

      scope.addToCart(item);
      expect(item.quantity).toBe(1);
      expect(itemFactory.update).toHaveBeenCalled();
    });

    it('should remove items from the cart', function() {
        scope.addToCart(item);
        expect(item.quantity).toBe(1);

        scope.removeFromCart(item);
        expect(item.quantity).toBe(0);
    });

    it('should checkout', function() {
      var items;
      scope.addToCart(item);
      scope.addToCart(item);
      expect(item.quantity).toBe(2);
      items = [item, item];

      scope.checkout(items);
      expect(items[0].quantity).toBe(0);
      expect(items[1].quantity).toBe(0);
    });
  });

});
