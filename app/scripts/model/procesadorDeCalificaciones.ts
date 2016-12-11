module wifindBarApp {
  export abstract class ProcesadorDeCalificaciones {

    constructor(){

    }
    // MENSAJES QUE RESPONDE
    public abstract procesarCalificaciones(unaColeccionDeCalificaciones:Calificacion[]):Calificacion;

  }

}
