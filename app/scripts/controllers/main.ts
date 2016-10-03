import {Ubicacion} from '../model/Ubicacion';
import {Bar} from '../model/Bar';
import {Marcador} from '../model/Marcador';

/**
 * @ngdoc function
 * @name wifindBarApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the wifindBarApp
 */

var angular;
angular.module('wifindBarApp')
  .controller('MainCtrl', MainCtrl);

// MainCtrl.$inject = ['$scope', '$log', '$timeout', 'uiGmapGoogleMapApi', 'DistanciaUtils',
//   'GuiaDeBaresDeBuenosAires', 'Mapa', 'DibujadorDeBares', 'DibujadorDeMapa'];

function MainCtrl($scope, $log, $timeout, uiGmapGoogleMapApi, DistanciaUtils, GuiaDeBaresDeBuenosAires,
                  Mapa, DibujadorDeBares, DibujadorDeMapa) {

  var vm = this;
  Mapa.asignarMarcadorDeBusqueda

  var delta = 0.05;
  var id = 0;
  var latCentro = -34.6277801;
  var longCentro = -58.3909607;

  vm.backUpMarcadores;

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
  vm.randomMarkers = [];

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
          icon: '/images/bar2.png',
          options: {visible: false}
        });
      }
      vm.randomMarkers = markers;
      vm.backUpMarcadores = markers;

    }
  }, true);

  function buscarBaresCercanos() {
    var marcadores = [];
    vm.baresEncontrados = [];
    for (var i in vm.bares) {
      var bar = vm.bares[i];
      var distancia = DistanciaUtils.distancia(bar.ubicacion.latitud, bar.ubicacion.longitud,
        vm.marker.coords.latitude, vm.marker.coords.longitude);
      if (vm.maxDistancia == undefined || vm.maxDistancia == "") {
        vm.maxDistancia = 1000;
      }
      if (distancia < vm.maxDistancia) { //comparing metres
        vm.baresEncontrados.push(bar);
      }
      for (var i in vm.backUpMarcadores) {
        var marker = vm.backUpMarcadores[i];
        if (marker.latitude == bar.ubicacion.latitud && marker.longitude == bar.ubicacion.longitud && distancia < vm.maxDistancia) {
          marker.options.visible = true;
          marcadores.push(marker);
        }
      }
    }
    vm.randomMarkers = marcadores;
    console.log("cantidad de bares encontrados =" + vm.baresEncontrados.length);
  }

  function createMarkerForBar(bar, id) {
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


  vm.bares = GuiaDeBaresDeBuenosAires.listaDeBares;
}
