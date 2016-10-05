"use strict";
var Mapa_1 = require('./Mapa');
var Marcador_1 = require("./Marcador");
var DibujadorDeBares = (function () {
    function DibujadorDeBares() {
    }
    DibujadorDeBares.prototype.dibujarBar = function (bar) {
        var marcador = new Marcador_1.Marcador(bar.ubicacion, "/images/bar2.png", "Bar");
        Mapa_1.Mapa.getInstance().agregarNuevoMarcador(marcador);
    };
    DibujadorDeBares.prototype.borrarBares = function () {
        var tipoMarcador = "Bar";
        Mapa_1.Mapa.getInstance().borrarMarcadores(tipoMarcador);
    };
    return DibujadorDeBares;
}());
exports.DibujadorDeBares = DibujadorDeBares;
//# sourceMappingURL=DibujadorDeBares.js.map