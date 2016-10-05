"use strict";
var Ubicacion = (function () {
    function Ubicacion(latitud, longitud) {
        this.latitud = latitud;
        this.longitud = longitud;
    }
    Ubicacion.prototype.getLatitud = function () {
        return this.latitud;
    };
    Ubicacion.prototype.getLongittud = function () {
        return this.longitud;
    };
    return Ubicacion;
}());
exports.Ubicacion = Ubicacion;
//# sourceMappingURL=Ubicacion.js.map