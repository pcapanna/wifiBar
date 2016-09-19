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

MainCtrl.$inject = ['$scope', '$log', '$timeout', 'uiGmapGoogleMapApi', 'DistanciaUtils',
  'GuiaDeBaresDeBuenosAires', 'DibujadorDeMapa', 'DibujadorDeBares', 'Mapa'];

function MainCtrl($scope, $log, $timeout, uiGmapGoogleMapApi, DistanciaUtils, GuiaDeBaresDeBuenosAires,
                  DibujadorDeMapa, DibujadorDeBares, Mapa) {

  var vm = this;

  vm.bares = GuiaDeBaresDeBuenosAires.listaDeBares;
  vm.buscarBaresCercanos = buscarBaresCercanos;
  vm.filtros = [{id: 1, descripcion: 'WiFi'}, {id: 2, descripcion: 'Enchufes'}];

  DibujadorDeMapa.setVistaModel(vm);
  Mapa.centrarEn({latitud: -34.6277801, longitud:-58.3909607});
  DibujadorDeMapa.sobreescribirMapa();


  vm.mapa = {
    center: {latitude: -34.6277801, longitude: -58.3909607},
    zoom: 13,
    events: {}
  };
  DibujadorDeMapa.sobreescribirMapa();



// Get the bounds from the map once it's loaded
  $scope.$watch('vm.mapa.bounds', function (nv, ov) {
    // Only need to regenerate once
    if (nv != undefined && !ov.southwest && nv.southwest) {
      var markers = [];
      for (var i in vm.bares) {
        var bar = vm.bares[i];
        DibujadorDeBares.dibujarBar(bar);
      }
      DibujadorDeMapa.sobreescribirMapa();
    }
  }, true);

  function buscarBaresCercanos() {
    debugger;
    vm.baresEncontrados = [];
    for (var i in vm.bares) {
      var bar = vm.bares[i];
      var distancia = DistanciaUtils.distancia(bar.ubicacion.latitud, bar.ubicacion.longitud,
        vm.marker.coords.latitude, vm.marker.coords.longitude);
      if (distancia < 1000) { //comparing metres
        vm.baresEncontrados.push(bar);
      }
    }
    console.log("cantidad de bares encontrados =" + vm.baresEncontrados.length);
  }

  function nextId() {
    id++;
    return id;
  }
}
