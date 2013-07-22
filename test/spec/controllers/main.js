'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('cartApp', 'itemsMock'));

  var MainCtrl,
    rootScope,
    scope,
    httpBackend,
    itemFactory,
    response,
    apiURL;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $httpBackend, Item, RESPONSE, API_URL) {
    response = RESPONSE;
    apiURL = API_URL;

    rootScope = $rootScope;
    scope = $rootScope.$new();

    $httpBackend.expectGET(apiURL).respond(response);
    httpBackend = $httpBackend;

    itemFactory = Item;

    MainCtrl = $controller('MainCtrl', {
      $scope: scope,
      items: Item.query()
    });

    $httpBackend.flush();
  }));

  it('should have items', function () {
    expect(scope.items.length).toBe(2);
  });

  describe('add', function() {
    it('should add items to the cart', function() {
      var item = scope.items[0];
      spyOn(itemFactory, 'update');

      expect(item.quantity).toBe(0);

      scope.addToCart(item);
      expect(item.quantity).toBe(1);
      expect(itemFactory.update).toHaveBeenCalled();
    });
  });
});
