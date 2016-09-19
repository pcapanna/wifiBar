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
    marcadores: [],
    marcadorDeBusqueda: {},
    eventosPorAccion: {click: clickMapFunction}
  };
  return {
    agregarEvento: agregarEvento,
    agregarNuevoMarcador: agregarNuevoMarcador,
    asignarMarcadorDeBusqueda: asignarMarcadorDeBusqueda,
    borrarMarcadores: borrarMarcadores,
    centrarEn: centrarEn,
    dameInstancia: dameInstancia,
    quitarMarcadorDeBusqueda: quitarMarcadorDeBusqueda,
  };

  function agregarEvento(evento, funcionAsociadaAEvento) {
    mapa.eventosPorAccion.evento[evento] = funcionAsociadaAEvento;
  }

  function agregarNuevoMarcador(marcador) {
    mapa.marcadores.push(marcador);
  }

  function asignarMarcadorDeBusqueda(marcador){
    mapa.marcadorDeBusqueda = marcador;
  }

  function borrarMarcadores(tipoMarcador) {
    var i = 0;
    while (i < mapa.marcadores.length) {
      if (mapa.marcadores.listado[i].tipo === tipoMarcador) {
        mapa.marcadores.splice(i, 1);
      }
      else {
        ++i;
      }
    }
  }

  function centrarEn(ubicacion) {
    mapa.centradoEnUbicacion = {latitude: ubicacion.latitud, longitude:ubicacion.longitud};
  }

  function clickMapFunction(coord) {
    mapa.marcadorDeBusqueda.longitud = coord.longitud;
    mapa.marcadorDeBusqueda.latitud = coord.latitud;
  }

  function dameInstancia() {
    return mapa;
  }
  function quitarMarcadorDeBusqueda() {
    mapa.marcadorDeBusqueda = null;
  }
}

