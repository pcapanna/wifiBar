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
    function FiltroNull() {
        _super.apply(this, arguments);
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
var FiltroPorCaracteristica = (function (_super) {
    __extends(FiltroPorCaracteristica, _super);
    // CONSTRUCTOR
    function FiltroPorCaracteristica(unFiltroComponente, unaEstrategia) {
        _super.call(this);
        this.filtroComponente = unFiltroComponente;
        this.estrategia = unaEstrategia;
    }
    // MENSAJES QUE RESPONDE
    FiltroPorCaracteristica.prototype.filtrar = function (unaColeccionDeDetalles) {
        var detallesFiltrados = [];
        for (var _i = 0, unaColeccionDeDetalles_2 = unaColeccionDeDetalles; _i < unaColeccionDeDetalles_2.length; _i++) {
            var detalle = unaColeccionDeDetalles_2[_i];
            if (this.estrategia.compararSegun(detalle))
                detallesFiltrados.push(detalle);
        }
        return this.filtroComponente.filtrar(detallesFiltrados);
    };
    return FiltroPorCaracteristica;
}(Filtro));
var FiltroPorDistancia = (function (_super) {
    __extends(FiltroPorDistancia, _super);
    function FiltroPorDistancia() {
        _super.apply(this, arguments);
    }
    return FiltroPorDistancia;
}(FiltroPorCaracteristica));
var FiltroPorEnchufes = (function (_super) {
    __extends(FiltroPorEnchufes, _super);
    function FiltroPorEnchufes() {
        _super.apply(this, arguments);
    }
    return FiltroPorEnchufes;
}(FiltroPorCaracteristica));
var FiltroPorWifi = (function (_super) {
    __extends(FiltroPorWifi, _super);
    function FiltroPorWifi() {
        _super.apply(this, arguments);
    }
    return FiltroPorWifi;
}(FiltroPorCaracteristica));
//# sourceMappingURL=Filtro.js.map