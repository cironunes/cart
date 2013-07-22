'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('cartApp', 'itemsMock'));

  var MainCtrl,
    scope,
    response,
    apiKey;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, RESPONSE, API_KEY) {
    response = RESPONSE;
    apiKey = API_KEY;
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope,
      items: response
    });
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

      mockBackend.expectGET(apiKey).respond(response);

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
