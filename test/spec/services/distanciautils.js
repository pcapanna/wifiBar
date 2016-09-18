'use strict';

describe('Service: distanciaUtils', function () {

  // load the service's module
  beforeEach(module('wifindBarApp'));

  // instantiate service
  var distanciaUtils;
  beforeEach(inject(function (_distanciaUtils_) {
    distanciaUtils = _distanciaUtils_;
  }));

  it('should do something', function () {
    expect(!!distanciaUtils).toBe(true);
  });

});
