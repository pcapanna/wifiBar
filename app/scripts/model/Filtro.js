"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Filtro = (function () {
    function Filtro() {
    }
    return Filtro;
}());
exports.Filtro = Filtro;
var FiltroNull = (function (_super) {
    __extends(FiltroNull, _super);
    // CONSTRUCTOR
    function FiltroNull() {
        _super.call(this);
    }
    // MENSAJES QUE RESPONDE
    FiltroNull.prototype.filtrar = function (unaColeccionDeDetalles) {
        var baresFiltrados = [];
        for (var _i = 0, unaColeccionDeDetalles_1 = unaColeccionDeDetalles; _i < unaColeccionDeDetalles_1.length; _i++) {
            var detalle = unaColeccionDeDetalles_1[_i];
            baresFiltrados.push(detalle.getBar());
        }
        return baresFiltrados;
    };
    return FiltroNull;
}(Filtro));
exports.FiltroNull = FiltroNull;
var FiltroDecorator = (function (_super) {
    __extends(FiltroDecorator, _super);
    // CONSTRUCTOR
    function FiltroDecorator(unFiltroComponente, unaEstrategia) {
        _super.call(this);
        this.filtroComponente = unFiltroComponente;
        this.estrategia = unaEstrategia;
    }
    // MENSAJES QUE RESPONDE
    FiltroDecorator.prototype.filtrar = function (unaColeccionDeDetalles) {
        var detallesFiltrados = [];
        for (var _i = 0, unaColeccionDeDetalles_2 = unaColeccionDeDetalles; _i < unaColeccionDeDetalles_2.length; _i++) {
            var detalle = unaColeccionDeDetalles_2[_i];
            if (this.estrategia.acepta(detalle))
                detallesFiltrados.push(detalle);
        }
        return this.filtroComponente.filtrar(detallesFiltrados);
    };
    return FiltroDecorator;
}(Filtro));
exports.FiltroDecorator = FiltroDecorator;
// wifindBarApp.component('Filtro', Filtro);
// wifindBarApp.component('FiltroNull', FiltroNull);
// wifindBarApp.component('FiltroPorCaracteristica', FiltroPorCaracteristica);
//# sourceMappingURL=Filtro.js.map