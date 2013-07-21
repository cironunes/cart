'use strict';

describe('Service: item', function () {

  // load the service's module
  beforeEach(module('cartApp'));

  // instantiate service
  var item;
  beforeEach(inject(function (_Item_) {
    item = _Item_;
  }));

  it('should do something', function () {
    expect(!!item).toBe(true);
  });

});
