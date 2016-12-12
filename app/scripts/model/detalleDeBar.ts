module wifindBarApp {
  export class DetalleDeBar {

    // COLABORADORES INTERNOS
    private bar:Bar;
    private historialDeCalificacionesEnchufes;
    private historialDeCalificacionesWifi;
    private historialDeCalificacionesAire;
    private calificacionProcesadaEnchufes:CalificacionProcesada;
    private calificacionProcesadaWifi:CalificacionProcesada;
    private calificacionProcesadaAire:CalificacionProcesada;

    // CONSTRUCTOR
    constructor(unBar:Bar) {
      this.bar = unBar;
      this.calificacionProcesadaEnchufes = new CalificacionProcesada();
      this.calificacionProcesadaWifi = new CalificacionProcesada();
      this.calificacionProcesadaAire = new CalificacionProcesada();
      this.historialDeCalificacionesEnchufes = new HistorialDeCalificaciones();
      this.historialDeCalificacionesWifi = new HistorialDeCalificaciones();
      this.historialDeCalificacionesAire = new HistorialDeCalificaciones();
    }

    // MENSAJES QUE RESPONDE
    public getCalificacionEnchufes():CalificacionProcesada {
      return this.calificacionProcesadaEnchufes;
    }

    public setCalificacionEnchufes(unaCalificacionProcesada:CalificacionProcesada):void {
      this.calificacionProcesadaEnchufes = unaCalificacionProcesada;
    }

    public getCalificacionWifi():CalificacionProcesada {
      return this.calificacionProcesadaWifi;
    }

    public setCalificacionWifi(unaCalificacionProcesada:CalificacionProcesada):void {
      this.calificacionProcesadaWifi = unaCalificacionProcesada;
    }

    public getCalificacionAire():CalificacionProcesada {
      return this.calificacionProcesadaAire;
    }

    public setCalificacionAire(unaCalificacionProcesada:CalificacionProcesada):void {
      this.calificacionProcesadaAire = unaCalificacionProcesada;
    }

    public getHistorialEnchufes():HistorialDeCalificaciones {
      return this.historialDeCalificacionesEnchufes;
    }

    public getHistorialWifi():HistorialDeCalificaciones {
      return this.historialDeCalificacionesWifi;
    }

    public obtenerNombreBar():Nombre {
      return this.bar.getNombre();
    }

    public obtenerDireccionDeBar():Ubicacion {
      return this.bar.getDireccion();
    }

  }
}
