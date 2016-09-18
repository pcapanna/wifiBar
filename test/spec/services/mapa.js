'use strict';

describe('Service: Mapa', function () {

  // load the service's module
  beforeEach(module('wifindBarApp'));

  // instantiate service
  var Mapa;
  beforeEach(inject(function (_Mapa_) {
    Mapa = _Mapa_;
  }));

  it('should do something', function () {
    expect(!!Mapa).toBe(true);
  });

});
