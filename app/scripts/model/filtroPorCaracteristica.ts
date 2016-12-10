module wifindBarApp {

  export class FiltroPorCaracteristica extends Filtro {

    // COLABORADORES INTERNOS
    private filtroComponente:Filtro;
    private criterioDeAceptacion:CriterioDeAceptacion;

    // CONSTRUCTOR
    constructor(unFiltroComponente:Filtro, unCriterioDeAceptacion:CriterioDeAceptacion) {
      super();
      this.filtroComponente = unFiltroComponente;
      this.criterioDeAceptacion = unCriterioDeAceptacion;
    }

    // MENSAJES QUE RESPONDE
    public filtrar(unaColeccionDeDetalles:DetalleDeBar[]) {
      var detallesFiltrados:DetalleDeBar[] = [];
      for (var detalle of unaColeccionDeDetalles) {
        if (this.criterioDeAceptacion.acepta(detalle))
          detallesFiltrados.push(detalle);
      }

      return this.filtroComponente.filtrar(detallesFiltrados);
    }
  }
}
