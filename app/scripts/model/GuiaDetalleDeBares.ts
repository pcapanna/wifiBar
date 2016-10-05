import {Bar} from "./Bar";
import {DetalleDeBar} from "./DetalleDeBar";

export class GuiaDetalleDeBares {

  // COLABORADORES INTERNOS
  detalles: DetalleDeBar[];

  // CONSTRUCTOR
  constructor(detalles: DetalleDeBar[]){
    this.detalles = detalles;
  }

  // MENSAJES QUE RESPONDE

  addDetalle(detalle: DetalleDeBar): void{
    (this.detalles).push(detalle);
  }

  dameDetalleDeBar(unBar: Bar): DetalleDeBar{

    for (var detalle of this.detalles){
      if (detalle.getBar() == unBar)
        return detalle;
    }
  }

}
