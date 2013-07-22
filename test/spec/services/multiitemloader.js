'use strict';

describe('Service: MultiItemLoader', function () {

  // load the service's module
  beforeEach(module('cartApp', 'itemsMock'));

  // instantiate service
  var multiitemloader,
    mockBackend,
    apiURL,
    response;
  beforeEach(inject(function (_$httpBackend_, _MultiItemLoader_, API_URL, RESPONSE) {
    mockBackend = _$httpBackend_;
    multiitemloader = _MultiItemLoader_;
    apiURL = API_URL;
    response = RESPONSE;
  }));

  it('should do something', function () {
    expect(!!multiitemloader).toBe(true);
  });

  it('should load a list of items', function() {
    var items, promise;

    mockBackend.expectGET(apiURL).respond(response);

    expect(items).toBeUndefined();

    promise = multiitemloader();
    promise.then(function(rec) {
      items = rec;
    });

    mockBackend.flush();

    expect(items.length).toBe(2);
  });


});
