module wifindBarApp {

  export class Filtrador {

    // COLABORADORES INTERNOS
    private filtro:Filtro;
    private guiaDeDetalles:GuiaDetalleDeBares; // esta guia deberia ser global a todos

    // CONSTRUCTOR
    constructor(filtro:Filtro, guia:GuiaDetalleDeBares) {
      this.filtro = filtro;
      this.guiaDeDetalles = guia;
    }

    // MENSAJES QUE RESPONDE
    public filtrar(unaColeccionDeBares:Bar[]):Bar[] {

      var detalles:DetalleDeBar[] = [];
      for (let bar of unaColeccionDeBares) {
        detalles.push(this.guiaDeDetalles.dameDetalleDeBar(bar));
      }

      return (this.filtro).filtrar(detalles);
    }
  }
}
