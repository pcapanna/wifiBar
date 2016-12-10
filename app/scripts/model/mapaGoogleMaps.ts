module wifindBarApp {

  export class MapaGoogleMaps {

    private marcadores:MarcadorGoogleMaps[];

    constructor() {
    }

    public agregarMarcadores(marcadores:MarcadorGoogleMaps[]) {
      this.marcadores.concat(marcadores);
    };

    public borrarMarcadores() {
      this.marcadores = null;
    };

    public getMarcadores():MarcadorGoogleMaps[]{
      return this.marcadores;
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
