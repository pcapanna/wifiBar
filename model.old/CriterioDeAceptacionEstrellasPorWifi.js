var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var wifindBarApp;
(function (wifindBarApp) {
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
    }(wifindBarApp.CriterioDeAceptacionEstrellasPorCaracteristica));
    wifindBarApp.CriterioDeAceptacionEstrellasPorWifi = CriterioDeAceptacionEstrellasPorWifi;
})(wifindBarApp || (wifindBarApp = {}));
//# sourceMappingURL=CriterioDeAceptacionEstrellasPorWifi.js.map