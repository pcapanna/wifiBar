"use strict";
var GuiaDetalleDeBares = (function () {
    // CONSTRUCTOR
    function GuiaDetalleDeBares(detalles) {
        this.detalles = detalles;
    }
    // MENSAJES QUE RESPONDE
    GuiaDetalleDeBares.prototype.addDetalle = function (detalle) {
        (this.detalles).push(detalle);
    };
    GuiaDetalleDeBares.prototype.dameDetalleDeBar = function (unBar) {
        for (var _i = 0, _a = this.detalles; _i < _a.length; _i++) {
            var detalle = _a[_i];
            if (detalle.getBar() == unBar)
                return detalle;
        }
    };
    return GuiaDetalleDeBares;
}());
exports.GuiaDetalleDeBares = GuiaDetalleDeBares;
//# sourceMappingURL=GuiaDetalleDeBares.js.map