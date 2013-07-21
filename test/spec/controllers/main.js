'use strict';

describe('Controller: MainCtrl', function () {

  var API_KEY = 'https://api.mongolab.com/api/1/databases/frontinbh/collections/items?apiKey=511441a4e4b0bddcedd12959';
  var RESPONSE = [
    {
      "name": "Mazda",
      "price": 200000,
      "image": "/images/mazda.png",
      "quantity": 0
    },
    {
      "name": "Truck",
      "price": 100000,
      "image": "/images/truck.png",
      "quantity": 0
    }
  ];

  // load the controller's module
  beforeEach(module('cartApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope,
      items: RESPONSE
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

      mockBackend.expectGET(API_KEY).respond(RESPONSE);

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
