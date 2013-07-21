'use strict';

describe('Service: MultiItemLoader', function () {

  // load the service's module
  beforeEach(module('cartApp'));

  // instantiate service
  var multiitemloader;
  beforeEach(inject(function (_MultiItemLoader_) {
    multiitemloader = _MultiItemLoader_;
  }));

  it('should do something', function () {
    expect(!!multiitemloader).toBe(true);
  });

});
