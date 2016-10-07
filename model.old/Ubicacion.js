var wifindBarApp;
(function (wifindBarApp) {
    var Ubicacion = (function () {
        function Ubicacion(latitud, longitud) {
            this.latitud = latitud;
            this.longitud = longitud;
        }
        Ubicacion.prototype.getLatitud = function () {
            return this.latitud;
        };
        Ubicacion.prototype.getLongittud = function () {
            return this.longitud;
        };
        return Ubicacion;
    }());
    wifindBarApp.Ubicacion = Ubicacion;
})(wifindBarApp || (wifindBarApp = {}));
//# sourceMappingURL=Ubicacion.js.map