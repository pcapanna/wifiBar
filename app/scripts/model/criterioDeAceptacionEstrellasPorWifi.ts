module wifindBarApp {
  export class CriterioDeAceptacionEstrellasPorWifi extends CriterioDeAceptacionEstrellasPorCaracteristica {

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
      if (unDetalleDeBar.getCalificacionWifi().getCalificacion() == null){
        return false;
      }
      let califWifi:number = unDetalleDeBar.getCalificacionWifi().getCalificacion().getValor();
      return (califWifi <= this.calificacionHasta && califWifi >= this.calificacionDesde);
    }
  }
}
