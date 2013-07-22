'use strict';

describe('Service: cart', function () {

  // load the service's module
  beforeEach(module('cartApp'));

  // instantiate service
  var cart,
    mockItems,
    cartItems;
  beforeEach(inject(function (_Cart_) {
    cart = _Cart_;
    mockItems = [{quantity: 1}, {quantity: 2}];
    cartItems = cart.getItems(mockItems);
  }));

  it('should get items into the cart', function () {
    expect(cartItems.items.length).toBe(2);
  });

  it('shoud get count of items in the cart', function() {
    expect(cartItems.count).toBe(3);
  });

});
