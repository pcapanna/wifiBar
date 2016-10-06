"use strict";
var MarcadorGoogleMaps_1 = require("./MarcadorGoogleMaps");
var MapaGoogleMaps_1 = require("./MapaGoogleMaps");
var DibujadorEnMapa = (function () {
    // CONSTRUCTOR
    function DibujadorEnMapa(unMapa) {
        this.mapa = unMapa;
    }
    DibujadorEnMapa.getInstance = function () {
        return this._instance;
    };
    // MENSAJES QUE RESPONDE
    DibujadorEnMapa.prototype.dibujarBaresEnMapa = function (unaColeccionDeBares, vm) {
        var _this = this;
        var marcadores = this.generarMarcadoresDeBares(unaColeccionDeBares);
        // this.mapa.borrarMarcadoresPorIdentificador("bar");
        this.mapa.borrarMarcadores();
        setTimeout(function () {
            _this.mapa.setMarcadores(marcadores);
            vm.marcadores = _this.mapa.marcadores;
            // this.mapa.agregarMarcadores(marcadores);
            vm.$scope.apply();
        }, 0);
    };
    DibujadorEnMapa.prototype.generarMarcadoresDeBares = function (bares) {
        var marcadores = [];
        var i = 1;
        for (var _i = 0, bares_1 = bares; _i < bares_1.length; _i++) {
            var bar = bares_1[_i];
            var marcador = new MarcadorGoogleMaps_1.MarcadorGoogleMaps(i.toString(), bar.getDireccion(), '/images/bar2.png', "bar");
            marcadores.push(marcador);
            i++;
        }
        return marcadores;
    };
    DibujadorEnMapa._instance = new DibujadorEnMapa(MapaGoogleMaps_1.MapaGoogleMaps.getInstance());
    return DibujadorEnMapa;
}());
exports.DibujadorEnMapa = DibujadorEnMapa;
//# sourceMappingURL=DibujadorEnMapa.js.map