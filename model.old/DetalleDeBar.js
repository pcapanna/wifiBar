var wifindBarApp;
(function (wifindBarApp) {
    var DetalleDeBar = (function () {
        // QUE PASA SI NO TIENE CALIFICACIONES EN ALGUNO DE ESTOS?
        // TODO: FALTA MODELAR PROPIEDADES CALIFICABLES. UN DETALLE BAR DEBERIA TENER UN DICCIONARIO DE
        // TODO: PROPIEDAD -> CALIFICACION (Ej.: {enchufe: 3, wifi: 2, buenPrecio: 5})
        // CONSTRUCTOR
        function DetalleDeBar(unBar) {
            this.bar = unBar;
        }
        // MENSAJES QUE RESPONDE
        DetalleDeBar.prototype.setCalificacionProcesadaEnchufes = function (calificacion) {
            this.calificacionProcesadaEnchufes = calificacion;
        };
        DetalleDeBar.prototype.setCalificacionProcesadaWifi = function (calificacion) {
            this.calificacionProcesadaWifi = calificacion;
        };
        DetalleDeBar.prototype.getCalificacionEnchufes = function () {
            return this.calificacionProcesadaEnchufes;
        };
        DetalleDeBar.prototype.getCalificacionWifi = function () {
            return this.calificacionProcesadaWifi;
        };
        DetalleDeBar.prototype.getBar = function () {
            return this.bar;
        };
        DetalleDeBar.prototype.getNombreBar = function () {
            return (this.bar).getNombre();
        };
        DetalleDeBar.prototype.getDireccionBar = function () {
            return (this.bar).getDireccion();
        };
        return DetalleDeBar;
    }());
    wifindBarApp.DetalleDeBar = DetalleDeBar;
})(wifindBarApp || (wifindBarApp = {}));
//# sourceMappingURL=DetalleDeBar.js.map