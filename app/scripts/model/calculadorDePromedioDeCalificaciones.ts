module wifindBarApp {
  export class CalculadorDePromedioDeCalificaciones extends ProcesaddorDeCalificaciones{

    // CONSTRUCTOR
    constructor() {
      super();
    }
    // MENSAJES QUE RESPONDE
    public procesarCalificaciones(unaColeccionCalificaciones:Calificacion[]):CalificacionPorEstrellas{
      var sum:number = 0;
      for (let calificacion of unaColeccionCalificaciones){
        sum += calificacion.getValor();
      }
      var promedio:number = Math.floor(sum / unaColeccionCalificaciones.length);

      return new CalificacionPorEstrellas(promedio);
    }



  }

}
