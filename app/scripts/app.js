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
            this.api = new wifindBarApp.APIWiFindBar();
            this.cargarBaresRandomPorApi(this.api);
            this.cargarDetallesDeBaresRandomPorApi(this.api);
        }
        MainCtrl.prototype.buscarBaresCercanos = function () {
            var filtro = new wifindBarApp.FiltroNull();
            var criterioMaxDistancia = new wifindBarApp.CriterioDeAceptacionDistanciaMaxima(this.maxDistanciaMetros, this.ubicacionOrigen);
            filtro = new wifindBarApp.FiltroPorCaracteristica(filtro, criterioMaxDistancia);
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
                filtro = new wifindBarApp.FiltroPorCaracteristica(filtro, criterio);
            }
            filtro = new wifindBarApp.FiltroPorCaracteristica(filtro, criterioMaxDistancia);
            var baresEncontrados = this.api.buscar(filtro);
            this.api.dibujarBares(baresEncontrados, this);
        };
        MainCtrl.prototype.cargarBaresRandomPorApi = function (api) {
            var latCentro = -34.60005598135185;
            var longCentro = -58.45550537109375;
            var deltaLat = 0.07;
            var deltaLong = 0.12;
            for (var i = 1; i < 500; i++) {
                var idKey = i;
                var latitud = (latCentro - deltaLat) + (Math.random() * (2 * deltaLat));
                var longitud = (longCentro - deltaLong) + (Math.random() * (2 * deltaLong));
                api.ingresarUnBar(new wifindBarApp.Nombre("Bar " + idKey), new wifindBarApp.Ubicacion(latitud, longitud));
            }
        };
        ;
        MainCtrl.prototype.cargarDetallesDeBaresRandomPorApi = function (api) {
            for (var _i = 0, _a = api.obtenerBares(); _i < _a.length; _i++) {
                var bar = _a[_i];
                if (this.estaCalificadoRandom()) {
                    var calificacionEnchufes = new wifindBarApp.CalificacionPorEstrellas(Math.floor(Math.random() * 5) + 1);
                    api.calificarEnchufesDeBar(bar, calificacionEnchufes);
                }
                if (this.estaCalificadoRandom()) {
                    var calificacionWifi = new wifindBarApp.CalificacionPorEstrellas(Math.floor(Math.random() * 5) + 1);
                    api.calificarWifiDeBar(bar, calificacionWifi);
                }
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
        function APIWiFindBar() {
            this.guiaDeBares = new wifindBarApp.GuiaDeBares();
            this.relacionadorBarDetalles = new wifindBarApp.RelacionadorBarDetalles();
            this.ingresadorDeBares = new wifindBarApp.IngresadorDeBares(this.guiaDeBares, this.relacionadorBarDetalles);
            this.dibujadorEnMapa = new wifindBarApp.DibujadorEnMapaGoogleMaps(this.relacionadorBarDetalles);
            this.calificadorDeBares = new wifindBarApp.CalificadorDeBares(this.relacionadorBarDetalles, new wifindBarApp.CalculadorDePromedioDeCalificaciones());
        }
        APIWiFindBar.prototype.buscar = function (unFiltro) {
            var unFiltrador = new wifindBarApp.Filtrador(unFiltro, this.relacionadorBarDetalles);
            var unBuscador = new wifindBarApp.BuscadorDeBares(unFiltrador, this.guiaDeBares);
            return unBuscador.buscarBares();
        };
        APIWiFindBar.prototype.obtenerBares = function () {
            return this.guiaDeBares.getBares();
        };
        APIWiFindBar.prototype.ingresarUnBar = function (unNombre, unaDireccion) {
            this.ingresadorDeBares.ingresarBar(unNombre, unaDireccion);
        };
        APIWiFindBar.prototype.calificarEnchufesDeBar = function (unBar, unaCalificacion) {
            var unDetalle = this.relacionadorBarDetalles.dameDetalleDeUnBar(unBar);
            this.calificadorDeBares.calificarEnchufesDeBar(unBar, unaCalificacion);
        };
        APIWiFindBar.prototype.calificarWifiDeBar = function (unBar, unaCalificacion) {
            var unDetalle = this.relacionadorBarDetalles.dameDetalleDeUnBar(unBar);
            this.calificadorDeBares.calificarWifiDeBar(unBar, unaCalificacion);
        };
        APIWiFindBar.prototype.verDetalleDeUnBar = function (unBar) {
            return this.relacionadorBarDetalles.dameDetalleDeUnBar(unBar);
        };
        APIWiFindBar.prototype.dibujarBares = function (unaColeccionDeBares, vm) {
            this.dibujadorEnMapa.dibujarBaresEnMapa(unaColeccionDeBares, vm);
        };
        return APIWiFindBar;
    }());
    wifindBarApp.APIWiFindBar = APIWiFindBar;
})(wifindBarApp || (wifindBarApp = {}));
var wifindBarApp;
(function (wifindBarApp) {
    var Bar = (function () {
        function Bar(unNombre, unaDireccion) {
            this.nombre = unNombre;
            this.direccion = unaDireccion;
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
        function BuscadorDeBares(unFiltrador, unaGuiaDeBares) {
            this.filtrador = unFiltrador;
            this.guiaDebares = unaGuiaDeBares;
        }
        BuscadorDeBares.prototype.buscarBares = function () {
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
    var ProcesadorDeCalificaciones = (function () {
        function ProcesadorDeCalificaciones() {
        }
        return ProcesadorDeCalificaciones;
    }());
    wifindBarApp.ProcesadorDeCalificaciones = ProcesadorDeCalificaciones;
})(wifindBarApp || (wifindBarApp = {}));
var wifindBarApp;
(function (wifindBarApp) {
    var CalculadorDePromedioDeCalificaciones = (function (_super) {
        __extends(CalculadorDePromedioDeCalificaciones, _super);
        function CalculadorDePromedioDeCalificaciones() {
            _super.call(this);
        }
        CalculadorDePromedioDeCalificaciones.prototype.procesarCalificaciones = function (unaColeccionCalificaciones) {
            var sum = 0;
            for (var _i = 0, unaColeccionCalificaciones_1 = unaColeccionCalificaciones; _i < unaColeccionCalificaciones_1.length; _i++) {
                var calificacion = unaColeccionCalificaciones_1[_i];
                sum += calificacion.getValor();
            }
            var promedio = Math.floor(sum / unaColeccionCalificaciones.length);
            return new wifindBarApp.CalificacionPorEstrellas(promedio);
        };
        return CalculadorDePromedioDeCalificaciones;
    }(wifindBarApp.ProcesadorDeCalificaciones));
    wifindBarApp.CalculadorDePromedioDeCalificaciones = CalculadorDePromedioDeCalificaciones;
})(wifindBarApp || (wifindBarApp = {}));
var wifindBarApp;
(function (wifindBarApp) {
    var Calificacion = (function () {
        function Calificacion() {
        }
        return Calificacion;
    }());
    wifindBarApp.Calificacion = Calificacion;
})(wifindBarApp || (wifindBarApp = {}));
var wifindBarApp;
(function (wifindBarApp) {
    var CalificacionPorEstrellas = (function (_super) {
        __extends(CalificacionPorEstrellas, _super);
        function CalificacionPorEstrellas(estrellas) {
            _super.call(this);
            this.estrellas = estrellas;
        }
        CalificacionPorEstrellas.prototype.getValor = function () {
            return this.estrellas;
        };
        return CalificacionPorEstrellas;
    }(wifindBarApp.Calificacion));
    wifindBarApp.CalificacionPorEstrellas = CalificacionPorEstrellas;
})(wifindBarApp || (wifindBarApp = {}));
var wifindBarApp;
(function (wifindBarApp) {
    var CalificacionProcesada = (function () {
        function CalificacionProcesada() {
        }
        CalificacionProcesada.prototype.getCalificacion = function () {
            return this.calificacion;
        };
        CalificacionProcesada.prototype.setCalificacion = function (unaCalificacion) {
            this.calificacion = unaCalificacion;
        };
        return CalificacionProcesada;
    }());
    wifindBarApp.CalificacionProcesada = CalificacionProcesada;
})(wifindBarApp || (wifindBarApp = {}));
var wifindBarApp;
(function (wifindBarApp) {
    var CalificadorDeBares = (function () {
        function CalificadorDeBares(unRelacionadorBarDetalles, unProcesadorDeCalificaciones) {
            this.relacionadorBarDetalles = unRelacionadorBarDetalles;
            this.procesaddorDeCalificaciones = unProcesadorDeCalificaciones;
        }
        CalificadorDeBares.prototype.calificarEnchufesDeBar = function (unBar, unaCalificacion) {
            var unDetalle = this.relacionadorBarDetalles.dameDetalleDeUnBar(unBar);
            unDetalle.getHistorialEnchufes().agregarCalificacion(unaCalificacion);
            var calificaciones = unDetalle.getHistorialEnchufes().verCalificaciones();
            var nuevaCalificacion = this.procesaddorDeCalificaciones.procesarCalificaciones(calificaciones);
            unDetalle.getCalificacionEnchufes().setCalificacion(nuevaCalificacion);
        };
        CalificadorDeBares.prototype.calificarWifiDeBar = function (unBar, unaCalificacion) {
            var unDetalle = this.relacionadorBarDetalles.dameDetalleDeUnBar(unBar);
            unDetalle.getHistorialWifi().agregarCalificacion(unaCalificacion);
            var calificaciones = unDetalle.getHistorialWifi().verCalificaciones();
            var nuevaCalificacion = this.procesaddorDeCalificaciones.procesarCalificaciones(calificaciones);
            unDetalle.getCalificacionWifi().setCalificacion(nuevaCalificacion);
        };
        return CalificadorDeBares;
    }());
    wifindBarApp.CalificadorDeBares = CalificadorDeBares;
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
            var ubicacionBar = unDetalleDeBar.obtenerDireccionDeBar();
            return this.distancia(this.unaUbicacionOrigen, ubicacionBar) <= this.unaDistancia;
        };
        CriterioDeAceptacionDistanciaMaxima.prototype.toRadians = function (number) {
            return number * Math.PI / 180;
        };
        CriterioDeAceptacionDistanciaMaxima.prototype.toDegrees = function (number) {
            return number * 180 / Math.PI;
        };
        CriterioDeAceptacionDistanciaMaxima.prototype.distancia = function (ubicacion1, ubicacion2) {
            var R = 6371e3;
            var φ1 = this.toRadians(ubicacion1.getLatitud());
            var φ2 = this.toRadians(ubicacion2.getLatitud());
            var Δφ = this.toRadians(ubicacion2.getLatitud() - ubicacion1.getLatitud());
            var Δλ = this.toRadians(ubicacion2.getLongittud() - ubicacion1.getLongittud());
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
            if (unDetalleDeBar.getCalificacionEnchufes().getCalificacion() == null) {
                return false;
            }
            var califEnchufes = unDetalleDeBar.getCalificacionEnchufes().getCalificacion().getValor();
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
            if (unDetalleDeBar.getCalificacionWifi().getCalificacion() == null) {
                return false;
            }
            var califWifi = unDetalleDeBar.getCalificacionWifi().getCalificacion().getValor();
            return (califWifi <= this.calificacionHasta && califWifi >= this.calificacionDesde);
        };
        return CriterioDeAceptacionEstrellasPorWifi;
    }(wifindBarApp.CriterioDeAceptacionEstrellasPorCaracteristica));
    wifindBarApp.CriterioDeAceptacionEstrellasPorWifi = CriterioDeAceptacionEstrellasPorWifi;
})(wifindBarApp || (wifindBarApp = {}));
var wifindBarApp;
(function (wifindBarApp) {
    var DetalleDeBar = (function () {
        function DetalleDeBar(unBar) {
            this.bar = unBar;
            this.calificacionProcesadaEnchufes = new wifindBarApp.CalificacionProcesada();
            this.calificacionProcesadaWifi = new wifindBarApp.CalificacionProcesada();
            this.historialDeCalificacionesEnchufes = new wifindBarApp.HistorialDeCalificaciones();
            this.historialDeCalificacionesWifi = new wifindBarApp.HistorialDeCalificaciones();
        }
        DetalleDeBar.prototype.getCalificacionEnchufes = function () {
            return this.calificacionProcesadaEnchufes;
        };
        DetalleDeBar.prototype.setCalificacionEnchufes = function (unaCalificacionProcesada) {
            this.calificacionProcesadaEnchufes = unaCalificacionProcesada;
        };
        DetalleDeBar.prototype.getCalificacionWifi = function () {
            return this.calificacionProcesadaWifi;
        };
        DetalleDeBar.prototype.setCalificacionWifi = function (unaCalificacionProcesada) {
            this.calificacionProcesadaWifi = unaCalificacionProcesada;
        };
        DetalleDeBar.prototype.getHistorialEnchufes = function () {
            return this.historialDeCalificacionesEnchufes;
        };
        DetalleDeBar.prototype.getHistorialWifi = function () {
            return this.historialDeCalificacionesWifi;
        };
        DetalleDeBar.prototype.obtenerNombreBar = function () {
            return this.bar.getNombre();
        };
        DetalleDeBar.prototype.obtenerDireccionDeBar = function () {
            return this.bar.getDireccion();
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
        function DibujadorEnMapaGoogleMaps(unRelacionadorBarDetalles) {
            _super.call(this);
            this.mapa = new wifindBarApp.MapaGoogleMaps();
            this.relacionadorBarDetalles = unRelacionadorBarDetalles;
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
                var detalle = this.relacionadorBarDetalles.dameDetalleDeUnBar(bar);
                var calificacionWifi;
                if (detalle.getCalificacionWifi().getCalificacion() != null) {
                    calificacionWifi = detalle.getCalificacionWifi().getCalificacion().getValor().toString();
                }
                else {
                    calificacionWifi = 'No posee';
                }
                var calificacionEnchufes;
                if (detalle.getCalificacionEnchufes().getCalificacion() != null) {
                    calificacionEnchufes = detalle.getCalificacionEnchufes().getCalificacion().getValor().toString();
                }
                else {
                    calificacionEnchufes = 'No posee';
                }
                var marcadorTitle = bar.getNombre().getDescripcion()
                    + '. \n Calificacion Wifi: ' + calificacionWifi
                    + '. \n Calificacion Enchufes: ' + calificacionEnchufes;
                var marcador = new wifindBarApp.MarcadorGoogleMaps(i.toString(), bar.getDireccion(), '/images/bar2.png', "Bar", marcadorTitle);
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
    var EntradaBarDetalle = (function () {
        function EntradaBarDetalle(unBar, unDetalle) {
            this.bar = unBar;
            this.detalle = unDetalle;
        }
        EntradaBarDetalle.prototype.dameBar = function () {
            return this.bar;
        };
        EntradaBarDetalle.prototype.dameDetalle = function () {
            return this.detalle;
        };
        return EntradaBarDetalle;
    }());
    wifindBarApp.EntradaBarDetalle = EntradaBarDetalle;
})(wifindBarApp || (wifindBarApp = {}));
var wifindBarApp;
(function (wifindBarApp) {
    var Filtrador = (function () {
        function Filtrador(unFiltro, unRelacionadorBarDetalles) {
            this.filtro = unFiltro;
            this.relacionadorBarDetalles = unRelacionadorBarDetalles;
        }
        Filtrador.prototype.filtrar = function (unaColeccionDeBares) {
            var bares = [];
            var detalles = [];
            for (var _i = 0, unaColeccionDeBares_1 = unaColeccionDeBares; _i < unaColeccionDeBares_1.length; _i++) {
                var bar = unaColeccionDeBares_1[_i];
                detalles.push(this.relacionadorBarDetalles.dameDetalleDeUnBar(bar));
            }
            detalles = (this.filtro).filtrar(detalles);
            for (var _a = 0, detalles_1 = detalles; _a < detalles_1.length; _a++) {
                var detalle = detalles_1[_a];
                bares.push(this.relacionadorBarDetalles.dameBarDeUnDetalle(detalle));
            }
            return bares;
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
})(wifindBarApp || (wifindBarApp = {}));
var wifindBarApp;
(function (wifindBarApp) {
    var FiltroNull = (function (_super) {
        __extends(FiltroNull, _super);
        function FiltroNull() {
            _super.call(this);
        }
        FiltroNull.prototype.filtrar = function (unaColeccionDeDetalles) {
            var detallesFiltrados = [];
            for (var _i = 0, unaColeccionDeDetalles_1 = unaColeccionDeDetalles; _i < unaColeccionDeDetalles_1.length; _i++) {
                var detalle = unaColeccionDeDetalles_1[_i];
                detallesFiltrados.push(detalle);
            }
            return detallesFiltrados;
        };
        return FiltroNull;
    }(wifindBarApp.Filtro));
    wifindBarApp.FiltroNull = FiltroNull;
})(wifindBarApp || (wifindBarApp = {}));
var wifindBarApp;
(function (wifindBarApp) {
    var FiltroPorCaracteristica = (function (_super) {
        __extends(FiltroPorCaracteristica, _super);
        function FiltroPorCaracteristica(unFiltroComponente, unCriterioDeAceptacion) {
            _super.call(this);
            this.filtroComponente = unFiltroComponente;
            this.criterioDeAceptacion = unCriterioDeAceptacion;
        }
        FiltroPorCaracteristica.prototype.filtrar = function (unaColeccionDeDetalles) {
            var detallesFiltrados = [];
            for (var _i = 0, unaColeccionDeDetalles_2 = unaColeccionDeDetalles; _i < unaColeccionDeDetalles_2.length; _i++) {
                var detalle = unaColeccionDeDetalles_2[_i];
                if (this.criterioDeAceptacion.acepta(detalle))
                    detallesFiltrados.push(detalle);
            }
            return this.filtroComponente.filtrar(detallesFiltrados);
        };
        return FiltroPorCaracteristica;
    }(wifindBarApp.Filtro));
    wifindBarApp.FiltroPorCaracteristica = FiltroPorCaracteristica;
})(wifindBarApp || (wifindBarApp = {}));
var wifindBarApp;
(function (wifindBarApp) {
    var GuiaDeBares = (function () {
        function GuiaDeBares() {
            this.bares = [];
        }
        GuiaDeBares.prototype.getBares = function () {
            return this.bares;
        };
        GuiaDeBares.prototype.agregarUnBar = function (unBar) {
            this.bares.push(unBar);
        };
        return GuiaDeBares;
    }());
    wifindBarApp.GuiaDeBares = GuiaDeBares;
})(wifindBarApp || (wifindBarApp = {}));
var wifindBarApp;
(function (wifindBarApp) {
    var HistorialDeCalificaciones = (function () {
        function HistorialDeCalificaciones() {
            this.calificaciones = [];
        }
        HistorialDeCalificaciones.prototype.agregarCalificacion = function (unaCalificacion) {
            this.calificaciones.push(unaCalificacion);
        };
        HistorialDeCalificaciones.prototype.verCalificaciones = function () {
            return this.calificaciones;
        };
        return HistorialDeCalificaciones;
    }());
    wifindBarApp.HistorialDeCalificaciones = HistorialDeCalificaciones;
})(wifindBarApp || (wifindBarApp = {}));
var wifindBarApp;
(function (wifindBarApp) {
    var IngresadorDeBares = (function () {
        function IngresadorDeBares(unaGuiaDeBares, unRelacionadorBarDetalles) {
            this.guiaDeBares = unaGuiaDeBares;
            this.relacionadorBarDetalles = unRelacionadorBarDetalles;
        }
        IngresadorDeBares.prototype.ingresarBar = function (unNombre, unaUbicacion) {
            var unBar = new wifindBarApp.Bar(unNombre, unaUbicacion);
            var unDetalle = new wifindBarApp.DetalleDeBar(unBar);
            this.guiaDeBares.agregarUnBar(unBar);
            this.relacionadorBarDetalles.agregarEntrada(unBar, unDetalle);
        };
        return IngresadorDeBares;
    }());
    wifindBarApp.IngresadorDeBares = IngresadorDeBares;
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
        function MarcadorGoogleMaps(id, ubicacion, iconUrl, identificador, title) {
            this.id = id;
            this.latitude = ubicacion.getLatitud();
            this.longitude = ubicacion.getLongittud();
            this.icon = iconUrl;
            this.identificador = identificador;
            this.options = { title: title };
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
    var Nombre = (function () {
        function Nombre(unaDescripcion) {
            this.descripcion = unaDescripcion;
        }
        Nombre.prototype.getDescripcion = function () {
            return this.descripcion;
        };
        return Nombre;
    }());
    wifindBarApp.Nombre = Nombre;
})(wifindBarApp || (wifindBarApp = {}));
var wifindBarApp;
(function (wifindBarApp) {
    var RelacionadorBarDetalles = (function () {
        function RelacionadorBarDetalles() {
            this.entradasBarDetalle = [];
        }
        RelacionadorBarDetalles.prototype.dameDetalleDeUnBar = function (unBar) {
            for (var _i = 0, _a = this.entradasBarDetalle; _i < _a.length; _i++) {
                var entradaBarDetalle = _a[_i];
                if (entradaBarDetalle.dameBar() == unBar) {
                    return entradaBarDetalle.dameDetalle();
                }
            }
            return null;
        };
        RelacionadorBarDetalles.prototype.dameBarDeUnDetalle = function (unDetalle) {
            for (var _i = 0, _a = this.entradasBarDetalle; _i < _a.length; _i++) {
                var entradaBarDetalle = _a[_i];
                if (entradaBarDetalle.dameDetalle() == unDetalle) {
                    return entradaBarDetalle.dameBar();
                }
            }
            return null;
        };
        RelacionadorBarDetalles.prototype.agregarEntrada = function (unBar, unDetalle) {
            var unaEntradaBarDetalle = new wifindBarApp.EntradaBarDetalle(unBar, unDetalle);
            this.entradasBarDetalle.push(unaEntradaBarDetalle);
        };
        return RelacionadorBarDetalles;
    }());
    wifindBarApp.RelacionadorBarDetalles = RelacionadorBarDetalles;
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