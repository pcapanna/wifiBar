module wifindBarApp {
  export class BuscadorDeBares {

    // COLABORADORES INTERNOS
    private guiaDebares:GuiaDeBares;
    private filtrador:Filtrador;

    // CONSTRUCTOR
    constructor(guiaDeBares:GuiaDeBares, filtrador:Filtrador) {
      this.guiaDebares = guiaDeBares;
      this.filtrador = filtrador;
    }

    // MENSAJES QUE RESPONDE

    buscarBares(vm):Bar[] {
      var bares:Bar[] = this.guiaDebares.getBares();
      bares = this.filtrador.filtrar(bares);
      return bares;
    }
  }

}
