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

DibujadorDeMapa.$inject = ['$timeout', 'Mapa'];

function DibujadorDeMapa($timeout, Mapa) {
  var viejoMapa = undefined;
  var vm = undefined;

  return {
    setVistaModel: setVistaModel,
    sobreescribirMapa: sobreescribirMapa
  };


  function setVistaModel(vmIn) {
    vm = vmIn;
  }

  function sobreescribirMapa() {

    var mapa = Mapa.dameInstancia();

    vm.mapa = {
      center: mapa.centradoEnUbicacion,
      control: (vm.viejoMapa == undefined || vm.viejoMapa.control == undefined) ?{}: vm.viejoMapa.control,
      zoom: (vm.viejoMapa == undefined || vm.viejoMapa.control == undefined) ?13: vm.viejoMapa.zoom,
      bounds: (vm.viejoMapa == undefined || vm.viejoMapa.control == undefined) ?{}: vm.viejoMapa.bounds,
      events: (vm.viejoMapa == undefined || vm.viejoMapa.control == undefined) ?{}:vm.viejoMapa.events
    };

    if (viejoMapa == undefined || mapa.marcadores != viejoMapa.marcadores) {
      sobreescribirMarcadores(mapa.marcadores);
    }

    if (viejoMapa == undefined || mapa.marcadorDeBusqueda != viejoMapa.marcadorDeBusqueda) {
      sobreescribirMarcadorDeBusqueda(mapa.marcadorDeBusqueda);
    }

    if (viejoMapa == undefined || mapa.eventosPorAccion != viejoMapa.eventosPorAccion) {
      sobreescribirEventosPorAccion(mapa.eventosPorAccion);
    }

    vm.viejoMapa = clone(mapa);
  }


  function clickMapFunction(map, eventName, args) {
    var e = args[0];
    var coords = {longitud: e.latLng.lat(), latitud: e.latLng.lng()};
    mapa.eventosPorAccion[click](coords);
    sobreescribirMapa()
  }

  function sobreescribirEventosPorAccion(eventosPorAccion) {
    if (eventosPorAccion == undefined){
      return;
    }
    switch (Object.keys(eventosPorAccion)) {
      case "click":
        vm.mapa.events[click] = clickMapFunction;
        break;
      default:
        break;
    }
  }

  function sobreescribirMarcadores(marcadores) {
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
    }
    vm.markers = vmMarkers;
  }

  function sobreescribirMarcadorDeBusqueda(marcadorDeBusqueda) {
    if (marcadorDeBusqueda == undefined){
      return;
    }
    vm.marker = undefined;
    $timeout(function () {
      var vmMarker = {
        id: 0,
        latitude: marcadorDeBusqueda.latitud,
        longitude: marcadorDeBusqueda.longitud,
        title: 'm' + 0
      };
    }, 0);
  }

  function clone(obj) {
    var copy;

    // Handle the 3 simple types, and null or undefined
    if (null == obj || "object" != typeof obj) return obj;

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
        if (obj.hasOwnProperty(attr)) copy[attr] = clone(obj[attr]);
      }
      return copy;
    }

    throw new Error("Unable to copy obj! Its type isn't supported.");
  }

}
