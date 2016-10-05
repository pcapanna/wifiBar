import {Filtro} from "./Filtro";
import {Bar} from "./Bar"
import {GuiaDetalleDeBares} from "./GuiaDetalleDeBares";
import {DetalleDeBar} from "./DetalleDeBar";

export class Filtrador{

  // COLABORADORES INTERNOS
  filtro: Filtro;
  guiaDeDetalles: GuiaDetalleDeBares; // esta guia deberia ser global a todos

  // CONSTRUCTOR
  constructor(filtro: Filtro, guia: GuiaDetalleDeBares){
    this.filtro = filtro;
    this.guiaDeDetalles = guia;
  }

  // MENSAJES QUE RESPONDE
  filtrar(unaColeccionDeBares: Bar[]): Bar[]{

    var detalles: DetalleDeBar[] = [];
    for (var bar of unaColeccionDeBares){
      detalles.push(this.guiaDeDetalles.dameDetalleDeBar(bar));
    }

    return (this.filtro).filtrar(detalles);
  }
}
