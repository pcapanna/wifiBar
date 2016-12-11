/// <reference path="procesadorDeCalificaciones.ts" />


module wifindBarApp {
    export class CalculadorDePromedioDeCalificaciones extends ProcesadorDeCalificaciones{

    // CONSTRUCTOR
    constructor() {
      super();
    }
    // MENSAJES QUE RESPONDE
    public procesarCalificaciones(unaColeccionCalificaciones:Calificacion[]):Calificacion{
      var sum:number = 0;
      for (let calificacion of unaColeccionCalificaciones){
        sum += calificacion.getValor();
      }
      var promedio:number = Math.floor(sum / unaColeccionCalificaciones.length);

      return new CalificacionPorEstrellas(promedio);
    }



  }

}
