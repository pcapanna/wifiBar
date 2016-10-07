var wifindBarApp;
(function (wifindBarApp) {
    var APIWiFindBar = (function () {
        function APIWiFindBar() {
        }
        //Se agrega el parametro 'vm' que representa la vista.
        // Esto es necesario para poder dibujar en el mapa
        APIWiFindBar.buscar = function (unFiltro, vm) {
            // Utilizamos los métodos getInstance de Guia de bares y de detalles de Bares
            // para facilitar la implementación al hacer que ambas guias sean globales y unicas
            // por toda la aplicación.
            var unaGuiaDeBares = wifindBarApp.GuiaDeBares.getInstance();
            var unaGuiaDeDetalles = wifindBarApp.GuiaDetalleDeBares.getInstance();
            var unDibujador = wifindBarApp.DibujadorEnMapa.getInstance();
            var unFiltrador = new wifindBarApp.Filtrador(unFiltro, unaGuiaDeDetalles);
            var unBuscador = new wifindBarApp.BuscadorDeBares(unaGuiaDeBares, unFiltrador, unDibujador);
            return unBuscador.buscarBares(vm);
        };
        return APIWiFindBar;
    }());
    wifindBarApp.APIWiFindBar = APIWiFindBar;
})(wifindBarApp || (wifindBarApp = {}));
//# sourceMappingURL=APIWiFindBar.js.map