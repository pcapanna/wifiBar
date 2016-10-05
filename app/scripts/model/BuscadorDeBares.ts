import {Bar} from "./Bar";
import {GuiaDeBares} from "./GuiaDeBares";
import {Filtrador} from "./Filtrador";
import {DibujadorEnMapa} from "./DibujadorEnMapa";

export class BuscadorDeBares {

  // COLABORADORES INTERNOS
  guiaDebares: GuiaDeBares;
  filtrador: Filtrador;
  dibujador: DibujadorEnMapa;

  // CONSTRUCTOR
  constructor(guiaDeBares: GuiaDeBares, filtrador: Filtrador, dibujador: DibujadorEnMapa) {
    this.guiaDebares = guiaDeBares;
    this.filtrador = filtrador;
    this.dibujador = dibujador;
  }

  // MENSAJES QUE RESPONDE

  buscarBares(): Bar[] {
    var bares = this.guiaDebares.getBares();
    bares = this.filtrador.filtrar(bares);
    this.dibujador.dibujarBaresEnMapa(bares);
    return bares;
  }

}
