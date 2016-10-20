module wifindBarApp {
  export class MapaGoogleMaps {

    private static _instance:MapaGoogleMaps = new MapaGoogleMaps();

    public marcadores:MarcadorGoogleMaps[];

    public static getInstance() {
      return MapaGoogleMaps._instance;
    }

    public agregarMarcadores(marcadores:MarcadorGoogleMaps[]) {
      this.marcadores.concat(marcadores);
    };

    public borrarMarcadores() {
      this.marcadores = null;
    };

    public setMarcadores(marcadores:MarcadorGoogleMaps[]) {
      this.marcadores = marcadores;
    };

    public borrarMarcadoresPorIdentificador(identificacionDeMarcador:string) {
      var i = 0;
      while (i < this.marcadores.length) {
        if (this.marcadores[i].getIdentificador() == identificacionDeMarcador) {
          this.marcadores.splice(i, 1);
        }
        else {
          ++i;
        }
      }
    };
  }
}
