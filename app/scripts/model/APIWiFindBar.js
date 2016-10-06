"use strict";
var BuscadorDeBares_1 = require("./BuscadorDeBares");
var DibujadorEnMapa_1 = require("./DibujadorEnMapa");
var Filtrador_1 = require("./Filtrador");
var GuiaDeBares_1 = require("./GuiaDeBares");
var GuiaDetalleDeBares_1 = require("./GuiaDetalleDeBares");
var APIWiFindBar = (function () {
    function APIWiFindBar() {
    }
    //Se agrega el parametro 'vm' que representa la vista.
    // Esto es necesario para poder dibujar en el mapa
    APIWiFindBar.buscar = function (unFiltro, vm) {
        // Utilizamos los métodos getInstance de Guia de bares y de detalles de Bares
        // para facilitar la implementación al hacer que ambas guias sean globales y unicas
        // por toda la aplicación.
        var unaGuiaDeBares = GuiaDeBares_1.GuiaDeBares.getInstance();
        var unaGuiaDeDetalles = GuiaDetalleDeBares_1.GuiaDetalleDeBares.getInstance();
        var unDibujador = DibujadorEnMapa_1.DibujadorEnMapa.getInstance();
        var unFiltrador = new Filtrador_1.Filtrador(unFiltro, unaGuiaDeDetalles);
        var unBuscador = new BuscadorDeBares_1.BuscadorDeBares(unaGuiaDeBares, unFiltrador, unDibujador);
        return unBuscador.buscarBares(vm);
    };
    return APIWiFindBar;
}());
exports.APIWiFindBar = APIWiFindBar;
//# sourceMappingURL=APIWiFindBar.js.map