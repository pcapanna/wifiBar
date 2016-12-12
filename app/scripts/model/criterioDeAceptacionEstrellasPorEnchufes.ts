module wifindBarApp {
  export class CriterioDeAceptacionEstrellasPorEnchufes extends CriterioDeAceptacionEstrellasPorCaracteristica {

    // COLABORADORES INTERNOS
    private calificacionDesde: number;
    private calificacionHasta: number;

    // CONSTRUCTOR
    constructor(calificacionDesde: number, calificacionHasta: number) {
      super();
      this.calificacionDesde = calificacionDesde;
      this.calificacionHasta = calificacionHasta;
    }

    // MENSAJES QUE RESPONDE

    public acepta(unDetalleDeBar: DetalleDeBar): boolean {
      if (unDetalleDeBar.getCalificacionEnchufes().getCalificacion() == null){
        return false;
      }
      let califEnchufes: number = unDetalleDeBar.getCalificacionEnchufes().getCalificacion().getValor();
      return (califEnchufes <= this.calificacionHasta && califEnchufes >= this.calificacionDesde);
    }
  }

  export class CriterioDeAceptacionEstrellasPorAire extends CriterioDeAceptacionEstrellasPorCaracteristica {

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

    public acepta(unDetalleDeBar:DetalleDeBar):boolean {
      if (unDetalleDeBar.getCalificacionAire().getCalificacion() == null){
        return false;
      }
      let califWifi:number = unDetalleDeBar.getCalificacionAire().getCalificacion().getValor();
      return (califWifi <= this.calificacionHasta && califWifi >= this.calificacionDesde);
    }
  }
}
