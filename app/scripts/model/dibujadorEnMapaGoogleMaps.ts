module wifindBarApp {
  export class DibujadorEnMapaGoogleMaps extends DibujadorEnMapa {

    // COLABORADORES INTERNOS
    private mapa:MapaGoogleMaps;

    // CONSTRUCTOR
    constructor() {
      super();
      this.mapa = new MapaGoogleMaps();
    }

    // MENSAJES QUE RESPONDE
    public dibujarBaresEnMapa(unaColeccionDeBares:Bar[], vm):void {

      let marcadores:MarcadorGoogleMaps[] = this.generarMarcadoresDeBares(unaColeccionDeBares);

      // this.mapa.borrarMarcadoresPorIdentificador("bar");
      this.mapa.borrarMarcadores();
      this.mapa.setMarcadores(marcadores);
      vm.marcadores = this.mapa.getMarcadores();
    }

    private generarMarcadoresDeBares(bares:Bar[]):MarcadorGoogleMaps[] {
      let marcadores:MarcadorGoogleMaps[] = [];
      var i = 1;
      for (let bar of bares) {
        let marcador:MarcadorGoogleMaps =
          new MarcadorGoogleMaps(i.toString(), bar.getDireccion(), '/images/bar2.png', "bar");
        marcadores.push(marcador);
        i++;
      }
      return marcadores;
    }
  }
}
