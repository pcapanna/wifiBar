"use strict";
var Ubicacion_1 = require("./Ubicacion");
var DibujadorDeMapa = (function () {
    function DibujadorDeMapa() {
    }
    DibujadorDeMapa.prototype.sobreescribirMapa = function (vm, mapa) {
        vm.mapa = {
            center: mapa.centradoEnUbicacion,
            control: (vm.viejoMapa == undefined || vm.viejoMapa.control == undefined) ? {} : vm.viejoMapa.control,
            zoom: (vm.viejoMapa == undefined || vm.viejoMapa.control == undefined) ? 13 : vm.viejoMapa.zoom,
            bounds: (vm.viejoMapa == undefined || vm.viejoMapa.control == undefined) ? {} : vm.viejoMapa.bounds,
            events: (vm.viejoMapa == undefined || vm.viejoMapa.control == undefined) ? {} : vm.viejoMapa.events
        };
        if (this.mapa == undefined || mapa.marcadores != this.mapa.marcadores) {
            this.sobreescribirMarcadores(vm, mapa.marcadores);
        }
        if (this.mapa == undefined || mapa.marcadorDeBusqueda != this.mapa.marcadorDeBusqueda) {
            this.sobreescribirMarcadorDeBusqueda(vm, mapa.marcadorDeBusqueda);
        }
        if (this.mapa == undefined || mapa.eventosPorAccion != this.mapa.eventosPorAccion) {
            this.sobreescribirEventosPorAccion(vm, mapa.eventosPorAccion);
        }
        vm.mapa = clone(mapa);
    };
    DibujadorDeMapa.prototype.clickMapFunction = function (map, eventName, args) {
        var e = args[0];
        var coords = new Ubicacion_1.Ubicacion(e.latLng.lat(), e.latLng.lng());
        this.mapa.eventosPorAccion["click"](coords);
    };
    DibujadorDeMapa.prototype.sobreescribirEventosPorAccion = function (vm, eventosPorAccion) {
        if (eventosPorAccion == undefined) {
            return;
        }
        for (var nombreDeEvento in eventosPorAccion) {
            switch (nombreDeEvento) {
                case "click":
                    vm.mapa.events["click"] = this.clickMapFunction;
                    break;
                default:
                    break;
            }
        }
    };
    DibujadorDeMapa.prototype.sobreescribirMarcadores = function (vm, marcadores) {
        if (vm == undefined) {
            return;
        }
        vm.markers = undefined;
        var vmMarkers = [];
        for (var i in marcadores) {
            var marcador = marcadores[i];
            var vmMarker = {
                id: i,
                latitude: marcador.latitud,
                longitude: marcador.longitud,
                title: 'm' + i,
                icon: marcador.icono
            };
            vmMarkers.push(vmMarker);
        }
        vm.markers = vmMarkers;
    };
    DibujadorDeMapa.prototype.sobreescribirMarcadorDeBusqueda = function (vm, marcadorDeBusqueda) {
        if (marcadorDeBusqueda == undefined) {
            return;
        }
        vm.marker = undefined;
        vm.$timeout(function () {
            vm.marker1 = {
                id: "id",
                control: {},
                coords: {
                    latitude: marcadorDeBusqueda.latitud,
                    longitude: marcadorDeBusqueda.longitud
                },
                options: { visible: true, draggable: true, labelAnchor: "100 0", labelClass: "marker-labels" }
            };
        }, 0);
    };
    return DibujadorDeMapa;
}());
exports.DibujadorDeMapa = DibujadorDeMapa;
function clone(obj) {
    var copy;
    // Handle the 3 simple types, and null or undefined
    if (null == obj || "object" != typeof obj)
        return obj;
    // Handle Date
    if (obj instanceof Date) {
        copy = new Date();
        copy.setTime(obj.getTime());
        return copy;
    }
    // Handle Array
    if (obj instanceof Array) {
        copy = [];
        for (var i = 0, len = obj.length; i < len; i++) {
            copy[i] = clone(obj[i]);
        }
        return copy;
    }
    // Handle Object
    if (obj instanceof Object) {
        copy = {};
        for (var attr in obj) {
            if (obj.hasOwnProperty(attr))
                copy[attr] = clone(obj[attr]);
        }
        return copy;
    }
    throw new Error("Unable to copy obj! Its type isn't supported.");
}
//# sourceMappingURL=DibujadorDeMapa.js.map