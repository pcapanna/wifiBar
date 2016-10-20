 module wifindBarApp {
  export class CriterioDeAceptacionEstrellasPorEnchufes extends CriterioDeAceptacionEstrellasPorCaracteristica {

    // COLABORADORES INTERNOS
    private calificacionDesde:number;
    private calificacionHasta:number;

    // CONSTRUCTOR
    constructor(calificacionDesde:number, calificacionHasta:number) {
      super();
      this.calificacionDesde = calificacionDesde;
      this.calificacionHasta = calificacionHasta;
    }

    // MENSAJES QUE RESPONDE

    acepta(unDetalleDeBar:DetalleDeBar):boolean {
      var califEnchufes:number = unDetalleDeBar.getCalificacionEnchufes();
      return (califEnchufes <= this.calificacionHasta && califEnchufes >= this.calificacionDesde);
    }
  }
}
