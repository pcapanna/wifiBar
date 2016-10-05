import {Bar} from "./Bar"
import {Mapa} from "./Mapa"

export class DibujadorEnMapa{

  // COLABORADORES INTERNOS
  mapa: Mapa;

  // CONSTRUCTOR
  constructor(unMapa: Mapa){
    this.mapa = unMapa;
  }

  // MENSAJES QUE RESPONDE
  dibujarBaresEnMapa(unaColeccionDeBares: Bar[]): void{
    // implementame
  }
}
