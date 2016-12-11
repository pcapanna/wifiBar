module wifindBarApp {

  export class APIWiFindBar {

    // Colaboradores Internos
    private dibujadorEnMapa: DibujadorEnMapa;
    private guiaDeBares: GuiaDeBares;
    private relacionadorBarDetalles: RelacionadorBarDetalles;
    private ingresadorDeBares: IngresadorDeBares;
    private calificadorDeBares: CalificadorDeBares;

    constructor() {
      this.guiaDeBares = new GuiaDeBares();
      this.relacionadorBarDetalles = new RelacionadorBarDetalles();
      this.ingresadorDeBares = new IngresadorDeBares(this.guiaDeBares, this.relacionadorBarDetalles);
      this.dibujadorEnMapa = new DibujadorEnMapaGoogleMaps(this.relacionadorBarDetalles);
      this.calificadorDeBares = new CalificadorDeBares(this.relacionadorBarDetalles, new CalculadorDePromedioDeCalificaciones());
    }

    public buscar(unFiltro: Filtro): Bar[] {
      var unFiltrador = new Filtrador(unFiltro, this.relacionadorBarDetalles);
      var unBuscador = new BuscadorDeBares(unFiltrador, this.guiaDeBares);
      return unBuscador.buscarBares();
    }

    public obtenerBares(): Bar[] {
      return this.guiaDeBares.getBares();
    }

    public ingresarUnBar(unNombre: Nombre, unaDireccion: Ubicacion): void {
      this.ingresadorDeBares.ingresarBar(unNombre, unaDireccion);
    }

    public calificarEnchufesDeBar(unBar: Bar, unaCalificacion: Calificacion): void {
      var unDetalle: DetalleDeBar = this.relacionadorBarDetalles.dameDetalleDeUnBar(unBar);
      this.calificadorDeBares.calificarEnchufesDeBar(unBar, unaCalificacion);
    }

    public calificarWifiDeBar(unBar: Bar, unaCalificacion: Calificacion): void {
      var unDetalle: DetalleDeBar = this.relacionadorBarDetalles.dameDetalleDeUnBar(unBar);
      this.calificadorDeBares.calificarWifiDeBar(unBar, unaCalificacion);
    }

    public verDetalleDeUnBar(unBar: Bar): DetalleDeBar {
      return this.relacionadorBarDetalles.dameDetalleDeUnBar(unBar);
    }

    //Se agrega el parametro 'vm' que representa la vista.
    // Esto es necesario para poder dibujar en el mapa
    public dibujarBares(unaColeccionDeBares: Bar[], vm) {
      this.dibujadorEnMapa.dibujarBaresEnMapa(unaColeccionDeBares, vm);
    }
  }
}
