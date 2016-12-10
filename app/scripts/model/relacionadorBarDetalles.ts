module wifindBarApp {

  export class RelacionadorBarDetalles {

    // COLABORADORES INTERNOS
    private entradasBarDetalle:EntradaBarDetalle[];

    // CONSTRUCTOR
    constructor() {
    }

    // MENSAJES QUE RESPONDE
    public dameDetalleDeUnBar(unBar:Bar):DetalleDeBar {
      //TODO
      return null;
    }

    public dameBarDeUnDetalle(unDetalle:DetalleDeBar):Bar {
      //TODO
      return null;
    }

    public agregarEntrada(unBar:Bar, unDetalle:DetalleDeBar):void {
      var unaEntradaBarDetalle:EntradaBarDetalle = new EntradaBarDetalle(unBar, unDetalle);
      this.entradasBarDetalle.push(unaEntradaBarDetalle);
    }

  }

}
