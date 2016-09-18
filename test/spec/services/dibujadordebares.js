'use strict';

describe('Service: DibujadorDeBares', function () {

  // load the service's module
  beforeEach(module('wifindBarApp'));

  // instantiate service
  var DibujadorDeBares;
  beforeEach(inject(function (_DibujadorDeBares_) {
    DibujadorDeBares = _DibujadorDeBares_;
  }));

  it('should do something', function () {
    expect(!!DibujadorDeBares).toBe(true);
  });

});
