'use strict';

/**
 * @ngdoc service
 * @name wifindBarApp.DistanciaUtils
 * @description
 * # DistanciaUtils
 * Service in the wifindBarApp.
 */
angular.module('wifindBarApp')
  .service('DistanciaUtils', function () {
    if (Number.prototype.toRadians === undefined) {
      Number.prototype.toRadians = function() { return this * Math.PI / 180; };
    }

    /** Extend Number object with method to convert radians to numeric (signed) degrees */
    if (Number.prototype.toDegrees === undefined) {
      Number.prototype.toDegrees = function() { return this * 180 / Math.PI; };
    }

    /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */
    if (typeof module != 'undefined' && module.exports) module.exports = LatLon; // ≡ export default LatLon
    return {
      distancia: function(lat1, lon1, lat2, lon2){
        var R = 6371e3; // metres
        var φ1 = lat1.toRadians();
        var φ2 = lat2.toRadians();
        var Δφ = (lat2-lat1).toRadians();
        var Δλ = (lon2-lon1).toRadians();

        var a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
          Math.cos(φ1) * Math.cos(φ2) *
          Math.sin(Δλ/2) * Math.sin(Δλ/2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

        var d = R * c;
        return d;
      }
    }
  });
