module wifindBarApp {

  export class RelacionadorBarDetalles {

    // COLABORADORES INTERNOS
    private entradasBarDetalle:EntradaBarDetalle[];

    // CONSTRUCTOR
    constructor() {
    }

    // MENSAJES QUE RESPONDE
    public dameDetalleDeUnBar(unBar:Bar):DetalleDeBar {
      for (let entradaBarDetalle of this.entradasBarDetalle){
        if (entradaBarDetalle.dameBar() == unBar){
          return entradaBarDetalle.dameDetalle();
        }
      }
      return null;
    }

    public dameBarDeUnDetalle(unDetalle:DetalleDeBar):Bar {
      for (let entradaBarDetalle of this.entradasBarDetalle){
        if (entradaBarDetalle.dameDetalle() == unDetalle){
          return entradaBarDetalle.dameBar();
        }
      }
      return null;
    }

    public agregarEntrada(unBar:Bar, unDetalle:DetalleDeBar):void {
      var unaEntradaBarDetalle:EntradaBarDetalle = new EntradaBarDetalle(unBar, unDetalle);
      this.entradasBarDetalle.push(unaEntradaBarDetalle);
    }

  }

}
