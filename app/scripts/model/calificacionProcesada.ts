module wifindBarApp {

  export class CalificacionProcesada {

    // COLABORADORES INTERNOS
    private calificacion:Calificacion;

    // CONSTRUCTOR
    constructor() {
    }

    // MENSAJES QUE RESPONDE
    public getCalificacion():Calificacion {
      return this.calificacion;
    }

    public setCalificacion(unaCalificacion:Calificacion):void {
      this.calificacion = unaCalificacion;
    }
  }
}
