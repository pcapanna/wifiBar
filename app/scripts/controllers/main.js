/// <reference path="../app.ts" />
'use strict';
var Filtro_1 = require("../model/Filtro");
var CriterioDeAceptacion_1 = require("../model/CriterioDeAceptacion");
var Ubicacion_1 = require("../model/Ubicacion");
var APIWiFindBar_1 = require("../model/APIWiFindBar");
var Bar_1 = require("../model/Bar");
var GuiaDeBares_1 = require("../model/GuiaDeBares");
var GuiaDetalleDeBares_1 = require("../model/GuiaDetalleDeBares");
var DetalleDeBar_1 = require("../model/DetalleDeBar");
var wifindBarApp;
(function (wifindBarApp) {
    var MainCtrl = (function () {
        function MainCtrl($scope, $timeout, uiGmapGoogleMapApi, DistanciaUtils, GuiaDeBaresDeBuenosAires) {
            this.$scope = $scope;
            this.backUpMarcadores = [];
            this.marcadores = [];
            this.markerControl = {};
            this.options = {
                scrollwheel: false
            };
            this.filtros = [{ id: 1, descripcion: 'WiFi' }, { id: 2, descripcion: 'Enchufes' }];
            this.map = {
                center: { latitude: -34.6277801, longitude: -58.3909607 },
                control: {},
                zoom: 13,
                bounds: {},
                events: {
                    click: this.clickMapFunction
                }
            };
            var vm = this;
            var delta = 0.05;
            this.$scope = $scope;
            vm.markerControl = {};
            vm.options = {
                scrollwheel: false
            };
            vm.marcadores = [];
            vm.setMarcadorDeUbicacion(this.map.center.latitude, this.map.center.longitude);
            vm.cargarGuiaDeBaresRandom();
            vm.cargarGuiaDetalleDeBaresRandom();
        }
        MainCtrl.prototype.clickMapFunction = function (map, eventName, args) {
            var e = args[0];
            this.$parent.vm.setMarcadorDeUbicacion(e.latLng.lat(), e.latLng.lng());
        };
        MainCtrl.prototype.setMarcadorDeUbicacion = function (latitud, longitud) {
            var _this = this;
            this.ubicacionOrigen = new Ubicacion_1.Ubicacion(latitud, longitud);
            this.marker = undefined;
            setTimeout(function () {
                _this.marker = {
                    id: 0,
                    control: {},
                    coords: {
                        latitude: _this.ubicacionOrigen.getLatitud(),
                        longitude: _this.ubicacionOrigen.getLongittud()
                    },
                    options: { visible: true, draggable: true },
                    events: {
                        dragend: function (marker, eventName, args) {
                            var lat = marker.getPosition().lat();
                            var lon = marker.getPosition().lng();
                            this.marker.options = {
                                draggable: true,
                                //             labelContent: "lat: " + $scope.marker.coords.latitude + ' ' + 'lon: ' + $scope.marker.coords.longitude,
                                labelAnchor: "100 0",
                                labelClass: "marker-labels"
                            };
                        }
                    }
                };
                _this.$scope.$apply();
            }, 0);
        };
        MainCtrl.prototype.estaCalificadoRandom = function () {
            var randomFrom1To3 = Math.floor(Math.random() * 2) + 1;
            return (randomFrom1To3 !== 1 ? false : true);
        };
        MainCtrl.prototype.cargarGuiaDeBaresRandom = function () {
            var latCentro = -34.6277801;
            var longCentro = -58.3909607;
            var delta = 0.05;
            var guiaDeBares = GuiaDeBares_1.GuiaDeBares.getInstance();
            for (var i = 1; i < 200; i++) {
                var idKey = i;
                var latitud = (latCentro - delta) + (Math.random() * (2 * delta));
                var longitud = (longCentro - delta) + (Math.random() * (2 * delta));
                var bar = new Bar_1.Bar("Bar " + idKey, new Ubicacion_1.Ubicacion(latitud, longitud));
                guiaDeBares.addBar(bar);
            }
        };
        ;
        MainCtrl.prototype.cargarGuiaDetalleDeBaresRandom = function () {
            var guiaDetalleDeBares = GuiaDetalleDeBares_1.GuiaDetalleDeBares.getInstance();
            var guiaDeBares = GuiaDeBares_1.GuiaDeBares.getInstance();
            for (var _i = 0, _a = guiaDeBares.getBares(); _i < _a.length; _i++) {
                var bar = _a[_i];
                var detalleDeBar = new DetalleDeBar_1.DetalleDeBar(bar);
                if (this.estaCalificadoRandom()) {
                    var calificacionEnchufes = Math.floor(Math.random() * 5) + 1;
                    detalleDeBar.setCalificacionProcesadaEnchufes(calificacionEnchufes);
                }
                if (this.estaCalificadoRandom()) {
                    var calificacionWifi = Math.floor(Math.random() * 5) + 1;
                    detalleDeBar.setCalificacionProcesadaWifi(calificacionWifi);
                }
            }
        };
        ;
        MainCtrl.prototype.buscarBaresCercanos = function () {
            var filtro = new Filtro_1.FiltroNull();
            var criterioMaxDistancia = new CriterioDeAceptacion_1.CriterioDeAceptacionDistanciaMaxima(this.maxDistanciaMetros, this.ubicacionOrigen);
            filtro = new Filtro_1.FiltroDecorator(filtro, criterioMaxDistancia);
            var api = APIWiFindBar_1.APIWiFindBar;
            var baresEncontrados = api.buscar(filtro, this);
        };
        return MainCtrl;
    }());
    wifindBarApp.MainCtrl = MainCtrl;
})(wifindBarApp || (wifindBarApp = {}));
angular.module('wifindBarApp')
    .controller('MainCtrl', wifindBarApp.MainCtrl);
//# sourceMappingURL=main.js.map