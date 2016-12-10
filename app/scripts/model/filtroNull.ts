module wifindBarApp {

  export class FiltroNull extends Filtro {

    // CONSTRUCTOR
    constructor() {
      super();
    }

    // MENSAJES QUE RESPONDE
    public filtrar(unaColeccionDeDetalles:DetalleDeBar[]):Bar[] {
      var baresFiltrados:Bar[] = [];
      for (var detalle of unaColeccionDeDetalles) {
        baresFiltrados.push(detalle.getBar());
      }
      return baresFiltrados;
    }
  }
}
