module wifindBarApp {

  export class Filtrador {

    // COLABORADORES INTERNOS
    private filtro:Filtro;
    private relacionadorBarDetalles:RelacionadorBarDetalles;

    // CONSTRUCTOR
    constructor(unFiltro:Filtro, unRelacionadorBarDetalles:RelacionadorBarDetalles) {
      this.filtro = unFiltro;
      this.relacionadorBarDetalles = unRelacionadorBarDetalles;
    }

    // MENSAJES QUE RESPONDE
    public filtrar(unaColeccionDeBares:Bar[]):Bar[] {
      var bares:Bar[] = [];
      var detalles:DetalleDeBar[] = [];

      for (let bar of unaColeccionDeBares) {
        detalles.push(this.relacionadorBarDetalles.dameDetalleDeUnBar(bar));
      }
      detalles = (this.filtro).filtrar(detalles);

      for (let detalle of detalles) {
        bares.push(this.relacionadorBarDetalles.dameBarDeUnDetalle(detalle));
      }

      return bares;
    }
  }
}
