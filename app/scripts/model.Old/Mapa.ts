import {Ubicacion} from "./Ubicacion";
import {Marcador} from "./Marcador";

export class Mapa {

  private static _instance:Mapa = new Mapa();
  public centradoEnUbicacion:Ubicacion;
  public marcadores:Marcador[];
  public marcadorDeBusqueda:Marcador;
  public eventosPorAccion:{};

  public static getInstance(){
    return Mapa._instance;
  }

  public agregarEvento(evento:string, funcionAsociadaAEvento:void) {
    this.eventosPorAccion[evento] = funcionAsociadaAEvento;
  }

  public agregarNuevoMarcador(marcador:Marcador) {
    this.marcadores.push(marcador);
  };

  public asignarMarcadorDeBusqueda(marcador:Marcador) {
    this.marcadorDeBusqueda = marcador;
  };

  public borrarMarcadores(tipoMarcador:string) {
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

  public centrarEn(ubicacion:Ubicacion) {
    this.centradoEnUbicacion = ubicacion;
  }

  public quitarMarcadorDeBusqueda() {
    this.marcadorDeBusqueda = null;
  };
}

