module wifindBarApp {
  export abstract class CriterioDeAceptacion {
    public abstract acepta(unDetalleDeBar:DetalleDeBar):boolean;
  }
}
