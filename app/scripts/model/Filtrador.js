"use strict";
var Filtrador = (function () {
    // CONSTRUCTOR
    function Filtrador(filtro, guia) {
        this.filtro = filtro;
        this.guiaDeDetalles = guia;
    }
    // MENSAJES QUE RESPONDE
    Filtrador.prototype.filtrar = function (unaColeccionDeBares) {
        var detalles = [];
        for (var _i = 0, unaColeccionDeBares_1 = unaColeccionDeBares; _i < unaColeccionDeBares_1.length; _i++) {
            var bar = unaColeccionDeBares_1[_i];
            detalles.push(this.guiaDeDetalles.dameDetalleDeBar(bar));
        }
        return (this.filtro).filtrar(detalles);
    };
    return Filtrador;
}());
exports.Filtrador = Filtrador;
//# sourceMappingURL=Filtrador.js.map