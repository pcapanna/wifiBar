/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/angularjs/angular-route.d.ts" />
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
    .config(($routeProvider) => {
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
/// <reference path="../app.ts" />
var wifindBarApp;
(function (wifindBarApp) {
    class MainCtrl {
        //
        constructor($scope, uiGmapGoogleMapApi, DistanciaUtils) {
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
            //   var delta = 0.05;
            //
            this.$scope = $scope;
            //
            //   vm.markerControl = {};
            //   vm.options = {
            //     scrollwheel: false
            //   };
            //
            //   vm.marcadores = [];
            //
            //   vm.setMarcadorDeUbicacion(this.map.center.latitude, this.map.center.longitude);
            //
            //   // vm.cargarGuiaDeBaresRandom();
            //   // vm.cargarGuiaDetalleDeBaresRandom();
        }
        //
        clickMapFunction(map, eventName, args) {
            var e = args[0];
            this.$parent.vm.setMarcadorDeUbicacion(e.latLng.lat(), e.latLng.lng());
        }
        setMarcadorDeUbicacion(latitud, longitud) {
            wifindBarApp;
            debugger;
            this.ubicacionOrigen = new wifindBarApp.Ubicacion(latitud, longitud);
            this.marker = undefined;
            // setTimeout(() => {
            //   this.marker = {
            //     id: 0,
            //     control: {},
            //     coords: {
            //       latitude: this.ubicacionOrigen.getLatitud(),
            //       longitude: this.ubicacionOrigen.getLongittud()
            //     },
            //     options: {visible: true, draggable: true},
            //     events: {
            //       dragend: function (marker, eventName, args) {
            //         var lat = marker.getPosition().lat();
            //         var lon = marker.getPosition().lng();
            //         this.marker.options = {
            //           draggable: true,
            //           //             labelContent: "lat: " + $scope.marker.coords.latitude + ' ' + 'lon: ' + $scope.marker.coords.longitude,
            //           labelAnchor: "100 0",
            //           labelClass: "marker-labels"
            //         };
            //       }
            //     }
            //   };
            //   this.$scope.$apply();
            // }, 0);
        }
    }
    wifindBarApp.MainCtrl = MainCtrl;
    angular.module('wifindBarApp')
        .controller('MainCtrl', wifindBarApp.MainCtrl);
})(wifindBarApp || (wifindBarApp = {}));
var wifindBarApp;
(function (wifindBarApp) {
    class Ubicacion {
        constructor(latitud, longitud) {
            this.latitud = latitud;
            this.longitud = longitud;
        }
        getlatitud() {
            return this.latitud;
        }
        getlongittud() {
            return this.longitud;
        }
    }
    wifindBarApp.Ubicacion = Ubicacion;
})(wifindBarApp || (wifindBarApp = {}));
//# sourceMappingURL=app.js.map