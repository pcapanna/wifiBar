module wifindBarApp {
  export class DibujadorEnMapa {

    private static _instance:DibujadorEnMapa = new DibujadorEnMapa(MapaGoogleMaps.getInstance());

    // COLABORADORES INTERNOS
    private mapa:MapaGoogleMaps;

    // CONSTRUCTOR
    constructor(unMapa:MapaGoogleMaps) {
      this.mapa = unMapa;
    }

    public static getInstance() {
      return this._instance;
    }

    // MENSAJES QUE RESPONDE
    public dibujarBaresEnMapa(unaColeccionDeBares:Bar[], vm):void {

      let marcadores:MarcadorGoogleMaps[] = this.generarMarcadoresDeBares(unaColeccionDeBares);

      // this.mapa.borrarMarcadoresPorIdentificador("bar");
      this.mapa.borrarMarcadores();
      setTimeout(() => {
        this.mapa.setMarcadores(marcadores);
        vm.marcadores = this.mapa.marcadores;
        // this.mapa.agregarMarcadores(marcadores);
        vm.$scope.apply();
      }, 0);


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
