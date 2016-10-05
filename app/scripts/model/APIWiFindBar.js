"use strict";
var BuscadorDeBares_1 = require("./BuscadorDeBares");
var Filtrador_1 = require("./Filtrador");
function buscar(unFiltro) {
    var unaGuiaDeDetalles;
    var unaGuiaDeBares; // las guias y el dibujador deberian ser globales.... no estoy segura de como hacer eso
    var unDibujador;
    var unFiltrador = new Filtrador_1.Filtrador(unFiltro, unaGuiaDeDetalles);
    var unBuscador = new BuscadorDeBares_1.BuscadorDeBares(unaGuiaDeBares, unFiltrador, unDibujador);
    return unBuscador.buscarBares();
}
//# sourceMappingURL=APIWiFindBar.js.map