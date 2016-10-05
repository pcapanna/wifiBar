"use strict";
var GuiaDeBares = (function () {
    // CONSTRUCTOR
    function GuiaDeBares(bares) {
        this.bares = bares;
    }
    // MENSAJES QUE RESPONDE
    GuiaDeBares.prototype.getBares = function () {
        return this.bares;
    };
    GuiaDeBares.prototype.addBar = function (unBar) {
        (this.bares).push(unBar);
    };
    return GuiaDeBares;
}());
exports.GuiaDeBares = GuiaDeBares;
//# sourceMappingURL=GuiaDeBares.js.map