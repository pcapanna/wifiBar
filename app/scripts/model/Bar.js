"use strict";
var Bar = (function () {
    //horario: ;
    // CONSTRUCTOR
    function Bar(nombre, direccion /*, horario:*/) {
        this.nombre = nombre;
        this.direccion = direccion;
        //this.horario = horario;
    }
    // MENSAJES QUE RESPONDE
    Bar.prototype.getNombre = function () {
        return this.nombre;
    };
    Bar.prototype.getDireccion = function () {
        return this.direccion;
    };
    return Bar;
}());
exports.Bar = Bar;
//# sourceMappingURL=Bar.js.map