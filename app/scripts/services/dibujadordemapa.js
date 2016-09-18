'use strict';

/**
 * @ngdoc service
 * @name wifindBarApp.DibujadorDeMapa
 * @description
 * # DibujadorDeMapa
 * Service in the wifindBarApp.
 */
angular.module('wifindBarApp')
  .service('DibujadorDeMapa', DibujadorDeMapa);

DibujadorDeMapa.$inject = ['Mapa'];

function DibujadorDeMapa(Mapa) {
  return {
    sobreescribirMapa: sobreescribirMapa
  };

  function sobreescribirMapa(vm, mapa) {
    vm.mapa = {
      center: mapa.centradoEnUbicacion,
      control: {},
      zoom: 13,
      bounds: {},
      events: mapa.eventosPorAccion
    };

    vm.markers = undefined;

    var vmMarkers = [];
    for (var i in mapa.marcadores){
      var marcador = mapa.marcadores[i];
      var vmMarker = {
        id: i,
        latitude: marcador.latitud,
        longitude: marcador.longitud,
        title: 'm' + id,
        icon: marcador.icono
      };
    }


  }


}
