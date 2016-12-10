module wifindBarApp {

  export abstract class Filtro {
    public abstract filtrar(unaColeccionDeDetalles:DetalleDeBar[]):DetalleDeBar[];
  }

}
