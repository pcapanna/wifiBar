"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var EstrategiaDeComparacion = (function () {
    function EstrategiaDeComparacion() {
    }
    return EstrategiaDeComparacion;
}());
exports.EstrategiaDeComparacion = EstrategiaDeComparacion;
var EstrategiaDistanciaMaximaEnMetros = (function (_super) {
    __extends(EstrategiaDistanciaMaximaEnMetros, _super);
    // CONSTRUCTOR
    function EstrategiaDistanciaMaximaEnMetros(unaDistancia, unaUbicacionOrigen) {
        _super.call(this);
        this.unaDistancia = unaDistancia;
        this.unaUbicacionOrigen = unaUbicacionOrigen;
    }
    // MENSAJES QUE RESPONDE
    EstrategiaDistanciaMaximaEnMetros.prototype.compararSegun = function (unDetalleDeBar) {
        var ubicacionBar = unDetalleDeBar.getDireccionBar();
        // TODO: implementame la comparacion
        return true;
    };
    return EstrategiaDistanciaMaximaEnMetros;
}(EstrategiaDeComparacion));
exports.EstrategiaDistanciaMaximaEnMetros = EstrategiaDistanciaMaximaEnMetros;
var EstrategiaCalificacionesEstrellasPorCaracteristica = (function (_super) {
    __extends(EstrategiaCalificacionesEstrellasPorCaracteristica, _super);
    function EstrategiaCalificacionesEstrellasPorCaracteristica() {
        _super.apply(this, arguments);
    }
    return EstrategiaCalificacionesEstrellasPorCaracteristica;
}(EstrategiaDeComparacion));
exports.EstrategiaCalificacionesEstrellasPorCaracteristica = EstrategiaCalificacionesEstrellasPorCaracteristica;
var EstrategiaCalficiacionesEstrellasEnchufes = (function (_super) {
    __extends(EstrategiaCalficiacionesEstrellasEnchufes, _super);
    // CONSTRUCTOR
    function EstrategiaCalficiacionesEstrellasEnchufes(calificacionDesde, calificacionHasta) {
        _super.call(this);
        this.calificacionDesde = calificacionDesde;
        this.calificacionHasta = calificacionHasta;
    }
    // MENSAJES QUE RESPONDE
    EstrategiaCalficiacionesEstrellasEnchufes.prototype.compararSegun = function (unDetalleDeBar) {
        var califEnchufes = unDetalleDeBar.getCalificacionEnchufes();
        return (califEnchufes <= this.calificacionHasta && califEnchufes >= this.calificacionDesde);
    };
    return EstrategiaCalficiacionesEstrellasEnchufes;
}(EstrategiaCalificacionesEstrellasPorCaracteristica));
exports.EstrategiaCalficiacionesEstrellasEnchufes = EstrategiaCalficiacionesEstrellasEnchufes;
var EstrategiaCalficiacionesEstrellasWifi = (function (_super) {
    __extends(EstrategiaCalficiacionesEstrellasWifi, _super);
    // CONSTRUCTOR
    function EstrategiaCalficiacionesEstrellasWifi(calificacionDesde, calificacionHasta) {
        _super.call(this);
        this.calificacionDesde = calificacionDesde;
        this.calificacionHasta = calificacionHasta;
    }
    // MENSAJES QUE RESPONDE
    EstrategiaCalficiacionesEstrellasWifi.prototype.compararSegun = function (unDetalleDeBar) {
        var califWifi = unDetalleDeBar.getCalificacionWifi();
        return (califWifi <= this.calificacionHasta && califWifi >= this.calificacionDesde);
    };
    return EstrategiaCalficiacionesEstrellasWifi;
}(EstrategiaCalificacionesEstrellasPorCaracteristica));
exports.EstrategiaCalficiacionesEstrellasWifi = EstrategiaCalficiacionesEstrellasWifi;
//# sourceMappingURL=EstrategiaDeComparacion.js.map