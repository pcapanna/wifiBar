"use strict";
var Mapa = (function () {
    function Mapa() {
    }
    Mapa.prototype.agregarEvento = function (evento, funcionAsociadaAEvento) {
        this.eventosPorAccion[evento] = funcionAsociadaAEvento;
    };
    Mapa.prototype.agregarNuevoMarcador = function (marcador) {
        this.marcadores.push(marcador);
    };
    ;
    Mapa.prototype.asignarMarcadorDeBusqueda = function (marcador) {
        this.marcadorDeBusqueda = marcador;
    };
    ;
    Mapa.prototype.borrarMarcadores = function (tipoMarcador) {
        var i = 0;
        while (i < this.marcadores.length) {
            if (this.marcadores[i].tipo === tipoMarcador) {
                this.marcadores.splice(i, 1);
            }
            else {
                ++i;
            }
        }
    };
    ;
    Mapa.prototype.centrarEn = function (ubicacion) {
        this.centradoEnUbicacion = ubicacion;
    };
    Mapa.prototype.quitarMarcadorDeBusqueda = function () {
        this.marcadorDeBusqueda = null;
    };
    ;
    return Mapa;
}());
exports.Mapa = Mapa;
//# sourceMappingURL=Mapa.js.map