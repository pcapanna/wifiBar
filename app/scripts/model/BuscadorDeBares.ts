import {Bar} from "./Bar";
import {GuiaDeBares} from "./GuiaDeBares";
import {Filtrador} from "./Filtrador";
import {DibujadorEnMapa} from "./DibujadorEnMapa";

export class BuscadorDeBares {

  // COLABORADORES INTERNOS
  private guiaDebares: GuiaDeBares;
  private filtrador: Filtrador;
  private dibujador: DibujadorEnMapa;

  // CONSTRUCTOR
  constructor(guiaDeBares: GuiaDeBares, filtrador: Filtrador, dibujador: DibujadorEnMapa) {
    this.guiaDebares = guiaDeBares;
    this.filtrador = filtrador;
    this.dibujador = dibujador;
  }

  // MENSAJES QUE RESPONDE

  buscarBares(vm): Bar[] {
    var bares : Bar[] = this.guiaDebares.getBares();
    bares = this.filtrador.filtrar(bares);
    this.dibujador.dibujarBaresEnMapa(bares, vm);
    return bares;
  }

}
