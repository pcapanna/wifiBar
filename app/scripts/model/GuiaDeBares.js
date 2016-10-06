"use strict";
var GuiaDeBares = (function () {
    // CONSTRUCTOR
    function GuiaDeBares(bares) {
        this.bares = bares;
    }
    GuiaDeBares.getInstance = function () {
        return this._instance;
    };
    // MENSAJES QUE RESPONDE
    GuiaDeBares.prototype.getBares = function () {
        return this.bares;
    };
    GuiaDeBares.prototype.addBar = function (unBar) {
        (this.bares).push(unBar);
    };
    GuiaDeBares._instance = new GuiaDeBares([]);
    return GuiaDeBares;
}());
exports.GuiaDeBares = GuiaDeBares;
//# sourceMappingURL=GuiaDeBares.js.map