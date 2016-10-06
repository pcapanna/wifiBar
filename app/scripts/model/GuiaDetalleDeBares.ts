import {Bar} from "./Bar";
import {DetalleDeBar} from "./DetalleDeBar";

export class GuiaDetalleDeBares {

  private static _instance:GuiaDetalleDeBares = new GuiaDetalleDeBares([]);
  // COLABORADORES INTERNOS
  private detalles: DetalleDeBar[];

  public static getInstance(){
    return this._instance;
  }
  
  // CONSTRUCTOR
  constructor(detalles: DetalleDeBar[]){
    this.detalles = detalles;
  }

  // MENSAJES QUE RESPONDE

  public addDetalle(detalle: DetalleDeBar): void{
    (this.detalles).push(detalle);
  }

  public dameDetalleDeBar(unBar: Bar): DetalleDeBar{
    for (var detalle of this.detalles){
      if (detalle.getBar() == unBar)
        return detalle;
    }
  }

}
