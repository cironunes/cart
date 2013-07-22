'use strict';

describe('Service: cart', function () {

  // load the service's module
  beforeEach(module('cartApp'));

  // instantiate service
  var cart;
  beforeEach(inject(function (_Cart_) {
    cart = _Cart_;
  }));

  it('should get items into the cart', function () {
    var items,
      mockItems = [{quantity: 0}, {quantity: 1}];

    items = cart.getItems(mockItems);
    expect(items.length).toBe(1);
  });

});
