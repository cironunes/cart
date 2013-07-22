'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('cartApp', 'itemsMock'));

  var MainCtrl,
    scope,
    response,
    apiURL;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $httpBackend, Item, RESPONSE, API_URL) {
    response = RESPONSE;
    apiURL = API_URL;

    scope = $rootScope.$new();

    $httpBackend.expectGET(apiURL).respond(response);

    MainCtrl = $controller('MainCtrl', {
      $scope: scope,
      items: Item.query()
    });

    $httpBackend.flush();
  }));

  it('should have items', function () {
    expect(scope.items.length).toBe(2);
  });

  describe('MultiItemLoader', function() {
    var mockBackend,
      loader;
    beforeEach(inject(function(_$httpBackend_, MultiItemLoader) {
      loader = MultiItemLoader;
      mockBackend = _$httpBackend_;
    }));

    it('should load a list of items', function() {
      var items, promise;

      mockBackend.expectGET(apiURL).respond(response);

      expect(items).toBeUndefined();

      promise = loader();
      promise.then(function(rec) {
        items = rec;
      });

      mockBackend.flush();

      expect(items.length).toBe(2);
    });
  });
});
