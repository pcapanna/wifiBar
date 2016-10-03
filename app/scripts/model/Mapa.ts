import {Ubicacion} from "./Ubicacion";
import {Marcador} from "./Marcador";

export class Mapa {
  centradoEnUbicacion:Ubicacion;
  marcadores:Marcador[];
  marcadorDeBusqueda:Marcador;
  eventosPorAccion:{};

  agregarEvento(evento:string, funcionAsociadaAEvento:void) {
    this.eventosPorAccion[evento] = funcionAsociadaAEvento;
  }

  agregarNuevoMarcador(marcador:Marcador) {
    this.marcadores.push(marcador);
  };

  asignarMarcadorDeBusqueda(marcador:Marcador) {
    this.marcadorDeBusqueda = marcador;
  };

  borrarMarcadores(tipoMarcador:string) {
    var i = 0;
    while (i < this.marcadores.length) {
      if (this.marcadores[i].tipo === tipoMarcador) {
        this.marcadores.splice(i, 1);
      }
      else {
        ++i;
      }
    }
  };

  centrarEn(ubicacion:Ubicacion) {
    this.centradoEnUbicacion = ubicacion;
  }

  quitarMarcadorDeBusqueda() {
    this.marcadorDeBusqueda = null;
  };
}

