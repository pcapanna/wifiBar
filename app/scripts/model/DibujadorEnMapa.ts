import {Bar} from "./Bar"
import {Mapa} from "./Mapa"

export class DibujadorEnMapa{

  // COLABORADORES INTERNOS
  private mapa: Mapa;

  // CONSTRUCTOR
  constructor(unMapa: Mapa){
    this.mapa = unMapa;
  }

  // MENSAJES QUE RESPONDE
  public dibujarBaresEnMapa(unaColeccionDeBares: Bar[]): void{
    // TODO: implementame
  }
}
