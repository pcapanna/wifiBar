module wifindBarApp {
  export class APIWiFindBar {

    //Se agrega el parametro 'vm' que representa la vista.
    // Esto es necesario para poder dibujar en el mapa
    public static buscar(unFiltro:Filtro, vm):Bar[] {

      // Utilizamos los métodos getInstance de Guia de bares y de detalles de Bares
      // para facilitar la implementación al hacer que ambas guias sean globales y unicas
      // por toda la aplicación.
      var unaGuiaDeBares:GuiaDeBares = GuiaDeBares.getInstance();
      var unaGuiaDeDetalles:GuiaDetalleDeBares = GuiaDetalleDeBares.getInstance();

      var unFiltrador = new Filtrador(unFiltro, unaGuiaDeDetalles);
      var unBuscador = new BuscadorDeBares(unaGuiaDeBares, unFiltrador);
      var unDibujador:DibujadorEnMapa = DibujadorEnMapa.getInstance();

      var baresEncontrados: Bar[] =  unBuscador.buscarBares(vm);

      unDibujador.dibujarBaresEnMapa(baresEncontrados, vm);

      return baresEncontrados;
    }
  }
}
