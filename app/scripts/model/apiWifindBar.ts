module wifindBarApp {

  export class APIWiFindBar {

    // Colaboradores Internos
    private dibujadorEnMapa:DibujadorEnMapa;
    private guiaDeBares:GuiaDeBares;
    private guiaDeDetalleDeBares:GuiaDetalleDeBares;

    constructor(unaGuiaDeBares, unaGuiaDeDetalleDeBares, unDibujadorEnMapa){
      this.guiaDeBares = unaGuiaDeBares;
      this.guiaDeDetalleDeBares = unaGuiaDeDetalleDeBares;
      this.dibujadorEnMapa = unDibujadorEnMapa;
    }

    //Se agrega el parametro 'vm' que representa la vista.
    // Esto es necesario para poder dibujar en el mapa
    public buscar(unFiltro:Filtro, vm):Bar[] {
      
      var unFiltrador = new Filtrador(unFiltro, this.guiaDeDetalleDeBares);
      var unBuscador = new BuscadorDeBares(this.guiaDeBares, unFiltrador);

      var baresEncontrados: Bar[] =  unBuscador.buscarBares(vm);

      this.dibujadorEnMapa.dibujarBaresEnMapa(baresEncontrados, vm);

      return baresEncontrados;
    }
  }
}
