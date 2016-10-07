module wifindBarApp {
  export class CriterioDeAceptacionDistanciaMaxima extends CriterioDeAceptacion {

    // COLABORADORES INTERNOS
    private unaDistancia:number;
    private unaUbicacionOrigen:Ubicacion;

    // CONSTRUCTOR
    constructor(unaDistancia:number, unaUbicacionOrigen:Ubicacion) {
      super();
      this.unaDistancia = unaDistancia;
      this.unaUbicacionOrigen = unaUbicacionOrigen;
    }

    // MENSAJES QUE RESPONDE
    public acepta(unDetalleDeBar:DetalleDeBar):boolean {
      var ubicacionBar:Ubicacion = unDetalleDeBar.getDireccionBar();
      // TODO: implementame la comparacion
      return true;
    }
  }
}
