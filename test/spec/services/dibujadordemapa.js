'use strict';

describe('Service: DibujadorDeMapa', function () {

  // load the service's module
  beforeEach(module('wifindBarApp'));

  // instantiate service
  var DibujadorDeMapa;
  beforeEach(inject(function (_DibujadorDeMapa_) {
    DibujadorDeMapa = _DibujadorDeMapa_;
  }));

  it('should do something', function () {
    expect(!!DibujadorDeMapa).toBe(true);
  });

});
