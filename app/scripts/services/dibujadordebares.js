'use strict';

/**
 * @ngdoc service
 * @name wifindBarApp.DibujadorDeBares
 * @description
 * # DibujadorDeBares
 * Service in the wifindBarApp.
 */
angular.module('wifindBarApp')
  .service('DibujadorDeBares', DibujadorDeBares);

DibujadorDeBares.$inject = ['Mapa'];

function DibujadorDeBares(Mapa) {
  return {
    dibujarBar: dibujarBar,
    borrarBares: borrarBares
  };

  function dibujarBar(bar) {
    var marcador = {
      longitud: bar.ubicacion.longitud,
      latitud: bar.ubicacion.latitud,
      icono: "/images/bar2.png",
      tipo: "Bar"
    };
    Mapa.agregarNuevoMarcador(marcador);
  }

  function borrarBares(bar) {
    var tipoMarcador = "Bar";
    Mapa.borrarMarcadores(tipoMarcador);
  }
}
