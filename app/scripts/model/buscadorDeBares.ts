module wifindBarApp {
  export class BuscadorDeBares {

    // COLABORADORES INTERNOS
    private guiaDebares:GuiaDeBares;
    private filtrador:Filtrador;

    // CONSTRUCTOR
    constructor(unFiltrador:Filtrador, unaGuiaDeBares:GuiaDeBares) {
      this.filtrador = unFiltrador;
      this.guiaDebares = unaGuiaDeBares;
    }

    // MENSAJES QUE RESPONDE

    buscarBares():Bar[] {
      var bares:Bar[] = this.guiaDebares.getBares();
      bares = this.filtrador.filtrar(bares);
      return bares;
    }
  }

}
