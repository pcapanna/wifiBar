module wifindBarApp {

  export class EntradaBarDetalle {

    // COLABORADORES INTERNOS
    private bar:Bar;
    private detalle:DetalleDeBar;

    // CONSTRUCTOR
    constructor(unBar:Bar, unDetalle:DetalleDeBar) {
      this.bar = unBar;
      this.detalle = unDetalle;
    }

    // MENSAJES QUE RESPONDE
    public dameBar():Bar {
      return this.bar;
    }

    public dameDetalle():DetalleDeBar {
      return this.detalle;
    }

  }

}
