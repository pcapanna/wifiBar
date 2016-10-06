"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var CriterioDeAceptacion = (function () {
    function CriterioDeAceptacion() {
    }
    return CriterioDeAceptacion;
}());
exports.CriterioDeAceptacion = CriterioDeAceptacion;
var CriterioDeAceptacionDistanciaMaxima = (function (_super) {
    __extends(CriterioDeAceptacionDistanciaMaxima, _super);
    // CONSTRUCTOR
    function CriterioDeAceptacionDistanciaMaxima(unaDistancia, unaUbicacionOrigen) {
        _super.call(this);
        this.unaDistancia = unaDistancia;
        this.unaUbicacionOrigen = unaUbicacionOrigen;
    }
    // MENSAJES QUE RESPONDE
    CriterioDeAceptacionDistanciaMaxima.prototype.acepta = function (unDetalleDeBar) {
        var ubicacionBar = unDetalleDeBar.getDireccionBar();
        // TODO: implementame la comparacion
        return true;
    };
    return CriterioDeAceptacionDistanciaMaxima;
}(CriterioDeAceptacion));
exports.CriterioDeAceptacionDistanciaMaxima = CriterioDeAceptacionDistanciaMaxima;
var CriterioDeAceptacionEstrellasPorCaracteristica = (function (_super) {
    __extends(CriterioDeAceptacionEstrellasPorCaracteristica, _super);
    function CriterioDeAceptacionEstrellasPorCaracteristica() {
        _super.apply(this, arguments);
    }
    return CriterioDeAceptacionEstrellasPorCaracteristica;
}(CriterioDeAceptacion));
exports.CriterioDeAceptacionEstrellasPorCaracteristica = CriterioDeAceptacionEstrellasPorCaracteristica;
var CriterioDeAceptacionEstrellasPorEnchufes = (function (_super) {
    __extends(CriterioDeAceptacionEstrellasPorEnchufes, _super);
    // CONSTRUCTOR
    function CriterioDeAceptacionEstrellasPorEnchufes(calificacionDesde, calificacionHasta) {
        _super.call(this);
        this.calificacionDesde = calificacionDesde;
        this.calificacionHasta = calificacionHasta;
    }
    // MENSAJES QUE RESPONDE
    CriterioDeAceptacionEstrellasPorEnchufes.prototype.acepta = function (unDetalleDeBar) {
        var califEnchufes = unDetalleDeBar.getCalificacionEnchufes();
        return (califEnchufes <= this.calificacionHasta && califEnchufes >= this.calificacionDesde);
    };
    return CriterioDeAceptacionEstrellasPorEnchufes;
}(CriterioDeAceptacionEstrellasPorCaracteristica));
exports.CriterioDeAceptacionEstrellasPorEnchufes = CriterioDeAceptacionEstrellasPorEnchufes;
var CriterioDeAceptacionEstrellasPorWifi = (function (_super) {
    __extends(CriterioDeAceptacionEstrellasPorWifi, _super);
    // CONSTRUCTOR
    function CriterioDeAceptacionEstrellasPorWifi(calificacionDesde, calificacionHasta) {
        _super.call(this);
        this.calificacionDesde = calificacionDesde;
        this.calificacionHasta = calificacionHasta;
    }
    // MENSAJES QUE RESPONDE
    CriterioDeAceptacionEstrellasPorWifi.prototype.acepta = function (unDetalleDeBar) {
        var califWifi = unDetalleDeBar.getCalificacionWifi();
        return (califWifi <= this.calificacionHasta && califWifi >= this.calificacionDesde);
    };
    return CriterioDeAceptacionEstrellasPorWifi;
}(CriterioDeAceptacionEstrellasPorCaracteristica));
exports.CriterioDeAceptacionEstrellasPorWifi = CriterioDeAceptacionEstrellasPorWifi;
//# sourceMappingURL=CriterioDeAceptacion.js.map