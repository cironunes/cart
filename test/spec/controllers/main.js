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
});
