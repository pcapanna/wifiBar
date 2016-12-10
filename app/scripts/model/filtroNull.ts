module wifindBarApp {

  export class FiltroNull extends Filtro {

    // CONSTRUCTOR
    constructor() {
      super();
    }

    // MENSAJES QUE RESPONDE
    public filtrar(unaColeccionDeDetalles:DetalleDeBar[]):DetalleDeBar[] {
      var detallesFiltrados:DetalleDeBar[] = [];
      for (var detalle of unaColeccionDeDetalles) {
        detallesFiltrados.push(detalle);
      }
      return detallesFiltrados;
    }
  }
}
