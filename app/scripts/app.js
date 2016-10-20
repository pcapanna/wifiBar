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
        function MainCtrl($scope, uiGmapGoogleMapApi, DistanciaUtils) {
            this.$scope = $scope;
            this.backUpMarcadores = [];
            this.marcadores = [];
            this.markerControl = {};
            this.options = {
                scrollwheel: false
            };
            this.filtros = [{ id: 1, descripcion: 'WiFi' }, { id: 2, descripcion: 'Enchufes' }];
            this.filtrosSeleccionados = [];
            this.map = {
                center: { latitude: -34.6277801, longitude: -58.3909607 },
                control: {},
                zoom: 13,
                bounds: {},
                events: {
                    click: this.clickMapFunction
                }
            };
            this.minEstrellasEnchufes = 1;
            this.maxEstrellasEnchufes = 5;
            this.minEstrellasWifi = 1;
            this.maxEstrellasWifi = 5;
            var vm = this;
            this.$scope = $scope;
        }
        MainCtrl.prototype.clickMapFunction = function (map, eventName, args) {
            var e = args[0];
            this.$parent.vm.setMarcadorDeUbicacion(e.latLng.lat(), e.latLng.lng());
        };
        MainCtrl.prototype.setMarcadorDeUbicacion = function (latitud, longitud) {
            this.ubicacionOrigen = new wifindBarApp.Ubicacion(latitud, longitud);
            this.marker = undefined;
        };
        return MainCtrl;
    }());
    wifindBarApp.MainCtrl = MainCtrl;
    angular.module('wifindBarApp')
        .controller('MainCtrl', wifindBarApp.MainCtrl);
})(wifindBarApp || (wifindBarApp = {}));
var wifindBarApp;
(function (wifindBarApp) {
    var Ubicacion = (function () {
        function Ubicacion(latitud, longitud) {
            this.latitud = latitud;
            this.longitud = longitud;
        }
        Ubicacion.prototype.getlatitud = function () {
            return this.latitud;
        };
        Ubicacion.prototype.getlongittud = function () {
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