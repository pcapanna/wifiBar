var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var wifindBarApp;
(function (wifindBarApp) {
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
    }(wifindBarApp.CriterioDeAceptacion));
    wifindBarApp.CriterioDeAceptacionDistanciaMaxima = CriterioDeAceptacionDistanciaMaxima;
})(wifindBarApp || (wifindBarApp = {}));
//# sourceMappingURL=CriterioDeAceptacionDistanciaMaxima.js.map