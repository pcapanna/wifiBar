module wifindBarApp {
  export class DibujadorEnMapaGoogleMaps extends DibujadorEnMapa {

    // COLABORADORES INTERNOS
    private mapa: MapaGoogleMaps;
    private relacionadorBarDetalles: RelacionadorBarDetalles;

    // CONSTRUCTOR
    constructor(unRelacionadorBarDetalles: RelacionadorBarDetalles) {
      super();
      this.mapa = new MapaGoogleMaps();
      this.relacionadorBarDetalles = unRelacionadorBarDetalles;
    }

    // MENSAJES QUE RESPONDE
    public dibujarBaresEnMapa(unaColeccionDeBares: Bar[], vm): void {

      let marcadores: MarcadorGoogleMaps[] = this.generarMarcadoresDeBares(unaColeccionDeBares);

      // this.mapa.borrarMarcadoresPorIdentificador("bar");
      this.mapa.borrarMarcadores();
      this.mapa.setMarcadores(marcadores);
      vm.marcadores = this.mapa.getMarcadores();
    }

    private generarMarcadoresDeBares(bares: Bar[]): MarcadorGoogleMaps[] {
      let marcadores: MarcadorGoogleMaps[] = [];
      var i = 1;
      for (let bar of bares) {
        let detalle: DetalleDeBar = this.relacionadorBarDetalles.dameDetalleDeUnBar(bar);
        var calificacionWifi: string;
        if (detalle.getCalificacionWifi().getCalificacion() != null) {
          calificacionWifi = detalle.getCalificacionWifi().getCalificacion().getValor().toString();
        } else {
          calificacionWifi = 'No posee'
        }
        var calificacionEnchufes: string;
        if (detalle.getCalificacionEnchufes().getCalificacion() != null) {
          calificacionEnchufes = detalle.getCalificacionEnchufes().getCalificacion().getValor().toString();
        } else {
          calificacionEnchufes = 'No posee'
        }
        var calificacionAire: string;
        if (detalle.getCalificacionAire().getCalificacion() != null) {
          calificacionAire = detalle.getCalificacionAire().getCalificacion().getValor().toString();
        } else {
          calificacionAire = 'No posee'
        }

        let marcadorTitle = bar.getNombre().getDescripcion()
          + '. \n Calificacion Wifi: ' + calificacionWifi
          + '. \n Calificacion Enchufes: ' + calificacionEnchufes
          + '. \n Calificacion Aire: ' + calificacionAire;


        let marcador: MarcadorGoogleMaps =
          new MarcadorGoogleMaps(i.toString(), bar.getDireccion(), '/images/bar2.png', "Bar", marcadorTitle);
        marcadores.push(marcador);
        i++;
      }
      return marcadores;
    }
  }
}
