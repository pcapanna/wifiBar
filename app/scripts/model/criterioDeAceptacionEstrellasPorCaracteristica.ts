module wifindBarApp {
  export abstract class CriterioDeAceptacionEstrellasPorCaracteristica extends CriterioDeAceptacion {
    public abstract acepta(unDetalleDeBar:DetalleDeBar):boolean;
  }
}
