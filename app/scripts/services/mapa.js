'use strict';

/**
 * @ngdoc service
 * @name wifindBarApp.Mapa
 * @description
 * # Mapa
 * Service in the wifindBarApp.
 */
angular.module('wifindBarApp')
  .service('Mapa', Mapa);

// DibujadorDeBares.$inject = ['Marcador'];

function Mapa() {
  var mapa = {
    centradoEnUbicacion: {longitud: 0, latitud: 0},
    marcadores: {listado: [], eventosPorAccion: {}},
    eventosPorAccion: {}
  };
  return {
    agregarEvento: agregarEvento,
    agregarNuevoMarcador: agregarNuevoMarcador,
    borrarMarcadores: borrarMarcadores,
    centrarEn: centrarEn
  };

  function agregarEvento(evento, funcionAsociadaAEvento) {
    mapa.eventosPorAccion.evento[evento] = funcionAsociadaAEvento;
  }

  function agregarNuevoMarcador(marcador) {
    mapa.marcadores.listado.push(marcador);
  }

  function borrarMarcadores(tipoMarcador) {
    var i = 0;
    while (i < mapa.marcadores.listado.length) {
      if (mapa.marcadores.listado[i].tipo === "Bar") {
        mapa.marcadores.listado.splice(i, 1);
      }
      else {
        ++i;
      }
    }
  }

  function centrarEn(ubicacion) {
    mapa.centradoEnUbicacion = ubicacion;
  }
}

