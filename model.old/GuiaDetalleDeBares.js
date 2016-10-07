var wifindBarApp;
(function (wifindBarApp) {
    var GuiaDetalleDeBares = (function () {
        // CONSTRUCTOR
        function GuiaDetalleDeBares(detalles) {
            this.detalles = detalles;
        }
        GuiaDetalleDeBares.getInstance = function () {
            return this._instance;
        };
        // MENSAJES QUE RESPONDE
        GuiaDetalleDeBares.prototype.addDetalle = function (detalle) {
            (this.detalles).push(detalle);
        };
        GuiaDetalleDeBares.prototype.dameDetalleDeBar = function (unBar) {
            for (var _i = 0, _a = this.detalles; _i < _a.length; _i++) {
                var detalle = _a[_i];
                if (detalle.getBar() == unBar)
                    return detalle;
            }
        };
        GuiaDetalleDeBares._instance = new GuiaDetalleDeBares([]);
        return GuiaDetalleDeBares;
    }());
    wifindBarApp.GuiaDetalleDeBares = GuiaDetalleDeBares;
})(wifindBarApp || (wifindBarApp = {}));
//# sourceMappingURL=GuiaDetalleDeBares.js.map