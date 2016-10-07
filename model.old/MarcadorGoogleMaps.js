var wifindBarApp;
(function (wifindBarApp) {
    var MarcadorGoogleMaps = (function () {
        function MarcadorGoogleMaps(id, ubicacion, iconUrl, identificador) {
            this.id = id;
            this.latitude = ubicacion.getLatitud();
            this.longitude = ubicacion.getLongittud();
            this.title = 'm' + id;
            this.icon = iconUrl;
            this.identificador = identificador;
        }
        MarcadorGoogleMaps.prototype.getIdentificador = function () {
            return this.identificador;
        };
        return MarcadorGoogleMaps;
    }());
    wifindBarApp.MarcadorGoogleMaps = MarcadorGoogleMaps;
})(wifindBarApp || (wifindBarApp = {}));
//# sourceMappingURL=MarcadorGoogleMaps.js.map