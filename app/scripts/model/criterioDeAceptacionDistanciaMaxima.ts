



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
      return this.distancia(this.unaUbicacionOrigen, ubicacionBar) <= this.unaDistancia;
    }

    private distancia(ubicacion1, ubicacion2) {
      if (Number.prototype.toRadians === undefined) {
        Number.prototype.toRadians = function() { return this * Math.PI / 180; };
      }

      /** Extend Number object with method to convert radians to numeric (signed) degrees */
      if (Number.prototype.toDegrees === undefined) {
        Number.prototype.toDegrees = function() { return this * 180 / Math.PI; };
      }

      /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */
      if (typeof module != 'undefined' && module.exports) module.exports = LatLon; // ≡ export default LatLon

      var R = 6371e3; // metres
      var φ1 = ubicacion1.getLatitud().toRadians();
      var φ2 = ubicacion2.getLatitud().toRadians();
      var Δφ = (ubicacion2.getLatitud() - ubicacion1.getLatitud()).toRadians();
      var Δλ = (ubicacion2.getLongittud() - ubicacion1.getLongittud()).toRadians();

      var a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
        Math.cos(φ1) * Math.cos(φ2) *
        Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
      var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

      var d = R * c;
      return d;
    }

  }
}

