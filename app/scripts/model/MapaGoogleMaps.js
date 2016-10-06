"use strict";
var MapaGoogleMaps = (function () {
    function MapaGoogleMaps() {
    }
    MapaGoogleMaps.getInstance = function () {
        return MapaGoogleMaps._instance;
    };
    MapaGoogleMaps.prototype.agregarMarcadores = function (marcadores) {
        this.marcadores.concat(marcadores);
    };
    ;
    MapaGoogleMaps.prototype.borrarMarcadores = function () {
        this.marcadores = null;
    };
    ;
    MapaGoogleMaps.prototype.setMarcadores = function (marcadores) {
        this.marcadores = marcadores;
    };
    ;
    MapaGoogleMaps.prototype.borrarMarcadoresPorIdentificador = function (identificacionDeMarcador) {
        var i = 0;
        while (i < this.marcadores.length) {
            if (this.marcadores[i].getIdentificador() == identificacionDeMarcador) {
                this.marcadores.splice(i, 1);
            }
            else {
                ++i;
            }
        }
    };
    ;
    MapaGoogleMaps._instance = new MapaGoogleMaps();
    return MapaGoogleMaps;
}());
exports.MapaGoogleMaps = MapaGoogleMaps;
//# sourceMappingURL=MapaGoogleMaps.js.map