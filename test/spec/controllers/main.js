'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('cartApp', 'itemsMock'));

  var MainCtrl,
    rootScope,
    scope,
    cartFactory;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $httpBackend, Item, Cart, RESPONSE, API_URL) {
    rootScope = $rootScope;
    scope = $rootScope.$new();
    $httpBackend.expectGET(API_URL).respond(RESPONSE);
    MainCtrl = $controller('MainCtrl', {
      $scope: scope,
      items: Item.query()
    });
    $httpBackend.flush();
    cartFactory = Cart;
    spyOn(rootScope, '$emit');
    spyOn(cartFactory, 'setItems');
  }));

  it('should have items', function () {
    expect(scope.items.length).toBe(2);
  });

  it('should update the cart', function() {
    scope.items[0].quantity = 1;
    scope.$apply();
    expect(rootScope.$emit).toHaveBeenCalledWith('updateCart');
    expect(cartFactory.setItems).toHaveBeenCalled();
  });
});
