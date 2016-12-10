module wifindBarApp {
  export class HistorialDeCalificaciones {

    // COLABORADORES INTERNOS
    private calificaciones:Calificacion[];

    // CONSTRUCTOR
    constructor() {
      this.calificaciones = [];
    }

    // MENSAJES QUE RESPONDE
    public agregarCalificacion(unaCalificacion:Calificacion) {
      this.calificaciones.push(unaCalificacion);
    }

    public verCalificaciones():Calificacion[] {
      return this.calificaciones;
    }

  }
}
