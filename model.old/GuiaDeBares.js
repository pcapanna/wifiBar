var wifindBarApp;
(function (wifindBarApp) {
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
    wifindBarApp.GuiaDeBares = GuiaDeBares;
})(wifindBarApp || (wifindBarApp = {}));
//# sourceMappingURL=GuiaDeBares.js.map