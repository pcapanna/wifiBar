module wifindBarApp {
  export class CalificadorDeBares {

    // COLABORADORES INTERNOS
    private relacionadorBarDetalles:RelacionadorBarDetalles;
    private procesaddorDeCalificaciones:ProcesaddorDeCalificaciones;

    // CONSTRUCTOR
    constructor(unRelacionadorBarDetalles:RelacionadorBarDetalles, unProcesadorDeCalificaciones:ProcesaddorDeCalificaciones) {
      this.relacionadorBarDetalles = unRelacionadorBarDetalles;
      this.procesaddorDeCalificaciones = unProcesadorDeCalificaciones;
    }

    // MENSAJES QUE RESPONDE
    public calificarEnchufesDeBar(unBar:Bar, unaCalificacion:Calificacion):void {
      var unDetalle:DetalleDeBar = this.relacionadorBarDetalles.dameDetalleDeUnBar(unBar);
      unDetalle.getHistorialEnchufes().agregarCalificacion(unaCalificacion);
      var calificaciones:Calificacion[] = unDetalle.getHistorialEnchufes().verCalificaciones();
      var nuevaCalificacion:Calificacion = this.procesaddorDeCalificaciones.procesarCalificaciones(calificaciones);
      unDetalle.getCalificacionEnchufes().setCalificacion(nuevaCalificacion);
    }

    public calificarWifiDeBar(unBar:Bar, unaCalificacion:Calificacion):void {
      var unDetalle:DetalleDeBar = this.relacionadorBarDetalles.dameDetalleDeUnBar(unBar);
      unDetalle.getHistorialWifi().agregarCalificacion(unaCalificacion);
      var calificaciones:Calificacion[] = unDetalle.getHistorialWifi().verCalificaciones();
      var nuevaCalificacion:Calificacion = this.procesaddorDeCalificaciones.procesarCalificaciones(calificaciones);
      unDetalle.getCalificacionWifi().setCalificacion(nuevaCalificacion);
    }

  }

}
