'use strict';

/**
 * @ngdoc function
 * @name wifindBarApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the wifindBarApp
 */
angular.module('wifindBarApp')
  .controller('MainCtrl', MainCtrl);

MainCtrl.$inject = ['$scope', '$log', '$timeout', 'uiGmapGoogleMapApi', 'DistanciaUtils', 'GuiaDeBaresDeBuenosAires'];

function MainCtrl($scope, $log, $timeout, uiGmapGoogleMapApi, DistanciaUtils, GuiaDeBaresDeBuenosAires) {

  var vm = this;

  var delta = 0.05;
  var id = 0;
  var latCentro = -34.6277801;
  var longCentro = -58.3909607;

  vm.buscarBaresCercanos = buscarBaresCercanos;
  vm.filtros = [{id: 1, descripcion: 'WiFi'}, {id: 2, descripcion: 'Enchufes'}];
  vm.map = {
    center: {latitude: latCentro, longitude: longCentro},
    control: {},
    zoom: 13,
    bounds: {},
    events: {
      click: clickMapFunction
    }
  };
  vm.markerControl = {};
  vm.options = {
    scrollwheel: false
  };
  vm.markers = [];

  setMarker(latCentro, longCentro);


// Get the bounds from the map once it's loaded
  $scope.$watch('vm.map.bounds', function (nv, ov) {
    // Only need to regenerate once
    if (nv != undefined && !ov.southwest && nv.southwest) {
      var markers = [];
      for (var i in vm.bares) {
        var bar = vm.bares[i];
        markers.push({
          id: i,
          latitude: bar.ubicacion.latitud,
          longitude: bar.ubicacion.longitud,
          title: 'm' + i,
          icon: '/images/bar2.png'
        });
      }
      vm.markers = markers;
    }
  }, true);

  function buscarBaresCercanos() {
    vm.baresEncontrados = [];
    for (var i in vm.bares) {
      var bar = vm.bares[i];
      var distancia = DistanciaUtils.distancia(bar.ubicacion.latitud, bar.ubicacion.longitud,
        vm.marker.coords.latitude, vm.marker.coords.longitude);
      if (distancia < 1000){ //comparing metres
        vm.baresEncontrados.push(bar);
      }
    }
    console.log("cantidad de bares encontrados =" + vm.baresEncontrados.length);
  }

  function createMarkerForBar(bar, id){
    vm.markers = [];
    vm.markers.push({
      id: id,
      latitude: bar.ubicacion.latitud,
      longitude: bar.ubicacion.longitud,
      title: 'm' + id,
      icon: '/images/bar2.png'
    });
  }

  function clickMapFunction(map, eventName, args) {
    var e = args[0];
    setMarker(e.latLng.lat(), e.latLng.lng());
  }

  // function createRandomMarker(i, bounds, idKey) {
  //   if (idKey == null) {
  //     idKey = "id";
  //   }
  //
  //   var deltalat = 0.06;
  //   var deltalng = 0.09;
  //
  //   var latitude = (-34.597920743948784 - deltalat) + (Math.random() * (2 * deltalat));
  //   var longitude = (-58.45275879953988 - deltalng) + (Math.random() * (2 * deltalng));
  //   var ret = {
  //     latitude: latitude,
  //     longitude: longitude,
  //     title: 'm' + i,
  //     icon: '/images/bar2.png'
  //   };
  //   ret[idKey] = i;
  //   return ret;
  // }
  //
  function nextId() {
    id++;
    return id;
  }

  function setMarker(lat, lng) {
    vm.marker = undefined;
    $timeout(function () {
      vm.marker = {
        id: nextId(),
        control: {},
        coords: {
          latitude: lat,
          longitude: lng
        },
        options: {visible: true, draggable: true},
        events: {
          dragend: function (marker, eventName, args) {
            $log.log('marker dragend');
            var lat = marker.getPosition().lat();
            var lon = marker.getPosition().lng();
            $log.log(lat);
            $log.log(lon);

            vm.marker.options = {
              draggable: true,
              //             labelContent: "lat: " + $scope.marker.coords.latitude + ' ' + 'lon: ' + $scope.marker.coords.longitude,
              labelAnchor: "100 0",
              labelClass: "marker-labels"
            };
          }
        }
      };
    }, 0);
  }

  /*
   $scope.$watchCollection("marker.coords", function (newVal, oldVal) {
   if (_.isEqual(newVal, oldVal))
   return;
   $scope.coordsUpdates++;
   });
   $timeout(function () {
   $scope.marker.coords = {
   latitude: 42.1451,
   longitude: -100.6680
   };
   $scope.dynamicMoveCtr++;
   $timeout(function () {
   $scope.marker.coords = {
   latitude: 43.1451,
   longitude: -102.6680
   };
   $scope.dynamicMoveCtr++;
   }, 2000);
   }, 1000);
   */

  vm.bares = GuiaDeBaresDeBuenosAires.listaDeBares;
}
