var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
angular.module('wifindBarApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'uiGmapgoogle-maps',
    'ngMaterial',
    'ui.multiselect'
])
    .config(function ($routeProvider) {
    $routeProvider
        .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'vm'
    })
        .otherwise({
        redirectTo: '/'
    });
})
    .config(function (uiGmapGoogleMapApiProvider) {
    uiGmapGoogleMapApiProvider.configure({
        key: 'AIzaSyCoZvFDIO3KozVbIHKD-sXZL6LMoCGRQ3w',
        v: '3.20',
        libraries: 'weather,geometry,visualization'
    });
});
var wifindBarApp;
(function (wifindBarApp) {
    var MainCtrl = (function () {
        function MainCtrl($scope, uiGmapGoogleMapApi) {
            this.$scope = $scope;
            this.marcadores = [];
            this.maxDistanciaMetros = 1000;
            this.filtros = [{ id: 1, descripcion: 'WiFi' }, { id: 2, descripcion: 'Enchufes' }];
            this.filtrosSeleccionados = [];
            this.minEstrellasEnchufes = 1;
            this.maxEstrellasEnchufes = 5;
            this.minEstrellasWifi = 1;
            this.maxEstrellasWifi = 5;
            this.map = {
                center: { latitude: -34.6277801, longitude: -58.3909607 },
                control: {},
                zoom: 13,
                bounds: {},
                events: {
                    click: this.clickMapFunction
                }
            };
            this.$scope = $scope;
            this.$parent = $scope.$parent;
            this.guiaDeBares = new wifindBarApp.GuiaDeBares([]);
            this.guiaDeDetalleDeBares = new wifindBarApp.GuiaDetalleDeBares([]);
            var dibujadorEnMapa = new wifindBarApp.DibujadorEnMapaGoogleMaps();
            this.cargarGuiaDeBaresRandom();
            this.cargarGuiaDetalleDeBaresRandom();
            this.api = new wifindBarApp.APIWiFindBar(this.guiaDeBares, this.guiaDeDetalleDeBares, dibujadorEnMapa);
        }
        MainCtrl.prototype.buscarBaresCercanos = function () {
            var filtro = new wifindBarApp.FiltroNull();
            var criterioMaxDistancia = new wifindBarApp.CriterioDeAceptacionDistanciaMaxima(this.maxDistanciaMetros, this.ubicacionOrigen);
            filtro = new wifindBarApp.FiltroDecorator(filtro, criterioMaxDistancia);
            for (var _i = 0, _a = this.filtrosSeleccionados; _i < _a.length; _i++) {
                var filtroSeleccionado = _a[_i];
                if (filtroSeleccionado.descripcion == "Enchufes") {
                    var criterio = new wifindBarApp.CriterioDeAceptacionEstrellasPorEnchufes(this.minEstrellasEnchufes, this.maxEstrellasEnchufes);
                }
                else {
                    if (filtroSeleccionado.descripcion == "WiFi") {
                        var criterio = new wifindBarApp.CriterioDeAceptacionEstrellasPorWifi(this.minEstrellasWifi, this.maxEstrellasWifi);
                    }
                }
                filtro = new wifindBarApp.FiltroDecorator(filtro, criterio);
            }
            filtro = new wifindBarApp.FiltroDecorator(filtro, criterioMaxDistancia);
            var baresEncontrados = this.api.buscar(filtro, this);
        };
        MainCtrl.prototype.cargarGuiaDeBaresRandom = function () {
            var latCentro = -34.60005598135185;
            var longCentro = -58.45550537109375;
            var deltaLat = 0.07;
            var deltaLong = 0.12;
            for (var i = 1; i < 500; i++) {
                var idKey = i;
                var latitud = (latCentro - deltaLat) + (Math.random() * (2 * deltaLat));
                var longitud = (longCentro - deltaLong) + (Math.random() * (2 * deltaLong));
                var bar = new wifindBarApp.Bar("Bar " + idKey, new wifindBarApp.Ubicacion(latitud, longitud));
                this.guiaDeBares.addBar(bar);
            }
        };
        ;
        MainCtrl.prototype.cargarGuiaDetalleDeBaresRandom = function () {
            for (var _i = 0, _a = this.guiaDeBares.getBares(); _i < _a.length; _i++) {
                var bar = _a[_i];
                var detalleDeBar = new wifindBarApp.DetalleDeBar(bar);
                if (this.estaCalificadoRandom()) {
                    var calificacionEnchufes = Math.floor(Math.random() * 5) + 1;
                    detalleDeBar.setCalificacionProcesadaEnchufes(calificacionEnchufes);
                }
                if (this.estaCalificadoRandom()) {
                    var calificacionWifi = Math.floor(Math.random() * 5) + 1;
                    detalleDeBar.setCalificacionProcesadaWifi(calificacionWifi);
                }
                this.guiaDeDetalleDeBares.addDetalle(detalleDeBar);
            }
        };
        ;
        MainCtrl.prototype.estaCalificadoRandom = function () {
            var randomFrom1To3 = Math.floor(Math.random() * 2) + 1;
            return (randomFrom1To3 !== 1 ? false : true);
        };
        MainCtrl.prototype.clickMapFunction = function (map, eventName, args) {
            var e = args[0];
            this.$parent.vm.setMarcadorDeUbicacion(e.latLng.lat(), e.latLng.lng());
        };
        MainCtrl.prototype.setMarcadorDeUbicacion = function (latitud, longitud) {
            var _this = this;
            this.ubicacionOrigen = new wifindBarApp.Ubicacion(latitud, longitud);
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
                                labelAnchor: "100 0",
                                labelClass: "marker-labels"
                            };
                        }
                    }
                };
                _this.$scope.$apply();
            }, 0);
        };
        return MainCtrl;
    }());
    wifindBarApp.MainCtrl = MainCtrl;
    angular.module('wifindBarApp')
        .controller('MainCtrl', wifindBarApp.MainCtrl);
})(wifindBarApp || (wifindBarApp = {}));
var wifindBarApp;
(function (wifindBarApp) {
    var APIWiFindBar = (function () {
        function APIWiFindBar(unaGuiaDeBares, unaGuiaDeDetalleDeBares, unDibujadorEnMapa) {
            this.guiaDeBares = unaGuiaDeBares;
            this.guiaDeDetalleDeBares = unaGuiaDeDetalleDeBares;
            this.dibujadorEnMapa = unDibujadorEnMapa;
        }
        APIWiFindBar.prototype.buscar = function (unFiltro, vm) {
            var unFiltrador = new wifindBarApp.Filtrador(unFiltro, this.guiaDeDetalleDeBares);
            var unBuscador = new wifindBarApp.BuscadorDeBares(this.guiaDeBares, unFiltrador);
            var baresEncontrados = unBuscador.buscarBares(vm);
            this.dibujadorEnMapa.dibujarBaresEnMapa(baresEncontrados, vm);
            return baresEncontrados;
        };
        return APIWiFindBar;
    }());
    wifindBarApp.APIWiFindBar = APIWiFindBar;
})(wifindBarApp || (wifindBarApp = {}));
var wifindBarApp;
(function (wifindBarApp) {
    var Bar = (function () {
        function Bar(nombre, direccion) {
            this.nombre = nombre;
            this.direccion = direccion;
        }
        Bar.prototype.getNombre = function () {
            return this.nombre;
        };
        Bar.prototype.getDireccion = function () {
            return this.direccion;
        };
        return Bar;
    }());
    wifindBarApp.Bar = Bar;
})(wifindBarApp || (wifindBarApp = {}));
var wifindBarApp;
(function (wifindBarApp) {
    var BuscadorDeBares = (function () {
        function BuscadorDeBares(guiaDeBares, filtrador) {
            this.guiaDebares = guiaDeBares;
            this.filtrador = filtrador;
        }
        BuscadorDeBares.prototype.buscarBares = function (vm) {
            var bares = this.guiaDebares.getBares();
            bares = this.filtrador.filtrar(bares);
            return bares;
        };
        return BuscadorDeBares;
    }());
    wifindBarApp.BuscadorDeBares = BuscadorDeBares;
})(wifindBarApp || (wifindBarApp = {}));
var wifindBarApp;
(function (wifindBarApp) {
    var CriterioDeAceptacion = (function () {
        function CriterioDeAceptacion() {
        }
        return CriterioDeAceptacion;
    }());
    wifindBarApp.CriterioDeAceptacion = CriterioDeAceptacion;
})(wifindBarApp || (wifindBarApp = {}));
var wifindBarApp;
(function (wifindBarApp) {
    var CriterioDeAceptacionDistanciaMaxima = (function (_super) {
        __extends(CriterioDeAceptacionDistanciaMaxima, _super);
        function CriterioDeAceptacionDistanciaMaxima(unaDistancia, unaUbicacionOrigen) {
            _super.call(this);
            this.unaDistancia = unaDistancia;
            this.unaUbicacionOrigen = unaUbicacionOrigen;
        }
        CriterioDeAceptacionDistanciaMaxima.prototype.acepta = function (unDetalleDeBar) {
            var ubicacionBar = unDetalleDeBar.getDireccionBar();
            return this.distancia(this.unaUbicacionOrigen, ubicacionBar) <= this.unaDistancia;
        };
        CriterioDeAceptacionDistanciaMaxima.prototype.distancia = function (ubicacion1, ubicacion2) {
            if (Number.prototype.toRadians === undefined) {
                Number.prototype.toRadians = function () { return this * Math.PI / 180; };
            }
            if (Number.prototype.toDegrees === undefined) {
                Number.prototype.toDegrees = function () { return this * 180 / Math.PI; };
            }
            if (typeof module != 'undefined' && module.exports)
                module.exports = LatLon;
            var R = 6371e3;
            var φ1 = ubicacion1.getLatitud().toRadians();
            var φ2 = ubicacion2.getLatitud().toRadians();
            var Δφ = (ubicacion2.getLatitud() - ubicacion1.getLatitud()).toRadians();
            var Δλ = (ubicacion2.getLongittud() - ubicacion1.getLongittud()).toRadians();
            var a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
                Math.cos(φ1) * Math.cos(φ2) *
                    Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
            var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
            var d = R * c;
            return d;
        };
        return CriterioDeAceptacionDistanciaMaxima;
    }(wifindBarApp.CriterioDeAceptacion));
    wifindBarApp.CriterioDeAceptacionDistanciaMaxima = CriterioDeAceptacionDistanciaMaxima;
})(wifindBarApp || (wifindBarApp = {}));
var wifindBarApp;
(function (wifindBarApp) {
    var CriterioDeAceptacionEstrellasPorCaracteristica = (function (_super) {
        __extends(CriterioDeAceptacionEstrellasPorCaracteristica, _super);
        function CriterioDeAceptacionEstrellasPorCaracteristica() {
            _super.apply(this, arguments);
        }
        return CriterioDeAceptacionEstrellasPorCaracteristica;
    }(wifindBarApp.CriterioDeAceptacion));
    wifindBarApp.CriterioDeAceptacionEstrellasPorCaracteristica = CriterioDeAceptacionEstrellasPorCaracteristica;
})(wifindBarApp || (wifindBarApp = {}));
var wifindBarApp;
(function (wifindBarApp) {
    var CriterioDeAceptacionEstrellasPorEnchufes = (function (_super) {
        __extends(CriterioDeAceptacionEstrellasPorEnchufes, _super);
        function CriterioDeAceptacionEstrellasPorEnchufes(calificacionDesde, calificacionHasta) {
            _super.call(this);
            this.calificacionDesde = calificacionDesde;
            this.calificacionHasta = calificacionHasta;
        }
        CriterioDeAceptacionEstrellasPorEnchufes.prototype.acepta = function (unDetalleDeBar) {
            var califEnchufes = unDetalleDeBar.getCalificacionEnchufes();
            return (califEnchufes <= this.calificacionHasta && califEnchufes >= this.calificacionDesde);
        };
        return CriterioDeAceptacionEstrellasPorEnchufes;
    }(wifindBarApp.CriterioDeAceptacionEstrellasPorCaracteristica));
    wifindBarApp.CriterioDeAceptacionEstrellasPorEnchufes = CriterioDeAceptacionEstrellasPorEnchufes;
})(wifindBarApp || (wifindBarApp = {}));
var wifindBarApp;
(function (wifindBarApp) {
    var CriterioDeAceptacionEstrellasPorWifi = (function (_super) {
        __extends(CriterioDeAceptacionEstrellasPorWifi, _super);
        function CriterioDeAceptacionEstrellasPorWifi(calificacionDesde, calificacionHasta) {
            _super.call(this);
            this.calificacionDesde = calificacionDesde;
            this.calificacionHasta = calificacionHasta;
        }
        CriterioDeAceptacionEstrellasPorWifi.prototype.acepta = function (unDetalleDeBar) {
            var califWifi = unDetalleDeBar.getCalificacionWifi();
            return (califWifi <= this.calificacionHasta && califWifi >= this.calificacionDesde);
        };
        return CriterioDeAceptacionEstrellasPorWifi;
    }(wifindBarApp.CriterioDeAceptacionEstrellasPorCaracteristica));
    wifindBarApp.CriterioDeAceptacionEstrellasPorWifi = CriterioDeAceptacionEstrellasPorWifi;
})(wifindBarApp || (wifindBarApp = {}));
var wifindBarApp;
(function (wifindBarApp) {
    var GuiaDeBares = (function () {
        function GuiaDeBares(bares) {
            this.bares = bares;
        }
        GuiaDeBares.getInstance = function () {
            return this._instance;
        };
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
var wifindBarApp;
(function (wifindBarApp) {
    var DetalleDeBar = (function () {
        function DetalleDeBar(unBar) {
            this.bar = unBar;
        }
        DetalleDeBar.prototype.setCalificacionProcesadaEnchufes = function (calificacion) {
            this.calificacionProcesadaEnchufes = calificacion;
        };
        DetalleDeBar.prototype.setCalificacionProcesadaWifi = function (calificacion) {
            this.calificacionProcesadaWifi = calificacion;
        };
        DetalleDeBar.prototype.getCalificacionEnchufes = function () {
            return this.calificacionProcesadaEnchufes;
        };
        DetalleDeBar.prototype.getCalificacionWifi = function () {
            return this.calificacionProcesadaWifi;
        };
        DetalleDeBar.prototype.getBar = function () {
            return this.bar;
        };
        DetalleDeBar.prototype.getNombreBar = function () {
            return (this.bar).getNombre();
        };
        DetalleDeBar.prototype.getDireccionBar = function () {
            return (this.bar).getDireccion();
        };
        return DetalleDeBar;
    }());
    wifindBarApp.DetalleDeBar = DetalleDeBar;
})(wifindBarApp || (wifindBarApp = {}));
var wifindBarApp;
(function (wifindBarApp) {
    var DibujadorEnMapa = (function () {
        function DibujadorEnMapa() {
        }
        return DibujadorEnMapa;
    }());
    wifindBarApp.DibujadorEnMapa = DibujadorEnMapa;
})(wifindBarApp || (wifindBarApp = {}));
var wifindBarApp;
(function (wifindBarApp) {
    var DibujadorEnMapaGoogleMaps = (function (_super) {
        __extends(DibujadorEnMapaGoogleMaps, _super);
        function DibujadorEnMapaGoogleMaps() {
            _super.call(this);
            this.mapa = new wifindBarApp.MapaGoogleMaps();
        }
        DibujadorEnMapaGoogleMaps.prototype.dibujarBaresEnMapa = function (unaColeccionDeBares, vm) {
            var marcadores = this.generarMarcadoresDeBares(unaColeccionDeBares);
            this.mapa.borrarMarcadores();
            this.mapa.setMarcadores(marcadores);
            vm.marcadores = this.mapa.getMarcadores();
        };
        DibujadorEnMapaGoogleMaps.prototype.generarMarcadoresDeBares = function (bares) {
            var marcadores = [];
            var i = 1;
            for (var _i = 0, bares_1 = bares; _i < bares_1.length; _i++) {
                var bar = bares_1[_i];
                var marcador = new wifindBarApp.MarcadorGoogleMaps(i.toString(), bar.getDireccion(), '/images/bar2.png', "bar");
                marcadores.push(marcador);
                i++;
            }
            return marcadores;
        };
        return DibujadorEnMapaGoogleMaps;
    }(wifindBarApp.DibujadorEnMapa));
    wifindBarApp.DibujadorEnMapaGoogleMaps = DibujadorEnMapaGoogleMaps;
})(wifindBarApp || (wifindBarApp = {}));
var wifindBarApp;
(function (wifindBarApp) {
    var Filtrador = (function () {
        function Filtrador(filtro, guia) {
            this.filtro = filtro;
            this.guiaDeDetalles = guia;
        }
        Filtrador.prototype.filtrar = function (unaColeccionDeBares) {
            var detalles = [];
            for (var _i = 0, unaColeccionDeBares_1 = unaColeccionDeBares; _i < unaColeccionDeBares_1.length; _i++) {
                var bar = unaColeccionDeBares_1[_i];
                detalles.push(this.guiaDeDetalles.dameDetalleDeBar(bar));
            }
            return (this.filtro).filtrar(detalles);
        };
        return Filtrador;
    }());
    wifindBarApp.Filtrador = Filtrador;
})(wifindBarApp || (wifindBarApp = {}));
var wifindBarApp;
(function (wifindBarApp) {
    var Filtro = (function () {
        function Filtro() {
        }
        return Filtro;
    }());
    wifindBarApp.Filtro = Filtro;
    var FiltroNull = (function (_super) {
        __extends(FiltroNull, _super);
        function FiltroNull() {
            _super.call(this);
        }
        FiltroNull.prototype.filtrar = function (unaColeccionDeDetalles) {
            var baresFiltrados = [];
            for (var _i = 0, unaColeccionDeDetalles_1 = unaColeccionDeDetalles; _i < unaColeccionDeDetalles_1.length; _i++) {
                var detalle = unaColeccionDeDetalles_1[_i];
                baresFiltrados.push(detalle.getBar());
            }
            return baresFiltrados;
        };
        return FiltroNull;
    }(Filtro));
    wifindBarApp.FiltroNull = FiltroNull;
    var FiltroDecorator = (function (_super) {
        __extends(FiltroDecorator, _super);
        function FiltroDecorator(unFiltroComponente, unaEstrategia) {
            _super.call(this);
            this.filtroComponente = unFiltroComponente;
            this.estrategia = unaEstrategia;
        }
        FiltroDecorator.prototype.filtrar = function (unaColeccionDeDetalles) {
            var detallesFiltrados = [];
            for (var _i = 0, unaColeccionDeDetalles_2 = unaColeccionDeDetalles; _i < unaColeccionDeDetalles_2.length; _i++) {
                var detalle = unaColeccionDeDetalles_2[_i];
                if (this.estrategia.acepta(detalle))
                    detallesFiltrados.push(detalle);
            }
            return this.filtroComponente.filtrar(detallesFiltrados);
        };
        return FiltroDecorator;
    }(Filtro));
    wifindBarApp.FiltroDecorator = FiltroDecorator;
})(wifindBarApp || (wifindBarApp = {}));
var wifindBarApp;
(function (wifindBarApp) {
    var GuiaDetalleDeBares = (function () {
        function GuiaDetalleDeBares(detalles) {
            this.detalles = detalles;
        }
        GuiaDetalleDeBares.prototype.addDetalle = function (detalle) {
            (this.detalles).push(detalle);
        };
        GuiaDetalleDeBares.prototype.dameDetalleDeBar = function (unBar) {
            for (var _i = 0, _a = this.detalles; _i < _a.length; _i++) {
                var detalle = _a[_i];
                if (detalle.getBar() == unBar)
                    return detalle;
            }
        };
        return GuiaDetalleDeBares;
    }());
    wifindBarApp.GuiaDetalleDeBares = GuiaDetalleDeBares;
})(wifindBarApp || (wifindBarApp = {}));
var wifindBarApp;
(function (wifindBarApp) {
    var MapaGoogleMaps = (function () {
        function MapaGoogleMaps() {
        }
        MapaGoogleMaps.prototype.agregarMarcadores = function (marcadores) {
            this.marcadores.concat(marcadores);
        };
        ;
        MapaGoogleMaps.prototype.borrarMarcadores = function () {
            this.marcadores = null;
        };
        ;
        MapaGoogleMaps.prototype.getMarcadores = function () {
            return this.marcadores;
        };
        ;
        MapaGoogleMaps.prototype.setMarcadores = function (marcadores) {
            this.marcadores = marcadores;
        };
        ;
        MapaGoogleMaps.prototype.borrarMarcadoresPorIdentificador = function (identificacionDeMarcador) {
            var i = 0;
            while (i < this.marcadores.length) {
                if (this.marcadores[i].getIdentificador() == identificacionDeMarcador) {
                    this.marcadores.splice(i, 1);
                }
                else {
                    ++i;
                }
            }
        };
        ;
        return MapaGoogleMaps;
    }());
    wifindBarApp.MapaGoogleMaps = MapaGoogleMaps;
})(wifindBarApp || (wifindBarApp = {}));
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
var wifindBarApp;
(function (wifindBarApp) {
    var Ubicacion = (function () {
        function Ubicacion(latitud, longitud) {
            this.latitud = latitud;
            this.longitud = longitud;
        }
        Ubicacion.prototype.getLatitud = function () {
            return this.latitud;
        };
        Ubicacion.prototype.getLongittud = function () {
            return this.longitud;
        };
        return Ubicacion;
    }());
    wifindBarApp.Ubicacion = Ubicacion;
})(wifindBarApp || (wifindBarApp = {}));
'use strict';
describe('Controller: MainCtrl', function () {
    beforeEach(module('wifindBarApp'));
    var MainCtrl, scope;
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        MainCtrl = $controller('MainCtrl', {
            $scope: scope
        });
    }));
});
//# sourceMappingURL=app.js.map