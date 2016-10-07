var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var wifindBarApp;
(function (wifindBarApp) {
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
    }(wifindBarApp.CriterioDeAceptacionEstrellasPorCaracteristica));
    wifindBarApp.CriterioDeAceptacionEstrellasPorEnchufes = CriterioDeAceptacionEstrellasPorEnchufes;
})(wifindBarApp || (wifindBarApp = {}));
//# sourceMappingURL=CriterioDeAceptacionEstrellasPorEnchufes.js.map