'use strict';

describe('Service: item', function () {

  // load the service's module
  beforeEach(module('cartApp'));

  // instantiate service
  var item,
    httpBackend;
  beforeEach(inject(function (_$httpBackend_, _Item_) {
    httpBackend = _$httpBackend_;
    item = _Item_;
  }));

  it('should do something', function () {
    expect(!!item).toBe(true);
  });

  describe('update', function() {
    it('should update', function() {
      httpBackend.expectPUT().respond();
      item.update();
    });
  });

});
